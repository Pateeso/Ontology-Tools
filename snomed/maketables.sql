BEGIN;
CREATE TABLE `browser_concept` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `ConceptId` varchar(50) NOT NULL UNIQUE,
    `ConceptStatus` integer NOT NULL,
    `FullySpecifiedName` varchar(4096) NOT NULL,
    `CTV3ID` varchar(50) NOT NULL,
    `SNOMEDID` varchar(50) NOT NULL,
    `IsPrimative` integer NOT NULL
)
;
CREATE TABLE `browser_description` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `ConceptID` varchar(50) NOT NULL,
    `DescriptionID` varchar(50) NOT NULL,
    `DescriptionStatus` integer NOT NULL,
    `Term` varchar(4096) NOT NULL,
    `InitialCapitalStatus` integer NOT NULL,
    `DescriptionType` integer NOT NULL,
    `LanguageCode` varchar(25) NOT NULL
)
;
ALTER TABLE `browser_description` ADD CONSTRAINT `ConceptID_refs_ConceptId_e9415049` FOREIGN KEY (`ConceptID`) REFERENCES `browser_concept` (`ConceptId`);
CREATE TABLE `browser_relationship` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `RelationshipId` varchar(50) NOT NULL,
    `ConceptID1` varchar(50) NOT NULL,
    `RelationshipType` varchar(50) NOT NULL,
    `ConceptID2` varchar(50) NOT NULL,
    `CharacteristicType` integer NOT NULL,
    `Refinability` integer NOT NULL,
    `RelationshipGroup` integer NOT NULL
)
;
ALTER TABLE `browser_relationship` ADD CONSTRAINT `ConceptID1_refs_ConceptId_b5f8df38` FOREIGN KEY (`ConceptID1`) REFERENCES `browser_concept` (`ConceptId`);
ALTER TABLE `browser_relationship` ADD CONSTRAINT `RelationshipType_refs_ConceptId_b5f8df38` FOREIGN KEY (`RelationshipType`) REFERENCES `browser_concept` (`ConceptId`);
ALTER TABLE `browser_relationship` ADD CONSTRAINT `ConceptID2_refs_ConceptId_b5f8df38` FOREIGN KEY (`ConceptID2`) REFERENCES `browser_concept` (`ConceptId`);
COMMIT;

