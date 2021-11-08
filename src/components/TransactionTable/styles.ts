import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem; 
  table {
      width: 50%;
      border-spacing: 0 0;
      
      th {
          color: var(--text-title);
          font-weight: bold;
          padding: 0.1rem 0.5rem;
          text-align: left;
          line-height: 2rem;
          font-family: Arial, Helvetica, sans-serif;
          border: 0.2px solid var(--text-body);

          &:last-child {
            text-align: center;
          }
      }
      td {
          padding: 0.1rem 0.5rem;
          border: 0;
          background: var(--shape);
          color: var(--text-body);        
          border: 0.2px solid var(--text-body);
          font-family: Arial, Helvetica, sans-serif;

          &:first-child {
            color: var(--text-title);
            padding: 0.5rem;
            text-align: center;
          }
          
          &:last-child {
            text-align: center;
          }
      }
  }
`;