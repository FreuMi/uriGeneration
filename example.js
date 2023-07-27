import { td1, td2, td3, td4, td5 } from "./exampleTds.js";
import { generateUriHierarchy } from "./TdToUri.js";

// Input Map with Thing ID as key and TD as value
const I = {
  [td1.id]: td1,
  [td2.id]: td2,
  [td3.id]: td3,
  [td4.id]: td4,
  [td5.id]: td5,
};

// Base uri used for generation
const baseUri = "http://example.org/";

const generatedUris = await generateUriHierarchy(I, baseUri);
console.log("Generated URIS:");
console.log(generatedUris);
