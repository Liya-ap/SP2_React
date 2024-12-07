import styled, { createGlobalStyle } from 'styled-components';
import { IoHome } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import backgroundImg from "/public/background.png"
import { Link, NavLink, Outlet } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #0F0F0F;
        text-align: center;
        font-family: Arial, sans-serif;
        height: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Header = styled.header`
    height: 100px;
    overflow: hidden;
    position: relative;

    img {
        height: 100%;
        object-fit: cover;
        transform: scale(1.7);
    }
`;

const NavigationBarArea = styled.div`
    background-color: #050505;
    height: 50px;
    box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 1), inset -4px -4px 10px rgba(0, 0, 0, 1);
    border: 2px solid #222222; /* Dark border */
`;

const NavBar = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0;                 
    margin: 0; 
    justify-content: space-evenly;
`;

const NavItem = styled.li`
    font-size: 0.8em;
    color: inherit;
    display: flex;
    flex-direction: column;
`;

const NavIcon = styled.span`
    font-size: 1.6em;
`;

const StyledNavLink = styled(NavLink)`
    justify-content: center;
    text-decoration: none;
    color: #055CFF;
    padding: 0.4em 0.4em 0.2em 0.4em;

    &:hover, &.active {
        color: #FFA805;
        background-color: #055CFF;  
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);  
        transform: scale(1.1);
        border-radius: 5px;
    }
`;

const MainContent = styled.div`
    margin-top: 4em;
    width: 100%;
    height: 60vh;
    background-image: url(${backgroundImg});
    background-size: contain;  
    background-position: right;
    background-repeat: no-repeat;
`;

// Media Queries for responsiveness
const MediaQueries = `
    @media (max-width: 1200px) {
        ${NavBar} {
            justify-content: space-around;
        }

        ${NavItem} {
            font-size: 0.8em;
        }
      
    }
`;

function MainLayout() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header>
                    <Link to={'/'}><img src='gamevault_logo.png' alt='Game Vault Logo' /></Link>
                </Header>
                <NavigationBarArea>
                    <NavBar>
                        <StyledNavLink to={'/'}><NavItem><NavIcon><IoHome /></NavIcon>Home</NavItem></StyledNavLink>
                        <StyledNavLink to={'/vision'}><NavItem><NavIcon><FaEye /></NavIcon>Vision</NavItem></StyledNavLink>
                        <StyledNavLink to={'/endpoints'}><NavItem><NavIcon><FaRoute /></NavIcon>Endpoints</NavItem></StyledNavLink>
                        <StyledNavLink to={'/mockup'}><NavItem><NavIcon><CgWebsite /></NavIcon>Mock up</NavItem></StyledNavLink>
                    </NavBar>
                </NavigationBarArea>
                <MainContent>
                    <Outlet />
                </MainContent>
            </Container>
            <style>{MediaQueries}</style>
        </>
    );
}

export default MainLayout;