import './HeaderSearchBar.css'
import camera from '../../../assets/images/Icons/cameraBlack.svg'
import cameraO from '../../../assets/images/Icons/cameraorange.svg'
import search from '../../../assets/images/Icons/searchW.svg'
import SearchBarPopUp from '../SearchBar/SearchBarPopUp'
const HeaderSearchBar = () => {

    const placeHolderItems=[{item:'wedding decoration' ,ani:'placeHolderItem1'} , {item:'electric bike',ani:'placeHolderItem2'} , {item:'milwaukee tools',ani:'placeHolderItem3'}]
    const frequentlySearchedItems=[
        {id:400,searcheditem:'tools'},
        {id:401,searcheditem:'sofa set furniture'},
        {id:402,searcheditem:'furniture'},
        {id:403,searcheditem:'milwaukee tools'}
    ];
    function showSearchBarPopUp(){
        document.getElementById('searchBarPopup').style.display='flex !important;'
    }

    return(
        <div className="headerSearchBarContainer">
            <div className='headerSearchBarContent'>            
                <div className='headerSearchBarTabContainer'>            
                    <div className='headerSearchBarTab'><button className='tabSearchBtn active'>Products</button></div>
                    <div className='headerSearchBarTab'><button className='tabSearchBtn'>Manufacturers</button></div>
                </div>
                <div>
                    <div className='searchBarContainer'>
                        <div className='inputSearchBarContainer'>
                            <div className='inputSearchBar'>
                                <input onMouseOver={showSearchBarPopUp} placeholder=''></input>
                                <div className='searchBarPlaceHolder'>
                                    <div className='placeHolderItems'>
                                        {placeHolderItems.map((placeHolderItem)=><div className='placeHolderItem'>{placeHolderItem.item}</div>)}
                                    </div>
                                </div>
                            </div>
                            <div className='searchBarIcon'>
                                <img src={camera} alt='camera' className='searchBarIconDefault'/>
                                <img src={cameraO} alt='camera' className='searchBarIconHover'/>
                            </div>
                            <div className='searchBarbuttonContainer'>
                                <button className='searchBarbutton'>
                                    <img src={search} alt='Search'/>
                                    <span>Search</span>
                                </button>
                            </div>
                            <div className='searchBarPopup' id='searchBarPopup'>
                                <SearchBarPopUp/>
                            </div>
                        </div>
                        <div className='frequentlySearchedContainer'>
                            <span className='frequentlySearchName'>Frequently searched:</span>
                            {frequentlySearchedItems.map((item)=><div key={item.id}>{item.searcheditem}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default HeaderSearchBar;