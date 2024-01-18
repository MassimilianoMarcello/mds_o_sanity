
import Link from "next/link";
import styled from "styled-components";

const SectionOne = () => {
  return (
    <>
      {" "}
      <Parallax className="section-1a parallax-1a">
        <BluRectangle className="blueBack">
          <ParallaxInner className="parallax1-inner">
            <h1>
              For over 80 years, we've illuminated young minds through Jewish
              Education
            </h1>

            <p>
              Manhattan Day School Yeshiva Ohr Torah is a Modern Orthodox
              Yeshiva day school located on the Upper West Side of Manhattan,
              serving Toddlers through Eighth Grade. Founded in 1943, we have 80
              years of experience in educating Jewish children in a warm Torah
              environment.
            </p>

            <h2>Ready to become a part of MDS?</h2>
            <Link href="./apply" className="btn-apply">
              apply now
            </Link>
          </ParallaxInner>
        </BluRectangle>
      </Parallax>
      <ParallaxTwo className="section-1b parallax-1b">
        <ParallaxInnerTwo className="parallax-inner">
          <h2>
            Our curriculum sharpens minds, expands horizons, and hones critical
            skills in Judaic and general studies.
          </h2>

          <p>
            From the wisdom of Hashem, and the love of Israel, to humanities and
            social sciences to STEM and the arts, students engage in a dynamic
            exploration of the world around them, cultivating skills and
            knowledge that are core for success.
          </p>
        </ParallaxInnerTwo>
      </ParallaxTwo>
    </>
  );
};
export default SectionOne;

const Parallax = styled.section`
font-family: var(--euclid-flex);
  background: url("/assets/fire_background.svg") fixed no-repeat;

  margin-top: 1rem;
  background-position: left;
  background-size: 95% 50% 45% 35%;
  padding-bottom: 1rem;
`;
const ParallaxInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  h1 {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    font-size: 2rem;
    color: #f5a700;
    font-weight: 500;
    line-height: 1.2;
  }
  p {
    grid-column: 1 / 4;
    grid-row: 2/3;
    color: #fff;
    font-size: 1rem;
    font-weight: 200;
    line-height: 2;
    margin-top: -1rem;
  }
  h2 {
    grid-column: 1 / 3;
    grid-row: 3/4;
    color: #f5a700;
    font-size: 1.2rem;
    font-weight: 100;
  }
  .btn-apply {
    grid-column: 3/3;
    grid-row: 3/4;
    width: 120px;
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    letter-spacing: 0.02em;
    -webkit-text-decoration: none;
    text-decoration: none;
    padding: 0.7rem 0.1rem;
    font-weight: 700;
    border-radius: 0.333em;
    background: #fff;
    color: #0741a4;
    display: inline-block;
    &:hover {
    background-color: #f5a700;
    color: #fff;
    border: none;
  }}
`;
const ParallaxTwo = styled.section`
background: url("/assets/fire_background.svg") fixed no-repeat;
background-position: left;
background-size: 95% 50% 45% 35%;
margin-top: 0px;
`;
const ParallaxInnerTwo = styled.div`
    display: grid;
  grid-template-columns: repeat(8,1fr);
  grid-template-rows: auto auto ;
  h2 {
    grid-column: 2/9;
  grid-row: 1/2;
  font-size: 2rem;
  font-weight: 500;
  color: #0741a4;
  line-height: 1.2;
  letter-spacing: 1%;
  text-align: left;

  margin: 20px;
  }
  p {
    grid-column: 2/9;
  grid-row: 2/3;
  font-size: 1rem;
  color: #161718;
  letter-spacing: 1%;
 margin-left: 1.5rem;
  margin-bottom: 8rem;
  padding-bottom: 4rem;

  text-align: left;
  }
`;
const BluRectangle = styled.div`
  background-color: rgb(26, 96, 215, 0.8);
  padding-bottom: 40px;
  border-radius: 0% 0% 15% 15%;
`;
