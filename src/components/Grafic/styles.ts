import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
    display: flex;
    margin-left: 60%;
    margin-top: -30%;

    @media (max-width: 720px) {
        margin-left: 50%;
        margin-top: -40%;
        width: auto;
    }
`; 