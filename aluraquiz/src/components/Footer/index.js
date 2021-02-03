import styled from 'styled-components';
import { motion } from 'framer-motion';
const FooterWrapper = styled.footer`

background-color: #00000070;
padding-top: 15px; 
padding-bottom:15px;
padding-right: 300px;
padding-left:35%;
/* height:100px;
line-height:100px; */
margin-top: 99px;
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


@media screen and (max-width: 1000px) {
background-color: #00000070;
padding-top: 10px;
padding-bottom:10px;
padding-right: 80px;
padding-left:23%;
margin-top: 90px;
display: flex;
border-radius: 9px; 

p{
    
    box-sizing:border-box;
    color:white;
    text-align:center;
}

}
`;

function Footer(props) {
return (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}
  as={motion.section}
  transition={{ delay: 0.5, duration: 0.5 }}
  variants={{
    show: { opacity: 1 },
    hidden: { opacity: 0 },
  }}
  initial="hidden"
  animate="show"
  
  >
    <a href="https://www.alura.com.br/" ></a>
    <p>
      Orgulhosamente criado durante a Imersão React da
      {' '}
      {' '}
      <a href="https://www.alura.com.br/">
        <span> Alura</span>
      </a>
    </p>
  </FooterWrapper>
);
}
export default Footer;
