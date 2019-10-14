module.exports = class List {
  data() {
    return {
      layout: 'layout',
      styles: ['/static/css/components/wiki/links.css'],
    }
  }

  render({ content, links }) {
    return /*html*/ `
      ${content}
      ${links
        .map(
          link => `
            <article>
              <h2>${link.title}</h2>
              ${link.author ? `<p>${link.author}</p>` : ''}
              ${link.note ? `<p>${link.note}</p>` : ''}

              <footer class="icon-list">
              ${
                link.github
                  ? `<a href="${link.github}" rel="external" title="Find ${
                      link.title
                    } on GitHub"><img src="/static/images/github.svg" alt="GitHub logo" width=32></a>`
                  : ''
              }
              ${
                link.spotify
                  ? `<a href="${link.spotify}" rel="external" title="${
                      link.title
                    } on Spotify"><img src="/static/images/spotify.svg" alt="Spotify logo" width=32></a>`
                  : ''
              }
              ${
                link.vscode
                  ? `<a href="${link.vscode}" rel="external" title="Find ${
                      link.title
                    } on the Visual Studio Code marketplace"><img src="/static/images/vscode.svg" alt="Visual Studio Code logo" width=32></a>`
                  : ''
              }
              ${
                link.youtube
                  ? `<a href="${link.youtube}" rel="external" title="${
                      link.title
                    } on YouTube"><img src="/static/images/youtube.svg" alt="Youtube logo" width=32></a>`
                  : ''
              }
              </footer>
            </article>
          `
        )
        .join('')}
    `
  }
}
