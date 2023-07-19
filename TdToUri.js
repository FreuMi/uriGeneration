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
function traverseTree(rootNode, path, uriList) {
  const newPath = `${path}${rootNode.td.title}/`;
  uriList.push(newPath);

  rootNode.children.forEach((childNode) => {
    traverseTree(childNode, newPath, uriList);
  });
}

/**
 * Create the URIs for all nodes in the nodeList using the given base.
 * @param {Array} rootNodes - The list of root nodes.
 * @param {string} base - The base string for the URI.
 * @returns {Array} - The list of URIs.
 */
function createUris(rootNodes, base) {
  const uriList = [];

  rootNodes.forEach((rootNode) => {
    traverseTree(rootNode, `${base}/`, uriList);
  });

  return uriList;
}

/**
 * Generate the hierarchy of nodes and return the URIs.
 * @param {Object} thingDescriptionsWithURI - The object with URIs and corresponding descriptions.
 * @param {string} baseUri - The base URI of the Pod.
 * @returns {Array} - The list of generated URIs.
 */
export function generateUriHierarchy(thingDescriptionsWithURI, baseUri) {
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
    if (typeof td["sosa:hosts"] !== "undefined") {
      let urisOfChilds = [];
      // Handle Arrays
      if (!Array.isArray(td["sosa:hosts"])) {
        urisOfChilds.push(td["sosa:hosts"]);
      } else {
        urisOfChilds = [...td["sosa:hosts"]];
      }
      for (const uriOfChild of urisOfChilds) {
        TNode.addChild(treeNodes[uriOfChild]);
      }
    }
    // Set Parent
    if (typeof td["sosa:isHostedBy"] !== "undefined") {
      let urisOfParents = [];
      // Handle Arrays
      if (!Array.isArray(td["sosa:isHostedBy"])) {
        urisOfParents.push(td["sosa:isHostedBy"]);
      } else {
        urisOfParents = [...td["sosa:isHostedBy"]];
      }
      for (const uriOfParent of urisOfParents) {
        TNode.setParent(treeNodes[uriOfParent]);
      }
    } else {
      // If node has no parent, then it's a root node
      rootNodes.push(TNode);
    }
  }

  return createUris(Object.values(rootNodes), baseUri);
}
