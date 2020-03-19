export interface Spec {
  openapi: string;
  info: Info;
  externalDocs?: ExternalDocumentation;
  servers?: Server[];
  security?: SecurityRequirement[];
  tags?: Tag[];
  paths: Paths;
  components?: Components;
  [k: string]: any;
}
export interface Header {
  description: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: "simple";
  explode?: boolean;
  allowReserved?: boolean;
  schema?: Schema | Reference;
  content?: { [k: string]: MediaType };
  example?: {};
  examples?: { [k: string]: Example | Reference };
}
export interface MediaType {
  schema: Schema | Reference;
  example?: {};
  examples?: { [k: string]: Example | Reference };
  encoding?: Encoding;
}
export interface Encoding {
  contentType: string;
  headers?: Header;
  style?: "form" | "spaceDelimited" | "pipeDelimited" | "deepObject";
  explode?: boolean;
  allowReserved?: boolean;
}
export type SecurityScheme =
  | APIKeySecurityScheme
  | HTTPSecurityScheme
  | OAuth2SecurityScheme
  | OpenIdConnectSecurityScheme;
export type HTTPSecurityScheme =
  | {
      scheme?: "bearer";
      [k: string]: any;
    }
  | {
      scheme?: {
        [k: string]: any;
      };
      [k: string]: any;
    };
export interface Info {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
  version: string;
  [k: string]: any;
}
export interface Contact {
  name?: string;
  url?: string;
  email?: string;
  [k: string]: any;
}
export interface License {
  name: string;
  url?: string;
  [k: string]: any;
}
export interface ExternalDocumentation {
  description?: string;
  url: string;
  [k: string]: any;
}
export interface Server {
  url: string;
  description?: string;
  variables?: {
    [k: string]: ServerVariable;
  };
  [k: string]: any;
}
export interface ServerVariable {
  enum?: string[];
  default: string;
  description?: string;
  [k: string]: any;
}
export interface SecurityRequirement {
  [k: string]: string[];
}
export interface Tag {
  name: string;
  description?: string;
  externalDocs?: ExternalDocumentation;
  [k: string]: any;
}
export interface Paths {
  [k: string]: Path;
}
export interface Path {
  $ref?: string;
  get?: Operation;
  put?: Operation;
  post?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  parameters?: Array<Parameter | Reference>;
}
export interface PathItem {
  $ref?: string;
  summary?: string;
  description?: string;
  servers?: Server[];
  parameters?: (Parameter | Reference)[];
}
export type Parameter = ParameterLocation & {
  name: string;
  in: "path" | "query" | "header" | "cookie";
  style?: string;
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: Schema | Reference;
  content?: {
    [k: string]: MediaType;
  };
  example?: {};
  examples?: { [k: string]: Example | Reference };
};
export type ParameterLocation =
  | {
      in?: "path";
      style?: "matrix" | "label" | "simple";
      required: true;
      [k: string]: any;
    }
  | {
      in?: "query";
      style?: "form" | "spaceDelimited" | "pipeDelimited" | "deepObject";
      [k: string]: any;
    }
  | {
      in?: "header";
      style?: "simple";
      [k: string]: any;
    }
  | {
      in?: "cookie";
      style?: "form";
      [k: string]: any;
    };
export interface Reference {
  $ref: string;
}
export interface Operation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocumentation;
  operationId?: string;
  parameters?: (Parameter | Reference)[];
  requestBody?: RequestBody | Reference;
  responses: Responses;
  callbacks?: {
    [k: string]: Callback | Reference;
  };
  deprecated?: boolean;
  security?: SecurityRequirement[];
  servers?: Server[];
  [k: string]: any;
}
export interface RequestBody {
  description?: string;
  content: {
    [k: string]: MediaType;
  };
  required?: boolean;
  [k: string]: any;
}
export interface Responses {
  [responseCode: string]: Response | Reference;
}
export interface Response {
  description: string;
  headers?: {
    [k: string]: Header | Reference;
  };
  content?: {
    [k: string]: MediaType;
  };
  links?: {
    [k: string]: Link | Reference;
  };
  [k: string]: any;
}
export interface Link {
  operationId?: string;
  operationRef?: string;
  parameters?: {
    [k: string]: any;
  };
  requestBody?: any;
  description?: string;
  server?: Server;
  [k: string]: any;
}
export interface Callback {
  [k: string]: PathItem;
}
export interface Components {
  schemas?: {
    [k: string]: Schema | Reference;
  };
  responses?: {
    [k: string]: Reference | Response;
  };
  parameters?: {
    [k: string]: Reference | Parameter;
  };
  examples?: {
    [k: string]: Reference | Example;
  };
  requestBodies?: {
    [k: string]: Reference | RequestBody;
  };
  headers?: {
    [k: string]: Reference | Header;
  };
  securitySchemes?: {
    [k: string]: Reference | SecurityScheme;
  };
  links?: {
    [k: string]: Reference | Link;
  };
  callbacks?: {
    [k: string]: Reference | Callback;
  };
  [k: string]: any;
}
export interface Schema {
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: [string, ...string[]];
  enum?: [any, ...any[]];
  type?: "array" | "boolean" | "integer" | "number" | "object" | "string";
  not?: Schema | Reference;
  allOf?: (Schema | Reference)[];
  oneOf?: (Schema | Reference)[];
  anyOf?: (Schema | Reference)[];
  items?: Schema | Reference;
  properties?: {
    [k: string]: Schema | Reference;
  };
  additionalProperties?: Schema | Reference | boolean;
  description?: string;
  format?: string;
  default?: any;
  nullable?: boolean;
  discriminator?: Discriminator;
  readOnly?: boolean;
  writeOnly?: boolean;
  example?: any;
  externalDocs?: ExternalDocumentation;
  deprecated?: boolean;
  xml?: XML;
  [k: string]: any;
}
export interface Discriminator {
  propertyName: string;
  mapping?: {
    [k: string]: string;
  };
  [k: string]: any;
}
export interface XML {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
  [k: string]: any;
}
export interface Example {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
  [k: string]: any;
}
export interface APIKeySecurityScheme {
  type: "apiKey";
  name: string;
  in: "header" | "query" | "cookie";
  description?: string;
  [k: string]: any;
}
export interface OAuth2SecurityScheme {
  type: "oauth2";
  flows: OAuthFlows;
  description?: string;
  [k: string]: any;
}
export interface OAuthFlows {
  implicit?: ImplicitOAuthFlow;
  password?: PasswordOAuthFlow;
  clientCredentials?: ClientCredentialsFlow;
  authorizationCode?: AuthorizationCodeOAuthFlow;
  [k: string]: any;
}
export interface ImplicitOAuthFlow {
  authorizationUrl: string;
  refreshUrl?: string;
  scopes: {
    [k: string]: string;
  };
  [k: string]: any;
}
export interface PasswordOAuthFlow {
  tokenUrl: string;
  refreshUrl?: string;
  scopes?: {
    [k: string]: string;
  };
  [k: string]: any;
}
export interface ClientCredentialsFlow {
  tokenUrl: string;
  refreshUrl?: string;
  scopes?: {
    [k: string]: string;
  };
  [k: string]: any;
}
export interface AuthorizationCodeOAuthFlow {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl?: string;
  scopes?: {
    [k: string]: string;
  };
  [k: string]: any;
}
export interface OpenIdConnectSecurityScheme {
  type: "openIdConnect";
  openIdConnectUrl: string;
  description?: string;
  [k: string]: any;
}
