import styled from "styled-components";

export const Container = styled.header`
  background: var(--background);
  height: 230px;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding:  6rem 1.5rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button[type="submit"] {
      width: 15%;
      padding: 0 1rem;
      height: 4rem;
      background: var(--background);
      color: #fff;
      border-radius: 0.25rem;
      border: 0.13rem solid #fff;
      font-size: 1rem;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      transition: filter 0.2s;
      cursor: pointer;

      &:hover {
          filter: brightness(0.9);
      }
  }
  input {
      width: 23%;
      padding: 0 1rem;
      height: 4rem;
      border-radius: 0.25rem;
      margin-right: 0;
      border: 1px solid #d7d7d7;
      background: #fff;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;

      &::placeholder {
          color: var(--text-body);
      }



    
  }
  `;