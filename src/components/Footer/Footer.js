import React from 'react'
import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';





const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='top1'>
            <h2>Zomato</h2>
            <div className='lang'>
                <select>
                    <option value="">India</option>
                    <option value="">UAE</option>
                </select>
                <select>
                    <option value="English">English</option>
                    <option value="Türkçe">Türkçe</option>
                    <option value="हिंदी">हिंदी</option>
                    <option value="Português (BR)">Português (BR)</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Português (PT)">Português (PT)</option>
                    <option value="Español">Español</option>
                    <option value="Čeština">Čeština</option>
                    <option value="Slovenčina">Slovenčina</option>
                    <option value="Polish">Polish</option>
                    <option value="Italian">Italian</option>
                    <option value="Vietnamese">Vietnamese</option>
                </select>
            </div>
        </div>
        <div className='bottom1'>
            <div className='bottomContent'>
                <h4>About ZOMATO</h4>
                <p>Who We Are</p>
                <p>Blog</p>
                <p>Work With Us</p>
                <p>Investor Relations</p>
                <p>Report Fraud</p>
                <p>Press Kit</p>
                <p>Contact Us</p>
            </div>
            <div className='bottomContent'>
                <h4>ZOMAVERSE</h4>
                <p>Zomato</p>
                <p>Blinkit</p>
                <p>Freeding India</p>
                <p>Hyperpure</p>
                <p>Zomato Live</p>
                <p>Zomaland</p>
                <p>Weather Union</p>
            </div>
            <div className='bottomContent'>
                <h4>FOR RESTURANTS</h4>
                <p>Partner With Us</p>
                <p>Apps For You</p>
            </div>
            <div className='bottomContent'>
                <h4>LEARN MORE</h4>
                <p>Privacy</p>
                <p>Security</p>
                <p>Terms</p>
                <p>Sitemap</p>
            </div>
            <div className='bottomContent'>
                <h4>SOCIAL LINKS</h4>
                <div className='links'>
                <LinkedInIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
                <FacebookIcon/>
            </div>
            <img src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png' alt='appstore'/>
            <img src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png' alt='playstore'/>
            </div> 
        </div>
      </div>
      <hr/>
      <div className='bottom'>
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer
