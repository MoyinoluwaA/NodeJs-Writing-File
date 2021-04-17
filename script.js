const fs = require('fs')
const fetch = require('node-fetch')

try {
    if (!fs.existsSync('result')) {
      fs.mkdirSync('result')
    }
} catch (err) {
    console.error(err)
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
    fs.writeFile('result/posts.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err
    console.log('file created successfully')
    })
})

