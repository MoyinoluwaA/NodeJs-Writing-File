const fs = require('fs')
const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
    fs.writeFile('result/posts.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err
    console.log('file created successfully')
    })
})

