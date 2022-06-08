const { User } = require('../models');

const userData = [{
        username: 'Inglish',
        password: 'inglish112672'

    },
    {
        username: 'Kooper',
        password: 'kooper091311'
    },
    {
        username: 'Reagan',
        password: 'reagan111501'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;