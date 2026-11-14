import path from 'node:path';
import { pathToFileURL } from 'node:url';

const workspaceDir='/Users/vnalwar/work/law/law-study-notes';
const skillDir='/Users/vnalwar/.codex/plugins/cache/openai-primary-runtime/presentations/26.1022.11436/skills/presentations';
const {finalizePresentation}=await import(pathToFileURL(path.join(skillDir,'container_tools/artifact_tool_utils.mjs')).href);
for (const [stem,candidate,finalName] of [
  ['standard','A_S_Mohammed_Rafi_Case_Presentation_VikasNalwar.pptx','A_S_Mohammed_Rafi_Case_Presentation_VikasNalwar_Final.pptx'],
  ['print','A_S_Mohammed_Rafi_Case_Presentation_Print_Friendly_VikasNalwar.pptx','A_S_Mohammed_Rafi_Case_Presentation_Print_Friendly_VikasNalwar_Final.pptx'],
]) {
  const result=await finalizePresentation({
    explicitTotalSlideCount:7,
    workspaceDir,
    candidatePath:path.join(workspaceDir,'presentation-build',candidate),
    finalPath:path.join(workspaceDir,'presentation-build',finalName),
    pythonExecutable:'/Users/vnalwar/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3',
    integrityValidatorPath:path.join(skillDir,'container_tools/inspect_presentation_package_integrity.py'),
    layoutValidatorPath:path.join(skillDir,'container_tools/inspect_presentation_layout_geometry.py'),
    layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit'],
    requiredNativeTableOwnerSlides:[],
    requiredNativeChartOwnerSlides:[],
    fontPolicy:{basis:'design',families:['Aptos']},
    verifyArtifactToolImport:true,
    receiptPath:path.join(workspaceDir,`presenter-update-${stem}-validation.json`),
  });
  console.log(JSON.stringify({stem,finalPath:result.finalPath,slideCount:result.packageIntegrity?.slide_count}));
}
