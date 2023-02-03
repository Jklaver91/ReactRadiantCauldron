import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import VendorBanner from '.././Assets/Logos/Vendor.png';
import Divider from '.././Assets/Logos/Divider.png';

function Vendor() {
    return (
        <div>
             <img className='divider' src={Divider} alt="Divider" />
            <a href='https://www.facebook.com/RadiantCauldron'><img src={VendorBanner} alt="Vendor" /></a>
            <img className='divider' src={Divider} alt="Divider" />
        </div >
    );
}

export default Vendor;