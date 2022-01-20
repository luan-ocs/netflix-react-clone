import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  overflow-x: hidden;
`;

export const Carousel = styled.div`
  margin-left: ${(props) => props.margin}px;
  transition: all ease 800ms;
  display: flex;
  width: ${(props) => props.width}px;
`;

export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 25px;
  cursor: pointer;
`;

export const Movie = styled.div`
  padding-right: 5px;
  & > img {
    height: 140px;
    border-radius: 6px;
    transition: all ease 600ms;
    cursor: pointer;
  }
  & > div {
    display: none;
  }

  &:hover {
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5));
    & > img {
      height: 200px;
      border-radius: 6px 6px 0px 0px;
    }
    & > div {
      display: block;
    }
  }
`;

export const MovieMenu = styled.div`
  height: 150px;
  background-color: #1d1e20;
  margin-top: -5px;
  border-radius: 0px 0px 6px 6px;
`;

export const ButtonDiv = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border-radius: 50%;
  margin: 3px;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: solid 1px #5e636e;
  background: transparent;
  & > svg {
    fill: #f1f3f9;
  }
  &:hover {
    border: solid 2px #f1f3f9;
  }
`;

export const PlayButton = styled.button`
  border-radius: 50%;
  margin: 3px;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: solid 1px #f1f3f9;
  background: #f1f3f9; ;
`;

export const Interactives = styled.div`
  display: flex;
`;

export const MovieInfo = styled.div`
  padding: 10px;
  font-size: 15px;
`;

export const MovieCount = styled.span`
  color: #46d369;
  font-weight: bold;
`;

export const MovieYear = styled.span`
  font-weight: bold;
  color: #f1f3f9;
  margin-left: 10px;
`;

export const LeftController = styled.div`
  & > svg {
    font-size: 60px;
  }
  position: absolute;
  width: 40px;
  height: 140px;
  left: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.opacity ? "" : "pointer"};
  background: rgba(0, 0, 0, 0.4);
  ${(props) => (props.opacity ? `opacity: 0;` : "opacity: 1;")}
  transition: all ease 0.8s;
`;

export const RightController = styled.div`
  & > svg {
    font-size: 60px;
  }
  position: absolute;
  width: 40px;
  height: 140px;

  right: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.4);
  ${(props) => (props.opacity ? `opacity: 0;` : "opacity: 1;")}
  transition: all ease 0.8s;
`;
