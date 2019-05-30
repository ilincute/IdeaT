let selectedItem = null;

let breakfastHighList = [
  {
    name: "Barley Muesli with Nuts and Berries (High)",
    href:
    "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/breakfast-1-high-protein.html"
  },
  {
    name: "Blueberry Breakfast (High)",
    href:
    "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/breakfast-2-high-protein.html"
  },
  {
      name: "Fruity Millet Raisin Breakfast (High)", 
      href: 
      "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/breakfast-3-high-protein.html"
  }
  
];

let breakfastLowList = [
  {
    name: "Almond Biscotti (Low)",
    href:
      "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/breakfast-1-low-protein.html"
  },
  {
    name: "Blueberry Breakfast (Low)",
    href:
      "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/breakfast-2-low-protein.html"
  },
  {
    name: "Fruity Millet Raisin Breakfast (Low)",
    href:
      "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/breakfast-3-low-protein.html"
  }
];

let lunchList = [
    {
        name:  "Hot Smoked Salmon Salad",
        href: "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/lunch-3.html"
    },
    {
        name:   "Tomato Soup",
        href: "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/lunch-2.html"
    },
    {
        name:     "Quinoa and Halloumi Salad",
        href: "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/lunch-1.html"
    }
];

let dinnerList = [
    {
        name: "Beef Teriyaki",
        href: "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/dinner-1.html"
    },
    {
        name: "Whole Lemon Sole with Roaster Celeriac",
        href: "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/dinner-2.html"
    },
    {
        name: "Salmon and Broccoli Bake",
        href: "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/dinner-3.html"
    }
];

let snacksList = [
    {
        name: "Peanut Butter Protein Balls",
        href: "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/snack-3.html"
    },
    {
        name: "Eggplant Chips",
        href: "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/snack-2.html"
    },
    {
        name: "Cucumber Crackers",
        href: "file:///E:/Facultate/Master/Anul%20I,%20semestrul%20II/Buraga/Proiect-hci/public/snack-1.html"
    }
];

function onSelectItem(value) {
  selectedItem = value;
  resetMealOfTheDay();
  document.getElementById("right-container").style.display = "block";
  document.getElementById(value).classList.add("selected-item");
  resetDishes(value);
}

function resetMealOfTheDay() {
  document.getElementById("breakfast").classList.remove("selected-item");
  document.getElementById("dinner").classList.remove("selected-item");
  document.getElementById("lunch").classList.remove("selected-item");
  document.getElementById("snacks").classList.remove("selected-item");
}

function resetDishes(value) {
  let glycemicItem = localStorage.getItem("glycemicItem");
  if (!glycemicItem && glycemicItem.length === 0) {
    return false;
  }
  let div = document.getElementById("dishes");
  div.innerHTML = "";
  if (value === "breakfast") {
      if(glycemicItem > 100) {
        breakfastHighList.forEach(el => {
            let p = document.createElement("p");
            p.classList.add("dish-item");
            p.innerHTML = el.name;
            p.setAttribute("onclick", `window.location.href='${el.href}'`);
            div.appendChild(p);
          });
      } else {
        breakfastLowList.forEach(el => {
            let p = document.createElement("p");
            p.classList.add("dish-item");
            p.innerHTML = el.name;
            p.setAttribute("onclick", `window.location.href='${el.href}'`);
            div.appendChild(p);
          });
      }
    
  }

  if (value === "lunch") {
    lunchList.forEach(el => {
        let p = document.createElement("p");
        p.classList.add("dish-item");
        p.innerHTML = el.name;
        p.setAttribute("onclick", `window.location.href='${el.href}'`);
        div.appendChild(p);
    });
  }

  if (value === "dinner") {
    dinnerList.forEach(el => {
        let p = document.createElement("p");
        p.classList.add("dish-item");
        p.innerHTML = el.name;
        p.setAttribute("onclick", `window.location.href='${el.href}'`);
        div.appendChild(p);
    });
  }

  if (value === "snacks") {
    snacksList.forEach(el => {
        let p = document.createElement("p");
        p.classList.add("dish-item");
        p.innerHTML = el.name;
        p.setAttribute("onclick", `window.location.href='${el.href}'`);
        div.appendChild(p);
    });
  }
}
