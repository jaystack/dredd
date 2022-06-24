const teams = [
    { team: 'Parrot - A', cluster: 'A' },
    { team: 'Bear - A', cluster: 'A' },
    { team: 'Eagle - A', cluster: 'A' },
    { team: 'Raccoon - A', cluster: 'A' },
    { team: 'Fox - A', cluster: 'A' },
    { team: 'Frog - A', cluster: 'A' },

    { team: 'Peacock - B', cluster: 'B' },
    { team: 'Elephant - B', cluster: 'B' },
    { team: 'Shark - B', cluster: 'B' },
    { team: 'Rabbit - B', cluster: 'B' },
    { team: 'Octopus - B', cluster: 'B' },
    { team: 'Panther - B', cluster: 'B' },

    { team: 'Kangaroo - C', cluster: 'C' },
    { team: 'Otter - C', cluster: 'C' },
    { team: 'Butterfly - C', cluster: 'C' },
    { team: 'Boar - C', cluster: 'C' },
    { team: 'Lion - C', cluster: 'C' },
    { team: 'Ferret - C', cluster: 'C' },


    { team: 'Snake - D', cluster: 'D' },
    { team: 'Zebra - D', cluster: 'D' },
    { team: 'Penguin - D', cluster: 'D' },
    { team: 'Tiger - D', cluster: 'D' },
    { team: 'Hedgehog - D', cluster: 'D' },
    { team: 'Bull - D', cluster: 'D' },

    { team: 'Cluster Winner A #1', cluster: 'E' },
    { team: 'Cluster Winner A #2', cluster: 'E' },
    { team: 'Cluster Winner B #1', cluster: 'E' },
    { team: 'Cluster Winner B #2', cluster: 'E' },
    { team: 'Cluster Winner C #1', cluster: 'E' },
    { team: 'Cluster Winner C #2', cluster: 'E' },
    { team: 'Cluster Winner D #1', cluster: 'E' },
    { team: 'Cluster Winner D #2', cluster: 'E' },

]   

export default async function handler(req, res) {
    res.json(teams);
}
