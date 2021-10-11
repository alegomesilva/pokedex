<<<<<<< HEAD
  
const { Console } = require("console");
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

let message = "";

const pokedex = [{
  numero: "004",
  nome:"Charmander",
  tipo: "Fogo",
  imagem: "/img/Charmander.png ",
  descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda",
  altura: "0,6 m",
  peso: "8,5 kg",
  categoria: "Lagarto",
  habilidade: "Incendio "
},

{
  numero: "020",
  nome:"Raticate",
  tipo: "Normal ",
  imagem: "/img/Raticate.png",
  descricao: "Seus pés traseiros são palmados. Eles agem como nadadeiras, então podem nadar em rios e caçar presas ",
  altura: "0,7 m ",
  peso: "18,5 kg",
  categoria: "Rato",
  habilidade: "Tão corajoso que ter uma condição de status aumenta a estatística de Ataque do Pokémon "
},

{
  numero: "007",
  nome:"Squirtle ",
  tipo: "Água",
  imagem: "/img/Squirtle.png",
  descricao: "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa ",
  altura: "0,5 m ",
  peso: "9,0 kg ",
  categoria: "Tartaruga ",
  habilidade: "Aumenta o poder de movimentos do tipo Água quando o HP do Pokémon está baixo "
}];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {

  setTimeout(() => {    
    message = "";  
  }, 1000);

  res.render("index", {
   pokedex,
   message,
  }); 
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro")
});

app.get("/detalhes/:indice", (req, res) => {
  const indice = parseInt(req.params.indice);
  const pokemon = pokedex[indice];
  res.render("detalhes", { pokemon });
});

app.post("/subscription", (req, res) => {
  
  const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade } = req.body;

  pokedex.push({
    numero,
    nome,
    tipo,
    imagem,
    descricao,
    altura,
    peso,
    categoria,
    habilidade,
  })
  message = `Parabéns!!! Cadastro efetuado com sucesso.`
  res.redirect ("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
=======
  
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
>>>>>>> 6875660908784701f31789a06825e0719d1c0d76
);