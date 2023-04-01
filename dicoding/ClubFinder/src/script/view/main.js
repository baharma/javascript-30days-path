const main = function () {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const clubListElement = document.querySelector('#clubList');

  let onButtonSearchClicked = function () {
    let dataSource = new DataSource(renderResult, fallbackResult);
    dataSource.searchClub(searchElement.value);
  };

  let renderResult = function (results) {
    clubListElement.innerHTML = '';
    results.forEach(function (club) {
      let clubElement = document.createElement('div');
      clubElement.setAttribute('class', 'club');
      
      ({name,fanArt,description} = club)

      clubElement.innerHTML =`<img class="fan-art-club" src="${fanArt}" alt="fan art">
      <div class="club-info"> 
      <h2>${name}</h2>
      <p>${description}</p>
      </div>
    ` ;
      clubListElement.appendChild(clubElement);
    });
  };

  let fallbackResult = function (message) {
    clubListElement.innerHTML = '';
    clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>';
  };

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
