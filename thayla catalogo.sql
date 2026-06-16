create database catalago_filmes;
use catalago_filmes;
create table filmes (
 id int auto_increment primary key,
 titulo varchar(100),
 descricao text,
 imagem varchar(225),
 categoria varchar(90)
 );
 insert into filmes
 (titulo, descricao, imagem, categoria)
 values ("resident evil: death island", 
 "Em São Francisco, Jill Valentine está lidando com um surto de zumbis e um novo T-Virus, Leon Kennedy está no encalço de um cientista DARPA sequestrado e Claire Redfield está investigando um peixe monstruoso que está matando baleias na baía. Acompanhados por Chris Redfield e Rebecca Chambers, eles descobrem que as pistas de seus casos separados convergem para o mesmo locl, a Ilha de Alcatraz, onde um novo mal se estabeleceu e aguarda sua chegada",
 "https://media.themoviedb.org/t/p/w600_and_h900_face/bDqY2AYYdZQykEhmDr87i8RKKTT.jpg", 
 "terror"),
 ("Vingadores: Ultimato",
 "Após os eventos devastadores de Vingadores: Guerra Infinita", 
 "o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.",
 "https://media.themoviedb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg","Ação"),
 ("Por cima do seu cadáver",
 "Uma comédia de humor ácido com um toque de suspense, dirigida por Jorma Taccone e estrelada por um casal disfuncional, Dan e Lisa, que se refugiam em uma cabana isolada com o objetivo secreto de se assassinarem. Seus elaborados planos para se matarem são interrompidos quando foragidos e um agente penitenciário corrupto atrapalham sua fuga.",
 "https://media.themoviedb.org/t/p/w600_and_h900_face/9ghTSDRXDYZagU9hOf285EjOmgD.jpg",
 "Terror"),
 ("Gente Grande",
 "https://media.themoviedb.org/t/p/w600_and_h900_face/ppU2xJnlKdW3F01AtC9wMuXRZCg.jpg",
 "A morte do treinador de basquete da infância de velhos amigos os reúne no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.",
 "comédia"),
 ("Trocando as bolas",
 "O que pode acontecer quando um magnata de Wall Street encontra um esperto mendigo de rua? Esta é a história de um malandro que troca seu estilo de vida com a de um investidor grã-fino. Daí em diante, a diversão fica mais rica a cada minuto!",
 "https://media.themoviedb.org/t/p/w600_and_h900_face/tYyHmUzo6GT7qjG7OWqo0zsXcoJ.jpg",
 "Comédia"),
 ("Michel","A história da vida de Michael Jackson além da música, traçando sua jornada desde a descoberta de seu talento extraordinário como líder dos Jackson Five até o artista visionário cuja ambição criativa impulsionou uma busca implacável para se tornar o maior artista do mundo",
 "https://media.themoviedb.org/t/p/w600_and_h900_face/dueFqKLvjftnELZaGYwY7xinfaI.jpg",
 "Drama");
    
 