var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    var json = {
        id: "190_0",
        name: "SNOMED CT Concept",
        children: [
	{
            id: "32570731000036101",
            name: "Administrative Value",
            data: {
		 relation: "<h4>Administrative Value</h4><b>Connections:</b><ul><li>Account,Insurance and/or Benefit Information</li><li>Child Protection Information</li><li>Information Status</li><li>Person Under legal mandate</li><li>Record Alert</li></ul>"
            },
	    children:[
		{
        	    id: "2570731000036101",
        	    name: "Account, Insurance and/or Benefit Information",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[
					{
        	    		id: "250731000036101",
        	    		name: "Medical benefit Information",
        	    		data: {
	       	         		relation: ""
	       	 			},
	    	     		children:[

			     		]
					},
					{
        	    		id: "250731000036102",
        	    		name: "Payment status",
        	    		data: {
	       	         		relation: ""
	       	 			},
	    	     		children:[

			     		]
					},

		     ]
		},
		{
        	    id: "2570731000036102",
        	    name: "Child Protection Information",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "2570731000036103",
        	    name: "Information Status",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "2570731000036104",
        	    name: "Person under legal Mandate",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "2570731000036105",
        	    name: "Record Alert",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		}
	    ]
	},
	{
            id: "32570731000036102",
            name: "Body Structure",
            data: {
            relation: "<h4>Body Structure</h4><b>Connections:</b><ul><li>Anatomical or Acquired body structure</li><li>Anatomical organizational pattern</li><li>Anatomical Site Notations for Tumor staging</li><li>Morphologically altered Structure</li><li>NonSpecific site</li><li>Normal Anatomy</li><li>Physical Anatomical Entity</li><li>Topography not assigned</li><li>Topography unknown</li></ul>"
            },
	    children:[
		{
        	    id: "2570731000036101",
        	    name: "Anatomical Or Acuired body structure",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "2570731000036101",
        	    name: "Anotamical Organizational pattern",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "2570731000036101",
        	    name: "Anatomical site notations for tumor staging",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "2570731000036101",
        	    name: "Morphologically altered structure",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "3570731000036101",
        	    name: "Non specific site",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "3570731000036102",
        	    name: "Normal Anatomy",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "570731000036104",
        	    name: "Physical Anatomical entity",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "570731000036105",
        	    name: "Topography not assigned",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "570731000036106",
        	    name: "Topography unknown",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		}
	    ]
	},
	{
            id: "32570731000036103",
            name: "Clinical Finding",
            data: {
	            relation: "<h4>Clinical Finding</h4><b>Connections:</b><ul><li>Administrative Statuses</li><li>Adverse Incident Outcome Categories</li><li>Bleeding</li><li>Calculus Finding</li><li>Clinical history and observation findings</li><li>Clinical Stage Finding</li><li>Cyanosis</li><li>Deformity</li></ul>"
            },
	    children:[
		{
        	    id: "3570731000036101",
        	    name: "Administrative Statuses",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "3570731000036102",
        	    name: "Adverse incident outcome categories",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "3570731000036103",
        	    name: "Bleeding",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "3570731000036104",
        	    name: "Calculus Finding",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "3570731000036105",
        	    name: "Clinical History and Observation findings",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "3570731000036106",
        	    name: "Clinical Stage Finding",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "3570731000036107",
        	    name: "Cyanosis",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "3570731000036108",
        	    name: "Deformity",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		}
	    ]
	},
	{
            id: "32570731000036104",
            name: "Environment or Geographical Location",
            data: {
	            relation: "<h4>Environment or Geographical Location</h4><b>Connections:</b><ul><li>Environment</li><li>Geographical and/or political region of the world</li></ul>"
            },
	    children:[
		{
        	    id: "4570731000036101",
        	    name: "Environment",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "4570731000036102",
        	    name: "Geographical and/or political region of the world",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		}
	    ]
	},
	{
            id: "32570731000036105",
            name: "Event",
            data: {
	            relation: "<h4>Event</h4><b>Connections:</b><ul><li>abuse</li><li>accidental event</li><li>bioterrorism related event</li><li>Death</li><li>Disease outbreak</li><li>Email received from patient</li></ul>"
            },
	    children:[
		{
        	    id: "5570731000036101",
        	    name: "abuse",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "5570731000036102",
        	    name: "accidental event",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "5570731000036103",
        	    name: "bioterrorism related event",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "5570731000036104",
        	    name: "Death",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "5570731000036105",
        	    name: "Disease outbreak",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "5570731000036106",
        	    name: "Email received from patient",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		}
	    ]
	},
	{
            id: "32570731000036106",
            name: "Linkage Concept",
            data: {
	            relation: "<h4>Linkage Concept</h4><b>Connections:</b><ul><li>Attribute</li><li>Link Assertion</li></ul>"
            },
	    children:[
		{
        	    id: "6570731000036101",
        	    name: "Attribute",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "6570731000036102",
        	    name: "Link Assertion",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		}
	    ]
	},
	{
            id: "32570731000036107",
            name: "Observable Entity",
            data: {
	            relation: "<h4>Observable Entity</h4><b>Connections:</b><ul><li>Age and/or Growth period</li><li>Body product observable</li><li>Clinical history/examination observable</li><li>Device Observable</li><li>drug therapy observable</li><li>Environment observable</li></ul>"
            },
	    children:[
		{
        	    id: "7570731000036101",
        	    name: "Age and/or Growth period",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "7570731000036102",
        	    name: "Body product observable",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "7570731000036103",
        	    name: "clinical history/examination observable",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "7570731000036104",
        	    name: "device observable",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "7570731000036105",
        	    name: "drug therapy observable",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "7570731000036106",
        	    name: "Environment observable",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		}
	    ]
	},
	{
            id: "32570731000036108",
            name: "Organism",
            data: {
	            relation: "<h4>Organism</h4><b>Connections:</b><ul><li>Chromista</li><li>Kingdom animalia</li><li>kingdom plantae</li><li>life-cycle form</li><li>microorganism</li><li>renotrophic organism</li><li>trophic life form</li></ul>"
            },
	    children:[
		{
        	    id: "8570731000036101",
        	    name: "Chromista",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "8570731000036102",
        	    name: "Kingdom animalia",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "8570731000036103",
        	    name: "Kingdom plantae",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "8570731000036104",
        	    name: "Life-cycle form",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "8570731000036105",
        	    name: "Microorganism",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "8570731000036106",
        	    name: "Renotrophic Organism",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "8570731000036107",
        	    name: "trophic life form",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		}
	    ]
	},
	{
            id: "32570731000036109",
            name: "Pharmaceutical / Biologic Product",
            data: {
	            relation: "<h4>Pharmaceutical / Biologic Product</h4><b>Connections:</b><ul><li>Acetic Acid</li><li>CVS drug</li><li>Ergoline Drug</li><li>Methylcellulose</li><li>Reproductive system</li></ul>"
            },
	    children:[
		{
        	    id: "9570731000036101",
        	    name: "Acetic Acid",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "9570731000036102",
        	    name: "CVS drug",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "9570731000036103",
        	    name: "Ergoline drug",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "9570731000036104",
        	    name: "methylcellulose",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
		{
        	    id: "9570731000036105",
        	    name: "Reproductive system",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		}
	    ]
	},
	{
            id: "32570731000036110",
            name: "Physical force",
            data: {
                relation: ""
            },
	    children:[
	    ]
	},
	{
            id: "32570731000036111",
            name: "Physical Object",
            data: {
                relation: ""
            },
	    children:[
	    ]
	},
	{
            id: "32570731000036112",
            name: "Procedure",
            data: {
                relation: ""
            },
	    children:[
	    ]
	},
	{
            id: "32570731000036113",
            name: "Qualifier Value",
            data: {
                relation: ""
            },
	    children:[
	    ]
	},
	{
            id: "32570731000036114",
            name: "Record Artefact",
            data: {
                relation: ""
            },
	    children:[
	    ]
	},
	{
            id: "32570731000036115",
            name: "Situation with Explicit Context",
            data: {
                relation: ""
            },
	    children:[
	    ]
	},
	{
            id: "32570731000036116",
            name: "Social Context",
            data: {
                relation: ""
            },
	    children:[
	    ]
	},
	{
            id: "32570731000036117",
            name: "Special Concept",
            data: {
                relation: ""
            },
	    children:[
	    ]
	},
	{
            id: "32570731000036118",
            name: "Specimen",
            data: {
                relation: ""
            },
	    children:[
	    ]
	},
	{
            id: "32570731000036119",
            name: "Staging and scales",
            data: {
                relation: ""
            },
	    children:[
	    ]
	},
	{
            id: "32570731000036120",
            name: "Substance",
            data: {
                relation: ""
            },
	    children:[
	    ]
	}
	],
        data: {
            relation: "<h4>SNOMED CT Concept</h4><b>Connections:</b><ul><li>Administrative Value</li><li>Body Structure</li><li>Clinical Finding</li><li>Environment or Geographical Location</li><li>Event</li><li>Linkage Concept</li><li>Observable Entity</li><li>Organiam</li><li>Pharmaceutical / Biologic Product</li><li>Physical force</li><li>Physical Object</li><li>Procedure</li><li>Qualifier Value</li><li>Record Artefact</li><li>Situation with Explicit Context</li><li>Social Context</li><li>Special Concept</li><li>Specimen</li><li>Staging and Scales</li><li>Substance</li></ul>"
        }
    };
var testobj={ obj:
		{
        	    id: "2570731000036101",
        	    name: "",
        	    data: {
	       	         relation: ""
	       	 	},
	    	     children:[

		     ]
		},
            relation: "<h4></h4><b>Connections:</b><ul><li></li></ul>"
	};
    //end
    
    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
        //Optional: create a background canvas that plots
        //concentric circles.
        background: {
          CanvasStyles: {
            strokeStyle: '#555'
          }
        },
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: true,
          zooming: 10
        },
        //Set Node and Edge styles.
        Node: {
            color: '#ddeeff'
        },
        
        Edge: {
          color: '#C17878',
          lineWidth:1.5
        },

        onBeforeCompute: function(node){
            Log.write("centering " + node.name + "...");
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            $jit.id('inner-details').innerHTML = node.data.relation;
        },
        
        onAfterCompute: function(){
            Log.write("done");
        },
        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.onclick = function(){
                rgraph.onClick(node.id);
            };
        },
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';

            if (node._depth <= 1) {
                style.fontSize = "0.8em";
                style.color = "#ccc";
            
            } else if(node._depth == 2){
                style.fontSize = "0.7em";
                style.color = "#494949";
            
            } else {
                style.display = 'none';
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load JSON data
    rgraph.loadJSON(json);
    //trigger small animation
    rgraph.graph.eachNode(function(n) {
      var pos = n.getPos();
      pos.setc(-200, -200);
    });
    rgraph.compute('end');
    rgraph.fx.animate({
      modes:['polar'],
      duration: 2000
    });
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}
