-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: 
-- Versão do Servidor: 5.5.25a
-- Versão do PHP: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `be3`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `healthcare`
--

CREATE TABLE IF NOT EXISTS `healthcare` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Extraindo dados da tabela `healthcare`
--

INSERT INTO `healthcare` (`id`, `name`) VALUES
(1, 'Amil'),
(2, 'Bradesco'),
(3, 'Dix Saúde'),
(4, 'Unimed'),
(5, 'SulAmerica'),
(6, 'Qualicorp');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pacientes`
--

CREATE TABLE IF NOT EXISTS `pacientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `birthday` datetime DEFAULT NULL,
  `gender` varchar(9) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `rg` varchar(11) NOT NULL,
  `staterg` varchar(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cellPhone` varchar(12) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `healthcare` int(11) NOT NULL,
  `membershipcard` varchar(50) DEFAULT NULL,
  `membershipCardValidity` datetime DEFAULT NULL,
  `password` varchar(45) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Extraindo dados da tabela `pacientes`
--

INSERT INTO `pacientes` (`id`, `name`, `lastname`, `birthday`, `gender`, `cpf`, `rg`, `staterg`, `email`, `cellPhone`, `phone`, `healthcare`, `membershipcard`, `membershipCardValidity`, `password`, `status`) VALUES
(1, 'Everaldino', 'Oliveira dos Santos', '1996-06-22 00:00:00', 'M', '9377897700', '345784273', 'SP', 'teste@gmail.com', '11994083737', '', 0, '0123456789012345', '0000-00-00 00:00:00', 'teste123', 1),
(2, 'Gustavo', 'Santana', '2005-07-25 00:00:00', 'M', '62927278075', '135594108', 'MG', 'gtavo@hotmail.com', '11995073561', '1140409090', 1, '32165498732165', '0000-00-00 00:00:00', 'Gtvao987', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
