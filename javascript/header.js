var activeLinks = {
  home: false,
  metrics: false,
  calendar: false,
  recipes: false,
  profileSettings: false
};

function setActivePage(item) {
  activeLinks[item] = true;
}

function setHeader() {
  let div = document.getElementById('header');
  div.innerHTML = ` <header class="header d-flex justify-content-between">
    <img class="ml-5 logo" src="E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/images/logo.png">
    <ul class="ul-header">
      <a href="./home.html" class="link ${activeLinks.home ? 'active' : ''}">Home</a>
      <a href="./metrics.html" href="/map" class="link ${activeLinks.metrics ? 'active' : ''}">Metrics</a>
      <a href="./calendar.html" class="link ${activeLinks.calendar ? 'active' : ''}">Calendar</a>
      <a href="./recipes.html" class="link ${activeLinks.recipes ? 'active' : ''}">Recipes</a>
    </ul>
    <a href="./profile-settings.html" class="link ${activeLinks.profileSettings ? 'active' : ''}">
    <i class="user-icon material-icons pr-5">account_circle</i></a>
    </header>`;
}
