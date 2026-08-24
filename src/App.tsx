/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TemplateV3 } from './templates/v3/TemplateV3';
import { suwonData } from './templates/v3/data/suwonData';
import { getRegionData } from './templates/v3/data/registry';
import { RegionData } from './types/index';

export default function App() {
  const [currentRegionData, setCurrentRegionData] = useState<RegionData>(suwonData);

  useEffect(() => {
    // Check if a specific region parameter is present in the URL query (?region=suwon)
    const params = new URLSearchParams(window.location.search);
    const regionParam = params.get('region');
    if (regionParam) {
      const data = getRegionData(regionParam);
      setCurrentRegionData(data);
    }
  }, []);

  return <TemplateV3 data={currentRegionData} />;
}
