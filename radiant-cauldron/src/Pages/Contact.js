import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Divider from '.././Assets/Logos/Divider.png';
import Card from 'react-bootstrap/Card';
import fbpink from '.././Assets/Logos/fbpink.jpg'
import { Form, Col, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, updateFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    query: ""
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message. Your query has been forwarded.`);
    const serviceID = "service_t56p61h";
    const templateId = 'template_ihls16f';
    sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, message_html: formData.query, email: formData.email });

    console.log(formData);
  };

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
        
        <div className="row">
        <Card className="col-3 mx-auto" style={{ width: '18rem' }}>
        <Card.Link href="https://www.facebook.com/RadiantCauldron"><img className="mt-2" variant="top"  src={fbpink}></img></Card.Link>
          <Card.Body>
            <Card.Title>Facebook Community Page!</Card.Title>
            <Card.Text>
              Come join our community page on facebook!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-3 mx-auto" style={{ width: '18rem' }}>
            <Card.Link href="https://www.facebook.com/groups/radiantcauldronvendors/"><img className="mt-2" variant="top"  src={fbpink}></img></Card.Link>
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