import { saveAs } from 'file-saver';

export const downloadConfig = (config, configName) => {
  const blob = new Blob([JSON.stringify(config, null, 2)], {
    type: 'application/json',
  });
  saveAs(blob, `${configName || 'config'}.json`);
};
