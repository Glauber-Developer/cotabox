import { Container } from './styles';
import { TransactionTable } from '../TransactionTable';
import { Summary } from '../Summary';

export function Dashboard() {
    return(
      <Container>
        <Summary/>
        <TransactionTable/>
      </Container>
    );
}