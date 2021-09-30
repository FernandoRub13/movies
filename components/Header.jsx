import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex, Box } from "reflexbox";
import Navigation from "./Navigation";
import Link from "next/link";
import ToggleNavigationColorButton from "./ToggleNavigationColorButton";

const Header = ({ isDark}) => {
  return (
    <HeaderStyled isDark={isDark}>
      <Box variant="container">
        <Flex justifyContent="space-between" alignItems="start">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/favicon.ico" alt="" className="img-logo" />
                <span className="logo-text">Next Movies</span>
              </a>
            </Link>
          </div>
          <Navigation  ></Navigation>
          <ToggleNavigationColorButton></ToggleNavigationColorButton>
        </Flex>
      </Box>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => (props.isDark ? "#000000" : "#efefef")};
  padding: ${rem(20)};

  .logo {
    a {
      display: flex;

      text-decoration: none;
      align-items: center;
      .img-logo {
        max-width: ${rem(30)};
      }
      .logo-text {
        color: #333333;
        font-weight: 600;
        padding-left: ${rem(20)};
      }
    }
  }
`;

export default Header;
