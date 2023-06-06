

import React from 'react';
import { Card } from 'react-bootstrap';
import './ProductsMenu.css';


// export default function ProductsMenu() {
//     return (
//         <div className='menuContainer'>
//             <h2>Our Products:</h2>
//             <div>
//                 {/* <Link to=""> */}
//                     <h3>Leather Jackets</h3>
//                     <p>Our stylish, rugged leather jackets with multiple ockets and classic, vintage designs. 
//                         Perfect for cooler weather and making a fashion statement.
//                     </p>
//                     <img src='../public/leather_jackets/leatherJacket1.jpg'></img>
//                 {/* </Link> */}
//             </div>
//             <div>
//                 {/* <Link to=""> */}
//                     <h3>Women's Maxi Dresses</h3>
//                     <p>Our elegant women's maxi dresses feature a flattering silhouette, with a flowy skirt and a delicate, 
//                         feminine neckline. Made with soft and comfortable fabric, they're perfect for any formal occasions.
//                     </p>
//                     <img src='../public/womens_maxi_dresses/maxi_dress1.jpg'></img>
//                 {/* </Link> */}
//             </div>
//             <div>
//                 {/* <Link to=""> */}
//                     <h3>Children's Sneakers</h3>
//                     <p>These fun and stylish children's sneakers feature bright colors and a trendy design, making them a hit with kids. 
//                         They're also made with durable materials and offer excellent support and comfort for active kids on the go.
//                     </p>
//                     <img src='../public/kids_trainers/'></img>
//                 {/* </Link> */}
//             </div>
//         </div>
//     )
// }    

export default function ProductsMenu() {
    return (
      <div className='menuContainer'>
        <h2>Our Products:</h2>
            <Card>
              <Card.Body>
                <Card.Title>Leather Jackets</Card.Title>
                <Card.Text>
                  Our stylish, rugged leather jackets with multiple pockets and classic, vintage designs.
                  Perfect for cooler weather and making a fashion statement.
                </Card.Text>
                <Card.Img src={`${process.env.PUBLIC_URL}/leather_jackets/leatherJacket1.jpg`} alt=''/>
              </Card.Body>
            </Card>
        <div>
            <Card>
              <Card.Body>
                <Card.Title>Women's Maxi Dresses</Card.Title>
                <Card.Text>
                  Our elegant women's maxi dresses feature a flattering silhouette, with a flowy skirt and a delicate,
                  feminine neckline. Made with soft and comfortable fabric, they're perfect for any formal occasions.
                </Card.Text>
                <Card.Img src={`${process.env.PUBLIC_URL}/womens_maxi_dresses/maxi_dress1.jpeg`} alt='' />
              </Card.Body>
            </Card>
        </div>
        <div>
            <Card>
              <Card.Body>
                <Card.Title>Children's Sneakers</Card.Title>
                <Card.Text>
                  These fun and stylish children's sneakers feature bright colors and a trendy design, making them a hit with kids.
                  They're also made with durable materials and offer excellent support and comfort for active kids on the go.
                </Card.Text>
                <Card.Img src={`${process.env.PUBLIC_URL}/kids_trainers/trainer1.jpg`} alt='' />
              </Card.Body>
            </Card>       
        </div>
      </div>
    );
  }