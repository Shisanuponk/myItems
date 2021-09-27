import styled from "styled-components";

const LoginStyle = styled.div`
margin: 0;
padding: 3.5rem 2rem;
display: inline-block;
background: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.color};
border-left: 2px solid ${({ theme }) => theme.navborder};
position: fixed;
top: 0;
right: 0;
height: 100vh;
width: 300px;
transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
transition: transform 0.3s ease-in-out;

.btn-close {
  width: 30px;
  height: 30px;
  position: fixed;
  top: 1rem;
  right: 1rem;
  border-radius: 50px;
}
`;

const FormAuth = styled.form`
  padding: 10px;
  text-align: right;
  input {
    margin-top: 5px;
    width: 100%;
    height: 30px;
    color: ${props => props.theme.colorhighlight};
    background: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.navborder};
    border-radius: 8px;
    text-align: center;
  }
  .form-link {
    text-align: none;
    color: ${({ theme }) => theme.colorhighlight};
  }
`

const BtnSubmitForm = styled.button`
margin-top: 10px;
  padding: 10px 20px;
  width: 100px;
  background: none;
  font-weight: bold;

  ${(props) => `
              color: ${props.theme.color};
              border: 2px solid ${props.theme.borderhighlight};
          `}
  border-radius: 45px;
  transition: 0.25s;
  :hover {
    ${(props) => `
                      color: ${props.theme.colorhighlight};
                      box-shadow: 0 0 5px ${props.theme.shadowhighlight};
                  `}
    transition: .25s;
  }
`
const IconOAuth = styled.div`
  padding: 10px;
  display: block;
  img {
    margin: 5px;
    width: 45px;
    border: 5px solid ${props => props.theme.navborder};
    transition: .25s;
    :hover{
      background: skyblue;
      border-color: skyblue;
      box-shadow: 0 0 10px skyblue;
      transition: .25s;
    }
}
`
export { LoginStyle, FormAuth, BtnSubmitForm, IconOAuth }