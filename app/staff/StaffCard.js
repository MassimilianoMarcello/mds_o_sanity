// EarlyCard.jsx
"use client"
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StaffCard = ({ staff }) => (
  <MainContainer key={staff._id} className='card-container'>
    <div className='images-container'>
      <div className='hero-image'>
        {staff.idPhoto && (
          <Image
            src={staff.idPhoto}
            alt={staff.role}
            width={300}
            height={400}
            layout='responsive'
            priority
          />
        )}
      </div>

    </div>
    <div className="text-container">
          <p className="title-card">{staff.name}</p>
          <p className="text-card">{staff.role}</p>
        </div>
  </MainContainer>
);

export default StaffCard;

const MainContainer = styled.section`
/* display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: auto auto auto; */

/* .images-container{
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
} */

`
