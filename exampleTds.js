export const td1 = {
  '@context': [
    'https://www.w3.org/2019/wot/td/v1',
    {
      htv: 'http://www.w3.org/2011/http#',
      sosa: 'http://www.w3.org/ns/sosa/',
      ssn: 'http://www.w3.org/ns/ssn/',
      ex: 'http://example.org/',
    },
  ],
  title: 'thing1',
  id: `http://192.168.1.100/td#Thing`,
  description: 'Thing Description af a Temperature Sensor.',
  securityDefinitions: {
    nosec_sc: {
      scheme: 'nosec',
    },
  },
  security: 'nosec_sc',
  '@type': ['Thing', 'sosa:Sensor'],

  // Link to document describing the Thing (e.g. Thing Description)
  'sosa:hosts': [
    `http://192.168.1.101/td#Thing`,
    `http://192.168.1.102/td#Thing`,
  ],

  properties: {},
  actions: {},
  events: {},
};

export const td2 = {
  '@context': [
    'https://www.w3.org/2019/wot/td/v1',
    {
      htv: 'http://www.w3.org/2011/http#',
      sosa: 'http://www.w3.org/ns/sosa/',
      ssn: 'http://www.w3.org/ns/ssn/',
      ex: 'http://example.org/',
    },
  ],
  title: 'thing2',
  id: `http://192.168.1.101/td#Thing`,
  description: 'Thing Description af a Temperature Sensor.',
  securityDefinitions: {
    nosec_sc: {
      scheme: 'nosec',
    },
  },
  security: 'nosec_sc',
  '@type': ['Thing', 'sosa:Sensor'],

  // Link to document describing the Thing (e.g. Thing Description)
  'sosa:hosts': [`http://192.168.1.103/td#Thing`],

  'sosa:isHostedBy': 'http://192.168.1.100/td#Thing',

  properties: {},
  actions: {},
  events: {},
};

export const td3 = {
  '@context': [
    'https://www.w3.org/2019/wot/td/v1',
    {
      htv: 'http://www.w3.org/2011/http#',
      sosa: 'http://www.w3.org/ns/sosa/',
      ssn: 'http://www.w3.org/ns/ssn/',
      ex: 'http://example.org/',
    },
  ],
  title: 'thing3',
  id: `http://192.168.1.102/td#Thing`,
  description: 'Thing Description af a Temperature Sensor.',
  securityDefinitions: {
    nosec_sc: {
      scheme: 'nosec',
    },
  },
  security: 'nosec_sc',
  '@type': ['Thing', 'sosa:Sensor'],

  'sosa:isHostedBy': 'http://192.168.1.100/td#Thing',

  properties: {},
  actions: {},
  events: {},
};

export const td4 = {
  '@context': [
    'https://www.w3.org/2019/wot/td/v1',
    {
      htv: 'http://www.w3.org/2011/http#',
      sosa: 'http://www.w3.org/ns/sosa/',
      ssn: 'http://www.w3.org/ns/ssn/',
      ex: 'http://example.org/',
    },
  ],
  title: 'thing4',
  id: `http://192.168.1.103/td#Thing`,
  description: 'Thing Description af a Temperature Sensor.',
  securityDefinitions: {
    nosec_sc: {
      scheme: 'nosec',
    },
  },
  security: 'nosec_sc',
  '@type': ['Thing', 'sosa:Sensor'],

  'sosa:isHostedBy': 'http://192.168.1.101/td#Thing',

  properties: {},
  actions: {},
  events: {},
};

export const td5 = {
  '@context': [
    'https://www.w3.org/2019/wot/td/v1',
    {
      htv: 'http://www.w3.org/2011/http#',
      sosa: 'http://www.w3.org/ns/sosa/',
      ssn: 'http://www.w3.org/ns/ssn/',
      ex: 'http://example.org/',
    },
  ],
  title: 'thing5',
  id: `http://192.168.1.104/td#Thing`,
  description: 'Thing Description af a Temperature Sensor.',
  securityDefinitions: {
    nosec_sc: {
      scheme: 'nosec',
    },
  },
  security: 'nosec_sc',
  '@type': ['Thing', 'sosa:Sensor'],

  properties: {},
  actions: {},
  events: {},
};
