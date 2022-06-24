const scoreItems = [
    'Technology Stack',
    'User Experience',
    'Creativity',
    'Presentation',
    'Completeness',
    'Fun Factor',
    'Fancyness',
    'Teamwork',
]

export default async function handler(req, res) {
    res.json(scoreItems);
}