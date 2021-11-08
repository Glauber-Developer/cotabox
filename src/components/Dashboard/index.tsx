import { Container } from './styles';
import { TransactionTable } from '../TransactionTable';
import { Summary } from '../Summary';
import { Grafic } from '../Grafic';

export function Dashboard() {
  return(
    <Container>
      <Summary/>
      <TransactionTable/>
      <Grafic/>
    </Container>
  );
}