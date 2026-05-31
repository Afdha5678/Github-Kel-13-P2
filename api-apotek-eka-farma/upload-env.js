const fs = require('fs');
const { execSync } = require('child_process');

const env = fs.readFileSync('.env', 'utf-8');
const lines = env.split('\n');

for (const line of lines) {
    if (!line || line.startsWith('#')) continue;
    let [key, ...rest] = line.split('=');
    if (!key) continue;
    let value = rest.join('=');
    value = value.replace(/^"/, '').replace(/"$/, '');
    
    console.log(`Processing ${key}...`);
    try {
        execSync(`npx vercel env rm ${key} -y`, { stdio: 'ignore' });
    } catch(e) {}
    
    try {
        execSync(`echo "${value}" | npx vercel env add ${key} production`, { stdio: 'inherit' });
        console.log(`Added ${key}`);
    } catch(e) {
        console.log(`Failed to add ${key}`);
    }
}
