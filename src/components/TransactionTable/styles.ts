import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  
  table {
      width: 50%;
      border-spacing: 0 0;
      
      th {
          color: #363f5f;
          font-weight: bold;
          padding: 0.1rem 0.5rem;
          text-align: left;
          line-height: 2rem;
          font-family: Arial, Helvetica, sans-serif;
          border: 0.2px solid #000;

          &:last-child {
            text-align: center;
          }
      }

      td {
          padding: 0.1rem 0.5rem;
          border: 0;
          background: #fff;
          color: #969cb3;        
          border: 0.2px solid #000;

          &:first-child {
            color: #363f5f;
            padding: 0.5rem;
            text-align: center;
          }
          
          &:last-child {
            text-align: center;
          }
      }
  }
`;