module.exports = ({ content, lang, title }) => `
  <!DOCTYPE html>
  <html lang="${lang || 'en'}" prefix="og: http://ogp.me/ns#">
    <head>
      <title>
        ${title ? `${title} | re1` : 're1 – Web developer'}
      </title>
      <meta charset="utf-8" />

      <meta name="HandheldFriendly" content="True">
      <meta name="MobileOptimized" content="320">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <link rel="stylesheet" href="/static/css/main.css" />
      <link rel="stylesheet" href="/static/css/libs/vars.css" />
      <link rel="stylesheet" href="/static/css/base/fonts.css" />
      <link rel="stylesheet" href="/static/css/base/scrollbar.css" />
      <link rel="stylesheet" href="/static/css/base/typography.css" />
      <link rel="stylesheet" href="/static/css/components/header.css" />

      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png">
      <link rel="manifest" href="/static/favicons/site.webmanifest">
    </head>
    <body>
      ${content}
    </body>
  </html>
`
