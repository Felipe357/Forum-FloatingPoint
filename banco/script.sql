drop database if exists Forum;
create database Forum charset=UTF8 collate utf8_general_ci;
use Forum;

create table users(
    usuario varchar(20) primary key not null,
    nome varchar(50) not null,
    senha varchar(200) not null
);

create table tags(
    tag varchar(50) primary key not null
);

create table post( 
	id integer primary key auto_increment,
	titulo varchar(100) not null,
	duvida varchar(500) not null,
    usuario varchar(20) not null,
    foreign key (usuario) references users(usuario)
);

create table postTags(
    id integer primary key auto_increment,
    tag varchar(50) not null,
    idPost integer not null,
    foreign key (tag) references tags(tag),
    foreign key (idPost) references post(id)
);

create table comment(
    idComment integer primary key not null,
	idPost integer not null,
	resposta varchar(500) not null,
    usuario varchar(20) not null,
    foreign key (usuario) references users(usuario),
    foreign key (idPost) references post(id)
);

create table answerComment(
    idAnswer integer primary key not null,
    idComment integer not null,
	resposta varchar(500) not null,
    usuario varchar(20) not null,
    foreign key (usuario) references users(usuario),
    foreign key (idComment) references comment(idComment)
);

create view vw_Posts as
select u.usuario as usuario, p.titulo as tituloPost, t.tag as tag, c.resposta as resposta, c.usuario as usuarioComment, a.resposta as respostaAnswer, a.usuario as usuarioAnswer from users u 
inner join post p on u.usuario = p.usuario
inner join postTags t on p.id = t.idPost
inner join comment c on p.id = c.idPost
inner join answerComment a on c.idComment = a.idComment;