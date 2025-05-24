class List {
  data() {
    return {
      layout: "layout",
      styles: ["/static/css/components/wiki/links.css"],
    };
  }

  // quite hacky but works
  isoDate(dateString) {
    return `${new Date(dateString).toISOString().slice(0, 10)}`;
  }

  icon(icon, iconTitle, iconAlt, link, linkTitle) {
    return /*html*/ `
      <a href="${link}" rel="external" title="Find ${linkTitle} on ${iconTitle}">
        <img src="/static/images/${icon}.svg" alt="${iconAlt}" width=32>
      </a>`;
  }

  iconLink(link, title) {
    let url = link.replace("https://", "");
    url = url.substring(0, url.lastIndexOf(".", url.indexOf("/")));
    url = url.substring(url.lastIndexOf(".") + 1);

    switch (url) {
      case "github":
        return this.icon("github", "GitHub", "GitHub", link, title);
      case "spotify":
        return this.icon("spotify", "Spotify", "Spotify", link, title);
      case "youtube":
      case "youtu":
        return this.icon("youtube", "YouTube", "YouTube", link, title);
    }
  }

  render({ content, links, linkHeadings = "h2" }) {
    return `
      ${content}

      ${links
        .map(
          (link) => `
            <article>
              ${
                link.link
                  ? `<${linkHeadings} class="link-heading"><a href="${link.link}">${link.title}</a></${linkHeadings}>`
                  : `<${linkHeadings}>${link.title}</${linkHeadings}>`
              }
              ${
                link.link
                  ? `<cite><a href="${link.link}">${link.link}</a></cite>`
                  : ""
              }

              ${
                link.artist || link.author || link.date || link.read
                  ? `
                    <ul class="link-info">
                      ${link.artist ? `<li>${link.artist}</li>` : ""}
                      ${
                        link.author
                          ? `<li><b>Author</b>: ${link.author}</li>`
                          : ""
                      }
                      ${
                        link.date
                          ? `<li><b>Date</b>: ${this.isoDate(link.date)}<span>`
                          : ""
                      }
                      ${link.read ? `<li><b>Read</b>: ${link.read}</li>` : ""}
                    </ul>`
                  : ""
              }

              ${link.note ? `<p>${link.note}</p>` : ""}

              ${
                link.tags
                  ? `<ul class="tag-list">
                      ${link.tags
                        .map((tag) => `<li>#${tag}</li>&nbsp;`)
                        .join("")}
                    </ul>`
                  : ""
              }

              ${
                link.links
                  ? `
                    <footer class="icon-list">
                    ${link.links
                      .map((iconLink) => this.iconLink(iconLink, link.title))
                      .join("")}
                    </footer>
                  `
                  : ""
              }
            </article>
          `,
        )
        .join("")}
    `;
  }
}

export default List;
