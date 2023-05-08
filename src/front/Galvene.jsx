import { useEffect, Suspense, useTransition } from 'react';
import './css/Galvene.css';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SetLangIcon from './../back/controller';

function Galvene() {

  const { t } = useTranslation();

  function onLangChange(eventKey){
    i18n.changeLanguage(eventKey);
  }
  return (
    <>
    <Suspense fallback="Load...">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand>{t('Brand')}</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#myStory">{t('myStory')}</Nav.Link>
              <Nav.Link href="#cityAntics">{t('cityAntics')}</Nav.Link>
              <Nav.Link href="#wildlife">{t('wildlife')}</Nav.Link>
              <Nav.Link href="#pointsOFInterest">{t('pointsOFInterest')}</Nav.Link>
              <Nav.Link href="#timeline">{t('timeline')}</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown className="dropdown" onSelect={onLangChange} title={<SetLangIcon currentLanguage={i18n.language} />} id="basic-nav-dropdown">
                <NavDropdown.Item eventKey='en'>{t('English')}</NavDropdown.Item>
                <NavDropdown.Item eventKey='lv'>{t('Latvian')}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Suspense>
    </>
  );
}

export default Galvene;
