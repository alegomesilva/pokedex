  
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;



let message = "";
let poke = [];

const pokedex = [{id: 1, numero:"1",nome:"Charizard",tipo:"Incêndio",imagem:"charizard.png",descricao:"Dragão",altura:"1.70 m",peso:"90.5 kg",categoria:"Chama",habilidade:"Chame Alta" },
{id: 2, numero:"2",nome:"Blastoise",tipo:"Água",imagem:"blastoise.png",descricao:"Tartaruga",altura:"1.60 m",peso:"85.5 Kg",categoria:"Marisco",habilidade:"Move Água" },
{id: 3, numero:"3",nome:"Sandslash",tipo:"Chão",imagem:"sandslash.png",descricao:"Rato Espinhoso",altura:"1.00 m",peso:"29.5 Kg",categoria:"Mouse",habilidade:"Vé de Areia" }];



app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.render ("index", {pokedex: pokedex});
});

app.get("/", function (req, res) {
  poke = {nome, imagem, tipo};
  res.render ("cadastro",{pokedex: [{nome:nome, imagem:imagem, tipo: tipo}]})  
});

app.get ("/", (req, res) => {
  poke = {numero, descricao, altura, peso, categoria, habilidade};
  res.render ("/detalhe", {pokedex: [{numero: numero, descricao: descricao, altura: altura, peso: peso, categoria: categoria, habilidade: habilidade}]})
});

app.get ("/detalhe", function(req, res){
  res.render ("cadastro")
})

app.post ("/cadastro", function (req, res){
  res.render ("cadastro")
})

// app.post ("/cadastro", (req, res) => {
//   const pokenovo = req.body;
//   res.redirect ("/")
// });

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);