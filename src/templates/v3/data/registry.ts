import { RegionData } from '@/src/types/index';
import { suwonData } from './suwonData';
import { yonginData } from './yonginData';
import { goyangData } from './goyangData';
import { gangseoData } from './gangseoData';
import { guroData } from './guroData';

export const regionRegistry: Record<string, RegionData> = {
  suwon: suwonData,
  yongin: yonginData,
  goyang: goyangData,
  gangseo: gangseoData,
  guro: guroData,
};

export function getRegionData(code: string = 'suwon'): RegionData {
  return regionRegistry[code] || suwonData;
}



