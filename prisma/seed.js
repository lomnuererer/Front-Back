const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
   { username: 'andy', password, email: 'andy@gmail'},
   { username: 'naner', password, email: 'nCt@gmail'},
   { username: 'molis', password, email: 'Edd@gmail'},
   { username: 'nini', password, email: 'NongNong@gmail'}
]

const todoData = [

]

const run = async () => {
    await prisma.user.createMany({
        data : userData
    })
}

run()