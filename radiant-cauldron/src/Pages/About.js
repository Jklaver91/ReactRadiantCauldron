import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Divider from '.././Assets/Logos/Divider.png';
import Card from 'react-bootstrap/Card';
import Lithaowo from '.././Assets/Logos/Lithaowo.png';

function About() {
    return (
        <div>
            <img className='divider' src={Divider} alt="Divider" />
            
            <div className="my-3 rounded about container">
                <div className="row">
                   
                    <div className="col-md-7 text-left">
                        <Card.Title className="my-3">About Litha!</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </Card.Text>
                    </div>
                   
                        <Card.Img className="col-md-5 divider my-3" src={Lithaowo} alt="Card image" />
                   
                </div>
            </div>
            <img className='divider' src={Divider} alt="Divider" />
            
            <div className="my-3 rounded about container">
                <div className="row">
                   
                        <Card.Img className="col-md-5 float-left divider my-3" src={Lithaowo} alt="Card image" />
                   
                    
                    <div className="col-md-7">
                        <Card.Title className="my-3">Why I started Radiant Cauldron.</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </Card.Text>
                    </div>
                </div>
            </div>
            <img className='divider' src={Divider} alt="Divider" />

            <div className="my-3 rounded about container">
                <div className="row">
                    
                    <div className="col-md-7 text-left">
                        <Card.Title className="my-3">Goals with Radiant Cauldron!</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </Card.Text>
                    </div>
    
                        <Card.Img className="col-md-5 divider my-3" src={Lithaowo} alt="Card image" />
                   
                </div>
            </div>
            <img className='divider' src={Divider} alt="Divider" />

        </div>
    );
}

export default About;