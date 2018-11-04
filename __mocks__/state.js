const STATE = {
    search: {
        value: 'a',
        list: [{
            id: 155,
            title: 'The Dark Knight',
            tagline: 'Why So Serious?',
            vote_average: 8.3,
            vote_count: 14475,
            release_date: '2008-07-16',
            poster_path: 'https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
            overview:
                'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
            budget: 185000000,
            revenue: 1004558444,
            genres: ['Drama', 'Action', 'Crime', 'Thriller'],
            runtime: 152
        }],
        isFetching: false
    },
    resultsFilter: {
        resultsFilter: ''
    },
    searchField: {
        value: ''
    }
};

export { STATE };
