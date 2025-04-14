'use client';

import H from '@/components/atoms/H';
import List from '@/components/molecules/List';
import {
  block,
  hidden,
  sandpackLayout,
  sandpackWrapper,
  theme,
} from '@/lib/sandpack';
import type {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  UnstyledOpenInCodeSandboxButton,
  useSandpack,
  useSandpackNavigation,
} from '@codesandbox/sandpack-react';
import {
  RefreshCw,
  SkipBack,
  SquareArrowOutUpRight,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { clsx } from 'utils/helpers';

function SandpackHeader({
  title = 'Code Playground',
}: { title?: string }) {
  const { sandpack } = useSandpack();
  const { resetAllFiles } = sandpack;

  return (
    <header>
      <List>
        <li>
          <H level={2}>{title}</H>
        </li>
        <li>
          <button
            type='button'
            onClick={() => resetAllFiles()}
            aria-label='Reset code'
            title='Reset code'
          >
            <SkipBack />
          </button>
        </li>
        <li>
          <UnstyledOpenInCodeSandboxButton
            aria-label='Open in CodeSandbox'
            title='Open in CodeSandbox'
          >
            <SquareArrowOutUpRight />
          </UnstyledOpenInCodeSandboxButton>
        </li>
      </List>
    </header>
  );
}

function SandpackPreviewActions({
  isPreview,
  setMode,
}: {
  isPreview: boolean;
  setMode: (mode: 'result' | 'console') => void;
}) {
  const [reloading, setReloading] = useState(false);
  const { sandpack, listen } = useSandpack();
  const { refresh } = useSandpackNavigation();

  useEffect(() => {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const stopListening = listen((msg: any) => {
      if (msg?.status === 'idle') {
        setReloading(false);
      }
    });

    return () => {
      stopListening();
    };
  }, [listen]);

  return (
    // biome-ignore lint/a11y/useSemanticElements: <explanation>
    <div role='group' aria-label='Sandpack Preview Actions'>
      <List>
        <li>
          <button
            type='button'
            onClick={() => setMode('result')}
            aria-pressed={isPreview}
            className={clsx(isPreview ? 'active' : null)}
          >
            Preview
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={() => setMode('console')}
            aria-pressed={!isPreview}
            className={clsx(!isPreview ? 'active' : null)}
          >
            Console
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={() => {
              setReloading(true);
              refresh();
            }}
            aria-label='Refresh preview pane'
            title='Refresh preview pane'
          >
            <RefreshCw
              className={clsx(
                reloading && 'animate-spin',
                sandpack?.status === 'idle' && 'text-zinc-600'
              )}
            />
          </button>
        </li>
      </List>
    </div>
  );
}

function SandpackPreviewPane({
  isPreview,
}: { isPreview: boolean }) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: <explanation>
    <div role='group' aria-label='Sandpack Preview Pane'>
      <output className={clsx(!isPreview ? hidden : block)}>
        <SandpackPreview
          showOpenInCodeSandbox={false}
          showRefreshButton={false}
        />
      </output>

      <output className={clsx(isPreview ? hidden : block)}>
        <SandpackConsole
          showHeader={false}
          showResetConsoleButton={false}
          resetOnPreviewRestart
          standalone
        />
      </output>
    </div>
  );
}

function SandpackCodePreview() {
  const [mode, setMode] = useState<'result' | 'console'>(
    'result'
  );
  const isPreview = mode === 'result';

  const props = {
    mode,
    setMode,
    isPreview,
  };

  return (
    <div>
      <SandpackPreviewActions {...props} />
      <SandpackPreviewPane {...props} />
    </div>
  );
}

function SandpackBody({
  files,
}: {
  files?: SandpackFiles;
}) {
  return (
    <div>
      <SandpackCodeEditor
        showTabs={files && Object.keys(files).length > 1}
      />
      <SandpackCodePreview />
    </div>
  );
}

export function CodePlayground({
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
      options={{
        classes: {
          'sp-wrapper': sandpackWrapper,
          'sp-layout': sandpackLayout,
        },
      }}
    >
      <SandpackLayout>
        <SandpackHeader title={title} />
        <SandpackBody files={files} />
      </SandpackLayout>
    </SandpackProvider>
  );
}
