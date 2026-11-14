import path from 'node:path';
import { pathToFileURL } from 'node:url';

const workspaceDir='/Users/vnalwar/work/law/law-study-notes';
const skillDir='/Users/vnalwar/.codex/plugins/cache/openai-primary-runtime/presentations/26.1022.11436/skills/presentations';
const candidatePath=path.join(workspaceDir,'presentation-build/case-presentation-print-draft.pptx');
const finalPath=path.join(workspaceDir,'Academics/Law/SPPU/LLB - II/Semester - III/Professional Ethics and Contempt of Court Law/Journal/A_S_Mohammed_Rafi_Case_Presentation_Print_Friendly.pptx');
const {finalizePresentation}=await import(pathToFileURL(path.join(skillDir,'container_tools/artifact_tool_utils.mjs')).href);
const result=await finalizePresentation({
  explicitTotalSlideCount:7,
  workspaceDir,
  candidatePath,
  finalPath,
  pythonExecutable:'/Users/vnalwar/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3',
  integrityValidatorPath:path.join(skillDir,'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath:path.join(skillDir,'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit'],
  requiredNativeTableOwnerSlides:[],
  requiredNativeChartOwnerSlides:[],
  fontPolicy:{basis:'design',families:['Aptos']},
  verifyArtifactToolImport:true,
  receiptPath:path.join(workspaceDir,'presentation-build/case-presentation-print-validation.json'),
});
console.log(JSON.stringify(result));
