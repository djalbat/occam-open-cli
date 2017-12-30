
  CREATE TABLE `transmission` (
    `number` varchar(24) NOT NULL,
    `timestamp` datetime NOT NULL,
    `json` mediumblob NOT NULL,
    PRIMARY KEY (`number`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

