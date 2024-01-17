// EarlyCard.jsx
"use client"
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const EarlyCard = ({ early }) => (
  <MainContainer key={early._id} className='card-container'>
    <div className='images-container'>
      <div className='hero-image'>
        {early.heroImage && (
          <Image
            src={early.heroImage}
            alt={early.heroTitle}
            width={300}
            height={400}
            layout='responsive'
            priority
          />
        )}
      </div>
      <div className='decoration-image'>
        {early.decorationImage && (
          <Image
            src={early.decorationImage}
            alt={early.heroTitle}
            width={300}
            height={300}
            priority
          />
        )}
       
      </div>
    </div>
    <div className="text-container">
          <p className="title-card">{early.title}</p>
          <p className="text-card">{early.infoParagraph}</p>
        </div>
  </MainContainer>
);

export default EarlyCard;

const MainContainer = styled.section`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: auto auto auto;

.images-container{
grid-column: 1/3;
grid-row: 1/3;
background-color:blu;

}
.text-container{
  grid-column: 3/5;
  grid-row: 1/3;
  background-color:red;
}
.hero-image{
  background-color:violet;
}

`
