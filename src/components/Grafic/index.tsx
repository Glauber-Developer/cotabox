import { Doughnut } from "react-chartjs-2";
import { Container } from "./styles";

export function Grafic() {
  return(
    <Container>
      <Doughnut
        data= {{
          labels:['Hugo Silva', 'Carlos Moura', 'Eliza Souza', 'Fernanda Oliveira', 'Anderson Santos'],
          datasets: [{
            label: '# Dataset 1',
            data: [20, 5, 20, 15, 40],
            backgroundColor: ['#2c97dd', '#00bb9b', '#9c56b8', '#b2b4b4', '#ea4b35']
          }]
        }}
        options= {{
          plugins: {
            legend: {
              position: 'right',
            },
          }
        }}
        >         
        </Doughnut>
      </Container>
  );
}