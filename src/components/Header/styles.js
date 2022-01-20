import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 70px;
  position: fixed;
  ${props => props.transparent
    ? "background: transparent;"
    : ` background: rgb(20, 20, 20);
  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));`}
  width: 100%;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 999;
  transition: all ease 800ms;
`;

export const Logo = styled.div`
  & > img {
    width: 100px;
    margin-left: 40px;
  }
`;

export const UserItem = styled.div``;
