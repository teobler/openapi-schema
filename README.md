# OpenAPI-schema
this tool is built for generating typescript interface of OpenAPI schema.

json file is from [OpenAPI-Specification](https://github.com/OAI/OpenAPI-Specification/tree/master/schemas/v3.0), you can also find yaml file there, thanks for the maintenance.

## NOTE
this tool only for OpenAPI **v3.0.x** now

## install
```bash
  npm install -D @api-integration/openapi-schema
```

## use
```javascript
  import { Spec } from "@api-integration/openapi-schema";

  console.log(Spec);
```

## How to Start
1. clone repo to your local
2. `npm i`
3. modify code to what you want
4. `npm run generate` to generate new interface for typescript
