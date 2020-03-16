export type Parameter = ExampleXORExamples & SchemaXORContent & ParameterLocation;
/**
 * Schema and content are mutually exclusive, at least one is required
 */
export type SchemaXORContent = { [k: string]: any; };
/**
 * Parameter location
 */
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
export type MediaType = ExampleXORExamples;
export type Header = ExampleXORExamples & SchemaXORContent;
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

/**
 * Validation schema for OpenAPI Specification 3.0.X.
 */
export interface Spec {
  openapi: string;
  info: Info;
  externalDocs?: ExternalDocumentation;
  servers?: Server[];
  security?: SecurityRequirement[];
  tags?: Tag[];
  paths: Paths;
  components?: Components;
  /**
   * This interface was referenced by `Spec`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Info {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
  version: string;
  /**
   * This interface was referenced by `Info`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Contact {
  name?: string;
  url?: string;
  email?: string;
  /**
   * This interface was referenced by `Contact`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface License {
  name: string;
  url?: string;
  /**
   * This interface was referenced by `License`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ExternalDocumentation {
  description?: string;
  url: string;
  /**
   * This interface was referenced by `ExternalDocumentation`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Server {
  url: string;
  description?: string;
  variables?: {
    [k: string]: ServerVariable;
  };
  /**
   * This interface was referenced by `Server`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ServerVariable {
  enum?: string[];
  default: string;
  description?: string;
  /**
   * This interface was referenced by `ServerVariable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface SecurityRequirement {
  [k: string]: string[];
}
export interface Tag {
  name: string;
  description?: string;
  externalDocs?: ExternalDocumentation;
  /**
   * This interface was referenced by `Tag`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Paths {}
/**
 * This interface was referenced by `Paths`'s JSON-Schema definition
 * via the `patternProperty` "^\/".
 */
export interface PathItem {
  $ref?: string;
  summary?: string;
  description?: string;
  servers?: Server[];
  parameters?: (Parameter | Reference)[];
}
/**
 * Example and examples are mutually exclusive
 */
export interface ExampleXORExamples {
  [k: string]: any;
}
export interface Reference {
  /**
   * This interface was referenced by `Reference`'s JSON-Schema definition
   * via the `patternProperty` "^\$ref$".
   */
  [k: string]: string;
}
/**
 * This interface was referenced by `PathItem`'s JSON-Schema definition
 * via the `patternProperty` "^(get|put|post|delete|options|head|patch|trace)$".
 */
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
  /**
   * This interface was referenced by `Operation`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface RequestBody {
  description?: string;
  content: {
    [k: string]: MediaType;
  };
  required?: boolean;
  /**
   * This interface was referenced by `RequestBody`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Responses {
  default?: Response | Reference;
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
  /**
   * This interface was referenced by `Response`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
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
  /**
   * This interface was referenced by `Link`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Callback {
  [k: string]: PathItem;
}
export interface Components {
  schemas?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Schema | Reference;
  };
  responses?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Response;
  };
  parameters?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Parameter;
  };
  examples?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Example;
  };
  requestBodies?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | RequestBody;
  };
  headers?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Header;
  };
  securitySchemes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | SecurityScheme;
  };
  links?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Link;
  };
  callbacks?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Callback;
  };
  /**
   * This interface was referenced by `Components`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
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
  /**
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
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
  /**
   * This interface was referenced by `XML`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Example {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
  /**
   * This interface was referenced by `Example`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface APIKeySecurityScheme {
  type: "apiKey";
  name: string;
  in: "header" | "query" | "cookie";
  description?: string;
  /**
   * This interface was referenced by `APIKeySecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface OAuth2SecurityScheme {
  type: "oauth2";
  flows: OAuthFlows;
  description?: string;
  /**
   * This interface was referenced by `OAuth2SecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface OAuthFlows {
  implicit?: ImplicitOAuthFlow;
  password?: PasswordOAuthFlow;
  clientCredentials?: ClientCredentialsFlow;
  authorizationCode?: AuthorizationCodeOAuthFlow;
  /**
   * This interface was referenced by `OAuthFlows`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ImplicitOAuthFlow {
  authorizationUrl: string;
  refreshUrl?: string;
  scopes: {
    [k: string]: string;
  };
  /**
   * This interface was referenced by `ImplicitOAuthFlow`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface PasswordOAuthFlow {
  tokenUrl: string;
  refreshUrl?: string;
  scopes?: {
    [k: string]: string;
  };
  /**
   * This interface was referenced by `PasswordOAuthFlow`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ClientCredentialsFlow {
  tokenUrl: string;
  refreshUrl?: string;
  scopes?: {
    [k: string]: string;
  };
  /**
   * This interface was referenced by `ClientCredentialsFlow`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface AuthorizationCodeOAuthFlow {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl?: string;
  scopes?: {
    [k: string]: string;
  };
  /**
   * This interface was referenced by `AuthorizationCodeOAuthFlow`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface OpenIdConnectSecurityScheme {
  type: "openIdConnect";
  openIdConnectUrl: string;
  description?: string;
  /**
   * This interface was referenced by `OpenIdConnectSecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
