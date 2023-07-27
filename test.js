import urdf from "urdf";
import { td1 } from "./exampleTds.js";

// Query Graph
async function queryTD(td, query) {
  urdf.clear();
  await urdf.load(td);
  console.log(await urdf.query(query));

  return await urdf.query(query);
}

const res = await queryTD(
  td1,
  `PREFIX td: <https://www.w3.org/2019/wot/td#>
   PREFIX dc: <http://purl.org/dc/terms/>
    SELECT ?title
    WHERE {
        ?s td:hasPropertyAffordance ?o .
        ?o dc:title ?title
    }`
);

const values = res.map((item) => item.title.value);

console.log(values);
