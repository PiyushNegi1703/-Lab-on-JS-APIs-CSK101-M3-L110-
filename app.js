// Progression 1: create a function and fetch the api using axios
function api() {
  let tag = document.getElementById('articles');

  fetch(
    'https://gnews.io/api/v4/top-headlines?token=f71b8187897239f51254c6029ce112c8&lang=en'
  )
    .then((data) => {
      return data.json();
    })
    .then((news) => {
      let boat = '';
      for (i = 0; i < 10; i++) {
        boat += `<div id="article">
        <h3>${news.articles[i].title}</h3>
        <img src="${news.articles[i].image}" alt="">
        <p>${news.articles[i].content}</p>
        </div>`;
      }
      tag.innerHTML = boat;
    })
    .catch(() => {
      tag.innerHTML = `<h1>Error</h1>`;
    });
}

api();
