const express = require("express");
const app = express();


//Conexão com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'carlos',
    password: '123@321',
    database: 'mydb'
});


// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + connection.threadId);
// });

// connection.query('SELECT * FROM usuarios', function(err, rows, fields){
//     if(!err){
//         console.log('Resultado: ', rows);
//     }else{
//         console.log('Erro ao realizar a consulta');
//     }
// });


//PÁGINAS
app.get("/login.html", function (req, res) {
    res.sendFile(__dirname + "/login.html")

});

app.get("/cadastro.html", function (req, res) {
    res.sendFile(__dirname + "/cadastro.html")
});

app.get("/paginas/home.html", function (req, res) {
    res.sendFile(__dirname + "/paginas/home.html")
});

app.get("/paginas/produtos.html", function (req, res) {
    res.sendFile(__dirname + "/paginas/produtos.html")
});

app.get("/paginas/pd_1.html", function (req, res) {
    res.sendFile(__dirname + "/paginas/pd_1.html")
});

app.get("/paginas/pd_2.html", function (req, res) {
    res.sendFile(__dirname + "/paginas/pd_2.html")
});

app.get("/paginas/pd_3.html", function (req, res) {
    res.sendFile(__dirname + "/paginas/pd_3.html")
});

app.get("/paginas/pd_4.html", function (req, res) {
    res.sendFile(__dirname + "/paginas/pd_4.html")
});

app.get("/paginas/pd_5.html", function (req, res) {
    res.sendFile(__dirname + "/paginas/pd_5.html")
});

app.get("/paginas/contatos.html", function (req, res) {
    res.sendFile(__dirname + "/paginas/contatos.html")
});

app.get("/paginas/sobre.html", function (req, res) {
    res.sendFile(__dirname + "/paginas/sobre.html")
});


app.listen(8080, () => {
    console.log(`Servidor rodando em http://localhost:8080`);
});