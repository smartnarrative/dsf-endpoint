import { DSFEventContainer, DSFChannelType } from '../types';

export const genesisEvents :Array<DSFEventContainer> = [
  { channel: DSFChannelType.GOVERNANCE, source:"http://mockGovFeed", label: 'G-GOV', delay: 1000, govObj: {'openlaw':'createContract'} },
  { channel: DSFChannelType.FINANCE, source:"http://mockFinFeed", label: 'G-FIN', delay: 2000, finObj: {'equipment': 1000} },
  { channel: DSFChannelType.MARKETING, source:"http://mockMktFeed", label: 'G-MKT', delay: 3000, mktObj: {'salesforce': 'platformEvent'} },
  { channel: DSFChannelType.PRODUCTION, source:"http://mockPrdfeed",  label: 'G-PRD', delay: 4000 , prdObj: {'IoT': 'iotEvent'}},
];

export const knowledgeEvents :Array<DSFEventContainer> = [
  { channel: DSFChannelType.GOVERNANCE, source:"http://mockGovFeed", label: 'K-GOV', delay: 1000, govObj: {'openlaw':'createContract'} },
  { channel: DSFChannelType.FINANCE, source:"http://mockFinFeed", label: 'K-FIN', delay: 2000, finObj: {'equipment': 1000} },
  { channel: DSFChannelType.MARKETING, source:"http://mockMktFeed", label: 'K-MKT', delay: 3000, mktObj: {'salesforce': 'platformEvent'} },
  { channel: DSFChannelType.PRODUCTION, source:"http://mockPrdfeed",  label: 'K-PRD', delay: 4000 , prdObj: {'IoT': 'iotEvent'}},
];

export const portfolioEvents :Array<DSFEventContainer> = [
  { channel: DSFChannelType.GOVERNANCE, source:"http://mockGovFeed", label: 'P-GOV', delay: 1000, govObj: {'openlaw':'createContract'} },
  { channel: DSFChannelType.FINANCE, source:"http://mockFinFeed", label: 'P-FIN', delay: 2000, finObj: {'equipment': 1000} },
  { channel: DSFChannelType.MARKETING, source:"http://mockMktFeed", label: 'P-MKT', delay: 3000, mktObj: {'salesforce': 'platformEvent'} },
  { channel: DSFChannelType.PRODUCTION, source:"http://mockPrdfeed",  label: 'P-PRD', delay: 4000 , prdObj: {'IoT': 'iotEvent'}},
];

export const communicationEvents :Array<DSFEventContainer> = [
  { channel: DSFChannelType.GOVERNANCE, source:"http://mockGovFeed", label: 'C-GOV', delay: 1000, govObj: {'openlaw':'createContract'} },
  { channel: DSFChannelType.FINANCE, source:"http://mockFinFeed", label: 'C-FIN', delay: 2000, finObj: {'equipment': 1000} },
  { channel: DSFChannelType.MARKETING, source:"http://mockMktFeed", label: 'C-MKT', delay: 3000, mktObj: {'salesforce': 'platformEvent'} },
  { channel: DSFChannelType.PRODUCTION, source:"http://mockPrdfeed",  label: 'C-PRD', delay: 4000 , prdObj: {'IoT': 'iotEvent'}},
];

export const salesEvents :Array<DSFEventContainer> = [
  { channel: DSFChannelType.GOVERNANCE, source:"http://mockGovFeed", label: 'S-GOV', delay: 1000, govObj: {'openlaw':'createContract'} },
  { channel: DSFChannelType.FINANCE, source:"http://mockFinFeed", label: 'S-FIN', delay: 2000, finObj: {'equipment': 1000} },
  { channel: DSFChannelType.MARKETING, source:"http://mockMktFeed", label: 'S-MKT', delay: 3000, mktObj: {'salesforce': 'platformEvent'} },
  { channel: DSFChannelType.PRODUCTION, source:"http://mockPrdfeed",  label: 'S-PRD', delay: 4000 , prdObj: {'IoT': 'iotEvent'}},
];