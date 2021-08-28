import styled from "styled-components";

// NavBox Style
const NavBox = styled.div`
  padding: 0 10px;
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

        .user-list-menu{
          margin-right: 60px;
          position: absolute;
          top: 80px;
          right: -10px;
          padding: 10px 20px;
          ${({ theme }) => `
            background: ${theme.navcolor};
            color: ${theme.colorheadhighlight};
          `};
          text-align: center;
          width: 200px;
          box-sizing: 0 5px 25px rgb(0,0,0,0.1);
          border-radius: 15px;
          transition: 0.5s;
          ${({ userList }) => userList ? `` : `
              visibility: hidden;
              opacity: 0;
            `
          }
          
          ul{
            padding: 0px;
            img{
              width: 30px;
              height: 30px;
              border-radius: 0px;
            }
          }

          ul li {
            list-style: none;
            padding: 10px 0;
            border-top: 1px solid ${({ theme }) => theme.navborder};
            color: ${({ theme }) => theme.colorhighlight};
            display: flex;
            align-items: center;
            opacity: 0.5;
            transition: 0.5s;

            :hover{
              opacity: 1;
            }
          }

          ul li a {
            margin-left: 10px;
            display: inline-block;
            color: ${({ theme }) => theme.colorhighlight};
            font-weight: 500;
            transition: 0.5s;
          }

          ::before{
            content: '';
            position: absolute;
            top: -10px;
            right: 110px;
            width: 20px;
            height: 20px;
            background: ${({theme}) => theme.navcolor};
            transform: rotate(45deg);
          }
        }
      }

      .user-info{
        display: flex;
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
