const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(srcDir);
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const relPath = path.relative(path.dirname(file), srcDir);
    // if relPath is empty, it means file is directly in src, so use './'
    // else use relPath + '/' (e.g. '../')
    const replacement = relPath === '' ? './' : relPath + '/';
    
    let newContent = content.replace(/from\s+['"]@\/(.*?)['"]/g, `from '${replacement}$1'`);
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
    }
});
