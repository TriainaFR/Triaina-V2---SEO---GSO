const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

const replacements = {
    'ref_bernard_magrez': '/images/Bernard Magrez Logo.webp',
    'ref_tamtam_ai': '/images/tamtam AI.png',
    'ref_sunlife_group': '/images/Sunlife logo.png',
    'ref_leshardis': '/images/Les Hardis Logo.png',
    'ref_talis_education_group': '/images/Talis Education Group Logo.png',
    'ref_lazuli_travel_bureau': '/images/Lazuli Travel Bureau.png',
    'ref_skilink': '/images/Skilink Logo.svg',
    'ref_yonder': '/images/Logo Yonder.jpg',
    'ref_lazuli_nil': '/images/Lazuli Nil Logo.png',
    'ref_bestrestaurants': '/images/Best Restaurant Paris Logo.png'
};

const lines = content.split('\n');
let currentId = null;

for (let i = 0; i < lines.length; i++) {
    const idMatch = lines[i].match(/id:\s*'([^']+)'/);
    if (idMatch) {
        currentId = idMatch[1];
    }
    
    if (lines[i].includes('image: ') && currentId && replacements[currentId]) {
        lines[i] = lines[i].replace(/image:\s*'.*'/, `image: '${replacements[currentId]}'`);
        currentId = null; // reset for next
    }
}

fs.writeFileSync('constants.ts', lines.join('\n'));
