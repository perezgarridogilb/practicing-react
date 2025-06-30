import styled from "styled-components";
import Logo from "../the-simpson.png";

const ImageLogo = styled.img`
  width: 450px;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`;

const ConentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const WelcomeTest = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`;

export default function Welcome(props) {
    const { resApi } = props;

    return (
                <ConentLogo>
<ImageLogo src={Logo} alt="Logo simpson" onClick={resApi/* () => console.log('pinchando sobre la img') */} />
                  <WelcomeTest>Bienvenido, para poder utilizar las frases pincha sobre la imagen</WelcomeTest>
                </ConentLogo>
                
    );
};
