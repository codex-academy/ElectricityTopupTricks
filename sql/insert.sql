

create table appliance (
	id serial primary key,
	name text,
	rate decimal(4,2)

);


create table street (
	id serial primary key,
	name text
);

create table electricity_meter (

	id serial primary key,
	street_number text,
	street_id int,
	foreign key (street_id) references street(id)
 
);

-- 3 meter per street

insert into street (name) values ('Miller Street') returning id;
insert into street (name) values ('Mathaba Crescent') returning id;
insert into street (name) values ('Vilakazi Road') returning id;


insert into electricity_meter () values ();
