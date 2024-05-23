import './Footer.css'
import facebook from '../../assets/images/AlibabaImages/Icons/Social/facebook.png'
import instagram from '../../assets/images/AlibabaImages/Icons/Social/instagram.png'
import linkedIn from '../../assets/images/AlibabaImages/Icons/Social/linkedIn.png'
import tiktok from '../../assets/images/AlibabaImages/Icons/Social/tiktok.png'
import twitter from '../../assets/images/AlibabaImages/Icons/Social/twitter.png'
import youtube from '../../assets/images/AlibabaImages/Icons/Social/youtube.png'
import appStore from '../../assets/images/AlibabaImages/Icons/appStore.avif'
import googlePlay from '../../assets/images/AlibabaImages/Icons/googlePlay.avif'

const Footer = () =>{
    return(
        <div className="footerContainer">
            <div className='topFooter'>
            <div className='footerContent'>
                <div className='getSupport'>
                    <h3>Get support</h3>
                    <div>
                        <a href="javascript:void(0)">Help Center</a>
                        <a href="javascript:void(0)">Live chat</a>
                        <a href="javascript:void(0)">Check order status</a>
                        <a href="javascript:void(0)">Refunds</a>
                        <a href="javascript:void(0)">Report abuse</a>
                    </div>
                </div>
                <div className='tradeAssurance'>
                    <h3>Trade Assurance</h3>
                    <div>
                        <a href="javascript:void(0)">Safe and easy payments</a>
                        <a href="javascript:void(0)">Money-back policy</a>
                        <a href="javascript:void(0)">On-time shipping</a>
                        <a href="javascript:void(0)">After-sales protections</a>
                        <a href="javascript:void(0)">Product monitoring services</a>
                    </div>
                </div>
                <div className='sourceOnAlibaba'>
                    <h3>Source on Alibaba.com</h3>
                    <div>
                        <a href="javascript:void(0)">Request for Quotation</a>
                        <a href="javascript:void(0)">Membership program</a>
                        <a href="javascript:void(0)">Alibaba.com Logistics</a>
                        <a href="javascript:void(0)">Sales tax and VAT</a>
                        <a href="javascript:void(0)">Alibaba.com Reads</a>
                    </div>
                </div>
                <div className='sellOnAlibaba'>
                    <h3>Sell on Alibaba.com</h3>
                    <div>                        
                        <a href="javascript:void(0)">Start selling</a>
                        <a href="javascript:void(0)">Seller Central</a>
                        <a href="javascript:void(0)">Become a Verified Supplier</a>
                        <a href="javascript:void(0)">Partnerships</a>
                        <a href="javascript:void(0)">Download the app for suppliers</a>
                    </div>
                </div>
                <div className='getToKnowUs'>
                    <h3>Get to know us</h3>
                    <div>
                        <a href="javascript:void(0)">About Alibaba.com</a>
                        <a href="javascript:void(0)">Corporate responsibility</a>
                        <a href="javascript:void(0)">News center</a>
                        <a href="javascript:void(0)">Careers</a>
                    </div>
                </div>
            </div>
            <div className='footerBottom'>
                <div className='footerSocial'>
                    <a href="javascript:void(0)"><img src={facebook} alt='facebook'/></a>
                    <a href="javascript:void(0)"><img src={instagram} alt='instagram'/></a>
                    <a href="javascript:void(0)"><img src={linkedIn} alt='linkedIn'/></a>
                    <a href="javascript:void(0)"><img src={tiktok} alt='tiktok'/></a>
                    <a href="javascript:void(0)"><img src={twitter} alt='twitter'/></a>
                    <a href="javascript:void(0)"><img src={youtube} alt='youtube'/></a> 
                </div>
                <div className='getApp'>
                    <div>Trade on the go with the  <a href="javascript:void(0)">Alibaba.com app</a></div>
                    <a href="javascript:void(0)"><img src={appStore} alt='appStore'/></a>
                    <a href="javascript:void(0)"><img src={googlePlay} alt='googlePlay'/></a>
                </div>
            </div>
            </div>
            <div className='footerInfo'>
                <div className='group-links'>
                    <a href="javascript:void(0)">AliExpress</a>
                    <a href="javascript:void(0)">1688.com</a>
                    <a href="javascript:void(0)">Tmall Taobao World</a>
                    <a href="javascript:void(0)">Alipay</a>
                    <a href="javascript:void(0)">Lazada</a>
                    <a href="javascript:void(0)">Taobao Global</a>
                </div>
                <div className='infosContent'>
                    <a href="javascript:void(0)">Policies and rules</a>
                    <a href="javascript:void(0)">Legal Notice</a>
                    <a href="javascript:void(0)">Product Listing Policy</a>
                    <a href="javascript:void(0)">Intellectual Property Protection</a>
                    <a href="javascript:void(0)">Privacy Policy</a>
                    <a href="javascript:void(0)">Terms of Use</a>
                    <a href="javascript:void(0)">Integrity Compliance</a>
                </div>
            </div>
        </div>
    )
}
export default Footer