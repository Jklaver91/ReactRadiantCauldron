//all of our assets and styling
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '.././Assets/Logos/Base.png';
import Divider from '.././Assets/Logos/Divider.png';
import '.././App.css';
import Divine from '.././Assets/Logos/Divine.png';
import fbbrown from '.././Assets/Logos/fbbrown.jpg'
import VendorBanner from '.././Assets/Logos/Vendor.png';

function Home() {
    return (
        <div>
            {/* The logo banner */}
            <img src={Logo} alt="Logo" />
            <img className='divider' src={Divider} alt="Divider" />
            {/* Current Event */}
            <h1 className='text my-3'>Join us at our next market!</h1>
            <a href='/events'><img className='event' src={Divine} alt="Divine" /></a>
            <img className='divider' src={Divider} alt="Divider" />
            {/* Vendor information */}
            <h1 className='text my-3'>Vendor Information!</h1>
            <a href='/vendor'><img className='event' src={VendorBanner} alt="Vendor" /></a>
            <img className='divider' src={Divider} alt="Divider" />
            {/* Facebook info */}
            <h1 className='text my-3'>Find us on Facebook!</h1>
            <a href='https://www.facebook.com/RadiantCauldron'><img className='mb-5 fb rounded' src={fbbrown} alt="facebook logo brown" /></a>

        </div >
    );
}

export default Home;