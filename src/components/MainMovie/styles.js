import styled from 'styled-components';

export const Container = styled.section`
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.url});
  height: 100vh;
`;

export const Vertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111213 -5%, transparent);
`;

export const Horizontal = styled.div`
    width: inherit;
    height: inherit;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
`;

export const Title = styled.div`
    font-size: 60px;
    font-weight: bold;
`;

export const Infos = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
`

export const Points = styled.div`
  display: inline-block;
  color: #46d369;
  margin-right: 15px;
`

export const DateItem = styled.div`
  display: inline-block;
  margin-right: 15px;
`

export const Seasons = styled.div`
  display: inline-block;

`

export const Overview = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
`

export const ButtonArea = styled.div`
  margin-top: 15px;  
`

export const Button = styled.a`
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }


  ${props => props.dark ? `
    color: white;
    background-color: rgba(109,109,110,0.7);
  ` : `
    color: #000;
    background-color: #fff;
  `}

`

export const Genres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;
`

