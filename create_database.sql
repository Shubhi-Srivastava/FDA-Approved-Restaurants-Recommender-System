drop table if exists violations cascade;
drop table if exists customer_rating cascade;
drop table if exists address_info cascade;
drop table if exists businesses cascade;
drop table if exists inspections cascade;
drop table if exists food_type cascade;

/*
Functional Dependencies:
------------------------
business_id -> business_name, restaurant_type

Candidate Key: business_id
Foreign Key: None
*/
create table businesses
	(business_id		int,
	 business_name		varchar(200) NOT NULL,
	 restaurant_type    varchar(200),
	 
	 primary key (business_id) 
	);

/*
Functional Dependencies:
------------------------
business_name -> cuisine

Candidate Key: business_name
Foreign Key: None
*/
create table food_type
	(business_name      varchar(200) NOT NULL,
	 cuisine            varchar(200),
	 
	 primary key (business_name) 
	);

/*
Functional Dependencies:
------------------------
inspection_id -> business_id, inspection_date, inspection_score, inspection_type

Candidate Key: inspection_id
Foreign Key: business_id
*/
create table inspections
	(inspection_id 	    varchar(200),
	 business_id        int,
	 inspection_date    varchar(200),	 
	 inspection_score 	Numeric(3, 1),
     inspection_type    varchar(200),
	 
	 primary key (inspection_id),
	 foreign key (business_id) references businesses (business_id) ON DELETE SET NULL
	 );

/*
Functional Dependencies:
------------------------
business_id, violation_id -> violation_description, risk_category

Candidate Key: business_id, violation_id
Foreign Key: business_id
*/
create table violations
	(violation_id		    varchar(200),
	 business_id 	        int,
	 violation_description  varchar(200),
	 risk_category	        varchar(200),
	 
	 primary key (violation_id, business_id),
	 foreign key (business_id) references businesses (business_id) 
	 ON DELETE SET NULL
	);

/*
Functional Dependencies:
------------------------
business_id -> business_address, business_city, business_state, business_postal_code, business_latitude, business_longitude
business_latitude, business_longitude -> business_id

Candidate Key: (business_latitude, business_longitude), business_id
Foreign Key: business_id
*/
create table address_info
	(business_address 	     varchar(200),
	 business_city           varchar(200),
	 business_state	         varchar(200),
	 business_postal_code 	 varchar(200),
	 business_id		     int,
     business_latitude       Numeric(10, 6),
	 business_longitude      Numeric(10, 6),
	 
	 primary key (business_latitude, business_longitude),
	 foreign key (business_id) references businesses (business_id)
	 ON DELETE SET NULL
	 );
	 
/*
Functional Dependencies:
------------------------
business_id -> business_name, rating

Candidate Key: business_id
Foreign Key: business_id
*/
create table customer_rating
	(business_id		int,
	 business_name		varchar(200) NOT NULL,
	 rating	            Numeric(3, 2),
	 
	 foreign key (business_id) references businesses (business_id) 
	 ON DELETE SET NULL
	);