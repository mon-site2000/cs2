const nadeData = {
    maps: ['mirage', 'inferno', 'ancient', 'overpass', 'nuke', 'vertigo', 'anubis'],
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
            difficulty: 'medium',
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
            title: 'A Main Flash',
            map: 'mirage',
            type: 'smoke',
            difficulty: 'easy',
            side: 'T',
            description: 'Smoke CT spawn to T spawn',
            imageUrl: 'img/ct_smoke.jpg',
            videoUrl: 'https://youtu.be/Qr3R-IN7RII', // Ajout du lien YouTube
            position: {
                from: 'T spawn',
                to: 'CT spawn'
            },
            technique: 'jump-throw',
            tags: ['a execute', 'entry']
        }
    ]
};
