import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import config from './config.studio.js';

register(StyleDictionary);

const sd = new StyleDictionary(config, { verbosity: 'verbose' });

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
