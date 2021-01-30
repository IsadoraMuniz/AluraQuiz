import styled from 'styled-components';

const FooterWrapper = styled.footer`
background-color: #00000070;
padding-top: 15px;
padding-bottom:15px;
padding-right: 300px;
padding-left:400px;

margin-top: 100px;
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
    
    box-sizing:border-box;
    color:white;
    text-align:center;
    
}

@media screen and (max-width: 900px) {
background-color: #00000070;
padding-top: 10px;
padding-bottom:10px;
padding-right: 80px;
padding-left:55px;

margin-top: 110px;
display: flex;

border-radius: 9px; 

p{
    
    box-sizing:border-box;
    color:white;
    
    
}

}
`;

function Footer(props) {
return (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <a href="https://www.alura.com.br/" ></a>
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
