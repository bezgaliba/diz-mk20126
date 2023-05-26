import { Suspense } from 'react';
import './css/Galvene.css';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SetLangIcon from './../back/controller';
import { Link } from 'react-scroll';

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
              <Nav.Link>
                <Link to="par-mani" smooth={true} duration={500} offset={-70}>{t('ParMani')}</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="Laikalinija" smooth={true} duration={500} offset={-70}>{t('LL')}</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="Pilsetas" smooth={true} duration={500} offset={-70}>{t('Pilsetas')}</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="Slaidshovs" smooth={true} duration={500} offset={-70}>{t('Slaidshovs')}</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="Riga" smooth={true} duration={500} offset={-70}>{t('Riga')}</Link>
              </Nav.Link>
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
