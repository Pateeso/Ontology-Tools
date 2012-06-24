from django.db import models

class Concept(models.Model):
	ConceptId=models.CharField(max_length=50,unique=True)
	ConceptStatus=models.IntegerField()
	FullySpecifiedName=models.CharField(max_length=4096)
	CTV3ID=models.CharField(max_length=50)
	SNOMEDID=models.CharField(max_length=50)
	IsPrimative=models.IntegerField()

class Description(models.Model):
	ConceptId=models.ForeignKey(Concept,db_column='ConceptID',to_field='ConceptId')
	DescriptionID=models.CharField(max_length=50)
	DescriptionStatus=models.IntegerField()
	Term=models.CharField(max_length=4096)
	InitialCapitalStatus=models.IntegerField()
	DescriptionType=models.IntegerField()
	LanguageCode=models.CharField(max_length=25)

class Relationship(models.Model):
	RelationshipId=models.CharField(max_length=50)
	ConceptID1=models.ForeignKey(Concept,db_column='ConceptID1',to_field='ConceptId', related_name='FirstConcept')
	RelationshipType=models.ForeignKey(Concept,db_column='RelationshipType',to_field='ConceptId', related_name='RelationshipConcept')
	ConceptID2=models.ForeignKey(Concept,db_column='ConceptID2',to_field='ConceptId', related_name='SecondConcept')
	CharacteristicType=models.IntegerField()
	Refinability=models.IntegerField()
	RelationshipGroup=models.IntegerField()
	


