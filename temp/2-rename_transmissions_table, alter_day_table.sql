
  RENAME TABLE `transmissions` TO `day`;

  ALTER TABLE `day` CHANGE COLUMN `json` `transmissionsJSON` mediumblob NOT NULL;