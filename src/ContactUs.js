import React from 'react';
import "./ContactUs.css";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // add further logic to handle form submission
  }
  return (
    <div className='contactPageWrapper'>
      <header className='contactHeader'>
        <h1 className='contact-h1'>Contact Us</h1>
        <div className='socials'>
            <FaFacebookF className='facebook-icon'/>
            <FaTwitter className='twitter-icon'/>
            <FaInstagram className='insta-icon'/>
        </div>
      </header>
      <p className='contact-intro'>If you have any questions or concerns, feel free to reach out to us using the information below:</p>
      
      <img className='contactPage_img' src={`${process.env.PUBLIC_URL}/christina-wocintechchat-com-LQ1t-8Ms5PY-unsplash.jpg`} alt='An image of 2 people talking at a table'></img>
      
      <section className='sub_section'>
        <h3 className="sub-heading">Customer Service</h3>
        <p>Email: support@luxelooks.com</p>
        <p>Phone: 1-800-123-4567</p>
      </section>

      <section className='sub_section'>
        <h3 className="sub-heading">Corporate Office</h3>
        <p>Address: 123 Fashion Street, Cityville, Country</p>
        <p>Email: info@luxelooks.com</p>
        <p>Phone: 1-800-987-6543</p>
      </section>

      <section className='sub_section'>
        <h3 className="sub-heading">Wholesale Inquiries</h3>
        <p>Email: wholesale@luxelooks.com</p>
        <p>Phone: 1-800-555-7890</p>
      </section>

      <section className='sub_section'>
        <h3 className="sub-heading">Press and Media</h3>
        <p>Email: press@luxelooks.com</p>
        <p>Phone: 1-800-222-3333</p>
      </section>

      <section className='form_container'>
        <h3 className="sub-heading">Send Us a Message</h3>
        <p>Fill out the form below and one of our team members will be in touch shortly.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label><br />
          <input placeholder='Your Name' type="text" id="name" name="name" required /><br /><br />

          <label htmlFor="email">Email</label><br />
          <input placeholder='Your Email' type="email" id="email" name="email" required /><br /><br />

          <label htmlFor="comment">Message</label><br />
          <textarea placeholder='Enter your message here..' maxLength={600} cols={40} rows={300}  id="comment" name="comment" required /><br /><br />

          <button type="submit">Submit</button>
        </form>
      </section>
    </div> 
    
    
  );
}

export default ContactUs;