import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiHeart } from "react-icons/bi";
import { BiImage } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <h1>FABRICS-STORE</h1>
        </Logo>
        <Navigation>
          <nav>
            <FaMagnifyingGlass />
          </nav>
          <nav>
            <BiHeart />
          </nav>
          <nav>
            <BiImage />
          </nav>
          <nav>
            <BiLock />
          </nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  cursor: pointer;
`;
const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    margin: 0px 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;
