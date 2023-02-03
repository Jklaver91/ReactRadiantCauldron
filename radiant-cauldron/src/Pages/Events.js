import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Divine from '.././Assets/Logos/Divine.png';
import Divider from '.././Assets/Logos/Divider.png';

function Events() {
    return (
        <div>
            <img className='divider' src={Divider} alt="Divider" />
            <h1 className="text">Our next event! 2/26/23</h1>
            <a href='/events'><img className='event' src={Divine} alt="Divine" /></a>
            <img className='divider' src={Divider} alt="Divider" />
        </div >
    );
}

export default Events;