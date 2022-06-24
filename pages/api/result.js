import fs from 'fs'

export default async function handler(req, res) {
    res.json(JSON.parse(fs.readFileSync('./scores.json', 'utf8')));
}
