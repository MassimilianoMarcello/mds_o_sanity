"use client"

import "../../samplePages.css";
import Image from 'next/image';
import drpesha from '@/public/assets/drpesha.jpg';
import Blue from '@/public/assets/Blue.png';
import styled from "styled-components";

export default function Leadership() {
  return (
    <>
      <div className=" bg-container">
        <div className="kindergarten">
          <h1 className="text-sample">leadership</h1>
        </div>
      </div>
    <MainContainer className="main-container">
    <TextContainer className="text-container">
      <h1>Dr. Pesha Kletenik</h1>
      <h2 className="staff-role">Head of School
</h2>
      </TextContainer>
      
      <ImageContainer className="images-container">
      <div className="main-image">
        <Image
        src={drpesha}
        alt="heaad of the school"
        width={300}
        height={300}
        />
      </div>
      <div className="decorationImage">
      <Image
        src={Blue}
        alt="heaad of the school"
        width={150}
        height={150}
        />
      </div>
    <p className="staff-bio">

    Dr. Pesha Kletenik joins the MDS community with a great deal of enthusiasm and two decades of experience in Jewish education. Most recently she served as an assistant principal and principal at Yeshiva Har Torah in Queens. Prior to that, she was a mechanechet, programs director, school psychologist and assistant principal at Bnos Malka Academy. In those roles she utilized her creativity and energy for building teams, innovating new programs and partnering with parents in meeting the unique needs of each child.

Dr. Kletenik received her Doctorate in Education from the Learning and Teaching Program at Hofstra University, with a specialization in Human Development and Educational Psychology and a Master’s of Science in School Psychology from the Touro Graduate School of Education and Psychology. Dr. Kletenik has been an Avi Chai Fellow and a scholar in residence for the Orthodox Union Women’s Initiative as well as a guest lecturer at Hofstra University's Graduate School of Education. She has participated in numerous professional development initiatives, including attending the Principals’ Center at Harvard University Graduate School of Education. She is currently a student in the Emil Fish Center for Holocaust and Genocide Studies at Yeshiva University. Dr. Kletenik has written about parenting and Jewish education in the Lookstein Jewish Educational Leadership Journal and the Panim Journal. She lives in West Hempstead with her husband and three children.
    </p>
    </ImageContainer>
     
      </MainContainer>
    </>
  );
}


const MainContainer = styled.div``
const ImageContainer = styled.div``
const TextContainer = styled.div``
