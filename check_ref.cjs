const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf-8');

const match = content.match(/export const REFERENCES_DATA: ReferenceItem\[\] = \[(.*?)export const PARTNERS_DATA/s);
if (match) {
    const list = match[1];
    const clients = list.match(/client: '(.*?)'/g);
    console.log(clients.slice(0, 5));
}
