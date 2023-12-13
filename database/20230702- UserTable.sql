IF NOT EXISTS(SELECT * FROM sys.schemas WHERE NAME = 'ss')
BEGIN
EXEC ('CREATE SCHEMA [ss]')
END

IF OBJECT_ID('ss.User', 'U') IS NULL
CREATE TABLE ss.[User]
(
ID INT IDENTITY(1, 1) NOT NULL,
UserName VARCHAR(50) NOT NULL, 
PhoneNumber INT NOT NULL, 
EmailAddress VARCHAR(100) NOT NULL,
Password VARCHAR(MAX) NOT NULL,
CONSTRAINT PK_User
PRIMARY KEY (ID)
)

IF OBJECT_ID('ss.Product', 'U') IS NULL
CREATE TABLE ss.[Product]
(
ID INT IDENTITY(1, 1) NOT NULL,
Name VARCHAR(50) NOT NULL, 
Quantity INT NOT NULL, 
Price INT NOT NULL,
Description VARCHAR(MAX) NOT NULL,
Image VARCHAR(MAX) NOT NULL,
CONSTRAINT PK_Product
PRIMARY KEY (ID)
)