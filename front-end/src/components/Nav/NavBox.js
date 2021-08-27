import styled from "styled-components";

// NavBox Style
const NavBox = styled.div`
  padding: 0 10px;
  /* width: 100%; */
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;

  ${(props) => `
background: ${props.theme.navcolor};
border-bottom: 1px solid ${props.theme.navborder};
box-shadow: 0 5px 5px ${props.theme.navshadow};
`}

  .nav-logo {
    margin: 0;
    padding: 10px 20px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    > * {
      margin: 0;
      padding: 0 10px;
      text-decoration: none;
      color: ${(props) => props.theme.colorheadhighlight};
    }
  }

  .nav-items {
    padding: 0px 10px;
    .item-box {
      margin: 0;
      padding: 10px 0px;
      list-style: none;
      display: flex;

      * {
        text-decoration: none;
      }

      .item {
        padding: 10px;
        font-size: 1rem;
        font-weight: bold;
        color: ${(props) => props.theme.color};
        transition: 0.25s;

        :hover {
          color: ${(props) => props.theme.colorheadhighlight};
          transition: 0.25s;
        }
      }
      .nav-menu-active {
        li {
          color: ${(props) => props.theme.colorheadhighlight};
        }
      }

      .nav-icon {
        padding: 0 10px;
      }

      img {
        width: 40px;
        border: 1px solid none;
        border-radius: 50%;
      }
      .nav-icon-active > img {
        padding: 5px;
        width: 30px;
        background: ${(props) => props.theme.background};
        border: 1px solid ${(props) => props.theme.borderhighlight};
      }
    }
  }

  .nav-hamberger {
    display: none;
  }

  @media (max-width: 875px) {
    .nav-items > .item-box {
      display: none;
    }
    .nav-hamberger {
      display: block;
    }
  }

`;

export default NavBox;
