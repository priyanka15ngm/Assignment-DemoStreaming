import "../css/Footer.css";
import { FaFacebookF, FaTwitter,FaInstagram} from "react-icons/fa";
import MobileStoreButton from 'react-mobile-store-button';



const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
// const name = "priyanka";
function Footer(){
    
    return<>
            <div className="footer">
                <div className = "foot" >
                Home | Terms and condition | Privacy Policy | Collection Statement | Help | Manage Account<br>
                </br>Copyright@Demo Streaming Priyanka Nigam 2021

                <div class="bottom">
                <FaFacebookF/>&nbsp;
             <FaTwitter/>&nbsp;
             <FaInstagram/>
                </div>
                 </div>
                 <div class ="icons">
             
                     <MobileStoreButton store="ios" url={iOSUrl} linkProps={{ title: 'iOS Store Button' }}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <MobileStoreButton store="ios" url={iOSUrl} linkProps={{ title: 'iOS Store Button' }}/>
             
             
             </div>



            </div>
    
    
    
    
    </>
}


export default Footer;