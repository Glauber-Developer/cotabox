export function Grafic() {
    
    const DATA_COUNT = 5;
    const data = {
      labels: ['Hugo Silva', 'Carlos Moura', 'Eliza Souza', 'Fernanda Oliveira', 'Anderson Santos'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [20, 5, 20, 15, 40],
            backgroundColor: ['blue', 'gray', 'purple', 'pink', 'yellow'],
          }
        ]
    }

    const config = {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Chart.js Doughnut Chart'
            }
          }
        },
      };
}