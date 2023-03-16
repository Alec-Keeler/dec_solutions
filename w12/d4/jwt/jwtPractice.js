const jwt = require('jsonwebtoken')

// const token = jwt.sign(
//     {message: 'This is a secure, but not secret, message'},
//     'secret password',
//     {
//         expiresIn: 604800
//     }
// )

// console.log(token)
const tokenString = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiVGhpcyBpcyBhIHNlY3VyZSwgYnV0IG5vdCBzZWNyZXQsIG1lc3NhZ2UiLCJpYXQiOjE2Nzg5ODA0MDQsImV4cCI6MTY3OTU4NTIwNH0._9-EddLbSkWfT3FJxbeef_5_6NwObLC0nhBRPgpAHDs'

jwt.verify(tokenString, 'secret password', null, (err, payload) => {
    if (err) {
        console.log(err)
    }
    console.log(payload)
})
