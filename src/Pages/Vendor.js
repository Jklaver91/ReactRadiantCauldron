// All of the assets needed
import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Divider from '.././Assets/Logos/Divider.png';
import Divine from '.././Assets/Logos/Divine.png';

function Vendor() {
    return (
        // Information of current event
        <div>
             <img className='divider' src={Divider} alt="Divider" />
            <a href='https://www.facebook.com/events/737844167622989?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22bookmark_search%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_tab_event%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D'><img src={Divine} alt="Divine" /></a>
            {/* The vendor registration form. */}
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe673PR_U_adG8zRbSBVfxGx2eyretoO9oN4xFM0kmxm5m_Mg/viewform?embedded=true" width="100%" height="2578" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <img className='divider' src={Divider} alt="Divider" />
        </div >
    );
}

export default Vendor;