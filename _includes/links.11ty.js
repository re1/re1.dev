module.exports = class Links {
  data() {
    return {
      layout: 'layout',
      styles: ['/static/css/components/links.css'],
    }
  }

  render({ content, links }) {
    return /*html*/ `
      ${content}
      ${links
        .map(
          link => `
            <article>
              <h2><a href="${link.title}">${link.title}</a></h2>
              <cite><a href="${link.link}">${link.link}</a></cite>
              <p>
                <b>Author</b>: ${link.author}
                ${
                  link.date
                    ? `&emsp;<b>Date</b>: ${link.date.toLocaleDateString()}`
                    : ''
                }
                ${link.read ? `&emsp;<b>Read</b>: ${link.read}` : ''}
              </p>
              ${link.note ? `<p>${link.note}</p>` : ''}
              <ul class="tag-list">
                ${link.tags.map(tag => `<li>#${tag}</li>&nbsp;`).join('')}
              </ul>
            </article>
          `
        )
        .join('')}
    `
  }
}
