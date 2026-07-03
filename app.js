const palette = {
  cancer: "#2d7a54",
  gene: "#047b86",
  mutation: "#0066cc",
  therapy: "#b94e66",
  trial: "#b36a1f",
  paper: "#6557b8",
  resistance: "#8a6047",
  pathway: "#697d3b"
};

const nodes = [
  n("nsclc", "NSCLC", "cancer", 2010, 93, "A disease context where molecular testing reorganized treatment decisions.", ["NCI NSCLC treatment"]),
  n("kras", "KRAS", "gene", 2010, 90, "A driver oncogene whose targetability changed the KRAS research landscape.", ["NCI KRAS dictionary"]),
  n("g12c", "KRAS G12C", "mutation", 2013, 88, "A substitution that became a central target in solid tumor drug discovery.", ["FDA sotorasib label"]),
  n("sotorasib", "Sotorasib", "therapy", 2021, 86, "A KRAS G12C inhibitor supported by clinical evidence in previously treated NSCLC.", ["CodeBreaK 100"]),
  n("codebreak", "CodeBreaK 100", "trial", 2020, 84, "A clinical trajectory connecting KRAS G12C inhibition to patient outcomes.", ["NCT03600883"]),
  n("resistance", "KRAS resistance", "resistance", 2022, 62, "Emerging resistance mechanisms after KRAS G12C inhibitor exposure.", ["PubMed resistance cluster"]),
  n("shp2", "SHP2 combos", "therapy", 2023, 58, "Combination hypotheses exploring upstream pathway suppression.", ["preclinical and early phase reports"]),
  n("egfr", "EGFR", "gene", 2010, 96, "A canonical NSCLC driver with therapy-defining alterations.", ["NCI EGFR dictionary"]),
  n("ex19", "EGFR exon 19 del", "mutation", 2010, 95, "A sensitizing alteration for EGFR tyrosine kinase inhibitors.", ["FLAURA"]),
  n("osimertinib", "Osimertinib", "therapy", 2017, 92, "An EGFR inhibitor whose evidence base shifted first-line treatment.", ["FLAURA", "FDA label"]),
  n("t790m", "EGFR T790M", "resistance", 2015, 83, "A resistance alteration that shaped EGFR inhibitor sequencing.", ["AURA studies"]),
  n("alk", "ALK fusion", "mutation", 2011, 89, "An actionable fusion driver in a subset of NSCLC.", ["ALK NSCLC literature"]),
  n("alectinib", "Alectinib", "therapy", 2017, 86, "An ALK inhibitor supported by comparative clinical evidence.", ["ALEX"]),
  n("alkres", "ALK resistance", "resistance", 2019, 65, "A family of kinase-domain and bypass mechanisms after ALK inhibition.", ["ALK resistance reviews"]),
  n("brca", "BRCA1/2", "gene", 2010, 91, "DNA repair genes connecting inherited risk, HRD, and PARP inhibitor response.", ["NCI BRCA fact sheet"]),
  n("hrd", "HRD", "pathway", 2014, 82, "Homologous recombination deficiency as a repair-state concept.", ["HRD definitions"]),
  n("olaparib", "Olaparib", "therapy", 2018, 88, "A PARP inhibitor supported in BRCA-mutated ovarian cancer maintenance contexts.", ["SOLO1"]),
  n("solo1", "SOLO1", "trial", 2018, 87, "A trial trajectory connecting BRCA mutation, maintenance therapy, and outcome benefit.", ["NCT01844986"]),
  n("parpconflict", "HRD assay debate", "paper", 2021, 47, "Conflicting interpretations around HRD assays, thresholds, and transferability.", ["review cluster", "negative studies"]),
  n("braf", "BRAF V600E", "mutation", 2011, 88, "A MAPK-activating alteration with strong melanoma therapy history.", ["BRAF melanoma literature"]),
  n("mapk", "MAPK pathway", "pathway", 2010, 80, "A signaling pathway connecting RAS, RAF, MEK, and resistance logic.", ["MAPK reviews"]),
  n("dabrafenib", "BRAF/MEK therapy", "therapy", 2013, 84, "Targeted therapy logic combining BRAF and MEK inhibition.", ["dabrafenib trametinib studies"]),
  n("pd1", "PD-1 blockade", "therapy", 2014, 81, "Immunotherapy evidence forming a separate but intersecting treatment universe.", ["checkpoint inhibitor trials"])
];

const edges = [
  e("nsclc", "g12c", "clinical", 88, "biomarker link", 2016, "KRAS G12C testing creates an actionable clinical path."),
  e("kras", "g12c", "causal", 94, "variant logic", 2013, "G12C is a specific KRAS alteration."),
  e("g12c", "sotorasib", "clinical", 86, "targeted therapy", 2021, "Clinical evidence supports KRAS G12C inhibition."),
  e("sotorasib", "codebreak", "clinical", 84, "trial support", 2020, "CodeBreaK 100 supplies the trial trajectory."),
  e("sotorasib", "resistance", "conflict", 56, "emerging uncertainty", 2022, "Resistance evidence is active, heterogeneous, and still settling."),
  e("resistance", "shp2", "preclinical", 52, "combination hypothesis", 2023, "Combination strategies are plausible but not settled."),
  e("nsclc", "ex19", "clinical", 94, "biomarker link", 2010, "EGFR exon 19 deletion defines a strong treatment path."),
  e("egfr", "ex19", "causal", 96, "driver alteration", 2010, "Exon 19 deletion activates EGFR signaling."),
  e("ex19", "osimertinib", "clinical", 92, "therapy evidence", 2017, "Osimertinib evidence reshaped first-line EGFR-mutated NSCLC."),
  e("t790m", "osimertinib", "clinical", 84, "resistance addressed", 2015, "T790M historically anchored osimertinib sequencing."),
  e("osimertinib", "t790m", "conflict", 61, "sequencing debate", 2020, "Resistance after later-generation inhibitors is more diverse."),
  e("nsclc", "alk", "clinical", 86, "fusion biomarker", 2011, "ALK fusions define a targetable NSCLC subgroup."),
  e("alk", "alectinib", "clinical", 87, "therapy evidence", 2017, "Alectinib is supported by comparative clinical evidence."),
  e("alectinib", "alkres", "conflict", 59, "resistance uncertainty", 2019, "Resistance routes vary across patients and inhibitor generations."),
  e("brca", "hrd", "causal", 86, "repair state", 2014, "BRCA loss can contribute to homologous recombination deficiency."),
  e("hrd", "olaparib", "clinical", 82, "sensitivity marker", 2018, "PARP sensitivity is tied to repair defects, but context matters."),
  e("olaparib", "solo1", "clinical", 88, "trial support", 2018, "SOLO1 supplies strong maintenance evidence."),
  e("hrd", "parpconflict", "conflict", 46, "assay controversy", 2021, "HRD assays disagree across thresholds and disease contexts."),
  e("braf", "mapk", "causal", 90, "pathway activation", 2011, "BRAF V600E activates MAPK signaling."),
  e("braf", "dabrafenib", "clinical", 84, "targeted therapy", 2013, "BRAF/MEK therapy emerged from pathway logic."),
  e("mapk", "resistance", "preclinical", 58, "pathway escape", 2021, "MAPK reactivation can appear as a resistance concept."),
  e("pd1", "braf", "conflict", 51, "sequencing question", 2016, "Targeted therapy and immunotherapy sequencing remains context-dependent.")
];

const state = {
  year: 2026,
  selected: null,
  path: []
};

const svg = document.querySelector("#universe");
const yearLabel = document.querySelector("#currentYear");
const slider = document.querySelector("#timeSlider");
const lens = document.querySelector("#claimLens");
const lensTitle = document.querySelector("#lensTitle");
const lensSummary = document.querySelector("#lensSummary");
const lensMeta = document.querySelector("#lensMeta");
const lensSources = document.querySelector("#lensSources");
const meterFill = document.querySelector("#meterFill");
const curiosityList = document.querySelector("#curiosityList");
const pathStrip = document.querySelector("#pathStrip");
const focusReadout = document.querySelector("#focusReadout");

function n(id, label, type, year, confidence, summary, sources) {
  return { id, label, type, year, confidence, summary, sources };
}

function e(source, target, kind, strength, claim, year, why) {
  return { source, target, kind, strength, claim, year, why };
}

function visibleNodes() {
  return nodes.filter((node) => node.year <= state.year);
}

function visibleEdges() {
  const ids = new Set(visibleNodes().map((node) => node.id));
  return edges.filter((edge) => edge.year <= state.year && ids.has(edge.source) && ids.has(edge.target));
}

function positions(width, height) {
  const cx = width / 2;
  const cy = height / 2;
  const map = new Map();
  const visible = visibleNodes();
  const degree = new Map(visible.map((node) => [node.id, 0]));
  visibleEdges().forEach((edge) => {
    degree.set(edge.source, degree.get(edge.source) + 1);
    degree.set(edge.target, degree.get(edge.target) + 1);
  });

  visible.forEach((node, index) => {
    const age = Math.max(0, state.year - node.year);
    const gravity = node.confidence / 100;
    const orbit = 92 + (1 - gravity) * 250 + (node.type === "paper" ? 110 : 0) + (node.type === "trial" ? 60 : 0);
    const angle = index * 1.72 + node.year * 0.09;
    const degreePull = Math.min(degree.get(node.id), 5) * 18;
    const drift = Math.sin((state.year + index) * 0.35) * 14;
    map.set(node.id, {
      x: cx + Math.cos(angle) * (orbit - degreePull + drift),
      y: cy + Math.sin(angle) * (orbit - degreePull - drift),
      age,
      degree: degree.get(node.id)
    });
  });

  return map;
}

function render() {
  const box = svg.getBoundingClientRect();
  const width = Math.max(760, box.width);
  const height = Math.max(620, box.height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  const pos = positions(width, height);
  const visible = visibleNodes();
  const activeEdges = visibleEdges();
  const orbitLayer = s("g");
  const edgeLayer = s("g");
  const dustLayer = s("g");
  const nodeLayer = s("g");
  svg.append(orbitLayer, edgeLayer, dustLayer, nodeLayer);

  [110, 210, 330, 460].forEach((radius) => {
    orbitLayer.append(s("circle", { class: "orbit", cx: width / 2, cy: height / 2, r: radius }));
  });

  activeEdges.forEach((edge) => {
    const a = pos.get(edge.source);
    const b = pos.get(edge.target);
    if (!a || !b) return;
    const line = s("path", {
      class: `relationship ${edge.kind}`,
      d: curve(a, b),
      "stroke-width": 0.7 + edge.strength / 28
    });
    edgeLayer.append(line);
  });

  visible
    .filter((node) => node.type === "paper")
    .forEach((node, index) => {
      const p = pos.get(node.id);
      if (!p) return;
      dustLayer.append(s("circle", { class: "paper-dust", cx: p.x + index * 3, cy: p.y - index * 2, r: 3.5, fill: palette.paper }));
    });

  visible.forEach((node) => {
    if (node.type === "paper") return;
    const p = pos.get(node.id);
    if (!p) return;
    const isRecent = state.year - node.year <= 2;
    const selected = state.selected === node.id;
    const faded = state.selected && !isConnected(node.id, state.selected);
    const group = s("g", {
      class: `knowledge-node ${isRecent ? "emerging" : ""} ${selected ? "selected" : ""} ${faded ? "faded" : ""}`,
      transform: `translate(${p.x}, ${p.y})`
    });
    group.addEventListener("click", () => selectNode(node.id));
    const radius = radiusFor(node, p.degree);
    group.append(s("circle", { r: radius, fill: palette[node.type] }));
    const label = s("text", { y: radius + 17 });
    label.textContent = node.label;
    group.append(label);
    nodeLayer.append(group);
  });

  renderPath();
  renderCuriosity();
}

function radiusFor(node, degree) {
  const base = node.type === "gene" || node.type === "mutation" ? 24 : 19;
  return Math.min(46, base + degree * 3 + node.confidence / 18);
}

function curve(a, b) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const bend = 0.12;
  const cx = mx - dy * bend;
  const cy = my + dx * bend;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

function s(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  return el;
}

function selectNode(id) {
  state.selected = id;
  const node = nodes.find((item) => item.id === id);
  state.path = [...state.path.filter((item) => item !== id), id].slice(-8);
  openLens(node);
  render();
}

function openLens(node) {
  const linked = visibleEdges().filter((edge) => edge.source === node.id || edge.target === node.id);
  const conflicts = linked.filter((edge) => edge.kind === "conflict").length;
  lens.classList.add("open");
  lensTitle.textContent = node.label;
  lensSummary.textContent = node.summary;
  meterFill.style.width = `${node.confidence}%`;
  lensMeta.innerHTML = `
    <dt>evidence</dt><dd>${node.confidence}%</dd>
    <dt>first seen</dt><dd>${node.year}</dd>
    <dt>type</dt><dd>${node.type}</dd>
    <dt>conflicts</dt><dd>${conflicts}</dd>
  `;
  lensSources.innerHTML = node.sources
    .map((source, index) => `<a href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(source)}" target="_blank" rel="noreferrer">${source}<small>provenance placeholder ${index + 1}</small></a>`)
    .join("");
  focusReadout.innerHTML = `
    <p class="eyebrow">selected structure</p>
    <h1>${node.label}</h1>
    <p>${node.summary}</p>
  `;
}

function renderCuriosity() {
  const suggestions = curiosity();
  curiosityList.innerHTML = suggestions
    .map(
      (item) => `<button class="curiosity-item" data-node="${item.id}">
        <strong>${item.label}</strong>
        <span>${item.reason}</span>
      </button>`
    )
    .join("");
  curiosityList.querySelectorAll("[data-node]").forEach((button) => {
    button.addEventListener("click", () => selectNode(button.dataset.node));
  });
}

function curiosity() {
  const visible = visibleNodes();
  if (!state.selected) {
    return [
      { ...visible.find((node) => node.id === "g12c"), reason: "high-gravity discovery path" },
      { ...visible.find((node) => node.id === "parpconflict"), reason: "visible uncertainty cluster" },
      { ...visible.find((node) => node.id === "pd1"), reason: "parallel therapeutic universe" }
    ].filter(Boolean);
  }

  const linked = visibleEdges()
    .filter((edge) => edge.source === state.selected || edge.target === state.selected)
    .sort((a, b) => scoreEdge(b) - scoreEdge(a))
    .map((edge) => {
      const nextId = edge.source === state.selected ? edge.target : edge.source;
      const node = nodes.find((item) => item.id === nextId);
      return { ...node, reason: `${edge.kind} · ${edge.claim}` };
    });

  const contradiction = visibleEdges().find((edge) => edge.kind === "conflict" && edge.source !== state.selected && edge.target !== state.selected);
  if (contradiction) {
    const node = nodes.find((item) => item.id === contradiction.target);
    linked.push({ ...node, reason: "nearby contradiction worth inspecting" });
  }
  return dedupe(linked).slice(0, 4);
}

function scoreEdge(edge) {
  return edge.strength + (edge.kind === "conflict" ? 18 : 0) + (state.year - edge.year < 4 ? 10 : 0);
}

function dedupe(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!item || seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function renderPath() {
  pathStrip.innerHTML = state.path.length
    ? state.path
        .map((id) => {
          const node = nodes.find((item) => item.id === id);
          return `<button class="path-step" data-node="${node.id}">${node.label}</button>`;
        })
        .join("")
    : `<span class="path-step">no saved reasoning path yet</span>`;
  pathStrip.querySelectorAll("[data-node]").forEach((button) => {
    button.addEventListener("click", () => selectNode(button.dataset.node));
  });
}

function isConnected(a, b) {
  if (a === b) return true;
  return visibleEdges().some((edge) => (edge.source === a && edge.target === b) || (edge.source === b && edge.target === a));
}

slider.addEventListener("input", (event) => {
  state.year = Number(event.target.value);
  yearLabel.textContent = state.year;
  state.selected = null;
  lens.classList.remove("open");
  focusReadout.innerHTML = `
    <p class="eyebrow">time navigation</p>
    <h1>${state.year}</h1>
    <p>watch discoveries appear, evidence strengthen, and controversies surface as oncology knowledge changes over time.</p>
  `;
  render();
});

document.querySelector("#closeLens").addEventListener("click", () => {
  lens.classList.remove("open");
  state.selected = null;
  render();
});

document.querySelector("#memoryButton").addEventListener("click", () => {
  const payload = state.path.map((id) => nodes.find((node) => node.id === id)?.label).filter(Boolean).join(" -> ");
  const blob = new Blob([payload || "no path saved yet"], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "onco-theta-research-path.txt";
  link.click();
  URL.revokeObjectURL(url);
});

window.addEventListener("resize", render);
render();
