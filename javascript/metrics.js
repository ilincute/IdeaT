var ctx = document.getElementById("myChart").getContext("2d");
var valuesGlycemic = [];

function onLoadPage() {
  valuesGlycemic = JSON.parse(localStorage.getItem('glycemicValues'));
  if(valuesGlycemic === null) {
    valuesGlycemic = [];
  }
  resetChart();
}


function saveGlycemicIndex() {
  let value = document.getElementById("glycemic-item").value;
  if (value && value.length > 0) {
    localStorage.setItem("glycemicItem", value);
  }
  document.getElementById('glycemic-item').value = '';
  valuesGlycemic.push(Number.parseInt(value));
  localStorage.setItem('glycemicValues', JSON.stringify(valuesGlycemic));
  resetChart();
}

function resetChart() {
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",
  
    // The data for our dataset
    data: {
      labels: ["26.05.2019", "27.05.2019", "28.05.2019", "29.05.2019", "30.05.2019", "31.05.2019", "32.05.2019"],
      datasets: [
        {
          label: "Dataset based on your glycemic index",
          borderColor: "rgb(255, 99, 132)",
          data: valuesGlycemic
        },
        {
          label: "Dataset based on your mood",
          borderColor: "rgb(123, 23, 122)",
          data: [100, 20, 120, 130, 150, 120, 15]
        }
      ]
    },
  
    // Configuration options go here
    options: {}
  });
  
}
