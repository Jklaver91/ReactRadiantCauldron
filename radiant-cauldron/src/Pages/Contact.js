import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Divider from '.././Assets/Logos/Divider.png';
import Card from 'react-bootstrap/Card';
import fbpink from '.././Assets/Logos/fbpink.jpg'
import Email from '.././Assets/Logos/Email.jpg'

function Contact() {
    return (
        <div>
             <img className='divider' src={Divider} alt="Divider" />
             <h1 className="text">Contact us!</h1>

        <div className="row">
        <Card className="col-3 mx-auto" style={{ width: '18rem' }}>
      <Card.Img className="mt-2" variant="top" src={fbpink} />
      <Card.Body>
        <Card.Title>Facebook!</Card.Title>
        <Card.Text>
          Come join our community page on facebook!
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="col-3 mx-auto" style={{ width: '18rem' }}>
      <Card.Img className="mt-2" variant="top" src={Email} />
      <Card.Body>
        <Card.Title>Email!</Card.Title>
        <Card.Text>
          Come join our community page on facebook!
        </Card.Text>
      </Card.Body>
    </Card>

        </div>
             <img className='divider' src={Divider} alt="Divider" />
        </div >
    );
}

export default Contact;