# onco
source-backed cancer research, shown as a graph.
onco is a static web prototype for exploring relationships between cancer types, biomarkers, drugs, trials, papers, pathways, and resistance mechanisms. it is built to feel like a small research cockpit: searchable, visual, evidence-aware, and easy to publish.
what it does
searches oncology entities like kras g12c, egfr exon 19, brca ovarian, and alk resistance
renders an interactive knowledge graph
filters by entity type
adjusts graph relationship depth
applies an evidence confidence threshold
scores relationships by evidence strength
shows source-backed node and relationship details
includes trial metadata: phase, status, nct id, and population
includes resistance, pathway, paper, and therapy nodes
provides an evidence matrix for inspecting relationship quality
exports the current selection as json
why it matters
oncology research is full of scattered connections: a mutation links to a drug, the drug links to a trial, the trial links to eligibility criteria, and the paper links to resistance hypotheses.
onco turns those scattered pieces into a visible map.
current version
this version uses curated demo data. it does not call live medical APIs yet.
next milestones:
clinicaltrials.gov ingestion
pubmed ingestion
biomedical entity extraction
graph database storage with neo4j or postgres edge tables
citation-first ai summaries
trial filters by country, phase, biomarker, and recruitment status
evidence freshness checks
medical note
onco is a research and education aid. it is not medical advice, diagnosis, or treatment guidance. clinical decisions should be discussed with a qualified clinician.
run locally
from this folder:
python3 -m http.server 4173
then open:
http://127.0.0.1:4173
deploy
this is a static site. it can be deployed directly on vercel, netlify, github pages, or any static host.
