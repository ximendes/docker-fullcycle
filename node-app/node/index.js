const express = require('express')
const app = express()
const port = 5000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb',
    multipleStatements: true
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const create = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key (id));
                INSERT INTO people(name) values('Eduardo Ximendes');`

connection.query(create)

app.get('/', (req,res) => {
    connection.query(`SELECT * FROM people`, function(err, peoples){ 
        res.send("<h1>Full Cycle Rocks!</h1>" + JSON.stringify(peoples))
    });
    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)    
})