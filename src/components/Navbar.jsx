import React from "react";
import styled from "styled-components";
import LogoImg from "../utils/Images/Logo.png";
import {NavLink} from "react-router-dom";
import Button from "./Button"
import {SearchRounded, FavoriteBorder, ShoppingCartOutlined, } from "@mui/icons-materials";

const Nav = styled.div`
background-color: ${({ theme }) => theme.bg};
height: 80px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
color: white;
`;
const NavbarContainer = styled.div`
width: 100%;
max-width: 1400px;
padding: 0 24px;
display: flex;
gap: 14px;
align-items: center;
justify-content: space-between;
font-size: 1rem;


`;
const NavLogo = styled.div`
width: 100%
display: flex;
align-items: center;
padding: 0 6px;
font-weight:500;
font-size: 18px;
text-decoration: none;
color: inherit;


`;
const Logo = styled.img`
height: 34px;


`;
const NavItems = styled.ul`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 32px;
padding: 0 6px;
list-style: none;
@media screen and (max-width: 768px){
display: none;

}

`;


const Navlink= styled(Navlink)`
display: flex;
align-items: center;
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
transition: all ls slide-in;
text-decoration: none;
&:hover {
color: ${({ theme}) => theme.primary};

}

&:active {
color: ${({ theme}) => theme.primary};
border-bottom: 1.8px solid ${({ theme }) => theme.primary};

}

`;

const ButtonContainer= styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
gap: 28px;
align-items: center;
padding: 0 6px;
color: ${({ theme}) => theme.primary};
@media screen and (max-width: 768px) {
display: none;
}

`;

 

const Navbar = () =>{
    return <Nav>
        <NavbarContainer>
            <NavLogo>
                        <logo src={LogoImg}/>
            </NavLogo>
            <NavItems>
                <Navlink to="/">Home</Navlink>
                <Navlink to="/Shop">Shop</Navlink>
                <Navlink to="/New_Arrivals">New_Arrivals</Navlink>
                <Navlink to="/Orders">Orders</Navlink>
                <Navlink to="/Contact">Contact</Navlink>
            </NavItems>
            <ButtonContainer>
                 <NavLink to="/search">
                   <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
                 </NavLink>

                 <NavLink to="/favorite">
                   <FavoriteBorder sx={{ color: "inherit", fontSize: "30px" }} />
                 </NavLink>

                 <NavLink to="/cart">
                   <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "30px" }} />
                 </NavLink>

                 <Button text="SignIn" small />
                 </ButtonContainer>

          
        </NavbarContainer>
    </Nav>
};

export default Navabr;
