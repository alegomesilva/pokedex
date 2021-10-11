  
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
);