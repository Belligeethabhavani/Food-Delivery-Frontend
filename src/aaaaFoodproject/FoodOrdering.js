// src/FoodOrdering.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../App.css';

const foods = [
  { id: 1, name: "Burger", price: 400 },  // Example price in INR
  { id: 2, name: "Pizza", price: 640 },   // Example price in INR
  { id: 3, name: "Pasta", price: 560 },   // Example price in INR
  { id: 4, name: "Salad", price: 320 } ,   // Example price in INR
  { id: 5, name: "momos", price: 420 },   // Example price in INR
  { id: 6, name: "cake", price: 520 }
];

const FoodOrdering = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleFoodSelection = (food) => {
    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter(item => item !== food));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  const handleProceedToPayment = () => {
    setShowModal(true);
  };

  const totalAmount = selectedFoods.reduce((total, food) => total + food.price, 0);

  return (
    <form className='back'>
    <Container >
      <h1 className="mt-5">Food Ordering</h1>
      <Row>
        {foods.map(food => (
          <Col key={food.id} sm={6} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>Price: ₹{food.price}</Card.Text>
                <Button 
                  variant={selectedFoods.includes(food) ? "success" : "primary"}
                  onClick={() => toggleFoodSelection(food)}
                >
                  {selectedFoods.includes(food) ? "Selected" : "Select"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button 
        variant="info" 
        onClick={handleProceedToPayment} 
        disabled={selectedFoods.length === 0}
      >
        Proceed to Payment (Total: ₹{totalAmount})
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Order Summary</h4>
          <ul>
            {selectedFoods.map(food => (
              <li key={food.id}>{food.name} - ₹{food.price}</li>
            ))}
          </ul>
          <h5>Total: ₹{totalAmount}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert('Payment successful!')}>
            Pay Now
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </form>
  );
};

export default FoodOrdering;