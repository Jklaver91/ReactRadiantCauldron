// Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Divine from '.././Assets/Logos/Divine.png';
import Divider from '.././Assets/Logos/Divider.png';

function Events() {
    return (
        // Current Event
        <div>
            <img className='divider' src={Divider} alt="Divider" />
            <h1 className="text">Our next event! 2/26/23</h1>
            <a href='https://www.facebook.com/events/737844167622989?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22bookmark_search%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_tab_event%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D'><img className='event' src={Divine} alt="Divine" /></a>
            <img className='divider' src={Divider} alt="Divider" />
        </div >
        // Future Events go below
    );
}

export default Events;