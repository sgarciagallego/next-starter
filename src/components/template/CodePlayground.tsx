import SandpackBody from '@/components/organisms/SandpackBody';
import SandpackHeader from '@/components/organisms/SandpackHeader';
import { options } from '@/lib/sandpack/options';
import { theme } from '@/lib/sandpack/theme';
import type {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';
import { SandpackProvider } from '@codesandbox/sandpack-react';

export default function CodePlayground({
  template = 'static',
  files,
  title = 'Playground',
}: {
  template?: SandpackPredefinedTemplate;
  files?: SandpackFiles;
  title?: string;
}) {
  return (
    <SandpackProvider
      template={template}
      files={files}
      theme={theme}
      options={options}
    >
      <SandpackHeader
        title={`${template.charAt(0).toUpperCase() + template.slice(1)} ${title}`}
      />
      <SandpackBody files={files} template={template} />
    </SandpackProvider>
  );
}
