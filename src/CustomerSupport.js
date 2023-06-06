import React from 'react';
import { Link } from 'react-router-dom';

function CustomerSupport() {
  return (
    <div>
      <h1>Customer Support</h1>
      <p>
        Welcome to Luxe Looks Customer Support! If you have any questions,
        concerns, or need assistance with your order, please don't hesitate
        to reach out to our support team.
      </p>
      <p>You can contact us through the following methods:</p>
      <ul>
        <li>Email: support@luxelooks.com</li>
        <li>Phone: 1-800-123-4567</li>
        <li>
          Live Chat: <Link to="/live-chat">Click here to start a chat</Link>
        </li>
      </ul>
      <p>
        Our support team is available Monday to Friday, 9 AM to 5 PM (EST) to
        assist you. We strive to provide the best customer service experience
        and resolve any issues promptly.
      </p>
    </div>
  );
}

export default CustomerSupport;
