var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/AncientLocation",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Ancient Location (fsl:AncientLocation)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/AncientRegion",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Ancient Region (fsl:AncientRegion)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/ArchaeologicalSite_suniv0_",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Archaeological Site (fsl:ArchaeologicalSite)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Bight",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Bight (fsl:Bight)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Cave",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Cave (fsl:Cave)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/InhabitedPlace",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "inhabited Place (fsl:InhabitedPlace)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Island",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Island (fsl:Island)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Lake",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Lake (fsl:Lake)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/ModernRegion",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Modern Region (fsl:ModernRegion)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Mountain",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Mountain (fsl:Mountain)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Plateau",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Plateau (fsl:Plateau)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/RegionCentre",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Region Centre (fsl:RegionCentre)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/RepresentativePoint",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Representative Point (fsl:RepresentativePoint)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/River",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "River (fsl:River)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Sink",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Sink (fsl:Sink)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Supervolcano",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Supervolcano (fsl:Supervolcano)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/UnknownCategory",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "type": "instance",
        "text": "Unknown Category (fsl:UnknownCategory)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/SpatialType",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Type",
        "type": "class",
        "text": "SpatialType (fsl:SpatialType) [17]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Type",
        "parent": "#",
        "type": "class",
        "text": "Type (fsl:Type)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 2,
              "http://fuzzy-sl.squirrel.link/ontology/SiteType": 2,
              "http://fuzzy-sl.squirrel.link/ontology/SpatialType": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/ArchaeologicalSite_suniv1_",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SiteType",
        "type": "instance",
        "text": "Archaeological Site (fsl:ArchaeologicalSite)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/GeologicalSite",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SiteType",
        "type": "instance",
        "text": "Geological Site (fsl:GeologicalSite)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/SiteType",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Type",
        "type": "class",
        "text": "SiteType (fsl:SiteType) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Book",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SourceType",
        "type": "instance",
        "text": "Book (fsl:Book)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Image",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SourceType",
        "type": "instance",
        "text": "Image (fsl:Image)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Paper",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SourceType",
        "type": "instance",
        "text": "Scientific Paper (fsl:Paper)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/URI",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SourceType",
        "type": "instance",
        "text": "URI (fsl:URI)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Website",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/SourceType",
        "type": "instance",
        "text": "Website (fsl:Website)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/SourceType",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Type",
        "type": "class",
        "text": "SourceType (fsl:SourceType) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/CampanianIgnimbriteProject",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Project",
        "type": "instance",
        "text": "Campanian Ignimbrite (fsl:CampanianIgnimbriteProject)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/CrotonProject",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Project",
        "type": "instance",
        "text": "Silver Coinage of Croton (fsl:CrotonProject)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Project",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "class",
        "text": "Project (fsl:Project) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/nonns_Activity.html",
        "parent": "#",
        "type": "class",
        "text": "Activity (prov:Activity)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 2,
              "http://fuzzy-sl.squirrel.link/ontology/Project": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Coinhoards",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Source",
        "type": "instance",
        "text": "Coinhoards (fsl:Coinhoards)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/PaperDesc",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Source",
        "type": "instance",
        "text": "Description in Paper (fsl:PaperDesc)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Pleiades",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Source",
        "type": "instance",
        "text": "Pleiades (fsl:Pleiades)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/WikimediaCommons",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Source",
        "type": "instance",
        "text": "Wikimedia Commons (fsl:WikimediaCommons)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/iDAIgazetteer",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Source",
        "type": "instance",
        "text": "iDAI.gazetter (fsl:iDAIgazetteer)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Source",
        "parent": "#",
        "type": "class",
        "text": "Source (fsl:Source) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/ExternalRepository",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/MethodType",
        "type": "instance",
        "text": "External Repository (fsl:ExternalRepository)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Georeferencing",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/MethodType",
        "type": "instance",
        "text": "Georeferencing (fsl:Georeferencing)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/OSM",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/MethodType",
        "type": "instance",
        "text": "OSM (fsl:OSM)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/MethodType",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Type",
        "type": "class",
        "text": "MethodType (fsl:MethodType) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/high",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/CertaintyType",
        "type": "instance",
        "text": "high (fsl:high)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/low",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/CertaintyType",
        "type": "instance",
        "text": "low (fsl:low)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/medium",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/CertaintyType",
        "type": "instance",
        "text": "medium (fsl:medium)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/uncertain",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/CertaintyType",
        "type": "instance",
        "text": "uncertain (fsl:uncertain)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/CertaintyType",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Type",
        "type": "class",
        "text": "CertaintyType (fsl:CertaintyType) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Location",
        "parent": "http://www.w3.org/ns/prov#Location",
        "type": "class",
        "text": "Location (fsl:Location)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/nonns_Location.html",
        "parent": "#",
        "type": "class",
        "text": "Location (prov:Location)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Place",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Place (fsl:Place)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/nonns_SpatialObject.html",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "class",
        "text": "Spatial Object (gsp:SpatialObject)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#domain": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 8,
              "http://www.w3.org/2002/07/owl#DatatypeProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/Site",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Location",
        "type": "class",
        "text": "Site (fsl:Site)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Feature",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Feature (gsp:Feature)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Geometry",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Geometry (gsp:Geometry)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Concept",
        "parent": "#",
        "type": "class",
        "text": "Concept (skos:Concept)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#MultiLineString",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "MultiLineString (sf:MultiLineString)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#MultiPoint",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "MultiPoint (sf:MultiPoint)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#MultiPolygon",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "MultiPolygon (sf:MultiPolygon)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/ontology/nonns_Person.html",
        "parent": "http://www.w3.org/ns/prov#Person",
        "type": "class",
        "text": "Person (foaf:Person)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Person",
        "parent": "#",
        "type": "class",
        "text": "Person (prov:Person)",
        "data": {}
      },
      {
        "id": "https://pleiades.stoa.org/places/vocab#Location",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "class",
        "text": "Location",
        "data": {}
      },
      {
        "id": "https://pleiades.stoa.org/places/vocab#Place",
        "parent": "http://fuzzy-sl.squirrel.link/ontology/Place",
        "type": "class",
        "text": "Place",
        "data": {}
      }
    ]
  }
}