import { useEffect, Suspense, useTransition } from 'react';
import './css/Galvene.css';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Galvene() {

  const { t } = useTranslation();

  function onLangChange(eventKey){
    i18n.changeLanguage(eventKey);
    console.log(eventKey)
  }
  return (
    <>
    <Suspense fallback="Load...">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown onSelect={onLangChange} title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey='en'>{t('English')}</NavDropdown.Item>
                <NavDropdown.Item eventKey='lv'>{t('Latvian')}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>
        {t('Hello')}
      </h1>
    </Suspense>
    </>
  );
}

export default Galvene;
