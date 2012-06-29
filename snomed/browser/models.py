from django.db import models

class Ontology(models.Model):
	OntologyFSN=models.CharField(max_length=255)
	def getRoot(self):
		return '138875005'
	def getIsA(self):
		return '116680003'
class Concept(models.Model):
	ConceptID=models.CharField(max_length=50,unique=True)
	ConceptStatus=models.IntegerField()
	FullySpecifiedName=models.CharField(max_length=4096)
	CTV3ID=models.CharField(max_length=50)
	SNOMEDID=models.CharField(max_length=50)
	IsPrimative=models.IntegerField()
	PreferredTerm=None
	RootConcept=None
	def getPreferredTerm(self):
		if not self.PreferredTerm:
			self.PreferredTerm=self.Descriptions.filter(DescriptionType=1)[0].Term
		return self.PreferredTerm
	def __unicode__(self):
		return self.getPreferredTerm()
	def getChildren(self, rela='116680003'):
		return Concept.objects.filter(ConceptStatus=0,FirstConcept__ConceptID2=self.ConceptID,
					      FirstConcept__RelationshipType=rela).extra(select={
			'kidCount':'select count(*) from browser_relationship where relationshiptype="{0}" and conceptid2=conceptid'.format(rela)
			})
	def getImmediateParents(self,rela='116680003'):
		return Concept.objects.filter(ConceptStatus=0,SecondConcept__RelationshipType=rela)

class Description(models.Model):
	ConceptID=models.ForeignKey(Concept,db_column='ConceptID',to_field='ConceptID', related_name='Descriptions')
	DescriptionID=models.CharField(max_length=50)
	DescriptionStatus=models.IntegerField()
	Term=models.CharField(max_length=4096)
	InitialCapitalStatus=models.IntegerField()
	DescriptionType=models.IntegerField()
	LanguageCode=models.CharField(max_length=25)
	def __unicode__(self):
		return self.Term

class Relationship(models.Model):
	RelationshipId=models.CharField(max_length=50)
	ConceptID1=models.ForeignKey(Concept,db_column='ConceptID1',to_field='ConceptID', related_name='FirstConcept')
	RelationshipType=models.ForeignKey(Concept,db_column='RelationshipType',to_field='ConceptID', related_name='RelationshipConcept')
	ConceptID2=models.ForeignKey(Concept,db_column='ConceptID2',to_field='ConceptID', related_name='SecondConcept')
	CharacteristicType=models.IntegerField()
	Refinability=models.IntegerField()
	RelationshipGroup=models.IntegerField()
	def __unicode__(self):
		return u"{0} {1} {2}".format(self.ConceptID1,self.RelationshipType,self.ConceptID2)	
