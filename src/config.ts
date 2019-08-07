import fs from 'fs';

const buf: Buffer = fs.readFileSync('./config.json');
const config: ConfigType = JSON.parse(buf.toString());

export default config;
