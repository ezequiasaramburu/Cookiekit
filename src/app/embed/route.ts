import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const name = searchParams.get('name') || 'This site';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const link = searchParams.get('link') || '#';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const theme = searchParams.get('theme') || 'light';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const position = searchParams.get('position') || 'right';

  // Create the JavaScript with the variables
  const js = `
(function() {
  // Check if consent was already given
  if (localStorage.getItem('cookieConsent') === 'true') {
    return;
  }

  // Create banner element
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.style.cssText = \`
    position: fixed;
    \${position === 'left' ? 'left: 20px;' : 'right: 20px;'}
    bottom: 20px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    max-width: 400px;
    font-family: system-ui, -apple-system, sans-serif;
    \${theme === 'dark' 
      ? 'background-color: #1f2937; color: white;' 
      : 'background-color: white; color: #1f2937;'}
  \`;

  // Create content
  banner.innerHTML = \`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <p style="margin: 0; font-size: 14px; line-height: 1.5;">
        \${name} uses cookies to enhance your experience.
      </p>
      <div style="display: flex; gap: 8px; align-items: center;">
        <a 
          href="\${link}" 
          target="_blank" 
          rel="noopener noreferrer"
          style="
            font-size: 14px;
            text-decoration: underline;
            \${theme === 'dark' ? 'color: #60a5fa;' : 'color: #2563eb;'}
          "
        >
          Privacy Policy
        </a>
        <button 
          id="accept-cookies"
          style="
            padding: 6px 12px;
            border-radius: 4px;
            border: none;
            background-color: \${theme === 'dark' ? '#3b82f6' : '#2563eb'};
            color: white;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.2s;
          "
          onmouseover="this.style.backgroundColor = '\${theme === 'dark' ? '#2563eb' : '#1d4ed8'}'"
          onmouseout="this.style.backgroundColor = '\${theme === 'dark' ? '#3b82f6' : '#2563eb'}'"
        >
          Accept
        </button>
      </div>
    </div>
  \`;

  // Add accept handler
  const acceptButton = banner.querySelector('#accept-cookies');
  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'true');
    banner.style.opacity = '0';
    banner.style.transition = 'opacity 0.3s ease';
    setTimeout(() => banner.remove(), 300);
  });

  // Add to page
  document.body.appendChild(banner);
})();
`;

  return new Response(js, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
