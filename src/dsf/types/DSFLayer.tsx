import { DSFEpic } from './DSFEpic';

export enum DSFLayerType {
  ENTERPRISE = "ENTERPRISE",
  TECHNOLOGY = "TECHNOLOGY",
  PERSONAL = "PERSONAL"
};

export interface DSFLayer {
  type: DSFLayerType,
  epicMap: DSFEpic[]
};

export const initDSFLayer = (layerType: DSFLayerType): DSFLayer => {
  const layer: DSFLayer = {
    type: layerType,
    epicMap: []
  };
  return layer;
};

export const initDSFLayerMap = (): Array<DSFLayer> => {
  const layerMap: Array<DSFLayer> = [];
  const enterpriseLayer: DSFLayer = initDSFLayer(DSFLayerType.ENTERPRISE);
  const technologyLayer: DSFLayer = initDSFLayer(DSFLayerType.TECHNOLOGY);
  const personalLayer: DSFLayer = initDSFLayer(DSFLayerType.PERSONAL);
  layerMap.push(enterpriseLayer);
  layerMap.push(technologyLayer);
  layerMap.push(personalLayer);
  return layerMap;
};