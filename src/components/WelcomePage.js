import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContentCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  padding: 6%;
  
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>How big a fan are you?</h1>
        <ContentCenter>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to= {'/CharacterList'}>
          <button>Check out the characters!</button>
        </Link>
        </ContentCenter>
      </header>
    </section>
  );
}