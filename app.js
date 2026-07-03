const typeMeta = {
  cancer: { label: "cancer", color: "#24755b" },
  gene: { label: "gene", color: "#0f7b8b" },
  mutation: { label: "mutation", color: "#4169b1" },
  drug: { label: "therapy", color: "#b94c67" },
  trial: { label: "trial", color: "#aa6a1f" },
  paper: { label: "paper", color: "#6650a8" },
  pathway: { label: "pathway", color: "#6b7f36" },
  resistance: { label: "resistance", color: "#8f5d38" }
};

const nodes = [
  node("nsclc", "NSCLC", "cancer", "Non-small cell lung cancer is a major lung cancer category where molecular testing often guides therapy.", [
    source("Guideline", "NCI NSCLC treatment", "https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq")
  ]),
  node("ovarian", "Ovarian Cancer", "cancer", "Ovarian cancer treatment planning can depend on homologous recombination repair status and BRCA alterations.", [
    source("Guideline", "NCI ovarian cancer treatment", "https://www.cancer.gov/types/ovarian/hp/ovarian-epithelial-treatment-pdq")
  ]),
  node("melanoma", "Melanoma", "cancer", "Melanoma has multiple biomarker-driven treatment contexts, including BRAF V600 alterations and immunotherapy response research.", [
    source("Guideline", "NCI melanoma treatment", "https://www.cancer.gov/types/skin/hp/melanoma-treatment-pdq")
  ]),
  node("kras", "KRAS", "gene", "KRAS is an oncogene. Specific variants such as G12C can create targetable vulnerabilities.", [
    source("Dictionary", "NCI KRAS gene", "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/kras-gene")
  ]),
  node("kras-g12c", "KRAS G12C", "mutation", "KRAS G12C is a substitution that has become clinically relevant in several solid tumors, especially NSCLC.", [
    source("Regulatory", "FDA sotorasib approval", "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-sotorasib-kras-g12c-mutated-nsclc")
  ]),
  node("sotorasib", "Sotorasib", "drug", "Sotorasib is a KRAS G12C inhibitor studied in previously treated KRAS G12C-mutated NSCLC.", [
    source("Paper", "CodeBreaK 100 publication", "https://www.nejm.org/doi/full/10.1056/NEJMoa1917239")
  ]),
  node("adagrasib", "Adagrasib", "drug", "Adagrasib is a KRAS G12C inhibitor evaluated across KRAS G12C-positive tumors.", [
    source("Paper", "KRYSTAL-1 publication", "https://www.nejm.org/doi/full/10.1056/NEJMoa2204619")
  ]),
  trial("codebreak", "CodeBreaK 100", "Phase 2", "Completed", "NCT03600883", "KRAS G12C advanced solid tumors", "A study evaluating sotorasib in KRAS G12C-mutated advanced solid tumors.", [
    source("Trial", "ClinicalTrials.gov NCT03600883", "https://clinicaltrials.gov/study/NCT03600883")
  ]),
  trial("krystal1", "KRYSTAL-1", "Phase 1/2", "Active", "NCT03785249", "KRAS G12C solid tumors", "A study evaluating adagrasib in advanced solid tumors with KRAS G12C mutation.", [
    source("Trial", "ClinicalTrials.gov NCT03785249", "https://clinicaltrials.gov/study/NCT03785249")
  ]),
  node("egfr", "EGFR", "gene", "EGFR alterations can act as oncogenic drivers in NSCLC and are important for therapy selection.", [
    source("Dictionary", "NCI EGFR gene", "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/egfr-gene")
  ]),
  node("egfr-ex19", "EGFR Exon 19 Del", "mutation", "EGFR exon 19 deletions are sensitizing alterations associated with response to EGFR tyrosine kinase inhibitors.", [
    source("Paper", "FLAURA publication", "https://www.nejm.org/doi/full/10.1056/NEJMoa1713137")
  ]),
  node("egfr-t790m", "EGFR T790M", "resistance", "EGFR T790M is a resistance alteration historically associated with acquired resistance to earlier EGFR inhibitors.", [
    source("Search", "PubMed EGFR T790M", "https://pubmed.ncbi.nlm.nih.gov/?term=EGFR+T790M+NSCLC")
  ]),
  node("osimertinib", "Osimertinib", "drug", "Osimertinib is an EGFR inhibitor used for EGFR-mutated NSCLC in multiple treatment settings.", [
    source("Regulatory", "FDA osimertinib approval", "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-osimertinib-adjuvant-therapy-non-small-cell-lung-cancer-egfr-mutations")
  ]),
  trial("flaura", "FLAURA", "Phase 3", "Completed", "NCT02296125", "Untreated EGFR-mutated advanced NSCLC", "A phase 3 trial comparing osimertinib with standard EGFR inhibitors in untreated EGFR-mutated advanced NSCLC.", [
    source("Trial", "ClinicalTrials.gov NCT02296125", "https://clinicaltrials.gov/study/NCT02296125")
  ]),
  node("brca1", "BRCA1", "gene", "BRCA1 is involved in DNA repair. Pathogenic variants can influence inherited risk and therapy response.", [
    source("Fact sheet", "NCI BRCA gene changes", "https://www.cancer.gov/about-cancer/causes-prevention/genetics/brca-fact-sheet")
  ]),
  node("brca2", "BRCA2", "gene", "BRCA2 is a homologous recombination repair gene with implications for inherited risk and PARP inhibitor sensitivity.", [
    source("Fact sheet", "NCI BRCA gene changes", "https://www.cancer.gov/about-cancer/causes-prevention/genetics/brca-fact-sheet")
  ]),
  node("hrd", "HRD", "pathway", "Homologous recombination deficiency describes impaired DNA repair that may predict sensitivity to PARP inhibition.", [
    source("Dictionary", "NCI homologous recombination deficiency", "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/homologous-recombination-deficiency")
  ]),
  node("olaparib", "Olaparib", "drug", "Olaparib is a PARP inhibitor used in selected BRCA-mutated or HRD-associated cancer contexts.", [
    source("Paper", "SOLO1 publication", "https://www.nejm.org/doi/full/10.1056/NEJMoa1810858")
  ]),
  trial("solo1", "SOLO1", "Phase 3", "Completed", "NCT01844986", "BRCA-mutated advanced ovarian cancer", "A phase 3 trial studying maintenance olaparib after platinum-based chemotherapy in BRCA-mutated ovarian cancer.", [
    source("Trial", "ClinicalTrials.gov NCT01844986", "https://clinicaltrials.gov/study/NCT01844986")
  ]),
  node("alk", "ALK", "gene", "ALK rearrangements are actionable oncogenic drivers in a subset of NSCLC.", [
    source("Search", "PubMed ALK NSCLC", "https://pubmed.ncbi.nlm.nih.gov/?term=ALK+rearranged+NSCLC")
  ]),
  node("alk-fusion", "ALK Fusion", "mutation", "ALK fusions can identify tumors that may respond to ALK tyrosine kinase inhibitors.", [
    source("Search", "PubMed ALK fusion lung cancer", "https://pubmed.ncbi.nlm.nih.gov/?term=ALK+fusion+lung+cancer")
  ]),
  node("alectinib", "Alectinib", "drug", "Alectinib is an ALK inhibitor used in ALK-positive NSCLC contexts.", [
    source("Paper", "ALEX publication", "https://www.nejm.org/doi/full/10.1056/NEJMoa1704795")
  ]),
  node("alk-resistance", "ALK Resistance", "resistance", "ALK resistance can emerge through kinase-domain mutations, bypass signaling, or histologic transformation.", [
    source("Search", "PubMed ALK resistance", "https://pubmed.ncbi.nlm.nih.gov/?term=ALK+resistance+NSCLC")
  ]),
  trial("alex", "ALEX", "Phase 3", "Completed", "NCT02075840", "Treatment-naive ALK-positive NSCLC", "A phase 3 trial comparing alectinib and crizotinib in ALK-positive NSCLC.", [
    source("Trial", "ClinicalTrials.gov NCT02075840", "https://clinicaltrials.gov/study/NCT02075840")
  ]),
  node("braf", "BRAF", "gene", "BRAF alterations can activate MAPK signaling and guide targeted therapy in melanoma and other tumors.", [
    source("Dictionary", "NCI BRAF gene", "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/braf-gene")
  ]),
  node("braf-v600e", "BRAF V600E", "mutation", "BRAF V600E is an activating alteration with established targeted therapy contexts.", [
    source("Search", "PubMed BRAF V600E melanoma", "https://pubmed.ncbi.nlm.nih.gov/?term=BRAF+V600E+melanoma")
  ]),
  node("dabrafenib", "Dabrafenib", "drug", "Dabrafenib is a BRAF inhibitor frequently studied with MEK inhibition.", [
    source("Search", "PubMed dabrafenib trametinib", "https://pubmed.ncbi.nlm.nih.gov/?term=dabrafenib+trametinib")
  ]),
  node("mek-pathway", "MAPK Pathway", "pathway", "The MAPK pathway transmits growth signals and is commonly activated by BRAF and RAS alterations.", [
    source("Search", "PubMed MAPK pathway cancer", "https://pubmed.ncbi.nlm.nih.gov/?term=MAPK+pathway+cancer")
  ]),
  paper("paper-kras", "KRAS Review", "Review literature connecting KRAS G12C biology, acquired resistance, and combination therapy hypotheses.", [
    source("Search", "PubMed KRAS G12C search", "https://pubmed.ncbi.nlm.nih.gov/?term=KRAS+G12C+cancer")
  ]),
  paper("paper-egfr", "EGFR Resistance Review", "Review literature on EGFR-mutated NSCLC resistance and sequencing strategies.", [
    source("Search", "PubMed EGFR resistance review", "https://pubmed.ncbi.nlm.nih.gov/?term=EGFR+resistance+review+NSCLC")
  ]),
  paper("paper-parp", "PARP Sensitivity Review", "Review literature on homologous recombination deficiency, BRCA alterations, and PARP inhibitor response.", [
    source("Search", "PubMed PARP inhibitor HRD review", "https://pubmed.ncbi.nlm.nih.gov/?term=PARP+inhibitor+HRD+review")
  ])
];

const edges = [
  edge("nsclc", "kras-g12c", "has biomarker", 90, "guideline", "Molecular testing can identify KRAS G12C in NSCLC."),
  edge("kras", "kras-g12c", "contains variant", 96, "biology", "G12C is a specific KRAS amino acid substitution."),
  edge("kras-g12c", "sotorasib", "targeted by", 88, "regulatory", "Sotorasib targets KRAS G12C-positive disease contexts."),
  edge("kras-g12c", "adagrasib", "targeted by", 84, "trial", "Adagrasib targets KRAS G12C-positive disease contexts."),
  edge("sotorasib", "codebreak", "studied in", 86, "trial", "CodeBreaK 100 evaluated sotorasib in advanced solid tumors."),
  edge("adagrasib", "krystal1", "studied in", 82, "trial", "KRYSTAL-1 evaluated adagrasib in KRAS G12C-positive tumors."),
  edge("kras-g12c", "paper-kras", "discussed in", 71, "paper", "Review articles summarize KRAS G12C mechanisms and resistance patterns."),
  edge("nsclc", "egfr-ex19", "has biomarker", 93, "guideline", "EGFR exon 19 deletions can guide EGFR inhibitor selection."),
  edge("egfr", "egfr-ex19", "contains variant", 96, "biology", "Exon 19 deletion is a known EGFR activating alteration."),
  edge("egfr-ex19", "osimertinib", "targeted by", 91, "regulatory", "Osimertinib is used for EGFR-mutated NSCLC."),
  edge("egfr-t790m", "osimertinib", "resistance addressed by", 82, "trial", "Osimertinib was developed in contexts including EGFR T790M resistance."),
  edge("osimertinib", "flaura", "studied in", 90, "trial", "FLAURA studied first-line osimertinib in EGFR-mutated advanced NSCLC."),
  edge("egfr-ex19", "paper-egfr", "resistance reviewed in", 74, "paper", "Review articles discuss acquired resistance and treatment sequencing."),
  edge("ovarian", "brca1", "associated with", 86, "guideline", "BRCA status can affect inherited risk and therapeutic planning."),
  edge("ovarian", "brca2", "associated with", 84, "guideline", "BRCA2 status can affect inherited risk and therapeutic planning."),
  edge("brca1", "hrd", "impairs", 88, "biology", "BRCA1 loss can contribute to homologous recombination repair deficiency."),
  edge("brca2", "hrd", "impairs", 88, "biology", "BRCA2 loss can contribute to homologous recombination repair deficiency."),
  edge("hrd", "olaparib", "sensitivity marker", 83, "trial", "HRD contexts can be sensitive to PARP inhibition."),
  edge("olaparib", "solo1", "studied in", 89, "trial", "SOLO1 evaluated maintenance olaparib in BRCA-mutated ovarian cancer."),
  edge("hrd", "paper-parp", "reviewed in", 72, "paper", "Review literature connects DNA repair defects and PARP inhibitor response."),
  edge("nsclc", "alk-fusion", "has biomarker", 88, "guideline", "ALK fusions identify a targetable NSCLC subgroup."),
  edge("alk", "alk-fusion", "forms fusion", 93, "biology", "ALK rearrangements can create oncogenic fusion drivers."),
  edge("alk-fusion", "alectinib", "targeted by", 89, "trial", "Alectinib is used in ALK-positive NSCLC contexts."),
  edge("alectinib", "alex", "studied in", 87, "trial", "ALEX compared alectinib with crizotinib in ALK-positive NSCLC."),
  edge("alk-fusion", "alk-resistance", "may develop", 66, "paper", "Resistance can emerge after ALK inhibitor exposure."),
  edge("melanoma", "braf-v600e", "has biomarker", 91, "guideline", "BRAF V600E is a key melanoma biomarker."),
  edge("braf", "braf-v600e", "contains variant", 96, "biology", "V600E is a specific activating BRAF alteration."),
  edge("braf-v600e", "dabrafenib", "targeted by", 86, "regulatory", "BRAF inhibitors are used in BRAF V600 altered contexts."),
  edge("braf-v600e", "mek-pathway", "activates", 85, "biology", "BRAF V600E activates MAPK signaling."),
  edge("kras-g12c", "mek-pathway", "signals through", 75, "biology", "KRAS signaling can converge on MAPK pathway activation.")
].map((item, index) => ({ ...item, id: `e${index}` }));

const state = {
  query: "KRAS G12C",
  depth: 2,
  minConfidence: 60,
  activeTypes: new Set(Object.keys(typeMeta)),
  selected: null,
  selectedKind: null,
  sortEvidence: "score",
  recruitingFirst: true
};

const byId = new Map(nodes.map((item) => [item.id, item]));
const graphEl = document.querySelector("#graph");
const searchInput = document.querySelector("#searchInput");
const typeFilters = document.querySelector("#typeFilters");
const detailCard = document.querySelector("#detailCard");
const questionsList = document.querySelector("#questionsList");
const resultSummary = document.querySelector("#resultSummary");
const evidenceMatrix = document.querySelector("#evidenceMatrix");
const trialList = document.querySelector("#trialList");

function node(id, label, type, summary, evidence, extra = {}) {
  return { id, label, type, summary, evidence, aliases: [], ...extra };
}

function trial(id, label, phase, status, nct, population, summary, evidence) {
  return node(id, label, "trial", summary, evidence, { phase, status, nct, population, aliases: [nct, phase, status, population] });
}

function paper(id, label, summary, evidence) {
  return node(id, label, "paper", summary, evidence, { aliases: ["publication", "review", "literature"] });
}

function source(kind, label, url) {
  return { kind, label, url };
}

function edge(source, target, label, confidence, evidenceType, summary) {
  return { source, target, label, confidence, evidenceType, summary };
}

function searchable(nodeItem) {
  return [nodeItem.label, nodeItem.type, nodeItem.summary, ...(nodeItem.aliases || []), ...nodeItem.evidence.map((item) => item.label)]
    .join(" ")
    .toLowerCase();
}

function matchScore(nodeItem, query) {
  if (!query) return 1;
  const terms = query.split(/\s+/).filter(Boolean);
  const haystack = searchable(nodeItem);
  const label = nodeItem.label.toLowerCase();
  let score = 0;
  terms.forEach((term) => {
    if (label.includes(term)) score += 3;
    else if (haystack.includes(term)) score += 1;
  });
  return score;
}

function relatedIds(seedIds, depth) {
  const seen = new Set(seedIds);
  let frontier = [...seedIds];
  for (let step = 0; step < depth; step += 1) {
    const next = [];
    edges.forEach((item) => {
      if (item.confidence < state.minConfidence) return;
      if (frontier.includes(item.source) && !seen.has(item.target)) next.push(item.target);
      if (frontier.includes(item.target) && !seen.has(item.source)) next.push(item.source);
    });
    next.forEach((id) => seen.add(id));
    frontier = next;
  }
  return seen;
}

function currentGraph() {
  const query = state.query.trim().toLowerCase();
  const scored = nodes
    .map((item) => ({ item, score: matchScore(item, query) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);
  const seedIds = scored.length ? scored.slice(0, 6).map((entry) => entry.item.id) : ["nsclc", "kras-g12c", "sotorasib"];
  const ids = relatedIds(seedIds, state.depth);
  const visibleNodes = nodes.filter((item) => ids.has(item.id) && state.activeTypes.has(item.type));
  const visibleIds = new Set(visibleNodes.map((item) => item.id));
  const visibleEdges = edges.filter(
    (item) => item.confidence >= state.minConfidence && visibleIds.has(item.source) && visibleIds.has(item.target)
  );
  return { visibleNodes, visibleEdges, matched: scored.map((entry) => entry.item) };
}

function renderFilters() {
  typeFilters.innerHTML = "";
  Object.entries(typeMeta).forEach(([type, meta]) => {
    const count = nodes.filter((item) => item.type === type).length;
    const button = document.createElement("button");
    button.className = `type-toggle ${state.activeTypes.has(type) ? "" : "off"}`;
    button.innerHTML = `<span class="dot" style="background:${meta.color}"></span><span>${meta.label}</span><small>${count}</small>`;
    button.addEventListener("click", () => {
      if (state.activeTypes.has(type)) state.activeTypes.delete(type);
      else state.activeTypes.add(type);
      render();
    });
    typeFilters.append(button);
  });
}

function layout(nodesForGraph, visibleEdges, width, height) {
  const degree = new Map(nodesForGraph.map((item) => [item.id, 0]));
  visibleEdges.forEach((item) => {
    degree.set(item.source, (degree.get(item.source) || 0) + 1);
    degree.set(item.target, (degree.get(item.target) || 0) + 1);
  });
  const centerX = width / 2;
  const centerY = height / 2 + 18;
  const radius = Math.max(150, Math.min(width, height) * 0.34);
  return nodesForGraph.map((item, index) => {
    const angle = -Math.PI / 2 + (index / Math.max(nodesForGraph.length, 1)) * Math.PI * 2;
    const centrality = Math.min(degree.get(item.id) || 0, 5);
    const typePull = item.type === "cancer" || item.type === "mutation" ? 0.58 : 1;
    const distance = radius * typePull + (index % 4) * 18 - centrality * 12;
    return { ...item, degree: degree.get(item.id) || 0, x: centerX + Math.cos(angle) * distance, y: centerY + Math.sin(angle) * distance };
  });
}

function renderGraph(visibleNodes, visibleEdges) {
  const rect = graphEl.getBoundingClientRect();
  const width = Math.max(rect.width, 640);
  const height = Math.max(rect.height, 540);
  graphEl.setAttribute("viewBox", `0 0 ${width} ${height}`);
  graphEl.innerHTML = "";

  const placed = layout(visibleNodes, visibleEdges, width, height);
  const pos = new Map(placed.map((item) => [item.id, item]));
  const selectedNodeId = state.selectedKind === "node" ? state.selected : null;
  const selectedEdge = state.selectedKind === "edge" ? state.selected : null;
  const edgeLayer = svg("g");
  const nodeLayer = svg("g");
  graphEl.append(edgeLayer, nodeLayer);

  visibleEdges.forEach((item) => {
    const sourceNode = pos.get(item.source);
    const targetNode = pos.get(item.target);
    if (!sourceNode || !targetNode) return;
    const isSelected = selectedEdge === item.id;
    const isDim = selectedNodeId && item.source !== selectedNodeId && item.target !== selectedNodeId;
    const line = svg("line", {
      x1: sourceNode.x,
      y1: sourceNode.y,
      x2: targetNode.x,
      y2: targetNode.y,
      class: `edge-line ${isSelected ? "selected" : ""} ${isDim ? "dim" : ""}`,
      "stroke-width": 1 + item.confidence / 34
    });
    line.addEventListener("click", () => selectEdge(item.id));
    edgeLayer.append(line);

    const label = svg("text", {
      x: (sourceNode.x + targetNode.x) / 2,
      y: (sourceNode.y + targetNode.y) / 2 - 7,
      class: `edge-label ${isDim ? "dim" : ""}`
    });
    label.textContent = `${item.label} ${item.confidence}%`;
    label.addEventListener("click", () => selectEdge(item.id));
    edgeLayer.append(label);
  });

  placed.forEach((item) => {
    const connectedToSelection =
      selectedNodeId &&
      (item.id === selectedNodeId ||
        visibleEdges.some(
          (edgeItem) =>
            (edgeItem.source === selectedNodeId && edgeItem.target === item.id) ||
            (edgeItem.target === selectedNodeId && edgeItem.source === item.id)
        ));
    const group = svg("g", {
      class: `node ${selectedNodeId === item.id ? "selected" : ""} ${selectedNodeId && !connectedToSelection ? "dim" : ""}`,
      transform: `translate(${item.x}, ${item.y})`
    });
    group.addEventListener("click", () => selectNode(item.id));

    const radius = Math.min(48, 30 + item.degree * 3 + (item.type === "cancer" ? 8 : 0));
    group.append(svg("circle", { r: radius, fill: typeMeta[item.type].color }));
    const label = svg("text", { y: radius + 17 });
    label.textContent = item.label;
    group.append(label);
    nodeLayer.append(group);
  });
}

function svg(tag, attrs = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function selectNode(id) {
  state.selected = id;
  state.selectedKind = "node";
  render();
}

function selectEdge(id) {
  state.selected = id;
  state.selectedKind = "edge";
  render();
}

function sourceList(items) {
  return items
    .map((item) => `<li><a href="${item.url}" target="_blank" rel="noreferrer"><strong>${item.kind}</strong> ${item.label}<small>${item.url}</small></a></li>`)
    .join("");
}

function renderDetail() {
  if (!state.selected) {
    detailCard.innerHTML = `<div class="empty-state"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v18M5 8h14M5 16h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><h2>select a node or relationship</h2><p>onco will show why it matters, how strong the evidence is, and what to inspect next.</p></div>`;
    return;
  }

  if (state.selectedKind === "edge") {
    const item = edges.find((edgeItem) => edgeItem.id === state.selected);
    const sourceNode = byId.get(item.source);
    const targetNode = byId.get(item.target);
    detailCard.innerHTML = `
      <div class="detail-head">
        <h2>${sourceNode.label} -> ${targetNode.label}</h2>
        <span class="pill">${item.confidence}% ${item.evidenceType}</span>
      </div>
      <p>${item.summary}</p>
      <div class="score-bar"><span style="width:${item.confidence}%"></span></div>
      <h3>Why this link matters</h3>
      <p>${explainEdge(item, sourceNode, targetNode)}</p>
      <h3>Evidence path</h3>
      <ul class="evidence-list">${sourceList([...sourceNode.evidence, ...targetNode.evidence].slice(0, 4))}</ul>
    `;
    return;
  }

  const item = byId.get(state.selected);
  const relations = edges.filter((edgeItem) => edgeItem.source === item.id || edgeItem.target === item.id);
  const avg = relations.length ? Math.round(relations.reduce((sum, edgeItem) => sum + edgeItem.confidence, 0) / relations.length) : 0;
  detailCard.innerHTML = `
    <div class="detail-head">
      <h2>${item.label}</h2>
      <span class="pill">${typeMeta[item.type].label}</span>
    </div>
    <p>${item.summary}</p>
    <div class="mini-metrics">
      <div><strong>${relations.length}</strong><span>links</span></div>
      <div><strong>${avg}%</strong><span>avg score</span></div>
      <div><strong>${item.evidence.length}</strong><span>sources</span></div>
    </div>
    ${item.type === "trial" ? `<h3>trial metadata</h3><p><strong>${item.phase}</strong> · ${item.status} · ${item.nct}<br>${item.population}</p>` : ""}
    <h3>Connected evidence</h3>
    <ul class="relation-list">
      ${relations
        .sort((a, b) => b.confidence - a.confidence)
        .map((edgeItem) => {
          const other = byId.get(edgeItem.source === item.id ? edgeItem.target : edgeItem.source);
          return `<li><button data-edge="${edgeItem.id}"><strong>${edgeItem.label}</strong> ${other.label}<small>${edgeItem.confidence}% · ${edgeItem.summary}</small></button></li>`;
        })
        .join("")}
    </ul>
    <h3>Sources</h3>
    <ul class="evidence-list">${sourceList(item.evidence)}</ul>
  `;
  detailCard.querySelectorAll("[data-edge]").forEach((button) => button.addEventListener("click", () => selectEdge(button.dataset.edge)));
}

function explainEdge(item, sourceNode, targetNode) {
  const language = {
    regulatory: "This relationship has regulatory or label-level support in the demo dataset.",
    guideline: "This relationship is treated as high-signal because it maps a cancer context to a biomarker used in care planning.",
    trial: "This relationship is supported by a clinical study connection, so eligibility criteria and endpoints matter.",
    biology: "This is a mechanistic biology link that helps explain why downstream therapies or resistance routes may exist.",
    paper: "This link is literature-supported and should be read as hypothesis or synthesis until tied to stronger evidence."
  };
  return `${sourceNode.label} connects to ${targetNode.label} via "${item.label}". ${language[item.evidenceType]}`;
}

function renderQuestions(visibleNodes, visibleEdges) {
  const selectedNode = state.selectedKind === "node" ? byId.get(state.selected) : null;
  const base = selectedNode?.label || state.query || "this result";
  const strongest = [...visibleEdges].sort((a, b) => b.confidence - a.confidence)[0];
  const weak = visibleEdges.filter((item) => item.confidence < 75).length;
  const hasResistance = visibleNodes.some((item) => item.type === "resistance");
  const questions = [
    `Which validated test would confirm whether ${base} is clinically relevant?`,
    strongest ? `The strongest visible link is ${byId.get(strongest.source).label} -> ${byId.get(strongest.target).label}; what source type supports it?` : `What evidence source should be attached to ${base}?`,
    hasResistance ? `If resistance is present, which mechanism is primary: target mutation, bypass signaling, or transformation?` : `What resistance mechanisms should be checked before interpreting ${base}?`,
    weak ? `${weak} visible links are below 75%; which ones need stronger trial, guideline, or regulatory evidence?` : `Are there active trials that use ${base} as an enrollment criterion?`
  ];
  questionsList.innerHTML = questions.map((question) => `<li>${question}</li>`).join("");
}

function renderEvidenceMatrix(visibleEdges) {
  const rows = [...visibleEdges].sort((a, b) => (state.sortEvidence === "score" ? b.confidence - a.confidence : a.evidenceType.localeCompare(b.evidenceType)));
  evidenceMatrix.innerHTML = rows
    .map((item) => {
      const sourceNode = byId.get(item.source);
      const targetNode = byId.get(item.target);
      return `<button class="matrix-row" data-edge="${item.id}">
        <span><strong>${sourceNode.label}</strong><small>${typeMeta[sourceNode.type].label}</small></span>
        <span>${item.label}</span>
        <span><strong>${targetNode.label}</strong><small>${typeMeta[targetNode.type].label}</small></span>
        <span class="score-cell"><i style="width:${item.confidence}%"></i>${item.confidence}%</span>
        <span class="evidence-chip">${item.evidenceType}</span>
      </button>`;
    })
    .join("");
  evidenceMatrix.querySelectorAll("[data-edge]").forEach((button) => button.addEventListener("click", () => selectEdge(button.dataset.edge)));
}

function renderTrials(visibleNodes) {
  let trials = visibleNodes.filter((item) => item.type === "trial");
  if (state.recruitingFirst) {
    trials = [...trials].sort((a, b) => Number(b.status === "Active") - Number(a.status === "Active"));
  }
  trialList.innerHTML = trials.length
    ? trials
        .map(
          (item) => `<button class="trial-row" data-node="${item.id}">
            <span><strong>${item.label}</strong><small>${item.nct}</small></span>
            <span>${item.phase}</span>
            <span class="${item.status === "Active" ? "status active" : "status"}">${item.status}</span>
            <span>${item.population}</span>
          </button>`
        )
        .join("")
    : `<div class="table-empty">no trials are visible with the current filters.</div>`;
  trialList.querySelectorAll("[data-node]").forEach((button) => button.addEventListener("click", () => selectNode(button.dataset.node)));
}

function renderStats(visibleNodes, visibleEdges) {
  document.querySelector("#nodeCount").textContent = visibleNodes.length;
  document.querySelector("#edgeCount").textContent = visibleEdges.length;
  const sources = new Set(visibleNodes.flatMap((item) => item.evidence.map((sourceItem) => sourceItem.url)));
  document.querySelector("#sourceCount").textContent = sources.size;
  document.querySelector("#trialCount").textContent = visibleNodes.filter((item) => item.type === "trial").length;
  document.querySelector("#paperCount").textContent = visibleNodes.filter((item) => item.type === "paper").length;
  const scores = visibleEdges.map((item) => item.confidence).sort((a, b) => a - b);
  const median = scores.length ? scores[Math.floor(scores.length / 2)] : 0;
  document.querySelector("#medianConfidence").textContent = `${median}%`;
  resultSummary.textContent = `${visibleNodes.length} nodes, ${visibleEdges.length} relationships, threshold ${state.minConfidence}%`;
}

function render() {
  searchInput.value = state.query;
  document.querySelector("#depthValue").textContent = state.depth;
  document.querySelector("#confidenceValue").textContent = `${state.minConfidence}%`;
  const { visibleNodes, visibleEdges } = currentGraph();
  renderFilters();
  renderGraph(visibleNodes, visibleEdges);
  renderDetail();
  renderQuestions(visibleNodes, visibleEdges);
  renderEvidenceMatrix(visibleEdges);
  renderTrials(visibleNodes);
  renderStats(visibleNodes, visibleEdges);
}

function downloadSelection() {
  const selected =
    state.selectedKind === "node"
      ? byId.get(state.selected)
      : edges.find((item) => item.id === state.selected) || { label: "onco graph", summary: "no selection" };
  const payload = {
    exportedAt: new Date().toISOString(),
    query: state.query,
    filters: {
      depth: state.depth,
      minConfidence: state.minConfidence,
      activeTypes: [...state.activeTypes]
    },
    selection: selected
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "onco-selection.json";
  link.click();
  URL.revokeObjectURL(url);
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.selected = null;
  state.selectedKind = null;
  document.querySelectorAll(".preset").forEach((button) => button.classList.toggle("active", button.dataset.query === state.query));
  render();
});

document.querySelector("#depthSlider").addEventListener("input", (event) => {
  state.depth = Number(event.target.value);
  render();
});

document.querySelector("#confidenceSlider").addEventListener("input", (event) => {
  state.minConfidence = Number(event.target.value);
  render();
});

document.querySelector("#allTypesButton").addEventListener("click", () => {
  state.activeTypes = new Set(Object.keys(typeMeta));
  render();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  state.query = "KRAS G12C";
  state.depth = 2;
  state.minConfidence = 60;
  state.activeTypes = new Set(Object.keys(typeMeta));
  state.selected = null;
  state.selectedKind = null;
  document.querySelector("#depthSlider").value = "2";
  document.querySelector("#confidenceSlider").value = "60";
  document.querySelectorAll(".preset").forEach((button) => button.classList.toggle("active", button.dataset.query === state.query));
  render();
});

document.querySelector("#exportButton").addEventListener("click", downloadSelection);
document.querySelector("#sortEvidenceButton").addEventListener("click", () => {
  state.sortEvidence = state.sortEvidence === "score" ? "type" : "score";
  document.querySelector("#sortEvidenceButton").textContent = state.sortEvidence === "score" ? "sort by score" : "sort by type";
  render();
});
document.querySelector("#trialModeButton").addEventListener("click", () => {
  state.recruitingFirst = !state.recruitingFirst;
  document.querySelector("#trialModeButton").textContent = state.recruitingFirst ? "recruiting first" : "graph order";
  render();
});

document.querySelectorAll(".preset").forEach((button) => {
  button.addEventListener("click", () => {
    state.query = button.dataset.query;
    state.selected = null;
    state.selectedKind = null;
    document.querySelectorAll(".preset").forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

window.addEventListener("resize", render);
render();
