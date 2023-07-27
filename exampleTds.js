const context = {
  htv: "http://www.w3.org/2011/http#",
  sosa: "http://www.w3.org/ns/sosa/",
  ssn: "http://www.w3.org/ns/ssn/",
  td: "https://www.w3.org/2019/wot/td#",
  jsonschema: "https://www.w3.org/2019/wot/json-schema#",
  wotsec: "https://www.w3.org/2019/wot/security#",
  hctl: "https://www.w3.org/2019/wot/hypermedia#",
  schema: "http://schema.org/",
  rdfs: "http://www.w3.org/2000/01/rdf-schema#",
  xsd: "http://www.w3.org/2001/XMLSchema#",
  dct: "http://purl.org/dc/terms/",
  htv: "http://www.w3.org/2011/http#",
  iot: "http://iotschema.org/",
  sosa: "http://www.w3.org/ns/sosa/",
  ssn: "http://www.w3.org/ns/ssn/",
  saref: "https://saref.etsi.org/saref#",
  s4bldg: "https://saref.etsi.org/saref4bldg#",
  time: "http://www.w3.org/2006/time#",
  id: "@id",
  properties: {
    "@id": "td:hasPropertyAffordance",
    "@type": "@id",
    "@container": "@index",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
        "@type": "xsd:boolean",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
        "@type": "xsd:boolean",
      },
      maximum: {
        "@id": "jsonschema:maximum",
      },
      minimum: {
        "@id": "jsonschema:minimum",
      },
      maxItems: {
        "@id": "jsonschema:maxItems",
        "@type": "xsd:unsignedInt",
      },
      minItems: {
        "@id": "jsonschema:minItems",
        "@type": "xsd:unsignedInt",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@type": "xsd:string",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      oneOf: {
        "@id": "jsonschema:oneOf",
        "@container": "@set",
      },
      allOf: {
        "@id": "jsonschema:allOf",
        "@container": "@set",
      },
      anyOf: {
        "@id": "jsonschema:anyOf",
        "@container": "@set",
      },
      type: {
        "@id": "rdf:type",
        "@type": "@vocab",
      },
      object: "jsonschema:ObjectSchema",
      array: "jsonschema:ArraySchema",
      boolean: "jsonschema:BooleanSchema",
      string: "jsonschema:StringSchema",
      number: "jsonschema:NumberSchema",
      integer: "jsonschema:IntegerSchema",
      null: "jsonschema:NullSchema",
      properties: {
        "@id": "jsonschema:properties",
        "@type": "@id",
        "@container": "@index",
      },
    },
  },
  actions: {
    "@id": "td:hasActionAffordance",
    "@type": "@id",
    "@container": "@index",
  },
  events: {
    "@id": "td:hasEventAffordance",
    "@type": "@id",
    "@container": "@index",
  },
  Thing: {
    "@id": "td:Thing",
  },
  EventAffordance: {
    "@id": "td:EventAffordance",
  },
  name: {
    "@id": "td:name",
  },
  observable: {
    "@id": "td:isObservable",
    "@type": "xsd:boolean",
  },
  PropertyAffordance: {
    "@id": "td:PropertyAffordance",
  },
  forms: {
    "@id": "td:hasForm",
    "@type": "@id",
    "@container": "@set",
  },
  links: {
    "@id": "td:hasLink",
    "@type": "@id",
    "@container": "@set",
  },
  uriVariables: {
    "@id": "td:hasUriTemplateSchema",
    "@container": "@index",
  },
  safe: {
    "@id": "td:isSafe",
  },
  idempotent: {
    "@id": "td:isIdempotent",
  },
  instance: {
    "@id": "td:instance",
  },
  InteractionAffordance: {
    "@id": "td:InteractionAffordance",
  },
  ActionAffordance: {
    "@id": "td:ActionAffordance",
  },
  input: {
    "@id": "td:hasInputSchema",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
        "@type": "xsd:boolean",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
        "@type": "xsd:boolean",
      },
      maximum: {
        "@id": "jsonschema:maximum",
      },
      minimum: {
        "@id": "jsonschema:minimum",
      },
      maxItems: {
        "@id": "jsonschema:maxItems",
        "@type": "xsd:unsignedInt",
      },
      minItems: {
        "@id": "jsonschema:minItems",
        "@type": "xsd:unsignedInt",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@type": "xsd:string",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      oneOf: {
        "@id": "jsonschema:oneOf",
        "@container": "@set",
      },
      allOf: {
        "@id": "jsonschema:allOf",
        "@container": "@set",
      },
      anyOf: {
        "@id": "jsonschema:anyOf",
        "@container": "@set",
      },
      type: {
        "@id": "rdf:type",
        "@type": "@vocab",
      },
      object: "jsonschema:ObjectSchema",
      array: "jsonschema:ArraySchema",
      boolean: "jsonschema:BooleanSchema",
      string: "jsonschema:StringSchema",
      number: "jsonschema:NumberSchema",
      integer: "jsonschema:IntegerSchema",
      null: "jsonschema:NullSchema",
      properties: {
        "@id": "jsonschema:properties",
        "@type": "@id",
        "@container": "@index",
      },
    },
  },
  output: {
    "@id": "td:hasOutputSchema",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
        "@type": "xsd:boolean",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
        "@type": "xsd:boolean",
      },
      maximum: {
        "@id": "jsonschema:maximum",
      },
      minimum: {
        "@id": "jsonschema:minimum",
      },
      maxItems: {
        "@id": "jsonschema:maxItems",
        "@type": "xsd:unsignedInt",
      },
      minItems: {
        "@id": "jsonschema:minItems",
        "@type": "xsd:unsignedInt",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@type": "xsd:string",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      oneOf: {
        "@id": "jsonschema:oneOf",
        "@container": "@set",
      },
      allOf: {
        "@id": "jsonschema:allOf",
        "@container": "@set",
      },
      anyOf: {
        "@id": "jsonschema:anyOf",
        "@container": "@set",
      },
      type: {
        "@id": "rdf:type",
        "@type": "@vocab",
      },
      object: "jsonschema:ObjectSchema",
      array: "jsonschema:ArraySchema",
      boolean: "jsonschema:BooleanSchema",
      string: "jsonschema:StringSchema",
      number: "jsonschema:NumberSchema",
      integer: "jsonschema:IntegerSchema",
      null: "jsonschema:NullSchema",
      properties: {
        "@id": "jsonschema:properties",
        "@type": "@id",
        "@container": "@index",
      },
    },
  },
  subscription: {
    "@id": "td:hasSubscriptionSchema",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
        "@type": "xsd:boolean",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
        "@type": "xsd:boolean",
      },
      maximum: {
        "@id": "jsonschema:maximum",
      },
      minimum: {
        "@id": "jsonschema:minimum",
      },
      maxItems: {
        "@id": "jsonschema:maxItems",
        "@type": "xsd:unsignedInt",
      },
      minItems: {
        "@id": "jsonschema:minItems",
        "@type": "xsd:unsignedInt",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@type": "xsd:string",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      oneOf: {
        "@id": "jsonschema:oneOf",
        "@container": "@set",
      },
      allOf: {
        "@id": "jsonschema:allOf",
        "@container": "@set",
      },
      anyOf: {
        "@id": "jsonschema:anyOf",
        "@container": "@set",
      },
      type: {
        "@id": "rdf:type",
        "@type": "@vocab",
      },
      object: "jsonschema:ObjectSchema",
      array: "jsonschema:ArraySchema",
      boolean: "jsonschema:BooleanSchema",
      string: "jsonschema:StringSchema",
      number: "jsonschema:NumberSchema",
      integer: "jsonschema:IntegerSchema",
      null: "jsonschema:NullSchema",
      properties: {
        "@id": "jsonschema:properties",
        "@type": "@id",
        "@container": "@index",
      },
    },
  },
  data: {
    "@id": "td:hasNotificationSchema",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
        "@type": "xsd:boolean",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
        "@type": "xsd:boolean",
      },
      maximum: {
        "@id": "jsonschema:maximum",
      },
      minimum: {
        "@id": "jsonschema:minimum",
      },
      maxItems: {
        "@id": "jsonschema:maxItems",
        "@type": "xsd:unsignedInt",
      },
      minItems: {
        "@id": "jsonschema:minItems",
        "@type": "xsd:unsignedInt",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@type": "xsd:string",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      oneOf: {
        "@id": "jsonschema:oneOf",
        "@container": "@set",
      },
      allOf: {
        "@id": "jsonschema:allOf",
        "@container": "@set",
      },
      anyOf: {
        "@id": "jsonschema:anyOf",
        "@container": "@set",
      },
      type: {
        "@id": "rdf:type",
        "@type": "@vocab",
      },
      object: "jsonschema:ObjectSchema",
      array: "jsonschema:ArraySchema",
      boolean: "jsonschema:BooleanSchema",
      string: "jsonschema:StringSchema",
      number: "jsonschema:NumberSchema",
      integer: "jsonschema:IntegerSchema",
      null: "jsonschema:NullSchema",
      properties: {
        "@id": "jsonschema:properties",
        "@type": "@id",
        "@container": "@index",
      },
    },
  },
  cancellation: {
    "@id": "td:hasCancellationSchema",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
        "@type": "xsd:boolean",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
        "@type": "xsd:boolean",
      },
      maximum: {
        "@id": "jsonschema:maximum",
      },
      minimum: {
        "@id": "jsonschema:minimum",
      },
      maxItems: {
        "@id": "jsonschema:maxItems",
        "@type": "xsd:unsignedInt",
      },
      minItems: {
        "@id": "jsonschema:minItems",
        "@type": "xsd:unsignedInt",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@type": "xsd:string",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      oneOf: {
        "@id": "jsonschema:oneOf",
        "@container": "@set",
      },
      allOf: {
        "@id": "jsonschema:allOf",
        "@container": "@set",
      },
      anyOf: {
        "@id": "jsonschema:anyOf",
        "@container": "@set",
      },
      type: {
        "@id": "rdf:type",
        "@type": "@vocab",
      },
      object: "jsonschema:ObjectSchema",
      array: "jsonschema:ArraySchema",
      boolean: "jsonschema:BooleanSchema",
      string: "jsonschema:StringSchema",
      number: "jsonschema:NumberSchema",
      integer: "jsonschema:IntegerSchema",
      null: "jsonschema:NullSchema",
      properties: {
        "@id": "jsonschema:properties",
        "@type": "@id",
        "@container": "@index",
      },
    },
  },
  description: {
    "@id": "dct:description",
  },
  descriptions: {
    "@id": "dct:description",
    "@container": "@language",
  },
  title: {
    "@id": "dct:title",
  },
  titles: {
    "@id": "dct:title",
    "@container": "@language",
  },
  support: {
    "@id": "td:supportContact",
  },
  source: {
    "@id": "dct:source",
  },
  unit: {
    "@id": "schema:unitCode",
    "@type": "@vocab",
  },
  "@version": 1.1,
};

export const td1 = {
  "@context": context,
  title: "thing1",
  id: `http://192.168.1.100/td#Thing`,
  description: "Thing Description af a Temperature Sensor.",
  securityDefinitions: {
    nosec_sc: {
      scheme: "nosec",
    },
  },
  security: "nosec_sc",
  "@type": ["Thing", "sosa:Sensor"],

  // Link to document describing the Thing (e.g. Thing Description)
  "sosa:hosts": [
    `http://192.168.1.101/td#Thing`,
    `http://192.168.1.102/td#Thing`,
  ],

  properties: {
    property1: {
      title: "Property1",
      type: "string",
      forms: [{ href: "https://example.com/property1" }],
    },
  },
  actions: {
    action1: {
      title: "Action1",
      type: "string",
      forms: [{ href: "https://example.com/action1" }],
    },
  },
  events: {
    event1: {
      title: "Event1",
      type: "string",
      forms: [{ href: "https://example.com/event1" }],
    },
  },
};

export const td2 = {
  "@context": context,
  title: "thing2",
  id: `http://192.168.1.101/td#Thing`,
  description: "Thing Description af a Temperature Sensor.",
  securityDefinitions: {
    nosec_sc: {
      scheme: "nosec",
    },
  },
  security: "nosec_sc",
  "@type": ["Thing", "sosa:Sensor"],

  // Link to document describing the Thing (e.g. Thing Description)
  "sosa:hosts": [`http://192.168.1.103/td#Thing`],

  "sosa:isHostedBy": "http://192.168.1.100/td#Thing",

  properties: {
    property2: {
      title: "Property2",
      type: "string",
      forms: [{ href: "https://example.com/property2" }],
    },
  },
  actions: {
    action2: {
      title: "Action2",
      type: "string",
      forms: [{ href: "https://example.com/action2" }],
    },
  },
  events: {
    event2: {
      title: "Event2",
      type: "string",
      forms: [{ href: "https://example.com/event2" }],
    },
  },
};

export const td3 = {
  "@context": context,
  title: "thing3",
  id: `http://192.168.1.102/td#Thing`,
  description: "Thing Description af a Temperature Sensor.",
  securityDefinitions: {
    nosec_sc: {
      scheme: "nosec",
    },
  },
  security: "nosec_sc",
  "@type": ["Thing", "sosa:Sensor"],

  "sosa:isHostedBy": "http://192.168.1.100/td#Thing",

  properties: {
    property3: {
      title: "Property3",
      type: "string",
      forms: [{ href: "https://example.com/property3" }],
    },
  },
  actions: {
    action3: {
      title: "Action3",
      type: "string",
      forms: [{ href: "https://example.com/action3" }],
    },
  },
  events: {
    event3: {
      title: "Event3",
      type: "string",
      forms: [{ href: "https://example.com/event3" }],
    },
  },
};

export const td4 = {
  "@context": context,
  title: "thing4",
  id: `http://192.168.1.103/td#Thing`,
  description: "Thing Description af a Temperature Sensor.",
  securityDefinitions: {
    nosec_sc: {
      scheme: "nosec",
    },
  },
  security: "nosec_sc",
  "@type": ["Thing", "sosa:Sensor"],

  "sosa:isHostedBy": "http://192.168.1.101/td#Thing",

  properties: {
    property4: {
      title: "Property4",
      type: "string",
      forms: [{ href: "https://example.com/property4" }],
    },
  },
  actions: {
    action4: {
      title: "Action4",
      type: "string",
      forms: [{ href: "https://example.com/action4" }],
    },
  },
  events: {
    event4: {
      title: "Event4",
      type: "string",
      forms: [{ href: "https://example.com/event4" }],
    },
  },
};

export const td5 = {
  "@context": context,
  title: "thing5",
  id: `http://192.168.1.104/td#Thing`,
  description: "Thing Description af a Temperature Sensor.",
  securityDefinitions: {
    nosec_sc: {
      scheme: "nosec",
    },
  },
  security: "nosec_sc",
  "@type": ["Thing", "sosa:Sensor"],

  properties: {
    property5: {
      title: "Property5",
      type: "string",
      forms: [{ href: "https://example.com/property5" }],
    },
  },
  actions: {
    action5: {
      title: "Action5",
      type: "string",
      forms: [{ href: "https://example.com/action5" }],
    },
  },
  events: {
    event5: {
      title: "Event5",
      type: "string",
      forms: [{ href: "https://example.com/event5" }],
    },
  },
};
