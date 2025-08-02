import banner1 from '../Image/banner1.png'
import banner2 from '../Image/banner2.png'
import '../Styles/banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className="container">
                <div className="banner_wrapper">
                    <div className="banner_content">
                        <img src={banner1} alt="" />
                        <h1>Professional gym</h1>
                        <button>Shop Professional</button>
                    </div>
                    <div className="banner_content">
                        <img src={banner2} alt="" />
                        <h1>Home gym</h1>
                        <button>Shop Professional</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
