export default ({ content, lang, styles, title }) => /*html*/ `
  <!DOCTYPE html>
  <html lang="${lang || "en"}" prefix="og:http://ogp.me/ns#">
    <head>
      <title>
        ${title ? `${title} | re1` : "re1 – Web developer"}
      </title>
      <meta charset="utf-8" />

      <meta name="description" content="Front-end web developer based in Vienna, Austria" />

      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <link rel="stylesheet" href="/static/css/main.css" />
      <link rel="stylesheet" href="/static/css/base/fonts.css" />
      <link rel="stylesheet" href="/static/css/base/typography.css" />
      <link rel="stylesheet" href="/static/css/components/header.css" />
      <!-- Include additional stylesheets from style parameter -->
      ${
  styles
    ? styles
      .map((style) => `<link rel="stylesheet" href="${style}" />`)
      .join("")
    : ""
}
      <!-- Load less important CSS asynchronously -->
      <link rel="preload" href="/static/css/base/animations.css" as="style" />
      <link rel="stylesheet" href="/static/css/base/animations.css" media="print" onload="this.media='(prefers-reduced-motion: no-preference)'" />

      <link rel="preload" href="/static/css/base/scrollbar.css" as="style" />
      <link rel="stylesheet" href="/static/css/base/scrollbar.css" media="print" onload="this.media='all'" />

      <!-- Fallback to synchronous CSS loading without JavaScript -->
      <noscript>
        <link rel="stylesheet" href="/static/css/base/animations.css" media="(prefers-reduced-motion: no-preference)">
        <link rel="stylesheet" href="/static/css/base/scrollbar.css" />
      </noscript>

      <link rel="icon" type="image/png" sizes="any" href="/static/favicons/favicon.png" />
      <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ctext x='0' y='14'%3E🔥%3C/text%3E%3C/svg%3E">
      <link rel="apple-touch-icon" href="/static/favicons/apple-touch-icon.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
    </head>
    <body>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/"><strong>~ re1</strong></a>
            </li>
            <li>
              <a href="/til" title="Today I learned">TIL</a>
            </li>
            <li><a href="/wiki" title="Wiki">Wiki</a></li>
          </ul>
        </nav>
      </header>

      ${content}
    </body>
  </html>
`;
