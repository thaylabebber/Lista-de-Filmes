const filmes = [
    {
        título:"Vingadores: Ultimato",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descrição: "Ação",

    },
    {
        título: "Off campus: Amores improváveis",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/iQ1WbmoC08ql4qRZkfUD2LlzNOL.jpg",
        descrição: "Drama"

    },
    {
        título: "Por cima do seu cadáver",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/9ghTSDRXDYZagU9hOf285EjOmgD.jpg",
        descrição: "Terror",
    },

    {
        título: "Como mágica",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/7FBnCkYzHlVHEtuzTEiGgFhs8EQ.jpg",
        descrição: "Fantasia",
    },

    {
        título: "Trocando as bolas",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/tYyHmUzo6GT7qjG7OWqo0zsXcoJ.jpg",
        descrição: "Comédia",
    },

    {
        título: "Spider-Noir",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/rfrzXSaiuvRMLo8PRQds0TfFrZC.jpg",
        descrição: "Drama e Mistério",
    }

]

const listaFilmes = document.getElementById("listaFilmes");
function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${filme.título}</h3>
                        <p>${filme.descrição}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}

mostrarFilmes(filmes)

function verDetalhes(titulo) {
    Swal.fire({
        title: título,
        text: "Mais informaçaões de Filme",
        icon: "info"
    })
}