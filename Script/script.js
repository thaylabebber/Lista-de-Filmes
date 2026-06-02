const filmes = [
   {
    título:"Vingadores",
    Imagem:"https://www.themoviedb.org/movie/299534-avengers-endgame",
    descrição:"Ultimato",

   },
    { 
        título:"Off campus:Amores improváveis",
        Imagem:"https://www.themoviedb.org/movie/299534-avengers-endgame",
        descrição:"Drama"
    
   },
    {
        título:"Por cima do seu cadáver",
        imagem:"https://www.themoviedb.org/movie/1390300-over-your-dead-body",
        descrição:"Terror",
        },

        {
            título:"Como mágica",
            imagem:"https://www.themoviedb.org/movie/1007757-swapped",
            descrição:"Fantasia",
        },

        {
            título:"//www.themoviedb.org/movie/1621-trading-places",
            imagem:"Trocando as bolas",
            descrição:"Comédia",
        },

        {
        título:"Spider-Noir",
        imagem:"//www.themoviedb.org/tv/220102-spider-noir",
        descrição:"Drama e Mistério",
        }

]

const listaFilmes = document.getElementById ("listarFilmes")
function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
            <div class="caed card-filme h-100">
              <img scr="${filme.imagem}" class="card-img-top">
              <div class="card-body">
              <h3>${filme.titulo}</h3>
              <p>${filme.descricao}</p>
              <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes"</button>
              </div>
              </div>
              </div>
              
        `

        
    });
}