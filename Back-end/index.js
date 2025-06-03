const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let musicas = [];
let idAtual = 1;

app.get("/musicas", (req, res) => {
  const ordenadas = [...musicas].sort((a, b) => 
    b.votos - a.votos);
    res.json(ordenadas);
});

app.post("/musicas", (req, res) => {
    const {nome, artista} = req.body;
    const novaMusica = {
        id: idAtual++,
        nome,
        artista,
        votos: 0
    };
 musicas.push(novaMusica);
 res.status(201).json(novaMusica)
});

app.post("/musicas/:id/votar", (req, res) =>
    {
        const id = parseInt(req.params.id);
        const musicas = musicas.find(m => m.id === id);

    if (!musica) {
        return res.status(404).json({erro: "Música não encontrada"});
    }     
    musicas.votos++;
    res.json(musica);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
});
