create database registros2;
use registros2;

create table usuarios (
    idUsuarios int not null,
    nombreUsuario varchar(20) not null,
    password varchar(40) default null,
    email varchar(40) not null,
    tipoUsuario varchar(15) not null,
    primary key (idUsuarios)
    ) engine=innodb;

insert into usuarios values (1,'Ivan Santana Juarez','12345','ivanSJ@gmail.com','Admin');
insert into usuarios values (2,'Nidia Martinez','1234','nidiaMS@gmail.com','User');

create table productos(
    idproducto int not null,
    nombreProducto varchar(40) not null,
    tipo varchar(30) not null,
    precio float not null,
    primary key (idproducto)
    ) engine=innodb;

insert into productos values (1,'Cargador USB TYPE C','Electronica',160);
insert into productos values (2,'Audifonos Bluetooth','Electronica',250);

create table carrito(
    idCarrito int not null,
    idUsuario int not null,
    idProductos int not null,
    cantidad int not null,
    totalC float not null,
    primary key (idCarrito),
    constraint idU_idUsFK foreign key (idUsuario) references usuarios (idUsuarios),
    constraint idP_idProFK foreign key (idProductos) references productos(idproducto)
    ) engine=innodb;

insert into carrito values (1,2,2,2,500);
insert into carrito values (2,1,1,3,480);

create table pagoCarrito(
    idPagos int not null,
    idUsuario int not null,
    idCarrito int not null,
    fecha date not null,
    totalPago float not null,
    primary key (idPagos),
    constraint idUPC_idUsPCFK foreign key (idUsuario) references usuarios (idUsuarios)
    ) engine=innodb;	

insert into pagoCarrito values (1,2,1,20210921,500);
insert into pagoCarrito values (2,1,2,20210922,480);

create table inventarioProductos(
    idInventario int not null,
    idProductos int not null,
    cantidadProductos int not null,
    primary key (idInventario),
    constraint idPIn_idProInFK foreign key (idProductos) references productos(idproducto)
    ) engine=innodb;

insert into inventarioProductos values (1,1,53);
insert into inventarioProductos values (2,2,21);


create table servicios(
    idServicio int not null,
    nombreServicio varchar(40) not null,
    tipo varchar(30) not null,
    precio float not null,
    primary key (idServicio)
    ) engine=innodb;

insert into servicios values (1,'Cambio de Display','Electronico',950);
insert into servicios values (2,'Montaje de Mica','Basico',100);
