const teams = [
    { team: 'Parrot', cluster: 'A' },
    { team: 'Bear', cluster: 'A' },
    { team: 'Eagle', cluster: 'A' },
    { team: 'Raccoon', cluster: 'A' },
    { team: 'Fox', cluster: 'A' },
    { team: 'Frog', cluster: 'A' },

    { team: 'Peacock', cluster: 'B' },
    { team: 'Elephant', cluster: 'B' },
    { team: 'Shark', cluster: 'B' },
    { team: 'Rabbit', cluster: 'B' },
    { team: 'Octopus', cluster: 'B' },
    { team: 'Panther', cluster: 'B' },

    { team: 'Kangaroo', cluster: 'C' },
    { team: 'Otter', cluster: 'C' },
    { team: 'Butterfly', cluster: 'C' },
    { team: 'Boar', cluster: 'C' },
    { team: 'Lion', cluster: 'C' },
    { team: 'Ferret', cluster: 'C' },


    { team: 'Snake', cluster: 'D' },
    { team: 'Zebra', cluster: 'D' },
    { team: 'Penguin', cluster: 'D' },
    { team: 'Tiger', cluster: 'D' },
    { team: 'Hedgehog', cluster: 'D' },
    { team: 'Bull', cluster: 'D' },

    { team: 'Cluster Winner A', cluster: 'E' },
    { team: 'Cluster Winner B', cluster: 'E' },
    { team: 'Cluster Winner C', cluster: 'E' },
    { team: 'Cluster Winner D', cluster: 'E' },

]   

export default async function handler(req, res) {
    res.json(teams);
}