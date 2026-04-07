import fs from 'fs';
import path from 'path';

const appPath = path.join(process.cwd(), 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

content = content.replace(/font-roboto/g, 'font-montserrat');
content = content.replace(/font-rajdhani/g, 'font-kiona');

fs.writeFileSync(appPath, content);
console.log('Fonts updated in App.tsx');
