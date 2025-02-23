const nadeData = {
    maps: ['mirage', 'inferno', 'ancient', 'overpass', 'nuke', 'vertigo', 'anubis', 'train'],
    types: [
        { id: 'flash', label: 'Flash' },
        { id: 'smoke', label: 'Smoke' },
        { id: 'molotov', label: 'Molotov' },
        { id: 'he', label: 'HE' }
    ],

    nades: [
        {
            id: '1',
            title: 'Window Smoke',
            map: 'mirage',
            type: 'smoke',
            difficulty: 'hard',
            side: 'T',
            description: 'Perfect smoke to block window',
            imageUrl: 'img/window.png',
            videoUrl: 'https://www.youtube.com/watch?v=tXU64vhW6fU', // Ajout du lien YouTube
            position: {
                from: 'T spawn',
                to: 'Window'
            },
            technique: 'jump-throw',
            tags: ['mid execute', 'mid control']
        },
        {
            id: '2',
            title: 'CT smoke A',
            map: 'mirage',
            type: 'smoke',
            difficulty: 'easy',
            side: 'T',
            description: 'Perfect smoke for A site',
            imageUrl: 'img/ct_smoke.jpg',
            videoUrl: 'https://youtu.be/pPfUEq-1MDk',
            position: {
                from: 'T spawn',
                to: 'CT spawn'
            },
            technique: 'jump-throw',
            tags: ['a execute', 'entry']
        },
        {
            id: '3',
            title: 'T smoke for B site',
            map: 'inferno',
            type: 'smoke',
            difficulty: 'easy',
            side: 'T',
            description: 'Perfect smoke for exec B site',
            imageUrl: 'img/banane.jpg',
            videoUrl: 'https://youtu.be/Kflwu8Iffw0',
            position: {
                from: 'Banana',
                to: 'CT'
            },
            technique: 'jump-throw',
            tags: ['a execute', 'entry']
        },
        {
            id: '4',
            title: 'Vent smoke for B site',
            map: 'vertigo',
            type: 'smoke',
            difficulty: 'medium',
            side: 'T',
            description: 'Perfect smoke for B site',
            imageUrl: 'img/vent_vertigo.jpg',
            videoUrl: 'https://youtu.be/1ksz79f9LXQ',
            position: {
                from: 'T spawn',
                to: 'Vent'
            },
            technique: 'jump-throw',
            tags: ['a execute', 'entry']
        },
        {
            id: '5',
            title: 'Red room smoke for mid',
            map: 'ancient',
            type: 'smoke',
            difficulty: 'medium',
            side: 'T',
            description: 'Perfect smoke for rush mid',
            imageUrl: 'img/red_room.jpg',
            videoUrl: 'https://youtu.be/rxjTVSBVe_4',
            position: {
                from: 'T spawn',
                to: 'Red room'
            },
            technique: 'jump-throw',
            tags: ['a execute', 'mid']
        },
    ]
};
