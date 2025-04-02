interface SnippetParams {
  name: string;
  link: string;
  theme: string;
  position: string;
}

export const generateSnippet = ({ name, link, theme, position }: SnippetParams) => {
  return `<script src="https://cookiekit.dev/embed.js" data-name="${name}" data-link="${link}" data-theme="${theme}" data-position="${position}"></script>`;
};
