import styled from 'styled-components';

const FooterWrapper = styled.footer`
background-color: #00000070;
padding-top: 30px;
padding-bottom:30px;
padding-right: 300px;
padding-left:400px;

margin-top: 200px;
display: flex;
align-items: center;
border-radius: 9px; 
.footer-img {
  width: 58px;
  margin-right: 63px;
  display:inline-block;
  align-items:center;
  
}
a {
  color: white;
  text-decoration: none;
  transition: .3s;
 
  &:hover,
  &:focus {
    opacity: .5;
  }
  span {
    text-decoration: underline;
  }
}

p{
    text-align:justify;
    box-sizing:border-box;
    
}

@media screen and (max-width: 500px) {
background-color: #00000070;
padding-top: 10px;
padding-bottom:10px;
padding-right: 80px;
padding-left:55px;

margin-top: 200px;
display: flex;
align-items: center;
border-radius: 9px; 

}
`;

function Footer(props) {
return (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <a href="https://www.alura.com.br/" >
      <img className='footer-img' src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
    </a>
    <p>
      Orgulhosamente criado durante
      {' '}
      a
      {' '}
      <a href="https://www.alura.com.br/">
        <span>Imersão React da Alura</span>
      </a>
    </p>
  </FooterWrapper>
);
}
export default Footer;
