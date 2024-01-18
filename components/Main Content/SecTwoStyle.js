import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 1.25rem;
  list-style-type: none;
  align-items: center;
  position: relative;
  padding: 0.3rem;
  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    .image-container-1{
        grid-column: 2/4;
 
    }
    .text-container-1{
        grid-column: 1/2;
    }
  }

`;

export const ImageContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  .images {
    z-index: 2;
  }
  .rectangle-0 {
    grid-column: 1/3;
    grid-row: 1/2;
    background-color: var(--color-blue);
    height: 30%;
    width: 40%;
    position: absolute;
    left: 0;
  bottom: 0;
    margin-left: -1rem;
  }
  .rectangle-1 {
    grid-column: 1/4;
    grid-row: 1/2;
    background-color: var(--color-gold);
    height: 50%;
    width: 20%;
    right: 0;
margin-right: -1rem;
   
  }
  @media only screen and (min-width: 1000px) {
    grid-column: 1/3;
  grid-row: 1/2;
  }
  .rectangle-1 {
    height: 40%;
    width: 15%;
  }

`;

export const Rectangle = styled.div`
  position: absolute;
 bottom: 0;
  z-index: -2;
margin-bottom: -0.5rem;
`;

export const TextContainer = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  margin-bottom: 0.5rem;
  h1 {
    border-top: solid 3px #f5a700;
    padding-top: 1.25rem;
    color: #0741a4;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 1px;
  }
  span {
    color: #f5a700;
    padding-left: 0.625rem;
    letter-spacing: 0.05rem;
  }
  p {
    margin-top: 1rem;
    margin-right: 0.1rem;
  }
  .btn {
    color: #f5a700;
    font-weight: 600;
    text-underline-offset: 0.6rem;
    letter-spacing: 0.05rem;
  }
  &:hover {
    color: #0741a4;
  }
  @media only screen and (min-width: 1000px) {
    grid-column: 3/4;
  grid-row: 1/2;
}
`;

export const GoldenTitle = styled.span`
  color: var(--color-gold-text);
`;
