import React from 'react';
import { Card } from 'react-bootstrap';
import './ProductsMenu.css';


export default function ProductsMenu() {
  return (
    <div className='menuContainer'>
      <h2>Our Products</h2>
          <Card>
            <Card.Body>
              <div className='titleTextContainer'>
                <Card.Title>Leather Jackets</Card.Title>
                <Card.Text>
                  Our stylish, rugged leather jackets with multiple pockets and classic, vintage designs.
                  Perfect for cooler weather and making a fashion statement.
                </Card.Text>
              </div>
              <Card.Img src={`${process.env.PUBLIC_URL}/leather_jackets/robbie-noble-ruNmAlLLnpo-unsplash.jpg`} alt='Picture of a clothes rack full of Leather Jackets'/>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className='titleTextContainer'>
                <Card.Title>Women's Maxi Dresses</Card.Title>
                <Card.Text>
                  Our elegant women's maxi dresses feature a flattering silhouette, with a flowy skirt and a delicate,
                  feminine neckline. Made with soft and comfortable fabric, they're perfect for any formal occasions.
                </Card.Text>
              </div>  
              <Card.Img src={`${process.env.PUBLIC_URL}/womens_maxi_dresses/burgess-milner-OYYE4g-I5ZQ-unsplash(1).jpg`} alt='An in store picture of maxi dresses in their clothes racks' />
            </Card.Body>
          </Card>
          <Card id='uniqueMargin'> 
            <Card.Body>
              <div className='titleTextContainer'>
                <Card.Title>Children's Sneakers</Card.Title>
                  <Card.Text>
                    These fun and stylish children's sneakers feature bright colors and a trendy design, making them a hit with kids.
                    They're also made with durable materials and offer excellent support and comfort for active kids on the go.
                  </Card.Text>
              </div>  
              <Card.Img src={`${process.env.PUBLIC_URL}/kids_trainers/trainer4.jpg`} alt='A picture of a pair of pink childrens trainers with a hearts pattern' />
            </Card.Body>
          </Card>       
    </div>
  );
}