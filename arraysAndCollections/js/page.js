//Charts
let ctx = document.getElementById("monthlySales").getContext("2d");

let pieCtx = document.getElementById("deptSales").getContext("2d");

let yearlyTotalLabel = document.getElementById("yearlyTotal");

let monthlySales = Array.of(500, 9000, 3000); // Add the value

let monthlySalesLabeks = Array.of("Oct", "Nov", "Dec");

let deptSales = Array.of(12, 9, 3);

let deptSalesLabels = Array.of("Hiking", "Running", "Hunting");

let yearlyTotal = 0;
function addYearlyTotal(x) {
  yearlyTotal = x + yearlyTotal;
}
monthlySales.forEach(addYearlyTotal);

let octNums = Array.of(500, 1000, 9000);
let novNums = Array.of(1100, 2000, 9000);
let decNums = Array.of(4000, 1000, 5000);

yearlyTotalLabel.innerHTML = "$" + yearlyTotal;

function findOver1000() {
  let firstThousand = monthlySales.find((element) => element > 1000);
  alert(firstThousand);
}
function resetNumber() {
  monthlySales.fill(0);
  monthlySalesChart.update();
}

console.log(yearlyTotal);

let newAmount = document.getElementById("itemAmount");
let newMonth = document.getElementById("monthId");

const monthlySalesBis = new Set();
const monthlySalesLabeksBis = new Set();

function addSale() {
  monthlySalesBis.add(parseInt(newAmount.value));
  monthlySalesLabeksBis.add(newMonth.value);
  yearlyTotal = 0;
  monthlySalesChart.data.datasets.forEach((dataset) => {
    dataset.data = [];
  });
  for (let amount of monthlySalesBis) {
    console.log(amount);
    yearlyTotal = amount + yearlyTotal;
    yearlyTotalLabel.innerHTML = yearlyTotal;
    monthlySalesChart.data.datasets.forEach((dataset) => {
      dataset.data.push(amount);
    });
  }
  monthlySalesChart.data.labels = Array.from(monthlySalesLabeksBis);
  monthlySalesChart.update();
}

function deleteVal() {
  monthlySalesBis.forEach((value1, value2, monthlySalesBis) => {
    console.log(value1);
  });
}

function addTotal() {}
// Bar
var monthlySalesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "# of sales",
        data: [],
        backgroundColor: [
          "rgba(238, 184, 104, 1)",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// Pie
var deptSalesChart = new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: deptSalesLabels,
    datasets: [
      {
        label: "# of Sales",
        data: deptSales,
        backgroundColor: [
          "rgba(238, 184, 104, 1)",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {},
});
