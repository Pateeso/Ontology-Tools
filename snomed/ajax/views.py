# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from django.template import RequestContext
from django.shortcuts import render_to_response
from snomed.browser.models import Concept,Description,Relationship,Ontology
@csrf_exempt
def index(request):
	ontology=Ontology(OntologyFSN='SNOMED CT')
	root=ontology.getRoot()
	rela=ontology.getIsA()
	rootConcept=Concept.objects.get(ConceptID=root)
	rootName=rootConcept.getPreferredTerm()
	curId=request.POST.get('curId','Root Concept')
	if curId=='Root Concept':
		curId=root;
	kids=_getKids(curId,rela)
	parents=_getImmediateParents(curId,rela)
	if not node:
		node={"id":root, "pt":rootName,"kids":len(kids)}
	return render_to_response('ajax/index.ajx',{"root":rootName,
						    "start":start,
						    "node":node,
						    "kids":sorted(kids, key=lambda kid:kid.PreferredTerm)},
			context_instance=RequestContext(request),mimetype='application/json')
def _getKids(curId,rela):
	parentConcept=Concept.objects.get(ConceptID=curId,ConceptStatus=0)
	children=parentConcept.getChildren(rela)
	kids=[]
	for k in children:
		if k.ConceptStatus==0 :
			k.getPreferredTerm()
			kids.append(k)
	return kids	
def _getImmediateParents():
	pass
