
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 05/05/2017 00:38:38
-- Generated from EDMX file: C:\Users\MuhammadZain\Downloads\AngularJS_Demo\AngularJS_Demo\AngularJS_Demo\Models\ProductDataContext.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [Sample];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[TblProductList]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TblProductList];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'TblProductLists'
CREATE TABLE [dbo].[TblProductLists] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(20)  NULL,
    [Category] varchar(20)  NULL,
    [Price] decimal(10,2)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'TblProductLists'
ALTER TABLE [dbo].[TblProductLists]
ADD CONSTRAINT [PK_TblProductLists]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------