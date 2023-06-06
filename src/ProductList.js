import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';


function ProductList() {
    const clothingCategories = [
    {
      category: 'Leather Jackets',
      products: [
        {
          name: "Luxe Leather Jacket",
          description: "A stylish, rugged men's leather jacket with multiple pockets and a classic, vintage design. Perfect for cooler weather and making a fashion statement.",
          price: '£129.99',
          image: 'men_jacket.jpg',
        },
        // Add more products for men's category if needed
        {
            name: "Luxe Leather Jacket",
            description: "A stylish, rugged men's leather jacket with multiple pockets and a classic, vintage design. Perfect for cooler weather and making a fashion statement.",
            price: '£129.99',
            image: 'men_jacket.jpg',
          },
          {
            name: "Luxe Leather Jacket",
            description: "A stylish, rugged men's leather jacket with multiple pockets and a classic, vintage design. Perfect for cooler weather and making a fashion statement.",
            price: '£129.99',
            image: 'men_jacket.jpg',
          }
      ],
    },
    {
      category: 'Womens Maxi Dresses',
      products: [
        {
          name: "Luxe Women's Maxi Dress",
          description: "This elegant women's maxi dress features a flattering silhouette, with a flowy skirt and a delicate, feminine neckline. Made with soft and comfortable fabric, it's perfect for any formal occasion.",
          price: '£59.99',
          image: 'women_dress.jpg',
        },
        // Add more products for women's category if needed
        {
            name: "Luxe Women's Maxi Dress",
            description: "This elegant women's maxi dress features a flattering silhouette, with a flowy skirt and a delicate, feminine neckline. Made with soft and comfortable fabric, it's perfect for any formal occasion.",
            price: '£59.99',
            image: 'women_dress.jpg',
        },
        {
            name: "Luxe Women's Maxi Dress",
            description: "This elegant women's maxi dress features a flattering silhouette, with a flowy skirt and a delicate, feminine neckline. Made with soft and comfortable fabric, it's perfect for any formal occasion.",
            price: '£59.99',
            image: 'women_dress.jpg',
        }

      ],
    },
    {
      category: 'Childrens Trainers',
      products: [
        {
          name: "Luxe Children's Trainer",
          description: "These fun and stylish children's sneakers feature bright colors and a trendy design, making them a hit with kids. They're also made with durable materials and offer excellent support and comfort for active kids on the go.",
          price: '£24.99',
          image: 'kids_sneakers.jpg',
        },
        // Add more products for kids' category if needed
        {
            name: "Luxe Children's Trainer",
            description: "These fun and stylish children's sneakers feature bright colors and a trendy design, making them a hit with kids. They're also made with durable materials and offer excellent support and comfort for active kids on the go.",
            price: '£24.99',
            image: 'kids_sneakers.jpg',
        },
        {
            name: "Luxe Children's Trainer",
            description: "These fun and stylish children's sneakers feature bright colors and a trendy design, making them a hit with kids. They're also made with durable materials and offer excellent support and comfort for active kids on the go.",
            price: '£24.99',
            image: 'kids_sneakers.jpg',
        }
      ],
    },
  ];

  return (
    <>
      {clothingCategories.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <Row>
            {category.products.map((product) => (
              <Col key={product.name} sm={6} md={3}>
                <Card className="mb-3">
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text className="font-weight-bold">{product.price}</Card.Text>
                    {/* Add "Add to Cart" button or any other functionality */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
};

export default ProductList;