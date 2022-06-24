import fs from 'fs'
const scoreItems = [
    'Technology Stack',
    'User Experience',
    'Creativity',
    'Presentation',
    'Completeness',
    'Fun Factor',
    'Fancyness',
    'Teamwork',
    'One Beyond'
]
const scores=JSON.parse(fs.readFileSync('./scores.json', 'utf8'))
export const config={
    api: {bodyParser:true}
}
export default async function handler(req, res) {
    if (req.body.team){
        scores[req.body.team]= scores[req.body.team]||{}
        scores[req.body.team][req.body.scoreItem] = scores[req.body.team][req.body.scoreItem]||{}
        scores[req.body.team][req.body.scoreItem][req.body.judge] = Math.min( Math.max( parseInt(req.body.score), 1), 5)
        //console.log('kk',JSON.stringify(scores, null, 7));
    }
    res.json(scoreItems);
}

setInterval(()=>{
    console.log('write scores', scores)
    fs.writeFileSync('./scores.json', JSON.stringify(scores))
}, 5000)