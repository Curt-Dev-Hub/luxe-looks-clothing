import React from 'react';
import './App.css';
import Header from './components/Heading';
import './Sidebar.css';
import ProductsMenu from './ProductsMenu';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; deprecated
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import CustomerSupport from './CustomerSupport';
 
// import Card from 'react-bootstrap/Card';
import { Nav } from 'react-bootstrap';


// function App() {
//     //variable for user welcome/sign in
//     const signedIn = Math.random() < 0.5; // 50% chance of being truthy/falsy;

//     return (
//       <Router>
//         <Container fluid>
//           <Row>
//             <Col xs={2}>
//               <Sidebar />
//             </Col>
//             <Col xs={10} style={{ marginLeft: '245px' }}>
//               <Header signedIn={signedIn} />
//               <Switch>
//                 <Route exact path="/" component={HomePage} />
//                 {/* <Route path="/products" component={ProductsPage} /> */}
//                 <Route path="/customer-support" component={CustomerSupport} />
//               </Switch>
//             </Col>
//           </Row>
//         </Container>
//       </Router>
//     );
// }


function App() {
  //variable for user welcome/sign in
  const signedIn = Math.random() < 0.5; // 50% chance of being truthy/falsy;

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={10} style={{ marginLeft: '245px' }}>
            <Routes>
              <Route path="/" element={ <HomePage /> } />
              {/* <Route path="/products" element={<ProductsPage />} /> */}
              <Route path="/customer-support" element={<CustomerSupport />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
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


// company history/ description
function History() {
    return (
        <div className='container'>
            <h1 className="History-Head">Welcome to Luxe Looks</h1>
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
                <Nav.Link href="#product1">Men's Leather Jackets</Nav.Link>
                <Nav.Link href="#product2">Women's Maxi Dresses</Nav.Link>
                <Nav.Link href="#product3">Children's Trainers</Nav.Link>
                <Nav.Link href="">Contact Us</Nav.Link>
                <Nav.Link as={Link} to="./customer-support">Customer Support</Nav.Link>
                {/* orders */}
                {/* My Details */}
                {/* Basket */}
            </Nav>
        </div>
    );
}

//product components
// function Product({ name, description }) {
//     return (
//         <Card border="primary" style={{ width:'30%' }} bg="primary">
//             <Card.Body>
//                 <Card.Title>{name}</Card.Title>
//                 <Card.Text style={{ fontFamily: 'monospace'}}>{description}</Card.Text>   
//             </Card.Body>
//         </Card>
//     );
// }



export default App;
export { History };
export { HomePage }
// export { Product };
export { ProductsMenu };
export { Sidebar };