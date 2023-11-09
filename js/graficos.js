const grafico_seguro_1 = document.getElementById("seguro-1");

new Chart(grafico_seguro_1, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jul"],
    datasets: [
      {
        label: "Rendimento (R$)",
        data: [9, 10, 11, 12, 13, 15],
        borderColor: '#20ff87',
      },
    ],
  },
});

const grafico_seguro_2 = document.getElementById("seguro-2");

new Chart(grafico_seguro_2, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jul"],
    datasets: [
      {
        label: "Rendimento (R$)",
        data: [2, 4, 6, 8, 10, 12],
        borderColor: '#20ff87',
      },
    ],
  },
});

const grafico_seguro_3 = document.getElementById("seguro-3");

new Chart(grafico_seguro_3, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jul"],
    datasets: [
      {
        label: "Rendimento (R$)",
        data: [3, 6, 12, 13, 12, 13.5],
        borderColor: '#20ff87',
      },
    ],
  },
});

const grafico_rentabilidade_1 = document.getElementById("rentabilidade-1");

new Chart(grafico_rentabilidade_1, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jul"],
    datasets: [
      {
        label: "Rendimento (R$)",
        data: [7, 12, 17, 19, 25, 29],
        borderColor: '#20ff87',
      },
    ],
  },
});

const grafico_rentabilidade_2 = document.getElementById("rentabilidade-2");

new Chart(grafico_rentabilidade_2, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jul"],
    datasets: [
      {
        label: "Rendimento (R$)",
        data: [12, 11, 10, 9, 5, 2],
        borderColor: 'rgb(255, 95, 95)',
      },
    ],
  },
});

const grafico_rentabilidade_3 = document.getElementById("rentabilidade-3");

new Chart(grafico_rentabilidade_3, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jul"],
    datasets: [
      {
        label: "Rendimento (R$)",
        data: [1, 11, 20, 22, 28, 34],
        borderColor: '#20ff87',
      },
    ],
  },
});

