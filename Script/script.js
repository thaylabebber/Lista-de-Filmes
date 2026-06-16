const filmes = [
    {
        título:"Vingadores: Ultimato",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descrição: "Ação",

    },
    {
        título: "Resident Evil: death island",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/bDqY2AYYdZQykEhmDr87i8RKKTT.jpg",
        descrição: "Em São Francisco, Jill Valentine está lidando com um surto de zumbis e um novo T-Virus, Leon Kennedy está no encalço de um cientista DARPA sequestrado e Claire Redfield está investigando um peixe monstruoso que está matando baleias na baía. Acompanhados por Chris Redfield e Rebecca Chambers, eles descobrem que as pistas de seus casos separados convergem para o mesmo local, a Ilha de Alcatraz, onde um novo mal se estabeleceu e aguarda sua chegada."

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
        título: "Michel",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/dueFqKLvjftnELZaGYwY7xinfaI.jpg",
        descrição: "A história da vida de Michael Jackson além da música, traçando sua jornada desde a descoberta de seu talento extraordinário como líder dos Jackson Five até o artista visionário cuja ambição criativa impulsionou uma busca implacável para se tornar o maior artista do mundo",
    },

    {
        título: "Gente Grande",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/ppU2xJnlKdW3F01AtC9wMuXRZCg.jpg",
        descrição: "A morte do treinador de basquete da infância de velhos amigos os reúne no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.",
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