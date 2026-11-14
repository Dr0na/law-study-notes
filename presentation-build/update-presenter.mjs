import fs from 'node:fs/promises';
import path from 'node:path';
import { FileBlob, PresentationFile } from '@oai/artifact-tool';

const root='/Users/vnalwar/work/law/law-study-notes';
const journal=path.join(root,'Academics/Law/SPPU/LLB - II/Semester - III/Professional Ethics and Contempt of Court Law/Journal');
const build=path.join(root,'presentation-build');
const decks=[
  {
    input:path.join(journal,'A_S_Mohammed_Rafi_Case_Presentation.pptx'),
    output:path.join(build,'A_S_Mohammed_Rafi_Case_Presentation_VikasNalwar.pptx'),
    preview:path.join(build,'cover-standard-updated.png'),
  },
  {
    input:path.join(journal,'A_S_Mohammed_Rafi_Case_Presentation_Print_Friendly.pptx'),
    output:path.join(build,'A_S_Mohammed_Rafi_Case_Presentation_Print_Friendly_VikasNalwar.pptx'),
    preview:path.join(build,'cover-print-updated.png'),
  },
];

for (const item of decks) {
  const p=await PresentationFile.importPptx(await FileBlob.load(item.input));
  const target=p.slides.items[0]?.shapes.items.find(shape=>String(shape.text||'').startsWith('Presented by:'));
  if (!target) throw new Error(`Presenter field not found in ${item.input}`);
  target.text.replace(String(target.text),'Presented by: Vikas Nalwar     Class: LLB-II');
  const png=await p.export({slide:p.slides.items[0],format:'png',scale:1});
  await fs.writeFile(item.preview,new Uint8Array(await png.arrayBuffer()));
  const pptx=await PresentationFile.exportPptx(p);
  await pptx.save(item.output);
  console.log(JSON.stringify({output:item.output,slides:p.slides.items.length}));
}
