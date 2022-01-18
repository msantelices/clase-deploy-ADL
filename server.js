/* 
Plantilla para ejecutar la app en Heroku usando express

Requisitos:
- Instalar express:

   npm install express --save
   ---
   yarn add express

- Crear el siguiente script en package.json:
    "start": "node server.js"

*/

const express = require('express')
const app = express()

app.use( express.static(__dirname + '/dist') )

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('*', (req, res)=> {
    res.redirect('/')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
