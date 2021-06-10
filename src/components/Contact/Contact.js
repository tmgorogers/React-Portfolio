import {FaFilePdf, FaGithub, FaLinkedin} from "react-icons/fa"
import classes from './Contact.module.css'

const handleURL = (url) => {
    return event => window.open(url, "blank")
}

const Contact = () => {
    return (
        <div className={classes.Contact} id="contact">
           <div className={classes.ContactIcons} >
            <FaFilePdf color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://www.pdf.investintech.com/preview-frames.php?id=WGMxUkVjRVMxVTZqTTBFZ25yOFhwbEY0SWZDNmlCbERtZE1xVGRSWkdlZHp5blNBZVN4TFRxWFAyUDZWNDkxOWR3ajBLeWF0d2NiN3ZBWWd5cEUzRGtsZDI2ckwxMkVpanJvY01DK1U3NW5jNDZBdll1WG15Zmg3SytObG5wbUk=')} />
        
        <FaGithub color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://github.com/tmgorogers')} />

<FaLinkedin color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://linkedin.com/in/tierra-r-46a978101')} />
        </div>
        </div>
    );
}

export default Contact;