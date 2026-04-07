import fs from 'fs';
import https from 'https';
import path from 'path';

const urls = [
  'https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/rfojwvfllrnq32zmlbgpqo/12991615951/17855018691500407769/cipasa.png',
  'https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/rfojwvfllrnq32zmlbgpqo/12991615951/17855018691500407769/alphaville.png',
  'https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/rfojwvfllrnq32zmlbgpqo/12991615951/17855018691500407769/direcional.png',
  'https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/rfojwvfllrnq32zmlbgpqo/12991615951/17855018691500407769/zopone.png',
  'https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/rfojwvfllrnq32zmlbgpqo/12991615951/17855018691500407769/tambore.png',
  'https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/rfojwvfllrnq32zmlbgpqo/12991615951/17855018691500407769/lote5.png',
  'https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/rfojwvfllrnq32zmlbgpqo/12991615951/17855018691500407769/five5.png'
];

const dir = path.join(process.cwd(), 'public', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

urls.forEach(url => {
  const filename = path.basename(url);
  const dest = path.join(dir, filename);
  const file = fs.createWriteStream(dest);
  https.get(url, function(response) {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', function() {
        file.close();
        console.log('Downloaded ' + filename);
      });
    } else {
      console.log('Failed to download ' + filename + ': ' + response.statusCode);
    }
  }).on('error', function(err) {
    fs.unlink(dest, () => {});
    console.log('Error downloading ' + filename + ': ' + err.message);
  });
});
