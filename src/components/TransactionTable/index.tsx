import { Container } from "./styles";

export function TransactionTable() {
    return (
        <Container>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>First name</th>
                <th>Last name</th>
                <th>Participation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Carlos</td>
                <td>Moura</td>
                <td>5%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>2</td>
                <td>Fernanda</td>
                <td>Oliveira</td>
                <td>15%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>3</td>
                <td>Hugo</td>
                <td>Silva</td>
                <td>20%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>4</td>
                <td>Eliza</td>
                <td>Souza</td>
                <td>20%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>5</td>
                <td>Anderson</td>
                <td>Santos</td>
                <td>40%</td>
              </tr>
            </tbody>
          </table>
        </Container>
    );
}