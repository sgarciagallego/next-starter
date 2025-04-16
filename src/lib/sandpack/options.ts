import type { SandpackOptions } from '@codesandbox/sandpack-react';
import { css } from '@linaria/core';

const sandpackWrapper = css`
  overflow: hidden !important;
  height: 100% !important;
  border-radius: 0.5rem !important;
  display: flex !important;
  flex-direction: column !important;
  background: var(--sp-colors-surface1) !important;
`;

const sandpackTabs = css`
  border-bottom: 0.125rem solid var(--sp-colors-surface2) !important;
  padding: 0.625rem 1.25rem !important;
  background: unset !important;
  font-size: 1rem !important;
`;

const sandpackTabsScrollableContainer = css`
  overflow: unset !important;
  min-height: unset !important;
  margin-bottom: unset !important;
  padding: unset !important;
  align-items: center !important;
  gap: 1rem !important;
`;

const sandpackTabContainer = css`
  margin: unset !important;
  padding-right: unset !important;
  display: block !important;

  &:has(button:focus) {
    outline: unset !important;
  }
`;

const sandpackTabButton = css`
  height: unset !important;
  padding: unset !important;
  position: relative !important;
  line-height: 1.5 !important;

  &[data-active="true"] {
    color: var(--sp-colors-hover) !important;

    &::after {
      content: '' !important;
      position: absolute !important;
      bottom: -0.75rem !important;
      left: -0.125rem !important;
      right: -0.125rem !important;
      width: calc(100% + 0.25rem) !important;
      height: 0.125rem !important;
      background: var(--sp-colors-accent) !important;
    }
  }
`;

const sandpackCodeEditor = css`
  @media (min-width: 320px) and (max-width: 1023.9px) {
    min-height: 12rem !important;
  }
  max-height: calc(100svh - 16rem) !important;
`;

const sandpackPreviewIframe = css`
  min-height: 12rem !important;
`;

const sandpackConsole = css`
  @media (min-width: 320px) and (max-width: 1023.9px) {
    min-height: 12rem !important;
  }

  & pre {
    white-space: pre-wrap !important;
  }
`;

const sandpackConsoleItem = css`
  font-size: var(--sp-font-size) !important;
  line-height: var(--sp-font-lineHeight) !important;

  &:not(:first-child)::after {
    height: unset !important;
    border: 1px dashed var(--sp-colors-surface2) !important;
    background: unset !important;
  }
`;

export const options: SandpackOptions = {
  classes: {
    'sp-wrapper': sandpackWrapper,
    'sp-tabs': sandpackTabs,
    'sp-tabs-scrollable-container':
      sandpackTabsScrollableContainer,
    'sp-tab-container': sandpackTabContainer,
    'sp-tab-button': sandpackTabButton,
    'sp-code-editor': sandpackCodeEditor,
    'sp-preview-iframe': sandpackPreviewIframe,
    'sp-console': sandpackConsole,
    'sp-console-item': sandpackConsoleItem,
  },
};
