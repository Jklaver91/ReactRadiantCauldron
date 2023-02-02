import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '.././Assets/Logos/Base.png';
import Divider from '.././Assets/Logos/Divider.png';
import '.././App.css';
import Divine from '.././Assets/Logos/Divine.png';
import fbpink from '.././Assets/Logos/fbpink.jpg'

function Home() {
    return (
        <div>
            <img src={Logo} alt="Logo" />
            <img className='divider' src={Divider} alt="Divider" />
            <h2 className='text my-3'>Join us at our next market!</h2>
            <a href='/events'><img className='event' src={Divine} alt="Divine" /></a>
            <img className='divider' src={Divider} alt="Divider" />
            <h2 className='text my-3'>Vendor Information!</h2>
            <img className='divider' src={Divider} alt="Divider" />
            <h2 className='text my-3'>Find us on Facebook!</h2>
            <a href='https://www.facebook.com/RadiantCauldron'><img className='fb rounded' src={fbpink} alt="fbpink" /></a>

        </div >
    );
}

export default Home;