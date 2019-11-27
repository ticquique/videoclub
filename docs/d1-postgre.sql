CREATE TABLE [videoclub] (
  [id] int PRIMARY KEY,
  [manager] nvarchar(255) NOT NULL,
  [city] nvarchar(255) NOT NULL,
  [street] nvarchar(255) NOT NULL,
  [postal_code] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [film] (
  [id] int PRIMARY KEY,
  [videoclub_code] int,
  [name] nvarchar(255) NOT NULL,
  [director] nvarchar(255),
  [released_at] timestamp NOT NULL,
  [rent_price] float NOT NULL
)
GO

CREATE TABLE [member] (
  [id] int PRIMARY KEY,
  [name] nvarchar(255) NOT NULL,
  [age] int NOT NULL
)
GO

CREATE TABLE [administrator] (
  [id] int PRIMARY KEY,
  [name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [rented_film] (
  [id] int PRIMARY KEY,
  [rent] int,
  [film] int
)
GO

CREATE TABLE [rent] (
  [id] int PRIMARY KEY,
  [pickup_date] timestamp NOT NULL,
  [devolution_date] timestamp NOT NULL,
  [amount] float NOT NULL
)
GO

CREATE TABLE [statistic_rent] (
  [id] int PRIMARY KEY,
  [rent] int,
  [statistic] int
)
GO

CREATE TABLE [statistic] (
  [id] int PRIMARY KEY,
  [member_code] int,
  [administrator_code] int,
  [created_at] timestamp DEFAULT (GETDATE()),
  [amount] float NOT NULL
)
GO

ALTER TABLE [film] ADD FOREIGN KEY ([videoclub_code]) REFERENCES [videoclub] ([id])
GO

ALTER TABLE [rented_film] ADD FOREIGN KEY ([rent]) REFERENCES [rent] ([id])
GO

ALTER TABLE [rented_film] ADD FOREIGN KEY ([film]) REFERENCES [film] ([id])
GO

ALTER TABLE [statistic_rent] ADD FOREIGN KEY ([rent]) REFERENCES [rent] ([id])
GO

ALTER TABLE [statistic_rent] ADD FOREIGN KEY ([statistic]) REFERENCES [statistic] ([id])
GO

ALTER TABLE [statistic] ADD FOREIGN KEY ([member_code]) REFERENCES [member] ([id])
GO

ALTER TABLE [statistic] ADD FOREIGN KEY ([administrator_code]) REFERENCES [administrator] ([id])
GO
