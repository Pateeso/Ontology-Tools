from django.db import models

class Concept(models.Model):
	ConceptId=Models.CharField(max_length=50)
	ConceptStatus=Models.IntegerField()
	FullySpecifiedName=Models.CharField(max_length=4096)
	CTV3ID=Models.CharField(max_length=50)
	SNOMEDID=Models.CharField(max_length=50)
	IsPrimative=Models.IntegerField()

