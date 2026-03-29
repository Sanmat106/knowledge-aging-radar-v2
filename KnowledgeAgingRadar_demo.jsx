import { useState } from "react";

const DOC_CONTENT = {
  status: `PROJECT ORION — PROGRAMME STATUS REPORT
Period: 9–15 Mar 2026 | Ref: ACC-GBP-SR-047
Author: Priya Sharma, Technical Lead
Reviewer: James Whitfield, Programme Manager
Classification: CONFIDENTIAL — ACCENTURE/GLOBALBANK

━━━ EXECUTIVE SUMMARY ━━━
Overall RAG: AMBER. Four workstreams active. Core Banking and Regulatory Reporting GREEN. Digital Onboarding slipped AMBER (UX sign-off overdue, GlobalBank design panel not convened since 12 Feb). Data Migration re-RAGged AMBER — 23.7% data defect rate in GL-CORE v4.1 vs. 8% assumed in sizing.

Go-Live Target: Q4 2026 (1 December 2026; hard backstop 15 Dec per Steering Committee 18 Nov 2025)
Revenue Target: £3.8M annually from Year 2 (post-descope)
Budget: £2.14M spent of £4.5M (47.6%) — £170K underspend vs. plan

━━━ WORKSTREAM SCORECARD ━━━
WS-01 Core Banking Integration    GREEN  — API layer 70%; 31/62 payment endpoints live
WS-02 Digital Onboarding & KYC   AMBER  — UX sign-off 8 days overdue; Android SDK 78%
WS-03 Regulatory Reporting        GREEN  — 94/172 FCA MiFID II report types automated
WS-04 Data Migration              AMBER  — GL-CORE defect rate 23.7%; cleanse sprint Apr

━━━ DECISIONS REQUIRED ━━━
DEC-047-A | FiServ fallback approach | Owner: C. Ashworth | Due: 31 Mar 2026
DEC-047-B | Data migration scope buffer (+6wks est.) | Owner: Programme Board | Due: 20 Mar 2026

━━━ KEY RISKS THIS PERIOD ━━━
R-002 FiServ delivery milestone at risk (HIGH) — penalty clause activated
R-004 Data quality materially worse than scoped (HIGH) — mitigation sprint confirmed Apr

━━━ TEAM ━━━
Technical Lead: Priya Sharma
Programme Manager: James Whitfield
BA Lead: Aisha Koroma`,

  bizcase: `PROJECT ORION — STRATEGY & BUSINESS CASE
Date: September 2025 | Ref: ACC-GBP-BC-001
Author: David Okafor, Technical Lead
Approved by: Claire Ashworth, Programme Director
Classification: CONFIDENTIAL — ACCENTURE/GLOBALBANK

━━━ STRATEGIC CONTEXT ━━━
GlobalBank PLC faces margin compression from challenger banks and embedded-finance entrants. Orion delivers a next-generation core banking platform, digital onboarding, wealth management capability, and automated regulatory reporting — enabling £4.2M annual revenue uplift from Year 2 through new product revenues and cost reduction.

━━━ FINANCIAL CASE ━━━
Total Investment:           £4.5M (24-month programme)
Revenue Uplift (Year 2+):   £4.2M annually
NPV (5-year, 8% discount):  £8.3M
IRR:                        22%
Payback Period:             28 months
Sensitivity (downside -15%):NPV £5.9M — still strongly positive

━━━ GO-LIVE TARGET ━━━
Q3 2026 (September 2026) — aligned to GlobalBank fiscal year-end planning and FCA regulatory window. Any slip beyond Q3 2026 will require re-negotiation of the revenue recognition schedule with GlobalBank Finance.

━━━ FULL SCOPE ━━━
1. Core Banking Platform Migration (GL-CORE -> GlobalBank Core v2.0)
2. Digital Onboarding & eKYC
3. Wealth Management Module — projected £1.1M of the £4.2M revenue uplift
4. Regulatory Reporting Automation (MiFID II, COREP, FINREP, CCAR)
5. Mobile & Open Banking API Layer

━━━ PROGRAMME TEAM ━━━
Technical Lead:      David Okafor
Programme Director:  Claire Ashworth
Business Sponsor:    Michael Chen (GlobalBank)
Architecture Lead:   Sunita Patel

━━━ KEY ASSUMPTIONS ━━━
- Wealth Management Module in full scope
- FiServ partnership confirmed and contractually committed
- No material regulatory change through 2026
- GlobalBank UAT resources available from July 2026`,

  raid: `PROJECT ORION — RAID LOG
Last Updated: 1 March 2026 | Ref: ACC-GBP-RAID-v14
Author: Aisha Koroma, BA Lead
Classification: CONFIDENTIAL — ACCENTURE/GLOBALBANK

━━━ RISKS (OPEN) ━━━
R-001 | HIGH    | Data migration — GL-CORE v4.1 defect rate 23.7% vs. 8% assumed. Est. +6wk impact if unmitigated. Mitigation: dedicated cleanse sprint from 6 Apr. Owner: Yusuf Hassan.
R-002 | HIGH    | FiServ connector — vendor milestone 28 Feb missed. Penalty clause activated. Escalated to steering committee. Contingency: batch-file fallback under assessment. Owner: Raj Krishnamurthy.
R-003 | MEDIUM  | FCA regulatory guidance (expected Q2 2026) may require COREP template rework. Monitoring only. Owner: Oliver Marsh.
R-005 | LOW     | GlobalBank change management capacity — risk of under-resourced UAT phase. Owner: Gemma Carr (GlobalBank).

━━━ ASSUMPTIONS (ACTIVE) ━━━
A-001 | CONFIRMED | Wealth Management Module descoped — formally approved by Programme Board November 2025. Revenue target revised from £4.2M to £3.8M. Francesca DiMaggio (Wealth Mgmt WS Lead) released from programme 30 Nov 2025.
A-002 | CONFIRMED | Go-live revised to Q4 2026 (target 1 Dec 2026) following scope rebalancing and data migration risk crystallisation.
A-003 | CONFIRMED | FiServ now a HIGH risk dependency; batch fallback will be scoped if no confirmed delivery date by 31 Mar 2026.

━━━ ISSUES (OPEN) ━━━
I-001 | CLOSED | David Okafor (Technical Lead) left programme 15 January 2026. Replaced by Priya Sharma (effective 15 Jan). Announcement issued by C. Ashworth to steering committee.
I-002 | OPEN   | Org Chart (last updated Dec 2025) still lists David Okafor as Technical Lead and Francesca DiMaggio as Wealth Management WS Lead. PMO action to update by 31 Mar 2026. Owner: James Whitfield.
I-003 | OPEN   | Programme Plan (last baselined Feb 2026) still shows September 2026 go-live and lists David Okafor as resource. Re-baselining required. Owner: James Whitfield. Due: 15 Apr 2026.
I-004 | OPEN   | FiServ integration spec requires re-baselining post-milestone miss.

━━━ DECISIONS (LOG) ━━━
D-001 | Wealth Mgmt Module descoped | Nov 2025 | Programme Board
D-002 | Priya Sharma appointed Technical Lead | Jan 2026 | C. Ashworth
D-003 | Go-live revised Q4 2026 | Nov 2025 | Programme Board
D-004 | FiServ penalty clause activated | Feb 2026 | C. Ashworth`,

  orgchart: `PROJECT ORION — ORGANISATIONAL CHART
Date: 1 December 2025 | Ref: ACC-GBP-ORG-v4
Author: James Whitfield, Programme Manager
NOTE: Next scheduled review February 2026
Classification: CONFIDENTIAL — ACCENTURE/GLOBALBANK

━━━ PROGRAMME GOVERNANCE ━━━
Exec Sponsor (GlobalBank):   Sir Robert Hargreaves (Group CEO)
Programme Director:          Claire Ashworth (Accenture, Partner)
Client Programme Director:   Michael Chen (GlobalBank, IT Director)
Steering Committee:          Quarterly (next: 25 Mar 2026)

━━━ ACCENTURE CORE DELIVERY TEAM ━━━
Technical Lead:              David Okafor
Programme Manager:           James Whitfield
Business Analyst Lead:       Aisha Koroma
Architecture Lead:           Sunita Patel
Security & Compliance Lead:  Tom Briggs
DevOps Lead:                 Priya Sharma
Change & Adoption Lead:      Chloe Brennan

━━━ WORKSTREAM LEADS ━━━
WS-01 Core Banking:          Raj Krishnamurthy (Accenture)
WS-02 Digital Onboarding:    Mei Lin (Accenture)
WS-03 Wealth Management:     Francesca DiMaggio (Accenture)
WS-04 Regulatory Reporting:  Oliver Marsh (Accenture)
WS-05 Data Migration:        Yusuf Hassan (Accenture)

━━━ GLOBALBANK TEAM ━━━
IT Director:                 Sarah Hendricks
Operations Lead:             Nick Forsythe
Risk & Compliance:           Patricia Osei
Change Management:           Gemma Carr
UAT Lead (TBC):              [Vacant — to be confirmed Q1 2026]

━━━ NOTES ━━━
All roles confirmed as of 1 December 2025.
Next org chart review scheduled: February 2026.
Headcount: 9 Accenture FTEs + 5 GlobalBank, plus extended support.`,

  plan: `PROJECT ORION — PROGRAMME PLAN (BASELINED)
Date: 3 February 2026 | Ref: ACC-GBP-PLAN-v3.1
Author: James Whitfield, Programme Manager
Status: BASELINED — change control required for amendments
Classification: CONFIDENTIAL — ACCENTURE/GLOBALBANK

━━━ PHASE SUMMARY ━━━
Phase 1 — Foundation        Oct–Dec 2025     STATUS: COMPLETE
Phase 2 — Build             Jan–Jun 2026     STATUS: IN PROGRESS
Phase 3 — Test & Integrate  May–Aug 2026     STATUS: NOT STARTED
Phase 4 — Deploy & Cutover  Sep 2026         STATUS: NOT STARTED
Hypercare                   Sep–Nov 2026     STATUS: NOT STARTED

━━━ KEY MILESTONES ━━━
M-01 | Architecture sign-off              | Dec 2025    | COMPLETE
M-02 | API layer complete (all endpoints) | 30 Apr 2026 | ON TRACK
M-03 | SIT Entry                          | 2 May 2026  | ON TRACK
M-04 | UAT Entry                          | 1 Jul 2026  | ON TRACK
M-05 | UAT Sign-off                       | 31 Aug 2026 | ON TRACK
M-06 | Go-Live                            | Sep 2026 (Q3) | TARGET
M-07 | Hypercare End / BAU Transition     | 30 Nov 2026 | PLANNED

━━━ CRITICAL PATH ━━━
API Layer -> SIT -> UAT -> Performance Test -> Go-Live (Sep 2026)
FiServ connector is on critical path — any delay beyond 4 wks threatens Go-Live.

━━━ RESOURCE PLAN (KEY ROLES) ━━━
Technical Lead:     David Okafor (through programme completion)
Programme Manager:  James Whitfield (through Nov 2026)
BA Lead:            Aisha Koroma (through Aug 2026, then 50% hypercare)
Architecture Lead:  Sunita Patel (through Jun 2026)

━━━ ASSUMPTIONS AT BASELINE ━━━
- No further scope changes after Feb 2026 baseline
- FiServ delivery confirmed by 30 Jun 2026
- GlobalBank UAT resources (min. 8 FTE) confirmed from 1 Jul 2026
- Data migration cleanse complete by 30 May 2026

━━━ CHANGE LOG ━━━
v3.0 | Jan 2026 | Initial post-mobilisation baseline
v3.1 | Feb 2026 | Updated resource actuals; FiServ risk flagged`
};

const documents = [
  { id:1, title:"Programme Status Report",  type:"Status Report",  author:"Priya Sharma",    daysAgo:8,   authorOnProject:true,  staleThreshold:30,  content:DOC_CONTENT.status   },
  { id:2, title:"Strategy & Business Case", type:"Business Case",  author:"David Okafor",    daysAgo:210, authorOnProject:false, staleThreshold:365, content:DOC_CONTENT.bizcase  },
  { id:3, title:"RAID Log",                 type:"RAID Log",       author:"Aisha Koroma",    daysAgo:22,  authorOnProject:true,  staleThreshold:45,  content:DOC_CONTENT.raid     },
  { id:4, title:"Org Chart",               type:"Org Chart",      author:"James Whitfield", daysAgo:115, authorOnProject:true,  staleThreshold:90,  content:DOC_CONTENT.orgchart },
  { id:5, title:"Programme Plan",          type:"Project Plan",   author:"James Whitfield", daysAgo:48,  authorOnProject:true,  staleThreshold:60,  content:DOC_CONTENT.plan     },
];

function calcScore(doc){ return Math.max(0, Math.round(Math.max(0,100-(doc.daysAgo/doc.staleThreshold)*100) - (doc.authorOnProject?0:15))); }
function calcRag(s){ return s>=60?"green":s>=30?"amber":"red"; }
const scored = documents.map(d=>({...d, score:calcScore(d), rag:calcRag(calcScore(d))}));

const C={bg:"#0a0a0a",s1:"#111",s2:"#171717",b1:"#1e1e1e",b2:"#2a2a2a",p:"#a100ff",pd:"rgba(161,0,255,0.12)",pb:"rgba(161,0,255,0.25)",w:"#fff",m:"#888",d:"#555",vd:"#333",gr:"#22c55e",grd:"rgba(34,197,94,0.12)",am:"#f59e0b",amd:"rgba(245,158,11,0.12)",re:"#ef4444",red:"rgba(239,68,68,0.12)"};
const RAG={green:{fg:C.gr,bg:C.grd,lbl:"HEALTHY"},amber:{fg:C.am,bg:C.amd,lbl:"STALE"},red:{fg:C.re,bg:C.red,lbl:"CRITICAL"}};
const SEV={CRITICAL:{fg:C.re,bg:C.red},HIGH:{fg:C.am,bg:C.amd},MEDIUM:{fg:C.m,bg:"rgba(136,136,136,0.1)"}};

async function callAI(apiKey, prompt, maxTokens=4096){
  const r = await fetch("https://api.anthropic.com/v1/messages",{
    method:"POST",
    headers:{"Content-Type":"application/json","x-api-key":apiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-calls":"true"},
    body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:maxTokens,messages:[{role:"user",content:prompt}]})
  });
  if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error?.message||`API error ${r.status}`);}
  const d=await r.json(); return d.content[0].text.trim();
}

async function getContradictions(apiKey){
  const docs = scored.map(d=>`=== ${d.title} (${d.type}, ${d.daysAgo} days old, author ${d.authorOnProject?"ACTIVE":"LEFT PROJECT"}) ===\n${d.content}`).join("\n\n");
  const text = await callAI(apiKey,`You are an expert analyst for consulting engagement "Project Orion" (GlobalBank PLC).
Identify ALL explicit factual contradictions between these 5 documents. Look for: go-live dates, revenue figures, personnel/roles, scope inclusions.
Trust hierarchy: Status Reports > RAID Logs > Project Plans > Strategy Decks > Business Cases. For people/roles: most recent document wins. RAID Log entries that record explicit changes override older docs.
Respond ONLY with a valid JSON array (no markdown, no explanation):
[{"topic":"short name","claimA":{"document":"title","claim":"exact claim","age":"X days old"},"claimB":{"document":"title","claim":"exact claim","age":"X days old"},"trustedDocument":"title","trustReason":"one sentence","recommendedFix":"specific action","severity":"CRITICAL|HIGH|MEDIUM"}]
DOCUMENTS:\n${docs}`);
  const m=text.match(/\[[\s\S]*\]/); if(!m) throw new Error("Could not parse AI response.");
  return JSON.parse(m[0]);
}

async function getNarrative(apiKey,contradictions){
  return callAI(apiKey,`Senior Accenture consultant. Write a 3-sentence executive briefing for the Programme Director of Project Orion (GlobalBank PLC) about ${contradictions.length} document contradictions found. Name issues, state trust risk, give the single most urgent action. No bullet points.\n\nContradictions: ${JSON.stringify(contradictions)}`,400);
}

const STEPS=["Initialising document index…","Extracting claims from all documents…","Computing freshness scores…","Running AI contradiction engine…","Applying trust hierarchy…","Generating executive summary…","Compiling final report…"];

function Nav({right}){
  return <nav style={{borderBottom:`1px solid ${C.b1}`,padding:"0 2rem",height:56,display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,background:C.bg,zIndex:10}}>
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <div style={{width:10,height:10,borderRadius:"50%",background:C.p}}/>
      <span style={{fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase"}}>Accenture</span>
    </div>
    <span style={{fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:C.d}}>Knowledge Aging Radar</span>
    <div>{right}</div>
  </nav>;
}

function Lbl({children,color=C.d}){return <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color}}>{children}</span>;}
function Bdg({text,fg,bg}){return <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.1em",padding:"3px 9px",borderRadius:4,color:fg,background:bg,border:`1px solid ${fg}40`}}>{text}</span>;}

function Landing({apiKey,setApiKey,onRun,error}){
  return <div style={{background:C.bg,minHeight:"100vh",color:C.w,fontFamily:"'Inter',system-ui,sans-serif"}}>
    <Nav right={<span style={{fontSize:11,color:C.d}}>Project Orion · GlobalBank PLC</span>}/>
    <div style={{maxWidth:920,margin:"0 auto",padding:"72px 2rem 56px"}}>
      <Lbl color={C.p}>Internal Tool · Consulting Intelligence</Lbl>
      <h1 style={{fontSize:"clamp(2.2rem,5vw,3.6rem)",fontWeight:900,lineHeight:1.04,letterSpacing:"-0.035em",margin:"14px 0 18px"}}>
        Know which documents<br/><span style={{color:C.p}}>you can trust.</span>
      </h1>
      <p style={{fontSize:15,color:C.m,maxWidth:480,lineHeight:1.65,margin:0}}>
        Freshness scoring + AI contradiction detection across your programme document set. Engagement: <strong style={{color:"#ccc"}}>Project Orion</strong>.
      </p>
    </div>
    <div style={{maxWidth:920,margin:"0 auto",padding:"0 2rem 52px"}}>
      <Lbl>Document Inventory — 5 Documents</Lbl>
      <div style={{height:1,background:C.b1,margin:"14px 0 18px"}}/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(268px,1fr))",gap:12}}>
        {scored.map(doc=>{const r=RAG[doc.rag]; return(
          <div key={doc.id} style={{background:C.s1,border:`1px solid ${C.b1}`,borderRadius:8,padding:"20px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:r.fg}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <Lbl>{doc.type}</Lbl>
              <span style={{fontSize:13,fontWeight:800,color:r.fg,background:r.bg,padding:"2px 9px",borderRadius:4,border:`1px solid ${r.fg}40`}}>{doc.score}</span>
            </div>
            <div style={{fontSize:14,fontWeight:700,marginBottom:5,lineHeight:1.3}}>{doc.title}</div>
            <div style={{fontSize:12,color:C.m}}>{doc.author}</div>
            <div style={{fontSize:11,color:C.vd,marginTop:3}}>{doc.daysAgo} days ago</div>
            <div style={{display:"flex",gap:6,marginTop:12,flexWrap:"wrap"}}>
              <Bdg text={r.lbl} fg={r.fg} bg={r.bg}/>
              {!doc.authorOnProject&&<Bdg text="AUTHOR LEFT" fg={C.am} bg={C.amd}/>}
            </div>
          </div>
        );})}
      </div>
    </div>
    <div style={{maxWidth:920,margin:"0 auto",padding:"0 2rem 80px"}}>
      <div style={{background:C.s1,border:`1px solid ${C.b1}`,borderRadius:12,padding:"32px 36px"}}>
        <Lbl color={C.p}>AI Analysis Engine</Lbl>
        <h3 style={{fontSize:18,fontWeight:700,margin:"10px 0 6px",letterSpacing:"-0.02em"}}>Connect Anthropic API</h3>
        <p style={{fontSize:13,color:C.m,margin:"0 0 20px",lineHeight:1.6}}>Required to run contradiction detection. Your key is sent only to Anthropic — never stored.</p>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          <input type="password" value={apiKey} onChange={e=>setApiKey(e.target.value)} onKeyDown={e=>e.key==="Enter"&&onRun()} placeholder="sk-ant-api03-…"
            style={{flex:"1 1 260px",background:C.s2,border:`1px solid ${C.b2}`,color:C.w,padding:"13px 18px",borderRadius:8,fontSize:14,fontFamily:"monospace",outline:"none"}}/>
          <button onClick={onRun}
            style={{background:C.p,color:C.w,border:"none",padding:"13px 28px",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase"}}
            onMouseOver={e=>e.currentTarget.style.opacity="0.85"} onMouseOut={e=>e.currentTarget.style.opacity="1"}>
            Run Analysis →
          </button>
        </div>
        {error&&<div style={{marginTop:14,color:C.re,fontSize:13}}>⚠ {error}</div>}
      </div>
    </div>
  </div>;
}

function Scanning({step}){
  const pct=Math.round(((step+1)/STEPS.length)*100);
  return <div style={{background:C.bg,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:C.w,fontFamily:"'Inter',system-ui,sans-serif",padding:"2rem"}}>
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:60}}>
      <div style={{width:10,height:10,borderRadius:"50%",background:C.p}}/>
      <span style={{fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase"}}>Knowledge Aging Radar</span>
    </div>
    <div style={{width:"100%",maxWidth:480}}>
      <div style={{textAlign:"center",marginBottom:32}}>
        <Lbl color={C.p}>Scanning in Progress</Lbl>
        <div style={{fontSize:21,fontWeight:700,letterSpacing:"-0.025em",marginTop:12}}>Project Orion · GlobalBank PLC</div>
        <div style={{fontSize:13,color:C.d,marginTop:6}}>{pct}% complete</div>
      </div>
      <div style={{background:C.s1,height:3,borderRadius:2,marginBottom:36,overflow:"hidden"}}>
        <div style={{height:"100%",background:`linear-gradient(90deg,${C.p},#7b00cc)`,width:`${pct}%`,transition:"width 0.6s ease",borderRadius:2}}/>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:13}}>
        {STEPS.map((s,i)=>{const done=i<step,active=i===step; return(
          <div key={i} style={{display:"flex",alignItems:"center",gap:14,opacity:i>step?0.2:1,transition:"opacity 0.4s"}}>
            <div style={{width:22,height:22,borderRadius:"50%",flexShrink:0,background:done?C.p:"transparent",border:`2px solid ${done?C.p:active?C.p:C.vd}`,display:"flex",alignItems:"center",justifyContent:"center"}}>
              {done&&<span style={{fontSize:11,color:"#fff",fontWeight:700}}>✓</span>}
              {active&&<div style={{width:7,height:7,background:C.p,borderRadius:"50%",animation:"ks-pulse 1.1s ease-in-out infinite"}}/>}
            </div>
            <span style={{fontSize:13,color:active?C.w:C.m,fontWeight:active?600:400}}>{s}</span>
          </div>
        );})}
      </div>
    </div>
    <style>{`@keyframes ks-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}`}</style>
  </div>;
}

function Results({results,onBack}){
  const [tab,setTab]=useState("dashboard");
  const [exp,setExp]=useState({});
  const hc=results.overallHealth>=60?C.gr:results.overallHealth>=30?C.am:C.re;
  const gc=scored.filter(d=>d.rag==="green").length, ac=scored.filter(d=>d.rag==="amber").length, rc=scored.filter(d=>d.rag==="red").length;
  return <div style={{background:C.bg,minHeight:"100vh",color:C.w,fontFamily:"'Inter',system-ui,sans-serif"}}>
    <Nav right={<button onClick={onBack} style={{background:"transparent",border:`1px solid ${C.b2}`,color:C.m,padding:"6px 14px",borderRadius:6,fontSize:12,cursor:"pointer"}}>← New Scan</button>}/>
    <div style={{borderBottom:`1px solid ${C.b1}`,padding:"0 2rem",display:"flex"}}>
      {["dashboard","documents","contradictions"].map(t=>(
        <button key={t} onClick={()=>setTab(t)} style={{background:"transparent",border:"none",color:tab===t?C.w:C.d,padding:"16px 20px",fontSize:12,fontWeight:700,cursor:"pointer",letterSpacing:"0.1em",textTransform:"uppercase",borderBottom:`2px solid ${tab===t?C.p:"transparent"}`,marginBottom:-1}}>{t}</button>
      ))}
    </div>
    <div style={{maxWidth:1020,margin:"0 auto",padding:"40px 2rem 80px"}}>

      {tab==="dashboard"&&<div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:12,marginBottom:32}}>
          {[
            {lbl:"Overall Health Score",val:results.overallHealth,unit:"/100",col:hc},
            {lbl:"Documents Scanned",val:5,unit:"docs",col:C.p},
            {lbl:"Contradictions Found",val:results.contradictions.length,unit:"issues",col:C.am},
            {lbl:"Critical Issues",val:results.criticalCount,unit:"critical",col:results.criticalCount>0?C.re:C.gr}
          ].map((k,i)=>(
            <div key={i} style={{background:C.s1,border:`1px solid ${C.b1}`,borderRadius:8,padding:"22px 20px"}}>
              <Lbl>{k.lbl}</Lbl>
              <div style={{display:"flex",alignItems:"baseline",gap:6,marginTop:14}}>
                <span style={{fontSize:38,fontWeight:900,color:k.col,letterSpacing:"-0.04em",lineHeight:1}}>{k.val}</span>
                <span style={{fontSize:12,color:C.d}}>{k.unit}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:C.s1,border:`1px solid ${C.b1}`,borderLeft:`3px solid ${C.p}`,borderRadius:8,padding:"26px 28px",marginBottom:24}}>
          <Lbl color={C.p}>AI Executive Summary</Lbl>
          <p style={{fontSize:15,color:"#ccc",lineHeight:1.72,margin:"14px 0 0"}}>{results.narrative}</p>
        </div>
        <div style={{background:C.s1,border:`1px solid ${C.b1}`,borderRadius:8,padding:"22px 24px"}}>
          <Lbl>Document Health Breakdown</Lbl>
          <div style={{display:"flex",gap:32,marginTop:18,flexWrap:"wrap"}}>
            {[["green",gc],["amber",ac],["red",rc]].map(([s,n])=>{const r=RAG[s]; return(
              <div key={s} style={{display:"flex",alignItems:"center",gap:10}}>
                <div style={{width:10,height:10,borderRadius:"50%",background:r.fg}}/>
                <Lbl color={r.fg}>{r.lbl}</Lbl>
                <span style={{fontSize:28,fontWeight:900,color:r.fg,letterSpacing:"-0.03em",lineHeight:1}}>{n}</span>
              </div>
            );})}
          </div>
        </div>
      </div>}

      {tab==="documents"&&<div style={{overflowX:"auto"}}>
        <table style={{width:"100%",borderCollapse:"collapse",minWidth:720}}>
          <thead><tr style={{borderBottom:`1px solid ${C.b1}`}}>
            {["Document","Type","Author","Age","Freshness","Health","Author Status"].map(h=><th key={h} style={{padding:"10px 14px",textAlign:"left"}}><Lbl>{h}</Lbl></th>)}
          </tr></thead>
          <tbody>{scored.map(doc=>{const r=RAG[doc.rag]; return(
            <tr key={doc.id} style={{borderBottom:`1px solid ${C.b1}`}}
              onMouseOver={e=>e.currentTarget.style.background=C.s1} onMouseOut={e=>e.currentTarget.style.background="transparent"}>
              <td style={{padding:"15px 14px",fontSize:14,fontWeight:700}}>{doc.title}</td>
              <td style={{padding:"15px 14px"}}><Lbl color={C.d}>{doc.type}</Lbl></td>
              <td style={{padding:"15px 14px",fontSize:13,color:C.m}}>{doc.author}</td>
              <td style={{padding:"15px 14px",fontSize:13,color:C.d}}>{doc.daysAgo}d</td>
              <td style={{padding:"15px 14px"}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{background:C.s2,height:4,width:72,borderRadius:2,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${doc.score}%`,background:r.fg,borderRadius:2}}/>
                  </div>
                  <span style={{fontSize:13,fontWeight:700,color:r.fg}}>{doc.score}</span>
                </div>
              </td>
              <td style={{padding:"15px 14px"}}><Bdg text={r.lbl} fg={r.fg} bg={r.bg}/></td>
              <td style={{padding:"15px 14px"}}>{doc.authorOnProject?<span style={{fontSize:12,color:C.gr}}>● Active</span>:<span style={{fontSize:12,color:C.am}}>⚠ Left Project</span>}</td>
            </tr>
          );})}
          </tbody>
        </table>
      </div>}

      {tab==="contradictions"&&<div style={{display:"flex",flexDirection:"column",gap:10}}>
        <div style={{marginBottom:8}}><Lbl>{results.contradictions.length} Contradictions Detected · Sorted by Severity</Lbl></div>
        {results.contradictions.map((c,i)=>{const sv=SEV[c.severity]||SEV.MEDIUM,open=!!exp[i]; return(
          <div key={i} style={{background:C.s1,border:`1px solid ${C.b1}`,borderRadius:8,overflow:"hidden"}}>
            <button onClick={()=>setExp(p=>({...p,[i]:!p[i]}))} style={{width:"100%",background:"transparent",border:"none",padding:"18px 22px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",color:C.w,textAlign:"left"}}>
              <div style={{display:"flex",alignItems:"center",gap:14}}>
                <Bdg text={c.severity} fg={sv.fg} bg={sv.bg}/>
                <span style={{fontSize:15,fontWeight:700,letterSpacing:"-0.015em"}}>{c.topic}</span>
              </div>
              <span style={{color:C.d,fontSize:18,flexShrink:0,marginLeft:12}}>{open?"▲":"▼"}</span>
            </button>
            {open&&<div style={{padding:"0 22px 22px",borderTop:`1px solid ${C.b1}`}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:18,marginBottom:14}}>
                {[c.claimA,c.claimB].map((cl,j)=>(
                  <div key={j} style={{background:C.s2,border:`1px solid ${C.b1}`,borderRadius:6,padding:"14px 16px"}}>
                    <Lbl>{cl.document} · {cl.age}</Lbl>
                    <p style={{fontSize:14,color:"#ddd",lineHeight:1.55,margin:"10px 0 0"}}>"{cl.claim}"</p>
                  </div>
                ))}
              </div>
              <div style={{background:C.pd,border:`1px solid ${C.pb}`,borderRadius:6,padding:"14px 16px",marginBottom:10}}>
                <Lbl color={C.p}>Trust Recommendation</Lbl>
                <div style={{fontSize:14,fontWeight:700,margin:"8px 0 5px"}}>→ {c.trustedDocument}</div>
                <div style={{fontSize:13,color:C.m,lineHeight:1.55}}>{c.trustReason}</div>
              </div>
              <div style={{background:C.s2,border:`1px solid ${C.b1}`,borderRadius:6,padding:"14px 16px"}}>
                <Lbl>Recommended Fix</Lbl>
                <p style={{fontSize:13,color:"#bbb",lineHeight:1.6,margin:"8px 0 0"}}>{c.recommendedFix}</p>
              </div>
            </div>}
          </div>
        );})}
      </div>}
    </div>
  </div>;
}

export default function App(){
  const [screen,setScreen]=useState("landing");
  const [apiKey,setApiKey]=useState("");
  const [step,setStep]=useState(0);
  const [results,setResults]=useState(null);
  const [error,setError]=useState(null);

  async function run(){
    if(!apiKey.trim()){setError("Please enter your Anthropic API key.");return;}
    setError(null);setScreen("scanning");setStep(0);
    try{
      for(let i=0;i<3;i++){setStep(i);await new Promise(r=>setTimeout(r,550));}
      setStep(3);
      const contradictions=await getContradictions(apiKey);
      setStep(4);await new Promise(r=>setTimeout(r,400));
      setStep(5);
      const narrative=await getNarrative(apiKey,contradictions);
      setStep(6);await new Promise(r=>setTimeout(r,500));
      const sorted=[...contradictions].sort((a,b)=>({CRITICAL:0,HIGH:1,MEDIUM:2}[a.severity]??3)-({CRITICAL:0,HIGH:1,MEDIUM:2}[b.severity]??3));
      const avg=Math.round(scored.reduce((s,d)=>s+d.score,0)/scored.length);
      setResults({contradictions:sorted,narrative,overallHealth:avg,criticalCount:sorted.filter(c=>c.severity==="CRITICAL").length});
      setScreen("results");
    }catch(err){setError(`Analysis failed: ${err.message}`);setScreen("landing");}
  }

  if(screen==="scanning") return <Scanning step={step}/>;
  if(screen==="results"&&results) return <Results results={results} onBack={()=>setScreen("landing")}/>;
  return <Landing apiKey={apiKey} setApiKey={setApiKey} onRun={run} error={error}/>;
}
