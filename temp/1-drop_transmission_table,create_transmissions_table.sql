
  DROP TABLE `transmission`;


  CREATE TABLE `transmissions` (
    `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `organisationNumber` varchar(24) NOT NULL,
    `date` DATE NOT NULL,
    `json` mediumblob NOT NULL,
    PRIMARY KEY (`organisationNumber`, `date`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

