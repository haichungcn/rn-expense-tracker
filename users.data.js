const INITIAL_USER_DATA = {
    count: 1,
    'admin@et.com' : {
        id: 1,
        email: 'admin@et.com',
        password: 'password',
        expenses: {
            1: {
                id: 1,
                title: 'invest',
                amount: 5000,
                timestamp: new Date()
            },
        }
    },
}

export default INITIAL_USER_DATA