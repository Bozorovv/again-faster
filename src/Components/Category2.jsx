import star from '../Image/starr.svg'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import mayka from '../Image/mayka.png'
import mayka2 from '../Image/mayka2.png'
import mayka3 from '../Image/mayka3.png'
import '../Styles/category2.css'

function Category2() {
    return (
        <div className="category2">
            <div className="container">
                <div className="category2_wrapper">
                    <Swiper
                        pagination={{
                            type: 'progressbar',
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 2, spaceBetween: 15 },
                            500: { slidesPerView: 2.5, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 25 },
                            1024: { slidesPerView: 4, spaceBetween: 40 },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div className="cate2">
                            <span>Best sellers</span>
                            <h1>Our favorites</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button>Shop Best seller</button>
                        </div> </SwiperSlide>
                        <SwiperSlide> <div className="cate3">
                            <button className='ghj'>Free Shipping</button>
                            <img src={mayka} alt="" />
                            <h2>Performance tee</h2>
                            <img className='cate4' src={star} alt="" />   
                            <h6>$34.00</h6>

                            </div> </SwiperSlide>
                        <SwiperSlide> <div className="cate3">
                            <button className='ghj'>Free Shipping</button>
                            <img src={mayka2} alt="" />
                            <h2>Performance tee</h2>
                            
                            <img className='cate4' src={star} alt="" />   
                            <h6>$34.00</h6>

                            </div> </SwiperSlide>
                        <SwiperSlide> <div className="cate3">
                           <button className='ghj'>Free Shipping</button>
                            <img src={mayka3} alt="" />
                            <h2>Performance tee</h2>
                            <img className='cate4' src={star} alt="" />   
                            <h6>$34.00</h6>

                            </div> </SwiperSlide>
                        <SwiperSlide> <div className="cate3">
                            <button className='ghj'>Free Shipping</button>
                            <img src={mayka} alt="" />
                            <h2>Performance tee</h2>
                            <img className='cate4' src={star} alt="" />   
                            <h6>$34.00</h6>

                            </div> </SwiperSlide>
                       
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Category2
