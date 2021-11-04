import { Container, Content } from "./styles";

export function Header() {
    return (
      <Container>
        <Content>
        <input
          placeholder="First name"
        />
        <input
          placeholder="Last name"
        />
        <input
        type="number"
          placeholder="Participation"
        />
        <button 
        type="submit"
        >
        SEND
        </button>
        </Content>
      </Container>
    );
}