import fs from 'node:fs/promises';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const OUT = new URL('../Academics/Law/SPPU/LLB - II/Semester - III/Professional Ethics and Contempt of Court Law/Journal/', import.meta.url);
const DRAFT = new URL('./case-presentation-print-draft.pptx', import.meta.url);
const PREVIEW = new URL('./preview-print/', import.meta.url);
const C = { ink:'#111111', paper:'#FFFFFF', wine:'#222222', gold:'#555555', muted:'#333333', pale:'#D9D9D9', white:'#FFFFFF', green:'#222222' };
const W = 1280, H = 720;
const p = Presentation.create({ slideSize:{ width:W, height:H } });

function shape(slide, geometry, name, x, y, w, h, fill='none') {
  return slide.shapes.add({ geometry, name, position:{left:x,top:y,width:w,height:h}, fill, line:{style:'solid',fill:'none',width:0} });
}
function text(slide, name, value, x, y, w, h, fontSize, color=C.ink, bold=false, alignment='left') {
  const box = shape(slide,'textbox',name,x,y,w,h);
  box.text = value;
  box.text.style = { fontFamily:'Aptos', fontSize, color, bold, alignment };
  return box;
}
function base(title, section, n) {
  const slide = p.slides.add({layout:'Blank'});
  slide.background.fill = C.paper;
  shape(slide,'rect','top-accent',0,0,W,10,C.wine);
  text(slide,'section-label',section.toUpperCase(),72,38,900,24,15,C.wine,true);
  text(slide,'slide-title',title,72,74,1136,62,38,C.ink,true);
  shape(slide,'rect','footer-rule',72,665,1136,1,C.pale);
  text(slide,'footer-case','A.S. Mohammed Rafi v. State of Tamil Nadu  •  Supreme Court of India',72,675,980,22,14,C.muted);
  text(slide,'slide-number',String(n).padStart(2,'0'),1140,675,68,22,14,C.wine,true,'right');
  return slide;
}

// 1. Cover
{
  const s=p.slides.add({layout:'Blank'}); s.background.fill=C.paper;
  shape(s,'rect','cover-accent',0,0,18,H,C.wine);
  text(s,'cover-kicker','CASE COMMENT  /  PROFESSIONAL ETHICS',76,78,900,30,18,C.muted,true);
  text(s,'cover-title','A.S. Mohammed Rafi\nv. State of Tamil Nadu',76,148,880,170,54,C.ink,true);
  shape(s,'rect','gold-rule',78,354,190,5,C.gold);
  text(s,'cover-question','Can a Bar Association refuse legal representation to an accused?',76,386,820,90,30,C.ink);
  text(s,'cover-court','Supreme Court of India  ·  6 December 2010',76,548,860,34,20,C.ink,true);
  text(s,'cover-citation','(2011) 1 SCC 688  |  AIR 2011 SC 308',76,592,860,28,18,C.muted);
  text(s,'cover-presenter','Presented by: ____________________     Class: __________',76,650,1050,26,17,C.muted);
  s.speakerNotes.text='Open with the central question: may lawyers collectively refuse to defend someone because of the accusation or public reaction? This presentation focuses on the Supreme Court\'s ethics ruling in the connected civil appeals in A.S. Mohammed Rafi v. State of Tamil Nadu. Source: Supreme Court judgment, https://indiankanoon.org/doc/153132263/; course journal case note.';
}

// 2. Case context
{
  const s=base('One judgment, connected proceedings','Case context',2);
  text(s,'left-lead','The judgment dealt with two connected tracks.',72,168,475,58,29,C.wine,true);
  text(s,'left-body','Rafi’s criminal appeal arose from his FIR. Connected civil appeals addressed the Coimbatore Bar Association’s resolution not to represent accused policemen.',72,240,486,206,25);
  shape(s,'rect','divider',600,170,2,390,C.pale);
  text(s,'right-label','THE ETHICS QUESTION',660,182,500,28,16,C.muted,true);
  text(s,'right-question','Can a collective Bar resolution prevent every member from appearing for a particular accused?',660,226,490,154,34,C.ink,true);
  shape(s,'rect','answer-rule',660,410,120,5,C.gold);
  text(s,'answer','The Court said no. A collective boycott is incompatible with professional ethics and the right to legal representation.',660,442,490,118,25,C.green,true);
  s.speakerNotes.text='The judgment is a combined decision. The criminal appeal by A.S. Mohammed Rafi had its own disposition. The professional ethics declaration arose in connected civil appeals, after the Court noted that the Coimbatore Bar Association had resolved that no member would defend accused policemen in the criminal case against them. Source: Supreme Court judgment, paras 7–15, https://indiankanoon.org/doc/153132263/.';
}

// 3. Facts and issue
{
  const s=base('The dispute and the legal question','Facts and issues',3);
  text(s,'sequence-label','WHAT HAPPENED',72,168,400,26,16,C.wine,true);
  const steps=[
    ['01','A Bar resolution','No Coimbatore Bar member would defend the accused policemen in the criminal case.'],
    ['02','A broader concern','The Court noted similar boycotts aimed at particular accused persons in other cases.'],
    ['03','A question of principle','Does professional choice belong to each advocate, or can a Bar association impose a collective refusal?'],
  ];
  let y=212;
  for (const [n,h,b] of steps) {
    text(s,'step-number-'+n,n,72,y,68,42,22,C.gold,true);
    text(s,'step-head-'+n,h,158,y,430,34,24,C.ink,true);
    text(s,'step-body-'+n,b,158,y+38,470,64,19,C.muted);
    y+=136;
  }
  shape(s,'rect','right-panel',700,178,500,390,C.pale);
  text(s,'right-panel-label','ISSUE',742,218,410,28,16,C.ink,true);
  text(s,'right-panel-main','May a Bar Association refuse representation to a named accused or category of accused?',742,270,410,150,27,C.ink,true);
  text(s,'right-panel-context','The Court considered Article 22(1) and the Bar Council of India Rules on professional conduct.',742,456,410,72,18,C.muted);
  s.speakerNotes.text='The Supreme Court recorded the resolution as one refusing representation to accused policemen. It then placed that incident in the wider context of similar resolutions against persons accused of heinous crimes or other unpopular accused. The core issue is the legality and ethical propriety of a collective boycott. Source: judgment, paras 14–16 and 30–32, https://indiankanoon.org/doc/153132263/.';
}

// 4. Legal anchors
{
  const s=base('Two legal anchors','Reasoning',4);
  text(s,'anchor1-num','01',72,176,86,46,26,C.gold,true);
  text(s,'anchor1-title','Article 22(1)',172,176,420,44,31,C.ink,true);
  text(s,'anchor1-text','An arrested person must not be denied the right to consult and be defended by a legal practitioner of their choice.',172,230,420,118,23,C.muted);
  shape(s,'rect','middle-line',640,174,2,390,C.pale);
  text(s,'anchor2-num','02',700,176,86,46,26,C.gold,true);
  text(s,'anchor2-title','BCI Rules, Chapter II',800,176,400,44,31,C.ink,true);
  text(s,'anchor2-text','An advocate is generally bound to accept a brief at a fee consistent with their standing and the case, subject to special circumstances.',800,230,400,142,23,C.muted);
  shape(s,'rect','bottom-rule',72,430,1136,5,C.wine);
  text(s,'bottom-statement','Individual choice may exist; collective coercion cannot extinguish access to counsel.',72,468,1136,76,33,C.green,true,'center');
  text(s,'bottom-note','The judgment ties professional ethics to the rule of law and a fair criminal process.',132,558,1016,38,20,C.muted,false,'center');
  s.speakerNotes.text='The Court quoted Article 22(1) of the Constitution and Chapter II of the Bar Council of India Rules. The Rule says an advocate is bound to accept a brief at a fee consistent with standing and the nature of the case, while special circumstances may justify refusal. The holding invalidated association-wide resolutions; it does not mean every lawyer must accept every brief in all circumstances. Source: judgment, paras 30–32, https://indiankanoon.org/doc/153132263/.';
}

// 5. Decision and disposition
{
  const s=base('What the Supreme Court decided','Holding and outcome',5);
  text(s,'holding-label','HOLDING',72,168,320,28,16,C.wine,true);
  text(s,'holding','A Bar Association cannot impose a collective boycott of a particular accused.',82,220,500,132,32,C.ink,true);
  text(s,'explanation','The Court declared such resolutions null and void as contrary to constitutional norms and professional ethics.',82,372,500,92,22,C.muted);
  shape(s,'rect','outcome-panel',654,174,554,390,C.pale);
  text(s,'outcome-title','DISPOSITION',696,210,460,28,16,C.wine,true);
  text(s,'criminal-label','Rafi criminal appeal',696,260,460,30,23,C.ink,true);
  text(s,'criminal-text','State directed to pay total compensation of Rs 1.5 lakh; the FIR against Rafi and the related FIR against police were quashed under Article 142.',696,300,460,83,19,C.muted);
  shape(s,'rect','outcome-divider',696,399,460,1,'#C8BBA8');
  text(s,'connected-label','Connected civil appeals',696,424,460,30,23,C.ink,true);
  text(s,'connected-text','The observations against the Bar Association were quashed; the Court declared collective boycott resolutions null and void.',696,464,460,76,19,C.muted);
  s.speakerNotes.text='Separate the two results. In Criminal Appeal No. 2310 of 2010, the Supreme Court directed total compensation of Rs 1,50,000 (noting Rs 50,000 had already been paid), quashed FIR 2105 against Rafi, and quashed FIR 2106 against the police under Article 142. In connected Civil Appeals 10304–10308 of 2010, it quashed the High Court\'s observations against the Coimbatore Bar Association and made its broader declaration against boycott resolutions. Source: judgment, paras 7–10 and 12–34, https://indiankanoon.org/doc/153132263/.';
}

// 6. Ratio
{
  const s=base('The ratio: representation is not endorsement','Professional ethics',6);
  text(s,'main-idea','Defending an accused safeguards the process; it does not approve the alleged conduct.',72,166,1136,96,35,C.green,true);
  const items=[
    ['A fair trial needs counsel','The accused must be able to challenge the charge and test the prosecution case through legal process.'],
    ['Public opinion is not adjudication','An accused cannot be denied a defence because the charge is unpopular or disturbing.'],
    ['The Bar must remain independent','A collective resolution cannot make access to a lawyer depend on social approval.'],
  ];
  let y=300;
  for (let i=0;i<items.length;i++) {
    const [h,b]=items[i];
    shape(s,'rect','item-rule-'+i,72,y+5,6,84,i===1?C.gold:C.wine);
    text(s,'item-head-'+i,h,102,y,1030,32,24,C.ink,true);
    text(s,'item-body-'+i,b,102,y+38,1030,52,19,C.muted);
    y+=112;
  }
  s.speakerNotes.text='A Bar Association cannot pass a resolution preventing all its members from defending a particular accused or category of accused. The lawyer\'s role is distinct from that of the judge: the lawyer supports lawful process, not social approval. The BCI Rule allows special circumstances for individual refusal; the Court rejects collective coercion. Source: judgment, paras 16, 30–33, https://indiankanoon.org/doc/153132263/.';
}

// 7. Conclusion and citation
{
  const s=base('What this case asks of future advocates','Conclusion',7);
  text(s,'takeaway','When the accused is unpopular, professional ethics matter most.',72,170,1136,74,38,C.wine,true);
  text(s,'practice-title','In practice',72,286,260,32,19,C.muted,true);
  text(s,'practice','Assess a brief independently. Do not let a collective boycott decide who may be represented. Preserve the court’s ability to test the case on evidence and law.',72,334,498,150,25,C.ink);
  shape(s,'rect','question-divider',640,284,2,244,C.pale);
  text(s,'discussion-title','For discussion',700,286,350,32,19,C.muted,true);
  text(s,'discussion','Can a lawyer personally decline a brief? How is that different from a Bar Association directing every member to refuse it?',700,334,460,150,27,C.ink,true);
  shape(s,'rect','source-rule',72,552,1136,3,C.gold);
  text(s,'source-text','A.S. Mohammed Rafi v. State of Tamil Nadu  |  (2011) 1 SCC 688  |  AIR 2011 SC 308  |  decided 6 Dec 2010',72,576,1136,34,18,C.muted,false,'center');
  text(s,'authority-text','Constitution of India, Article 22(1)  •  Bar Council of India Rules, Chapter II',72,615,1136,28,16,C.muted,false,'center');
  s.speakerNotes.text='Close with the distinction: the judgment rejects collective boycott resolutions; it does not erase the Rule\'s allowance for special circumstances in an individual advocate\'s decision. Ask whether personal refusal and collective coercion raise the same ethical concern. Citation: A.S. Mohammed Rafi v. State of Tamil Nadu, (2011) 1 SCC 688; AIR 2011 SC 308; decided 6 December 2010; Markandey Katju and Gyan Sudha Misra, JJ. Source: https://indiankanoon.org/doc/153132263/; course journal case note.';
}

await fs.mkdir(PREVIEW,{recursive:true});
for (let i=0;i<p.slides.items.length;i++) {
  const blob=await p.export({slide:p.slides.items[i],format:'png',scale:1});
  await fs.writeFile(new URL(`slide-${String(i+1).padStart(2,'0')}.png`,PREVIEW),new Uint8Array(await blob.arrayBuffer()));
}
const pptx=await PresentationFile.exportPptx(p);
await pptx.save(DRAFT.pathname);
const pdf=await p.export({format:'pdf'});
const pdfPath=new URL('A_S_Mohammed_Rafi_Case_Presentation_Print_Friendly.pdf',OUT);
await fs.writeFile(pdfPath,new Uint8Array(await pdf.arrayBuffer()));
console.log(JSON.stringify({slides:p.slides.items.length,draft:DRAFT.pathname,pdf:pdfPath.pathname}));
