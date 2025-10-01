/**
 * Gebruik string interpolation om de variabelen te gebruiken in plaats van hard-coded waarden in de broncode.
 */

/* Use string interpolation to replace hard coded values with variables
 * */

var postUrl = "https://www.vives.be/nl/studeren/verder-studeren-na-je-studies";
var postTitle = "Verder studeren na je studies?";
var postImage = "https://www.vives.be/sites/default/files/styles/full_small/public/uploads/images/20200708_003.jpg?itok=GNxYfcMQ";

var html = `
  <article class="foundry--article">
  <a href="${postUrl}" title="Verder studeren na je studies?" class="foundry--thumb-link">
    <img class="foundry--thumb" src="${postImage}">
  </a>
  <header class="foundry--header">
    <h1 class="foundry--title">
      <a href="${postUrl}" class="foundry--link">${postTitle}</a>
    </h1>
  </header>
  </article>`;

console.log(html);