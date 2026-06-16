const serie = [
    {
        título:"Off Campus: Amores Improváveis",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/iQ1WbmoC08ql4qRZkfUD2LlzNOL.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        descrição: "Hannah Wells dá aulas ao capitão do hóquei, Garrett Graham, em troca de dicas para conquistar o paquera. O acordo vira uma conexão quando eles encaram o passado. Os amigos Logan, Dean, Tucker e Allie vivem a vida universitária e o amor.",

    },
    {
        título: "Resident Evil",
        imagem: "https://media.themoviedb.org/t/p/w188_and_h282_face/l2Clkkh64pW0ZDyU7pYMghb51ob.jpg",
        descrição: "  Quase três décadas após a descoberta de um vírus mortal, um surto revela os segredos obscuros da Umbrella Corporation. Baseado na franquia de terror."

    },
    {
        título: "The Last Of Us",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/el1KQzwdIm17I3A6cYPfsVIWhfX.jpg",
        descrição: "Situado duas décadas após a implosão de nossa sociedade, o drama seguirá Joel, um sobrevivente difícil, que é contratado para contrabandear uma garota de 14 anos chamada Ellie para fora de uma zona de quarentena opressiva. O que começa como um pequeno trabalho logo se torna uma jornada brutal e de partir o coração, já que os dois precisam atravessar os Estados Unidos e dependem um do outro para sobreviver.",
    },

    {
        título: "Jujutsu Kaisen",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/8R1mMSC1gX1cg5ed7ns49JOEqw3.jpg",
        descrição: "Sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições, causando terríveis acidentes que podem levar até mesmo à morte. E pra piorar, Maldições só podem ser exorcizadas por outras Maldições. Certo dia, para salvar amigos que estavam sendo atacados por Maldições, Yuji Itadori engole o dedo do Ryomen-Sukuna, absorvendo sua Maldição. Ele então decide se matricular no Colégio Técnico de Feitiçaria de Tóquio, uma organização que combate as Maldições... e assim começa a heróica lenda do garoto que tornou-se uma Maldição para exorcizar uma Maldição.",
    },

    {
        título: "The Walking Dead",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9lb02gTh4LLB17yAEXFd4C3R4JP.jpg",
        descrição: "Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade."
    },
    {
        título: "Devil May Cry",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/75KximV3WhtvlWFneTrf1Pw61cu.jpg",
        descrição: "Nesta batalha épica do bem contra o mal, as linhas não estão nada claras. E as esperanças de salvação estão nas mãos de um caçador de demônios diabolicamente bonito.",
    },

]

const listaSerie = document.getElementById("listaSerie");
function mostrarSerie(lista) {
    listaSerie.innerHTML = ""
    lista.forEach(serie => {
        listaSerie.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${serie.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${serie.título}</h3>
                        <p>${serie.descrição}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}

mostrarSerie(serie)

function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informaçaões da Série",
        icon: "info"
    })
}
