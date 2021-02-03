import styled from 'styled-components'
import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
    return (
      
      <LogoContainer>
      <LogoImage  
        src="https://i.pinimg.com/originals/3d/5f/77/3d5f77284957d827b48c64a3b40f1c4e.png"
        alt="B-logo"
      />
    </LogoContainer>
      
    );
  }
  
  Logo.propTypes = {
    className: PropTypes.string.isRequired,
  };

  const LogoImage = styled.img`
  object-fit: contain;
  height: 120px;
  width: 120px;
  @media screen and (max-width: 500px) {
    height: 60px;
    width: 60px;
    
    }
`
  
  const LogoContainer = styled.div`
  background-color: #282A2D ;
  width: fit-content;
  padding: 25px;
  border-radius: 100%;
  /* backdrop-filter: blur(10px); */
  margin-top: 50px;
  margin-left:20%;
  @media screen and (max-width: 500px) {
    /* display:none; */
    margin-left:30%;
    
  }
`

  const QuizLogo = styled(Logo)`
    margin-left: auto;
    display: block;
    @media screen and (max-width: 500px) {
      margin: 0;
    }
  `;

export default QuizLogo;