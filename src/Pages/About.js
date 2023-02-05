import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Divider from '.././Assets/Logos/Divider.png';
import Card from 'react-bootstrap/Card';
import Litha1 from '.././Assets/Logos/owopink.jpg';
import Litha2 from '.././Assets/Logos/nosepiercing.jpg';
import Litha3 from '.././Assets/Logos/lithaHorse.jpg';

function About() {
    return (
        <div>
            <img className='divider mt-3' src={Divider} alt="Divider" />
            
            <div className="my-3 rounded about container">
                <div className="row">
                   
                    <div className="col-md-7 text-left">
                        <Card.Title className="my-3 fs-1">About Litha!</Card.Title>
                        <Card.Text className="my-5 mx-5 fs-5">
                        My name is Litha! I'm a Pagan Witch that's been practicing Witchcraft for 8 years. I've been a professional Tarot card reader for 6 years and have done thousands of readings on the hotlines, within my own business, and in person. I also have a few different Psychic abilities along with a strong intuition that guides me always. I created my business selling Spell Oils, Candles, Sprays, and more about 3 years ago. There is nothing more rewarding than sharing my creations with the world. I started going to events a year ago and it has created so many connections with fantastic people I now call friends.
                        </Card.Text>
                    </div>
                   
                        <Card.Img className="col-md-5 divider my-auto mx-auto p-2" src={Litha1} alt="Card image" />
                   
                </div>
            </div>
            <img className='divider' src={Divider} alt="Divider" />
            
            <div className="my-3 rounded about container">
                <div className="row">
                   
                        <Card.Img className="col-md-5 float-left divider my-auto mx-auto py-2" src={Litha2} alt="Card image" />
                   
                    
                    <div className="col-md-7">
                        <Card.Title className="my-3 fs-1">Why I started Radiant Cauldron.</Card.Title>
                        <Card.Text className="my-5 mx-5 fs-5">
                        I started Radiant Cauldron because I didn't believe enough Metaphysical Events were going on. I wanted to see more witches and spiritualists connecting, finding their tribe, and enjoying local handmade goodies. I wanted to make supporting a small local metaphysical business easy. I also wanted to do certain things I hadn't seen at previous events I attended. In particular, creating a fantastic ambiance with music and decorations, as well as doing a bit more hands-on advertising like creating graphics for each vendor/reader and creating flyers to put up around Charlotte and the surrounding areas. I enjoy doing the legwork and that's why I find my event coordination to be a little unique. I love taking care of all of my vendors/readers, guiding them as much as I can. Creating clear instructions and quickly answering any questions they may have. I just want everyone to be happy! 
                        </Card.Text>
                    </div>
                </div>
            </div>
            <img className='divider' src={Divider} alt="Divider" />

            <div className="my-3 rounded about container">
                <div className="row">
                    
                    <div className="col-md-7 text-left">
                        <Card.Title className="my-3 fs-1">Goals with Radiant Cauldron!</Card.Title>
                        <Card.Text className="my-5 mx-5 fs-5">
                        My ultimate goal with Radiant Cauldron is to curate the largest metaphysical events of Charlotte, no, North Carolina! I'd love to bring together fantastic and skilled vendors and readers and give them a place where they can truly thrive. My connections and event coordinator skills will only grow from here. I hope everyone's just as excited as me to see where this will go, what we can accomplish, and how we will thrive together.
                        </Card.Text>
                    </div>
    
                        <Card.Img className="col-md-5 divider my-auto mx-auto p-2" src={Litha3} alt="Card image" />
                   
                </div>
            </div>
            <img className='divider' src={Divider} alt="Divider" />

        </div>
    );
}

export default About;