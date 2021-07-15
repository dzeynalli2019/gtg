import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

import COLORS from '../../styles/colors'

const Header = () => {

    const [show, setShow] = useState(false);
    const [language, setLanguage] = useState(false);


    return (
        <StyledNavbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className="navbar-brand" href="#home">translate<Span>me</Span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <StyledNav className="me-auto">
                        <Nav.Link className="nav-link" href="#features">Services</Nav.Link>
                        <Nav.Link className="nav-link" href="#pricing">Industries</Nav.Link>
                        <Nav.Link className="nav-link" href="#pricing">Companies</Nav.Link>
                        <Nav.Link className="nav-link" href="#pricing">Pricing & Languages</Nav.Link>
                        <StyledNavDropdown title="Blog" id="basic-nav-dropdown"
                            show={show}
                            onMouseEnter={() => setShow(true)} 
                            onMouseLeave={() => setShow(false)}
                        >
                            <NavDropdown.Item className="nav-dropdown-item" href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item className="nav-dropdown-item" href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item className="nav-dropdown-item" href="#action/3.3">Something</NavDropdown.Item>
                        </StyledNavDropdown>
                    </StyledNav>
                    <StyleNav>
                        <Nav.Link className="styled-nav-link" href="#deets">Sign in</Nav.Link>
                        <NavDropdown className="styled-nav-link" title="English" id="collasible-nav-dropdown"
                            show={language}
                            onMouseEnter={() => setLanguage(true)} 
                            onMouseLeave={() => setLanguage(false)}
                        >
                            <NavDropdown.Item href="#action/3.1">Russian</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Azerbaijan</NavDropdown.Item>
                        </NavDropdown>
                    </StyleNav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    )
}

const StyledNavbar = styled(Navbar)`
    background-color: ${COLORS.white};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

    .navbar-brand {
        color: ${COLORS.orange};
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 35px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    .navbar-brand:hover {
        color: ${COLORS.orange};
    }
`;

const Span = styled.span`
    font-weight: 900;
`;

const StyledNavDropdown = styled(NavDropdown)`

    #basic-nav-dropdown: {
        color: ${COLORS.grey};
        border: 1px solid black;
        border-bottom-right-radius: 10px;
    }

    #basic-nav-dropdown::after{
      display: none; 
   }

   .nav-dropdown-item {
        color: ${COLORS.grey};
   }

   .nav-dropdown-item:hover {
       background-color: ${COLORS.orange};
       color: ${COLORS.white};
   }

`;

const StyledNav = styled(Nav)`

   margin-left: 30px;

    .nav-link {
        color: ${COLORS.grey};
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
    }

    .nav-link:hover {
        border-bottom: 2px solid ${COLORS.orange};
        color: ${COLORS.grey};

    }
`;

const StyleNav = styled(Nav)`
    .styled-nav-link {
        color: ${COLORS.grey};
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
    }

    .styled-nav-link:hover {
        border-bottom: 2px solid ${COLORS.orange};
        color: ${COLORS.grey};

    }
`;

export default Header;
