import urdf from "urdf";

/**
 * Represents a node in a tree structure.
 */
class TreeNode {
  constructor(name, td) {
    this.name = name;
    this.children = [];
    this.parent = null;
    this.td = td;
  }

  /**
   * Adds a child node to the current node.
   * @param {TreeNode} childNode - The child node to be added.
   */
  addChild(childNode) {
    childNode.parent = this;
    this.children.push(childNode);
  }

  /**
   * Sets the parent node of the current node.
   * @param {TreeNode} parentNode - The parent node.
   */
  setParent(parentNode) {
    this.parent = parentNode;
  }
}

/**
 * Traverse the tree starting from rootNode and builds the URI for each node.
 * @param {Object} rootNode - The node from where the traversal starts.
 * @param {string} path - The current path.
 * @param {Array} uriList - The list where the URIs are stored.
 */
async function traverseTree(rootNode, path, uriList) {
  const newPath = `${path}${rootNode.td.title}/`;
  console.log("newPath", newPath);

  // Add properties
  const properties = await queryTD(
    rootNode.td,
    `PREFIX td: <https://www.w3.org/2019/wot/td#>
     PREFIX dc: <http://purl.org/dc/terms/>
      SELECT ?title
      WHERE {
          ?s td:hasPropertyAffordance ?o .
          ?o dc:title ?title
      }`
  );
  const propertyArray = properties.map((item) => item.title.value);
  for (const property of propertyArray) {
    const newPropertyPath = `${newPath}${property}`;
    uriList.push(newPropertyPath);
  }

  // Add actions
  const actions = await queryTD(
    rootNode.td,
    `PREFIX td: <https://www.w3.org/2019/wot/td#>
     PREFIX dc: <http://purl.org/dc/terms/>
      SELECT ?title
      WHERE {
          ?s td:hasActionAffordance ?o .
          ?o dc:title ?title
      }`
  );
  const actionArray = actions.map((item) => item.title.value);
  for (const action of actionArray) {
    const newActionPath = `${newPath}${action}`;
    uriList.push(newActionPath);
  }

  // Add events
  const events = await queryTD(
    rootNode.td,
    `PREFIX td: <https://www.w3.org/2019/wot/td#>
     PREFIX dc: <http://purl.org/dc/terms/>
     SELECT ?title
     WHERE {
        ?s td:hasEventAffordance ?o .
        ?o dc:title ?title
     }`
  );
  const eventArray = events.map((item) => item.title.value);
  for (const event of eventArray) {
    const newEventPath = `${newPath}${event}`;
    uriList.push(newEventPath);
  }

  for (const childNode of rootNode.children) {
    await traverseTree(childNode, newPath, uriList);
  }
}

/**
 * Create the URIs for all nodes in the nodeList using the given base.
 * @param {Array} rootNodes - The list of root nodes.
 * @param {string} base - The base string for the URI.
 * @returns {Array} - The list of URIs.
 */
async function createUris(rootNodes, base) {
  const uriList = [];

  for (const rootNode of rootNodes) {
    await traverseTree(rootNode, `${base}/`, uriList);
  }

  return uriList;
}

/**
 * Generate the hierarchy of nodes and return the URIs.
 * @param {Object} thingDescriptionsWithURI - The object with URIs and corresponding descriptions.
 * @param {string} baseUri - The base URI of the Pod.
 * @returns {Array} - The list of generated URIs.
 */
export async function generateUriHierarchy(thingDescriptionsWithURI, baseUri) {
  // Remove / at the end of baseUri to generate corect URIs
  if (baseUri.endsWith("/")) {
    baseUri = baseUri.slice(0, -1);
  }

  // Generate TreeNodes for each Device:
  const treeNodes = {};
  const rootNodes = [];

  // Generate TreeNode for each Device
  for (const uri in thingDescriptionsWithURI) {
    const td = thingDescriptionsWithURI[uri];
    const TNode = new TreeNode(uri, td);
    treeNodes[uri] = TNode;
  }
  // Set Children and Parents of each TreeNode
  for (const uri in treeNodes) {
    const TNode = treeNodes[uri];
    const td = TNode.td;

    // Set Children
    const resQueryHosts = await queryTD(
      td,
      `PREFIX sosa: <http://www.w3.org/ns/sosa/>
      SELECT ?o
      WHERE {
          ?s sosa:hosts ?o .
      }`
    );
    const urisOfChilds = resQueryHosts.map((item) => item.o.value);
    for (const uriOfChild of urisOfChilds) {
      TNode.addChild(treeNodes[uriOfChild]);
    }

    // Set Parent
    const resQueryHostedBy = await queryTD(
      td,
      `PREFIX sosa: <http://www.w3.org/ns/sosa/>
      SELECT ?o
      WHERE {
          ?s sosa:isHostedBy ?o .
      }`
    );
    const urisOfParents = resQueryHostedBy.map((item) => item.o.value);

    if (urisOfParents.length > 0) {
      for (const uriOfParent of urisOfParents) {
        TNode.setParent(treeNodes[uriOfParent]);
      }
    } else {
      // If node has no parent, then it's a root node
      rootNodes.push(TNode);
    }
  }

  const createdURIs = await createUris(Object.values(rootNodes), baseUri);
  return createdURIs;
}

/**
 * Query a Graph
 * @param {Object} td - The Thing Description object.
 * @param {string} query - The SPARQL query.
 * @returns {Array} - The list of results.
 */
async function queryTD(td, query) {
  urdf.clear();
  await urdf.load(td);
  return await urdf.query(query);
}

/*  const res = await queryTD(
  rootNode.td,
  `PREFIX td: <https://www.w3.org/2019/wot/td#/>
  SELECT ?o
  WHERE {
      ?s td:hasPropertyAffordance ?o .
  }`
); */
