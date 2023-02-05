//Email imports
import React from "react";
//Styling imports
import { Form, Col, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Divider from '.././Assets/Logos/Divider.png';
import Card from 'react-bootstrap/Card';
import fbgreen from '.././Assets/Logos/fbgreen.jpg'
import fbbrown from '.././Assets/Logos/fbbrown.jpg'


const Contact = () => {
  //Holds the user data
  const [formData, updateFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    query: ""
  });

  //updates the object when value changes
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  //prevents default submission and holds out key info for email js to send the data to an email and how to format it.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message. Your query has been forwarded.`);
    const serviceID = "service_t56p61h";
    const templateId = 'template_ihls16f';
    sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, message_html: formData.query, email: formData.email });

    console.log(formData);
  };

  //email js sends everything out and returns a success to user
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
      serviceID, templateId, variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
      .catch(err => console.error('There has been an Error.', err))
  };

  return (
    <div>
      <img className='divider' src={Divider} alt="Divider" />
      <h1 className="text">Contact us!</h1>

      <div>
        {/* all form section for sending an email from the page with emailjs */}
        <Form className="col-6 mx-auto rounded contact">
          <Form.Group className="mx-3" as={Col} controlId="formGridName">
            <Form.Label>Name*</Form.Label>
            <Form.Control onChange={handleChange} name="name" type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mx-3"  as={Col} controlId="formGridEmail">
            <Form.Label >Email*</Form.Label>
            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mx-3" as={Col} controlId="formGridMobile">
            <Form.Label>Mobile no.*</Form.Label>
            <Form.Control onChange={handleChange} name="mobile" placeholder="" />
          </Form.Group>
          <Form.Group className="mx-3" as={Col} id="formGridQuery">
            <Form.Label>Query*</Form.Label>
            <Form.Control onChange={handleChange} name="query" as="textarea" rows={3} />
          </Form.Group>

          <Button className="my-3" onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form >
        <img className='divider' src={Divider} alt="Divider" />
        
        {/* facebook community */}
        <div className="row">
        <Card className="col-3 mx-auto concard" style={{ width: '18rem' }}>
        <Card.Link href="https://www.facebook.com/RadiantCauldron"><img className="mt-2" variant="top"  src={fbgreen} alt="facebook logo green"></img></Card.Link>
          <Card.Body>
            <Card.Title>Facebook Community Page!</Card.Title>
            <Card.Text>
              Come join our community page on facebook!
            </Card.Text>
          </Card.Body>
        </Card>

      {/* facebook vendors. */}
        <Card className="col-3 mx-auto concard" style={{ width: '18rem' }}>
            <Card.Link href="https://www.facebook.com/groups/radiantcauldronvendors/"><img className="mt-2" variant="top"  src={fbbrown} alt="facebook logo brown"></img></Card.Link>
          <Card.Body>
            <Card.Title>Facebook Vendor Page!</Card.Title>
            <Card.Text>
              Come join our community page for local vendors and readers!
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
      <img className='divider' src={Divider} alt="Divider" />
    </div >
  );
}

export default Contact;