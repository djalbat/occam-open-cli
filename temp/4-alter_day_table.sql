
	ALTER TABLE `day` ADD COLUMN `source` VARCHAR(24) NOT NULL DEFAULT 'uat' AFTER `organisationNumber`;
