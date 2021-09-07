import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Ahmed Mo',
        email: 'ahmed@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Rami Ab',
        email: 'rami@example.com',
        password: bcrypt.hashSync('123456',10),
    },
]

export default users