module.exports = class Music {
  data() {
    return {
      layout: 'layout',
    }
  }

  render({ content, songs }) {
    return /*html*/ `
      ${content}
      ${songs
        .map(
          song => `
            <h2>${song.title}</h2>
            <p>${song.artist}</p>
            ${song.note ? `<p>${song.note}</p>` : ''}
            <p>
            ${
              song.spotify
                ? `<a href="${song.spotify}" rel="external" title="${
                    song.title
                  } on Spotify">Spotify</a>`
                : ''
            }
            ${
              song.youtube
                ? `<a href="${song.youtube}" rel="external" title="${
                    song.title
                  } on YouTube">YouTube</a>`
                : ''
            }
            </p>
          `
        )
        .join('')}
    `
  }
}
