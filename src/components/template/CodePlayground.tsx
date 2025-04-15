import SandpackBody from '@/components/organisms/SandpackBody';
import SandpackHeader from '@/components/organisms/SandpackHeader';
import { options, theme } from '@/lib/sandpack';
import type {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';
import { SandpackProvider } from '@codesandbox/sandpack-react';

export default function CodePlayground({
  template = 'static',
  files,
  title,
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
      <SandpackHeader title={title} />
      <SandpackBody files={files} />
    </SandpackProvider>
  );
}
