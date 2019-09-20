module.exports = class Music {
  data() {
    return {
      layout: 'layout',
      styles: ['/static/css/components/header.css'],
    }
  }

  render({ content, songs }) {
    return /*html*/ `
      ${content}
      ${songs
        .map(
          song => `
            <article>
              <h2>${song.title}</h2>
              <p>${song.artist}</p>
              ${song.note ? `<p>${song.note}</p>` : ''}

              <footer class="icon-list">
              ${
                song.spotify
                  ? `<a href="${song.spotify}" rel="external" title="${
                      song.title
                    } on Spotify"><img src="/static/images/spotify.svg" alt="Spotify logo" width=32></a>`
                  : ''
              }
              ${
                song.youtube
                  ? `<a href="${song.youtube}" rel="external" title="${
                      song.title
                    } on YouTube">
                    <img src="/static/images/youtube.svg" alt="Youtube logo" width=32></a>`
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
