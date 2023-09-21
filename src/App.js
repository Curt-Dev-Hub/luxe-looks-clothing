import {React, useState, useEffect, useRef} from 'react';
import MensLeatherJackets from './MensLeatherJackets';
import styles from './Navbar.module.css';
import './App.css';
import logo from './luxe_looks.png';
import Header from './components/Heading';
import './Sidebar.css';
import ProductsMenu from './ProductsMenu';
// import { BrowserRouter as Router, Routes, Route, Link,useLocation } from 'react-router-dom'; previous build
import { BrowserRouter, Routes, Route, Link,useLocation } from 'react-router-dom';
import { Container, Row, Col, Nav, NavDropdown, Navbar, NavItem, MenuItem  } from 'react-bootstrap';
import ContactUs from './ContactUs';
import { useMediaQuery } from 'react-responsive';
import MaxiDresses from './MaxiDresses';
import Trainers from './Trainers';



//  ------------------------------------------  Main App Component with Router for both Navbars ------------------------------------ 

function App() {
  const mainContentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if(mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
      window.scrollTo(0, 0);
    }
  }, [location]);

  //variable for user welcome/sign in
  const signedIn = Math.random() < 0.5; // 50% chance of being truthy/falsy;
  const [showSidebar, setShowSidebar] = useState(false);

  //

  return (
    <>
      <nav className={styles.nav}>
        <Link to='/' className={styles.siteLink}>
          <img className='homeLogoLink' src={logo} width="60" height="60" />
        </Link>
        <ul>
          <li>
            <Link to='/mens-leather-jackets'>Leather Jackets</Link>
          </li>
          <li>
            <Link to='/maxi-dresses'>Maxi Dresses</Link>
          </li>
          <li>
            <Link to='/trainers'>Children's Trainers</Link>
          </li>
          <li>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Container fluid>
        <Row>
          <Col xs={2} className="sidebar-col">
            <Sidebar />
          </Col>
          <Col xs={12} md={10} className='mainContent'ref={mainContentRef} >
            {/* <Header signedIn={signedIn} /> */}
            <Routes>
              <Route path="/" element={ <HomePage /> } />
              <Route path="/mens-leather-jackets" element={ <MensLeatherJackets /> } />
              <Route path="/maxi-dresses" element={ <MaxiDresses /> } />
              <Route path='/trainers' element={ <Trainers />} />
              <Route path="/contact-us" element={ <ContactUs /> } />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

//                    HomePage component

function HomePage() {
  return (
    <>
      <Header />  {/* signedIn={ signedIn } */}
      <History />
      <ProductsMenu />
    </>
  );
}


//                                 company history/ description
function History() {
  return (
    <div className='container'>
        <h1 className="History-Head"><span className='backgroundHighlight'>Welcome to</span> Luxe Looks</h1>
        <p className="History-text">
        Founded in the early 1990s, Luxe Looks was created by a group of
        fashion-forward individuals who sought to bring sophistication and glamour
        to the masses. Using only the highest-quality materials and cutting-edge
        designs, Luxe Looks has become a household name renowned for its stylish
        and elegant clothing.
        </p>
    </div>
  );
}

//                                   sidebar component

function Sidebar() {
    return (
        <div className="sidebar">
            <Nav className="flex-column">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="./mens-leather-jackets">Leather Jackets</Nav.Link>
                <Nav.Link as={Link} to="./maxi-dresses">Women's Maxi Dresses</Nav.Link>
                <Nav.Link as={Link} to="./trainers">Children's Trainers</Nav.Link>
                <Nav.Link as={Link} to="./contact-us">Contact Us</Nav.Link>
                {/* orders */}
                {/* My Details */}
                {/* Basket */}
            </Nav>
        </div>
    );
}


export default App;
export { History };
export { HomePage }
// export { Product };
export { ProductsMenu };
export { Sidebar };