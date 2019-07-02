import { DSFStory } from './DSFStory';
import { DSFEventContainer } from './DSFEvent';

export enum DSFStoryType {
  INIT = "",
  INCORPORATE = "Form the enterprise",
  INNOVATION = "Develop ideas",
  PORTFOLIO = "Create assets",
  CAMPAIGN = "Build brand",
  SALES = "Sell product",
};

export interface DSFStory {
  storyType: DSFStoryType,
  kpiScore: number,
  eventMap: DSFEventContainer[]
}

export const initDSFStory = (storyType: DSFStoryType): DSFStory => {
  const story: DSFStory = {
    storyType: storyType,
    kpiScore: 90,
    eventMap: []
  };
  return story;
}