from django.db import models

class Concept(models.Model):
	ConceptId=Models.CharField(max_length=50)
	ConceptStatus=Models.IntegerField()
	FullySpecifiedName=Models.CharField(max_length=4096)
	CTV3ID=Models.CharField(max_length=50)
	SNOMEDID=Models.CharField(max_length=50)
	IsPrimative=Models.IntegerField()

class Description(models.Model):
	ConceptId=Models.ForeignKey(Concept,db_column='ConceptID',to_field='ConceptId')
	DescriptionID=Models.CharField(max_length=50)
	DescriptionStatus=Models.IntegerField()
	Term=Models.CharField(max_length=4096)
	InitialCapitalStatus=Models.IntegerField()
	DescriptionType=Models.IntegerField()
	LanguageCode=Models.CharField(max_length=25)

class Relationship(models.Model):
	RelationshipId=Models.CharField(max_length=50)
	ConceptID1=Models.ForeignKey(Concept,db_column='ConceptID1',to_field='ConceptId')
	RelationshipType=Models.ForeignKey(Concept,db_column='RelationshipType',to_field='ConceptId')
	ConceptID2=Models.ForeignKey(Concept,db_column='ConceptID2',to_field='ConceptId')
	CharacteristicType=Models.IntegerField()
	Refinability=Models.IntegerField()
	RelationshipGroup=Models.IntegerField()
	


