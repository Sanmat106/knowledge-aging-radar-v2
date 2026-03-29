import { useState } from "react";

// ─── HARDCODED DOCUMENTS ────────────────────────────────────────────────────

const documents = [
  {
    id: 1,
    title: "Programme Status Report",
    type: "Status Report",
    author: "Priya Sharma",
    daysAgo: 8,
    authorOnProject: true,
    staleThreshold: 30,
    content: `PROJECT ORION — PROGRAMME STATUS REPORT
Client: GlobalBank PLC | Date: March 15, 2026
Author: Priya Sharma, Technical Lead

EXECUTIVE SUMMARY
Project Orion remains on track for a Q4 2026 go-live. The programme is progressing well across all workstreams with minor delays in the data migration track being managed through the risk register.

KEY METRICS
- Target Go-Live: Q4 2026 (December)
- Revenue Target: £3.8M (post-descope)
- Budget Status: RAG Amber — £2.1M spent of £4.5M total
- Overall Programme RAG: Amber

WORKSTREAM STATUS
1. Core Banking Integration: Green — API layer 70% complete
2. Digital Onboarding: Amber — UX sign-off pending from GlobalBank
3. Regulatory Reporting: Green — Phase 1 complete
4. Data Migration: Amber — Source data quality issues identified

TEAM
Technical Lead: Priya Sharma
Programme Manager: James Whitfield
Business Analyst Lead: Aisha Koroma

RISKS & ISSUES
- Data quality in legacy systems remains a key risk
- Third-party vendor (FiServ) delivery milestone at risk

NEXT STEPS
- Complete API layer integration by end of March
- UX sign-off session scheduled for 28 March
- RAID log to be updated with new vendor risk`
  },
  {
    id: 2,
    title: "Strategy & Business Case",
    type: "Business Case",
    author: "David Okafor",
    daysAgo: 210,
    authorOnProject: false,
    staleThreshold: 365,
    content: `PROJECT ORION — STRATEGY & BUSINESS CASE
Client: GlobalBank PLC | Date: September 2025
Author: David Okafor, Technical Lead

STRATEGIC RATIONALE
GlobalBank PLC is seeking to modernise its core banking platform to capture growing demand in digital wealth management and retail banking. Project Orion will deliver a next-generation platform enabling GlobalBank to compete with challenger banks and fintechs.

FINANCIAL CASE
- Total Investment: £4.5M over 24 months
- Projected Revenue Uplift: £4.2M annually from Year 2
- NPV (5-year): £8.3M at 8% discount rate
- IRR: 22%
- Payback Period: 28 months

GO-LIVE TARGET
The programme is targeting a Q3 2026 go-live (September 2026) to align with GlobalBank's fiscal year planning and regulatory window.

SCOPE
The full scope includes:
1. Core Banking Platform Migration
2. Digital Onboarding & KYC
3. Wealth Management Module (high-margin segment)
4. Regulatory Reporting Automation
5. Mobile & API Banking

TEAM STRUCTURE
Technical Lead: David Okafor
Programme Director: Claire Ashworth
Business Sponsor: Michael Chen (GlobalBank)

ASSUMPTIONS
- Wealth management module included in full scope
- Regulatory environment stable through 2026
- FiServ partnership confirmed`
  },
  {
    id: 3,
    title: "RAID Log",
    type: "RAID Log",
    author: "Aisha Koroma",
    daysAgo: 22,
    authorOnProject: true,
    staleThreshold: 45,
    content: `PROJECT ORION — RAID LOG
Client: GlobalBank PLC | Last Updated: March 1, 2026
Author: Aisha Koroma, Business Analyst Lead

RISKS
R-001 | HIGH | Data migration quality — legacy system data has significant gaps and errors. Mitigation: dedicated data cleansing sprint in April.
R-002 | MEDIUM | FiServ vendor delay — third-party integration milestone at risk. Mitigation: penalty clause activated, escalation to steering committee.
R-003 | LOW | Regulatory change — FCA guidance expected Q2 2026. Monitoring only.

ASSUMPTIONS
A-001 | Wealth management module descoped — confirmed by steering committee in November 2025. Revenue target revised from £4.2M to £3.8M accordingly.
A-002 | Go-live extended to Q4 2026 due to scope rebalancing and data migration delays.

ISSUES
I-001 | CLOSED | David Okafor (former Technical Lead) left the programme in January 2026. Priya Sharma appointed as replacement Technical Lead effective 15 January 2026.
I-002 | OPEN | Org chart and legacy planning documents not yet updated to reflect personnel changes. Action assigned to PMO.
I-003 | OPEN | FiServ integration specification requires re-baselining.

DECISIONS
D-001 | Wealth management module officially removed from scope | Decision made: November 2025 | Owner: Programme Board
D-002 | Priya Sharma appointed Technical Lead | Decision made: January 2026 | Owner: Claire Ashworth (Programme Director)
D-003 | Go-live target revised to Q4 2026 (December) | Decision made: November 2025 | Owner: Programme Board`
  },
  {
    id: 4,
    title: "Org Chart",
    type: "Org Chart",
    author: "James Whitfield",
    daysAgo: 115,
    authorOnProject: true,
    staleThreshold: 90,
    content: `PROJECT ORION — ORGANISATIONAL CHART
Client: GlobalBank PLC | Date: December 1, 2025
Author: James Whitfield, Programme Manager

PROGRAMME LEADERSHIP
Programme Director: Claire Ashworth (Accenture)
Client Sponsor: Michael Chen (GlobalBank)

ACCENTURE DELIVERY TEAM
Technical Lead: David Okafor
Programme Manager: James Whitfield
Business Analyst Lead: Aisha Koroma
Architecture Lead: Sunita Patel
Security Lead: Tom Briggs

WORKSTREAM LEADS
Core Banking: Raj Krishnamurthy
Digital Onboarding: Mei Lin
Wealth Management: Francesca DiMaggio
Regulatory Reporting: Oliver Marsh
Data Migration: Yusuf Hassan

GLOBALBANK TEAM
IT Director: Sarah Hendricks
Operations Lead: Nick Forsythe
Change Management: Gemma Carr

NOTES
All personnel confirmations as of December 2025.
Next org chart review: February 2026.`
  },
  {
    id: 5,
    title: "Programme Plan",
    type: "Project Plan",
    author: "James Whitfield",
    daysAgo: 48,
    authorOnProject: true,
    staleThreshold: 60,
    content: `PROJECT ORION — PROGRAMME PLAN
Client: GlobalBank PLC | Date: February 3, 2026
Author: James Whitfield, Programme Manager

PROGRAMME TIMELINE

Phase 1 — Foundation (Complete)
- Programme mobilisation: Oct–Nov 2025 ✓
- Architecture design: Nov–Dec 2025 ✓
- Vendor contracts signed: December 2025 ✓

Phase 2 — Build (Current)
- Core Banking API layer: Jan–Apr 2026 (In Progress)
- Digital Onboarding Build: Feb–May 2026 (In Progress)
- Regulatory Reporting: Jan–Mar 2026 (In Progress)
- Data Migration Preparation: Feb–Jun 2026 (In Progress)

Phase 3 — Test & Integrate (Upcoming)
- System Integration Testing: May–Jul 2026
- User Acceptance Testing: Jul–Aug 2026
- Performance Testing: Aug 2026

Phase 4 — Deploy
- Pilot Deployment: September 2026
- Go-Live: September 2026 (Q3)
- Hypercare: Sep–Nov 2026

KEY MILESTONES
- API layer complete: 30 April 2026
- UAT sign-off: 31 August 2026
- Go-Live: September 2026

RESOURCE PLAN
Technical Lead: David Okafor (through programme completion)
Programme Manager: James Whitfield
BA Lead: Aisha Koroma

ASSUMPTIONS
- No further scope changes
- FiServ delivery by June 2026
- GlobalBank UAT resources available August 2026`
  }
];

// ─── FRESHNESS SCORING ENGINE ───────────────────────────────────────────────

function getFreshnessScore(doc) {
  const rawScore = Math.max(0, 100 - (doc.daysAgo / doc.staleThreshold) * 100);
  const penalty = doc.authorOnProject ? 0 : 15;
  return Math.max(0, Math.round(rawScore - penalty));
}

function getRAGStatus(score) {
  if (score >= 60) return "green";
  if (score >= 30) return "amber";
  return "red";
}

const scoredDocs = documents.map(doc => {
  const score = getFreshnessScore(doc);
  return { ...doc, freshnessScore: score, ragStatus: getRAGStatus(score) };
});

// ─── ANTHROPIC API ──────────────────────────────────────────────────────────

async function runContradictionAnalysis(apiKey) {
  const docSummaries = scoredDocs
    .map(d => `=== ${d.title} (${d.type}, ${d.daysAgo} days old) ===\n${d.content}`)
    .join("\n\n");

  const prompt = `You are an expert document analyst for a consulting engagement called "Project Orion" for client GlobalBank PLC.

Analyse the following 5 project documents and identify ALL explicit factual contradictions between them. Focus on:
1. Go-live dates / timelines
2. Revenue targets or financial figures
3. Personnel / role assignments (who holds what role)
4. Scope items (what is in or out of scope)
5. Any other directly contradictory facts

Trust hierarchy rules:
- For current facts: Status Reports > RAID Logs > Project Plans > Strategy Decks > Business Cases
- For people/roles: most recently modified document wins (lower daysAgo = more recent)
- A RAID Log that explicitly records a change (e.g. someone left, scope was descoped) overrides older documents on that topic

For each contradiction found, return structured JSON. Respond ONLY with a valid JSON array — no other text, no markdown code blocks.

Schema:
[
  {
    "topic": "short topic name (e.g. Go-Live Date)",
    "claimA": { "document": "document title", "claim": "the exact claim made", "age": "X days old" },
    "claimB": { "document": "document title", "claim": "the exact claim made", "age": "X days old" },
    "trustedDocument": "title of the document to trust",
    "trustReason": "one sentence explaining why per the trust hierarchy",
    "recommendedFix": "specific actionable fix to resolve this contradiction",
    "severity": "CRITICAL or HIGH or MEDIUM"
  }
]

DOCUMENTS TO ANALYSE:

${docSummaries}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-calls": "true"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `API error ${response.status}`);
  }

  const data = await response.json();
  const text = data.content[0].text.trim();
  const jsonMatch = text.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error("Could not parse AI response as JSON.");
  return JSON.parse(jsonMatch[0]);
}

async function generateNarrativeSummary(apiKey, contradictions) {
  const prompt = `You are a senior Accenture consultant writing an executive briefing for the Programme Director of Project Orion (GlobalBank PLC).

Based on ${contradictions.length} contradictions found across project documents, write a concise 3–4 sentence narrative summary. Be direct and specific — name the issues, state the trust risk they create, and give the single most urgent recommended action. Professional consulting tone. No bullet points.

Contradictions data:
${JSON.stringify(contradictions, null, 2)}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-calls": "true"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 512,
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!response.ok) throw new Error("Narrative generation failed.");
  const data = await response.json();
  return data.content[0].text.trim();
}

// ─── COLOUR PALETTE ─────────────────────────────────────────────────────────

const C = {
  bg: "#0a0a0a",
  surface: "#111111",
  surface2: "#171717",
  border: "#1e1e1e",
  border2: "#2a2a2a",
  purple: "#a100ff",
  purpleDim: "rgba(161,0,255,0.12)",
  purpleBorder: "rgba(161,0,255,0.25)",
  white: "#ffffff",
  muted: "#888888",
  dim: "#555555",
  vdim: "#333333",
  green: "#22c55e",
  greenDim: "rgba(34,197,94,0.12)",
  amber: "#f59e0b",
  amberDim: "rgba(245,158,11,0.12)",
  red: "#ef4444",
  redDim: "rgba(239,68,68,0.12)",
};

const RAG = {
  green: { fg: C.green, bg: C.greenDim, label: "HEALTHY" },
  amber: { fg: C.amber, bg: C.amberDim, label: "STALE" },
  red: { fg: C.red, bg: C.redDim, label: "CRITICAL" },
};

const SEV = {
  CRITICAL: { fg: C.red, bg: C.redDim },
  HIGH: { fg: C.amber, bg: C.amberDim },
  MEDIUM: { fg: C.muted, bg: "rgba(136,136,136,0.1)" },
};

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────

function Nav({ right }) {
  return (
    <nav style={{
      borderBottom: `1px solid ${C.border}`,
      padding: "0 2rem",
      height: 56,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      background: C.bg,
      zIndex: 10
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.purple }} />
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Accenture</span>
      </div>
      <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.dim }}>
        Knowledge Aging Radar
      </span>
      <div>{right}</div>
    </nav>
  );
}

function Label({ children, color = C.dim }) {
  return (
    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color }}>
      {children}
    </span>
  );
}

function Badge({ text, fg, bg, border }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
      padding: "3px 9px", borderRadius: 4,
      color: fg, background: bg,
      border: `1px solid ${border || fg + "40"}`
    }}>{text}</span>
  );
}

// ─── LANDING SCREEN ──────────────────────────────────────────────────────────

function LandingScreen({ apiKey, setApiKey, onRun, error }) {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.white, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav right={
        <span style={{ fontSize: 11, color: C.dim, letterSpacing: "0.05em" }}>
          Project Orion · GlobalBank PLC
        </span>
      } />

      {/* Hero */}
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "72px 2rem 56px" }}>
        <Label color={C.purple}>Internal Tool · Consulting Intelligence</Label>
        <h1 style={{
          fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
          fontWeight: 900,
          lineHeight: 1.04,
          letterSpacing: "-0.035em",
          margin: "14px 0 20px"
        }}>
          Know which documents<br />
          <span style={{ color: C.purple }}>you can trust.</span>
        </h1>
        <p style={{ fontSize: 16, color: C.muted, maxWidth: 500, lineHeight: 1.65, margin: 0 }}>
          Freshness scoring and AI-powered contradiction detection across your programme document set. Engagement: <strong style={{ color: "#ccc" }}>Project Orion</strong>.
        </p>
      </div>

      {/* Document tiles */}
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 2rem 56px" }}>
        <Label style={{ marginBottom: 16, display: "block" }}>Document Inventory — 5 Documents</Label>
        <div style={{ height: 1, background: C.border, marginBottom: 20 }} />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(268px, 1fr))",
          gap: 12
        }}>
          {scoredDocs.map(doc => (
            <DocTile key={doc.id} doc={doc} />
          ))}
        </div>
      </div>

      {/* API Key panel */}
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 2rem 80px" }}>
        <div style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 12,
          padding: "32px 36px"
        }}>
          <Label color={C.purple}>AI Analysis Engine</Label>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: "10px 0 6px", letterSpacing: "-0.02em" }}>
            Connect Anthropic API
          </h3>
          <p style={{ fontSize: 13, color: C.muted, margin: "0 0 22px", lineHeight: 1.6 }}>
            Required to run contradiction detection. Your key is sent only to Anthropic's API and never stored.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <input
              type="password"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              onKeyDown={e => e.key === "Enter" && onRun()}
              placeholder="sk-ant-api03-…"
              style={{
                flex: "1 1 260px",
                background: C.surface2,
                border: `1px solid ${C.border2}`,
                color: C.white,
                padding: "13px 18px",
                borderRadius: 8,
                fontSize: 14,
                fontFamily: "monospace",
                outline: "none",
                letterSpacing: "0.03em"
              }}
            />
            <button
              onClick={onRun}
              style={{
                background: C.purple,
                color: C.white,
                border: "none",
                padding: "13px 28px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                transition: "opacity 0.15s"
              }}
              onMouseOver={e => e.currentTarget.style.opacity = "0.88"}
              onMouseOut={e => e.currentTarget.style.opacity = "1"}
            >
              Run Analysis →
            </button>
          </div>
          {error && (
            <div style={{ marginTop: 14, color: C.red, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>⚠</span> {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DocTile({ doc }) {
  const rag = RAG[doc.ragStatus];
  return (
    <div style={{
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 8,
      padding: "20px 20px 18px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: rag.fg }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <Label>{doc.type}</Label>
        <div style={{
          background: rag.bg,
          border: `1px solid ${rag.fg}40`,
          color: rag.fg,
          fontSize: 13,
          fontWeight: 800,
          padding: "2px 9px",
          borderRadius: 4,
          letterSpacing: "0.04em"
        }}>
          {doc.freshnessScore}
        </div>
      </div>

      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, letterSpacing: "-0.015em", lineHeight: 1.3 }}>
        {doc.title}
      </div>
      <div style={{ fontSize: 12, color: C.muted }}>{doc.author}</div>
      <div style={{ fontSize: 11, color: C.vdim, marginTop: 3 }}>{doc.daysAgo} days ago</div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
        <Badge text={rag.label} fg={rag.fg} bg={rag.bg} />
        {!doc.authorOnProject && (
          <Badge text="AUTHOR LEFT" fg={C.amber} bg={C.amberDim} />
        )}
      </div>
    </div>
  );
}

// ─── SCANNING SCREEN ─────────────────────────────────────────────────────────

const SCAN_STEPS = [
  "Initialising document index…",
  "Extracting claims from all documents…",
  "Computing freshness scores…",
  "Running AI contradiction engine…",
  "Applying trust hierarchy rules…",
  "Generating executive summary…",
  "Compiling final report…"
];

function ScanningScreen({ step }) {
  const progress = Math.round(((step + 1) / SCAN_STEPS.length) * 100);
  return (
    <div style={{
      background: C.bg,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: C.white,
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: "2rem"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 64 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.purple }} />
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Knowledge Aging Radar
        </span>
      </div>

      <div style={{ width: "100%", maxWidth: 500 }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <Label color={C.purple}>Scanning in Progress</Label>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.025em", marginTop: 12 }}>
            Project Orion · GlobalBank PLC
          </div>
          <div style={{ fontSize: 13, color: C.dim, marginTop: 6 }}>
            {progress}% complete
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ background: C.surface, height: 3, borderRadius: 2, marginBottom: 40, overflow: "hidden" }}>
          <div style={{
            height: "100%",
            background: `linear-gradient(90deg, ${C.purple}, #7b00cc)`,
            width: `${progress}%`,
            transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
            borderRadius: 2
          }} />
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {SCAN_STEPS.map((s, i) => {
            const done = i < step;
            const active = i === step;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, opacity: i > step ? 0.2 : 1, transition: "opacity 0.4s" }}>
                <div style={{
                  width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                  background: done ? C.purple : "transparent",
                  border: `2px solid ${done ? C.purple : active ? C.purple : C.vdim}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s"
                }}>
                  {done && <span style={{ fontSize: 11, color: "#fff", fontWeight: 700 }}>✓</span>}
                  {active && (
                    <div style={{
                      width: 7, height: 7,
                      background: C.purple,
                      borderRadius: "50%",
                      animation: "ks-pulse 1.1s ease-in-out infinite"
                    }} />
                  )}
                </div>
                <span style={{ fontSize: 13, color: active ? C.white : C.muted, fontWeight: active ? 600 : 400 }}>
                  {s}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`@keyframes ks-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.35;transform:scale(0.7)}}`}</style>
    </div>
  );
}

// ─── RESULTS SCREEN ──────────────────────────────────────────────────────────

function ResultsScreen({ results, onBack }) {
  const [tab, setTab] = useState("dashboard");
  const [expanded, setExpanded] = useState({});

  const toggleCard = i => setExpanded(p => ({ ...p, [i]: !p[i] }));

  const greenCount = scoredDocs.filter(d => d.ragStatus === "green").length;
  const amberCount = scoredDocs.filter(d => d.ragStatus === "amber").length;
  const redCount = scoredDocs.filter(d => d.ragStatus === "red").length;

  const healthColor = results.overallHealth >= 60 ? C.green : results.overallHealth >= 30 ? C.amber : C.red;

  const tabs = ["dashboard", "documents", "contradictions"];

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.white, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav right={
        <button onClick={onBack} style={{
          background: "transparent", border: `1px solid ${C.border2}`,
          color: C.muted, padding: "6px 14px", borderRadius: 6,
          fontSize: 12, cursor: "pointer", letterSpacing: "0.05em"
        }}>← New Scan</button>
      } />

      {/* Tab bar */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: "0 2rem", display: "flex" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            background: "transparent", border: "none",
            color: tab === t ? C.white : C.dim,
            padding: "16px 20px", fontSize: 12,
            fontWeight: 700, cursor: "pointer",
            letterSpacing: "0.1em", textTransform: "uppercase",
            borderBottom: `2px solid ${tab === t ? C.purple : "transparent"}`,
            marginBottom: -1, transition: "color 0.2s"
          }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 1020, margin: "0 auto", padding: "40px 2rem 80px" }}>

        {/* ── DASHBOARD TAB ── */}
        {tab === "dashboard" && (
          <div>
            {/* KPI row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 12, marginBottom: 36 }}>
              {[
                { label: "Overall Health Score", value: results.overallHealth, unit: "/100", color: healthColor },
                { label: "Documents Scanned", value: 5, unit: "docs", color: C.purple },
                { label: "Contradictions Found", value: results.contradictions.length, unit: "issues", color: C.amber },
                { label: "Critical Issues", value: results.criticalCount, unit: "critical", color: results.criticalCount > 0 ? C.red : C.green }
              ].map((k, i) => (
                <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "22px 20px" }}>
                  <Label>{k.label}</Label>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 14 }}>
                    <span style={{ fontSize: 38, fontWeight: 900, color: k.color, letterSpacing: "-0.04em", lineHeight: 1 }}>{k.value}</span>
                    <span style={{ fontSize: 12, color: C.dim }}>{k.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Narrative */}
            <div style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderLeft: `3px solid ${C.purple}`,
              borderRadius: 8,
              padding: "26px 28px",
              marginBottom: 28
            }}>
              <Label color={C.purple}>AI Executive Summary</Label>
              <p style={{ fontSize: 15, color: "#cccccc", lineHeight: 1.72, margin: "14px 0 0" }}>
                {results.narrative}
              </p>
            </div>

            {/* RAG Breakdown */}
            <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "22px 24px" }}>
              <Label>Document Health Breakdown</Label>
              <div style={{ display: "flex", gap: 32, marginTop: 18, flexWrap: "wrap" }}>
                {[["green", greenCount], ["amber", amberCount], ["red", redCount]].map(([status, count]) => {
                  const r = RAG[status];
                  return (
                    <div key={status} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: r.fg }} />
                      <Label color={r.fg}>{r.label}</Label>
                      <span style={{ fontSize: 28, fontWeight: 900, color: r.fg, letterSpacing: "-0.03em", lineHeight: 1 }}>{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── DOCUMENTS TAB ── */}
        {tab === "documents" && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                  {["Document", "Type", "Author", "Age", "Freshness", "Health", "Author Status"].map(h => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left" }}>
                      <Label>{h}</Label>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scoredDocs.map(doc => {
                  const rag = RAG[doc.ragStatus];
                  return (
                    <tr key={doc.id} style={{ borderBottom: `1px solid ${C.border}`, transition: "background 0.15s" }}
                      onMouseOver={e => e.currentTarget.style.background = C.surface}
                      onMouseOut={e => e.currentTarget.style.background = "transparent"}
                    >
                      <td style={{ padding: "15px 14px", fontSize: 14, fontWeight: 700 }}>{doc.title}</td>
                      <td style={{ padding: "15px 14px" }}><Label color={C.dim}>{doc.type}</Label></td>
                      <td style={{ padding: "15px 14px", fontSize: 13, color: C.muted }}>{doc.author}</td>
                      <td style={{ padding: "15px 14px", fontSize: 13, color: C.dim }}>{doc.daysAgo}d</td>
                      <td style={{ padding: "15px 14px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ background: C.surface2, height: 4, width: 72, borderRadius: 2, overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${doc.freshnessScore}%`, background: rag.fg, borderRadius: 2 }} />
                          </div>
                          <span style={{ fontSize: 13, fontWeight: 700, color: rag.fg }}>{doc.freshnessScore}</span>
                        </div>
                      </td>
                      <td style={{ padding: "15px 14px" }}>
                        <Badge text={rag.label} fg={rag.fg} bg={rag.bg} />
                      </td>
                      <td style={{ padding: "15px 14px" }}>
                        {doc.authorOnProject
                          ? <span style={{ fontSize: 12, color: C.green }}>● Active</span>
                          : <span style={{ fontSize: 12, color: C.amber }}>⚠ Left Project</span>
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* ── CONTRADICTIONS TAB ── */}
        {tab === "contradictions" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ marginBottom: 8 }}>
              <Label>{results.contradictions.length} Contradictions Detected · Sorted by Severity</Label>
            </div>
            {results.contradictions.map((c, i) => {
              const sev = SEV[c.severity] || SEV.MEDIUM;
              const open = !!expanded[i];
              return (
                <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, overflow: "hidden" }}>
                  {/* Header */}
                  <button
                    onClick={() => toggleCard(i)}
                    style={{
                      width: "100%", background: "transparent", border: "none",
                      padding: "18px 22px", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      color: C.white, textAlign: "left"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <Badge text={c.severity} fg={sev.fg} bg={sev.bg} />
                      <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.015em" }}>{c.topic}</span>
                    </div>
                    <span style={{ color: C.dim, fontSize: 18, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>
                      {open ? "▲" : "▼"}
                    </span>
                  </button>

                  {/* Expanded body */}
                  {open && (
                    <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${C.border}` }}>
                      {/* Two claims side by side */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 18, marginBottom: 14 }}>
                        {[c.claimA, c.claimB].map((cl, j) => (
                          <div key={j} style={{
                            background: C.surface2,
                            border: `1px solid ${C.border}`,
                            borderRadius: 6,
                            padding: "14px 16px"
                          }}>
                            <Label>{cl.document} · {cl.age}</Label>
                            <p style={{ fontSize: 14, color: "#dddddd", lineHeight: 1.55, margin: "10px 0 0" }}>
                              "{cl.claim}"
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Trust recommendation */}
                      <div style={{
                        background: C.purpleDim,
                        border: `1px solid ${C.purpleBorder}`,
                        borderRadius: 6,
                        padding: "14px 16px",
                        marginBottom: 10
                      }}>
                        <Label color={C.purple}>Trust Recommendation</Label>
                        <div style={{ fontSize: 14, fontWeight: 700, margin: "8px 0 5px" }}>→ {c.trustedDocument}</div>
                        <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.55 }}>{c.trustReason}</div>
                      </div>

                      {/* Recommended fix */}
                      <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 6, padding: "14px 16px" }}>
                        <Label>Recommended Fix</Label>
                        <p style={{ fontSize: 13, color: "#bbbbbb", lineHeight: 1.6, margin: "8px 0 0" }}>{c.recommendedFix}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── ROOT APP ────────────────────────────────────────────────────────────────

export default function KnowledgeAgingRadar() {
  const [screen, setScreen] = useState("landing");
  const [apiKey, setApiKey] = useState("");
  const [scanStep, setScanStep] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  async function runAnalysis() {
    if (!apiKey.trim()) { setError("Please enter your Anthropic API key."); return; }
    setError(null);
    setScreen("scanning");
    setScanStep(0);

    try {
      for (let i = 0; i < 3; i++) {
        setScanStep(i);
        await new Promise(r => setTimeout(r, 550));
      }
      setScanStep(3);
      const contradictions = await runContradictionAnalysis(apiKey);

      setScanStep(4);
      await new Promise(r => setTimeout(r, 400));
      setScanStep(5);
      const narrative = await generateNarrativeSummary(apiKey, contradictions);

      setScanStep(6);
      await new Promise(r => setTimeout(r, 600));

      const sorted = [...contradictions].sort((a, b) => {
        const o = { CRITICAL: 0, HIGH: 1, MEDIUM: 2 };
        return (o[a.severity] ?? 3) - (o[b.severity] ?? 3);
      });

      const avgScore = Math.round(
        scoredDocs.reduce((s, d) => s + d.freshnessScore, 0) / scoredDocs.length
      );

      setResults({
        contradictions: sorted,
        narrative,
        overallHealth: avgScore,
        criticalCount: sorted.filter(c => c.severity === "CRITICAL").length
      });
      setScreen("results");
    } catch (err) {
      setError(`Analysis failed: ${err.message}`);
      setScreen("landing");
    }
  }

  return (
    <>
      {screen === "landing" && (
        <LandingScreen apiKey={apiKey} setApiKey={setApiKey} onRun={runAnalysis} error={error} />
      )}
      {screen === "scanning" && <ScanningScreen step={scanStep} />}
      {screen === "results" && results && (
        <ResultsScreen results={results} onBack={() => setScreen("landing")} />
      )}
    </>
  );
}
