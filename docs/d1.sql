CREATE TABLE "videoclub" (
  "id" int PRIMARY KEY,
  "manager" varchar NOT NULL,
  "city" varchar NOT NULL,
  "street" varchar NOT NULL,
  "postal_code" varchar NOT NULL
);

CREATE TABLE "film" (
  "id" int PRIMARY KEY,
  "videoclub_code" int,
  "name" varchar NOT NULL,
  "director" varchar,
  "released_at" timestamp NOT NULL,
  "rent_price" float NOT NULL
);

CREATE TABLE "member" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "age" int NOT NULL
);

CREATE TABLE "administrator" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "rented_film" (
  "id" int PRIMARY KEY,
  "rent" int,
  "film" int
);

CREATE TABLE "rent" (
  "id" int PRIMARY KEY,
  "pickup_date" timestamp NOT NULL,
  "devolution_date" timestamp NOT NULL,
  "amount" float NOT NULL
);

CREATE TABLE "statistic_rent" (
  "id" int PRIMARY KEY,
  "rent" int,
  "statistic" int
);

CREATE TABLE "statistic" (
  "id" int PRIMARY KEY,
  "member_code" int,
  "administrator_code" int,
  "created_at" timestamp DEFAULT (now()),
  "amount" float NOT NULL
);

ALTER TABLE "film" ADD FOREIGN KEY ("videoclub_code") REFERENCES "videoclub" ("id");

ALTER TABLE "rented_film" ADD FOREIGN KEY ("rent") REFERENCES "rent" ("id");

ALTER TABLE "rented_film" ADD FOREIGN KEY ("film") REFERENCES "film" ("id");

ALTER TABLE "statistic_rent" ADD FOREIGN KEY ("rent") REFERENCES "rent" ("id");

ALTER TABLE "statistic_rent" ADD FOREIGN KEY ("statistic") REFERENCES "statistic" ("id");

ALTER TABLE "statistic" ADD FOREIGN KEY ("member_code") REFERENCES "member" ("id");

ALTER TABLE "statistic" ADD FOREIGN KEY ("administrator_code") REFERENCES "administrator" ("id");
