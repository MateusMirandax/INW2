const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017', 
{useNewUrlParser : true, 
useUnifiedTopology: true, 
serverSelectionTimeoutMS: 10000});

const db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function(){
    console.log("estamos logados no mongodb");

    });

    const pessoaSchema = new mongoose.Schema({
        nome : String,
        idade : Number,
        profissao : String 
    });

    const Pessoa = mongoose.model("Pessoa", pessoaSchema);

const marcos = new Pessoa({
    nome : 'Marcos',
    idade : 25,
    profissao : 'Jogador'
})

console.log(marcos.nome)
console.log(marcos.idade)
console.log(marcos.profissao)
marcos.save();

const cu = new Pessoa({
    nome : 'cu',
    idade : 25,
    profissao : 'Jogador'
})

console.log(cu.nome)
console.log(cu.idade)
console.log(cu.profissao)
cu.save();