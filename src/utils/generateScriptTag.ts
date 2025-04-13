interface ScriptTagParams {
  siteName: string;
  privacyPolicyLink: string;
  theme: 'light' | 'dark';
  position: 'bottom-left' | 'bottom-right';
}

export function generateScriptTag({
  siteName,
  privacyPolicyLink,
  theme,
  position,
}: ScriptTagParams): string {
  const params = new URLSearchParams({
    name: siteName,
    link: privacyPolicyLink,
    theme,
    position: position === 'bottom-left' ? 'left' : 'right',
  });

  return `<script src="https://cookiekit.dev/embed.js?${params.toString()}"></script>`;
} 