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
	tag varchar(50) not null,
    usuario varchar(20) not null,
    foreign key (tag) references tags(tag),
    foreign key (usuario) references users(usuario)
);

create table comment(
    idComment integer primary key not null
	id integer,
	resposta varchar(500) not null,
    usuario varchar(20) not null,
    foreign key (usuario) references users(usuario),
    foreign key (id) references post(id)
);

create table answerComment(
    id integer,
	resposta varchar(500) not null,
    usuario varchar(20) not null,
    foreign key (usuario) references users(usuario),
    foreign key (id) references comment(idComment)
);