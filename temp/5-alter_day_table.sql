
	ALTER TABLE `day` DROP PRIMARY KEY, ADD PRIMARY KEY(`organisationNumber`, `source`, `date`);
