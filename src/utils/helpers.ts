export function clsx(...args: unknown[]) {
  return args.flat().filter(Boolean).join(' ').trim();
}
