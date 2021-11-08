import styled from "styled-components";

export const Container = styled.header`
  background: var(--background);
  height: 230px;
`;
export const First = styled.div`
  color: #ea4b35;
  width: 5rem;
  margin-top: 2.8%;
`;
export const Last = styled.div`
  color: #ea4b35;
  width: 5rem;
  margin-left: 27.5%;
  margin-top: -3.2%;
`;
export const Percent = styled.div`
  color: #ea4b35;
  width: 5rem;
  margin-left: 55%;
  margin-top: -3.2%;
  display: flex;
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
      color: var(--shape);
      border-radius: 0.25rem;
      border: 0.13rem solid var(--shape);
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
      margin-right: 0.5rem;
      border: 1px solid #d7d7d7;
      background: var(--shape);
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem; 
      
      &::placeholder {
          color: var(--text-title);
      }
    }
    form{
      width: 100%;
    }    
    @media (max-width: 720px){
      input {
        width: 21%
      }     
    }
`;