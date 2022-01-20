import React, { useEffect, useState } from "react";
import { Container, Logo, UserItem } from './styles';

function Header() {
  
  const [transparent, setTransparent] = useState(true)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY !== 0) {
          setTransparent(false)
      } else {
        setTransparent(true)
      }
    }

    window.addEventListener("scroll", scrollListener)
    
    return () => window.removeEventListener("scroll", scrollListener)
  }, [])

  return (
    <Container transparent={transparent}>
      <Logo>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="netflix" />
      </Logo>
      <UserItem>

      </UserItem>
    </Container>
  );
}

export default Header;
