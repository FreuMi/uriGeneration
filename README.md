# Device Hierarchy URI Generator

This project contains a JavaScript module that extracts a device hierarchy as indicated by `sosa:hosts` and `sosa:isHostedBy`, and generates a URI structure that reflects this hierarchy. The module includes a function `generateUriHierarchy()` that takes as inputs an object with URIs and corresponding thing descriptions, and a base URI, and returns a list of generated URIs.

## Requirements

This project was tested using Node.js v18.8.0.

## Installation

Clone the repository:

```bash
git clone <repository_url>
cd <repository_directory>
```

## Usage

The main function that you will use is `generateUriHierarchy()` contained in `TdToUri.js`, which generates the URIs for the hierarchy of devices. The function takes two parameters:

1. `thingDescriptionsWithURI`: An object where each key is a URI, and the corresponding value is a thing description of the device at that URI.
2. `baseUri`: The base URI for the generated URIs.

The function returns a list of URIs.

For example (see example.js):

```javascript
import { td1, td2, td3, td4, td5 } from './exampleTds.js';
import { generateUriHierarchy } from './TdToUri.js';

const I = {
  [td1.id]: td1,
  [td2.id]: td2,
  [td3.id]: td3,
  [td4.id]: td4,
  [td5.id]: td5,
};

const baseUri = 'http://example.org/';
const generatedUris = generateUriHierarchy(I, baseUri);
console.log("Generated URIS:")
console.log(generatedUris);
```

The `generateUriHierarchy()` function first creates a `TreeNode` for each device. Each `TreeNode` has a `name`, a list of `children`, a `parent`, and a `td` (thing description). 

If a device description includes a `sosa:hosts` property, the function adds the hosted devices as children of the hosting device. If a device description includes a `sosa:isHostedBy` property, the function sets the hosting device as the parent of the hosted device.

After building the tree of devices, the function then generates a URI for each device by traversing the tree and appending the title of each node to the base URI.

## License

[GNU Affero General Public License Version 3](https://www.gnu.org/licenses/agpl-3.0.en.html)
