import './Home.css'

import business from '../../assets/images/AlibabaImages/Icons/Business.webp'
import Logistics from '../../assets/images/AlibabaImages/Icons/Logistics.webp'
import quotation from '../../assets/images/AlibabaImages/Icons/Quotation.webp'
import LightsLighting from '../../assets/images/AlibabaImages/Icons/shopCategoryIcons/LightsLighting.avif'
import ConsumerElectronics from '../../assets/images/AlibabaImages/Icons/shopCategoryIcons/ConsumerElectronics.avif'
import Sports from '../../assets/images/AlibabaImages/Icons/shopCategoryIcons/SportsEntertainment.avif'
import HomeGarden from '../../assets/images/AlibabaImages/Icons/shopCategoryIcons/HomeGarden.avif'
import Jewelry from '../../assets/images/AlibabaImages/Icons/shopCategoryIcons/JewelryEyewearWatchesAccessories.avif'
import Beauty from '../../assets/images/AlibabaImages/Icons/shopCategoryIcons/Beauty.avif'
import categoryArrow from '../../assets/images/AlibabaImages/Icons/shopCategoryIcons/categoryArrow.png'
import AllCategories from '../../assets/images/AlibabaImages/Icons/shopCategoryIcons/AllCategories.avif'
import FactoryLIVE from '../../assets/images/AlibabaImages/Icons/shopCategoryIcons/FactoryLIVE.gif'
import product1 from '../../assets/images/AlibabaImages/products/1.avif'
import product2 from '../../assets/images/AlibabaImages/products/2.avif'
import qalive from '../../assets/images/AlibabaImages/products/QALIVE.avif'
import qaliveadd from '../../assets/images/AlibabaImages/products/QALIVEadd.avif'
import hotPicksLIVE from '../../assets/images/AlibabaImages/products/hotPicksLIVE.avif'
import hotPicksLIVEadd from '../../assets/images/AlibabaImages/products/hotPicksLIVEadd.avif'
import bestSellers from '../../assets/images/AlibabaImages/products/bestSellers.avif'
import quickResponse from '../../assets/images/AlibabaImages/products/quickResponse.avif'
import mostPopular  from '../../assets/images/AlibabaImages/products/mostPopular.avif'
import OnTimeDelivery from '../../assets/images/AlibabaImages/products/OnTimeDelivery.avif'

import userAvatar from '../../assets/images/AlibabaImages/Icons/avatar.png'


const Home = () => {

    const shopCategoryListItems=[
        {id:600, categoryName:'Lights & Lighting' ,icon:LightsLighting},
        {id:601,categoryName:'Consumer Electronics', icon:ConsumerElectronics},
        {id:602,categoryName:'Sports & Entertainment', icon:Sports},
        {id:603,categoryName:'Home & Garden', icon:HomeGarden},
        {id:604,categoryName:'Jewelry, Eyewear, Watches & Accessories', icon:Jewelry},
        {id:605,categoryName:'Beauty', icon:Beauty},
        {id:606,categoryName:'All categories', icon:AllCategories}
    ];
    const getSampleProduct=[
        {id:630, productName:'Newly released',icon:product1},
        {id:631, productName:'Trending',icon:product2}
    ];
    const factoryLIVE=[
        {id:610, productName:'Q&A LIVE' , icon:qalive , addImg:qaliveadd},
        {id:610, productName:'Hot picks LIVE' , icon:hotPicksLIVE , addImg:hotPicksLIVEadd}
    ];
    const topRanking=[
        {id:620, productName:'Quick response',icon:quickResponse},
        {id:621, productName:'Best sellers',icon:bestSellers},
        {id:622, productName:'Most popular',icon:mostPopular},
        {id:622, productName:'On-time Delivery',icon:OnTimeDelivery},
    ];
    const userName="Guest";

    return(
        <div className="homeContainer">
            <div className="welcomeUserContainer">
                <div className='welcomeUserLayout'>
                    <div className="welcomeUser"><h3>Welcome to Alibaba.com</h3></div>
                    <div className="welcomeNavigate">
                        <div className='welcomeNavigateItem'><img src={quotation} alt='quotation'/><span>Request for Quotation</span></div>
                        <div className='welcomeNavigateItem'><img src={business} alt='business'/><span>Alibaba.com Business+</span></div>
                        <div className='welcomeNavigateItem'><img src={Logistics} alt='Logistics'/><span>Alibaba.com Logistics</span></div>
                    </div>
                </div>
            </div>

            <div className="boxes">
                <div className='shopCategory'>
                    <div className='shopCategoryContainer'>
                        <div className='shopCategoryListContainer'>
                            <div className='shopCategoryListTitle'>Source by category</div>
                            <div className='shopCategoryList'>
                                {shopCategoryListItems.map((item)=><div className='shopCategoryListItemContainer'><div key={item.id} className='shopCategoryListItem'><img src={item.icon} alt={item.categoryName}/>{item.categoryName}</div><img src={categoryArrow} alt={categoryArrow}/></div>)}
                            </div>
                        </div>
                        <div className='subCategoryListContainer'></div>
                    </div>
                </div>
                <div className='middleCardContainer'>
                    <div className='getSamples'>
                        <h3>Get samples</h3>
                        <div className='getSampleProductsContainer'>
                            <div className='getSampleProduct'>{getSampleProduct.map((item)=><div className='products'><div className='maskImgContainer'><img src={item.icon} alt={item.productName}/><div className='mask'></div></div> <span className='productName'>{item.productName}</span></div>)}</div>
                        </div>
                    </div>
                    <div className='liveReception'>
                        <h3><img src={FactoryLIVE} alt='FactoryLIVE' className='factoryLIVEImage'/>Factory LIVE Q&A</h3>
                        <div  className='products'>
                            {factoryLIVE.map((item)=><div><div className='maskImgContainer'><div className='liveReceptionImgages'><img src={item.icon} alt={item.productName} className='liveReceptionImg' /><img src={item.addImg} alt={item.productName} className='liveReceptionAddImg' /></div><div className='mask'></div></div><span className='productName'>{item.productName}</span></div>)}
                        </div>
                    </div>
                </div>
                <div>
                <div className='topRankingContainer'>
                    <h3>Top-ranking manufacturers</h3>
                    <div className='topRankingProducts'>{topRanking.map((item)=><div key={item.id} className='topRankingProduct'>
                        <div className='topRankingProductImg'>
                            <div className='maskImgContainer'>
                                <img src={item.icon} alt={item.productName}/>
                                <div className='mask'></div>
                            </div>
                        </div>
                        <span className='productName'>{item.productName}</span>
                        </div>)}
                    </div>
                </div>
                </div>
                <div className='userContainer'>
                    <div className='userWelcomeContainer'>
                        <div className='userWelcome'>
                            <div className='userAvatar'><img src={userAvatar} alt='user'/></div>
                            <div className='welcome'>
                                <span>Welcome!</span>
                                <span className='userName'>{userName}</span>
                            </div>
                        </div>
                        <div className='loginContainer'>
                            <div className='signInWelcome'><span>Sign in</span></div>
                            <div className='joinWelcome'><span>Join for free</span></div>
                        </div>
                    </div>
                    <div class="userOperateContainer">
                        <h4>One request, multiple quotes</h4>
                        <div className='moreInfo'>
                            <div>
                                <strong>160,000+</strong>
                                <span>Active suppliers</span>
                            </div>
                            <div>
                                <strong>&#60;19h</strong>
                                <span>Average response time</span>
                                </div>
                            <div>
                                <strong>7675</strong>
                                <span>Industries</span>
                            </div>
                        </div>
                        <div className='requestQuotationBtn'><span>Request for Quotation</span></div>
                    </div>
                </div>
            </div> 
            <div className="recomendFactory"></div>
            <div className="toolbar"></div>     
        </div>
    )
}
export default Home