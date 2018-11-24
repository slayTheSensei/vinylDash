import * as React from "react";
import * as S from "../styles/styled_components/navigation";
import Images from "./../styles/images";

interface INavigationProps {
  events?: Event;
}

function Navigation(props: INavigationProps): JSX.Element {
  const navBar = (
    <S.navContainer>
      <S.navItem>
        <S.navIcon src={Images.navigation.home} />
        <S.navText>Dashboard</S.navText>
      </S.navItem>
      <S.navItem>
        <S.navIcon src={Images.navigation.events} />
        <S.navText>Events</S.navText>
      </S.navItem>
      <S.navItem>
        <S.navIcon src={Images.navigation.artists} />
        <S.navText>Artists</S.navText>
      </S.navItem>
      <S.navItem>
        <S.navIcon src={Images.navigation.settings} />
        <S.navText>settings</S.navText>
      </S.navItem>
    </S.navContainer>
  );

  return navBar;
}

export default Navigation;
