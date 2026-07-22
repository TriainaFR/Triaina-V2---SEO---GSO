const fs = require('fs');

let content = fs.readFileSync('src/constants.ts', 'utf8');

const replacements = {
    'ref_bernard_magrez': 'https://bernard-magrez.com/wp-content/uploads/2026/06/Bernard_Magrez_website.webp',
    'ref_tamtam_ai': 'https://image.thum.io/get/width/1200/crop/800/https://tamtam.pro/',
    'ref_sunlife_group': 'https://www.yoursunlife.com/media/s3vp1w4h/sb_views_aerial-view-2-2100x1573-776d2df9-300e-44d0-9094-eff4c2512ff5.jpg?anchor=center&mode=crop&quality=70&width=1200&height=1200&rnd=133809855248170000',
    'ref_leshardis': 'https://www.leshardis.com/wp-content/uploads/2020/01/Team-Editorial-Services-SRLRexShutterstock.jpg',
    'ref_talis_education_group': 'https://image.thum.io/get/width/1200/crop/800/https://www.talis-business-school.com/',
    'ref_lazuli_travel_bureau': 'https://image.thum.io/get/width/1200/crop/800/https://www.lazuli.fr/',
    'ref_skilink': 'https://image.thum.io/get/width/1200/crop/800/https://www.skilink.fr/',
    'ref_yonder': 'https://www.yonder.fr/yonder_site.jpg',
    'ref_lazuli_nil': 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Agilkia.jpg',
    'ref_bestrestaurants': 'https://image.thum.io/get/width/1200/crop/800/https://www.bestrestaurantsparis.com/',
    'ref_groupe_hotelier': 'https://images.unsplash.com/photo-1542314831-c6a4d1424391?auto=format&fit=crop&q=80&w=1200'
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

fs.writeFileSync('src/constants.ts', lines.join('\n'));
