import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '.././Assets/Logos/Base.png';
import Divider from '.././Assets/Logos/Divider.png';
import '.././App.css';
import Divine from '.././Assets/Logos/Divine.png';
import fbpink from '.././Assets/Logos/fbpink.jpg'
import VendorBanner from '.././Assets/Logos/Vendor.png';

function Home() {
    return (
        <div>
            <img src={Logo} alt="Logo" />
            <img className='divider' src={Divider} alt="Divider" />
            <h1 className='text my-3'>Join us at our next market!</h1>
            <a href='/events'><img className='event' src={Divine} alt="Divine" /></a>
            <img className='divider' src={Divider} alt="Divider" />
            <h1 className='text my-3'>Vendor Information!</h1>
            <img className='event' src={VendorBanner} alt="Vendor" />
            <img className='divider' src={Divider} alt="Divider" />
            <h1 className='text my-3'>Find us on Facebook!</h1>
            <a href='https://www.facebook.com/RadiantCauldron'><img className='mb-5 fb rounded' src={fbpink} alt="fbpink" /></a>

        </div >
    );
}

export default Home;