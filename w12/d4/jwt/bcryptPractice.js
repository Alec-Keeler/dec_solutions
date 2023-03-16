const bcrypt = require('bcryptjs')

const hashPass = async(password) => {
    const hash = await bcrypt.hash(password, 10)
    console.log(hash)
}

// hashPass('password')

// hash: $2a$10$nNSEhmfKVQWshJoCPUsoC.M22wgclLRYLRy3Uu2Byla.RgP8vz5y2

const comparePass = async(password, hashedPassword) => {
    const isPass = await bcrypt.compare(password, hashedPassword)
    console.log(isPass)
}

comparePass('password', '$2a$10$nNSEhmfKVQWshJoCPUsoC.M22wgclLRYLRy3Uu2Byla.RgP8vz5y2')