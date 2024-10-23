# mtl-file-parser

Material Template Library File (.MTL) Parser

## Installation

```javascript
npm i mtl-file-parser
```

## Usage

```ts
import MTLFile from 'mtl-file-parser';

const fileContents =
  'newmtl green_material\n' +
  'Ka 0 1 0\n' +
  'map_ka /path/to/ka.png';

const mtlFile = new MTLFile(fileContents);

const output = mtlFile.parse(); // see description below
```

## Output

The extracted materials are returned in the format found in [types.ts](./src/types.ts).

## More to come

mtl-file-parser is actively being developed, and does not yet have full support of the MTL file specification.
Your comments, feedback and bug reports are welcome and appreciated. Thank you!
