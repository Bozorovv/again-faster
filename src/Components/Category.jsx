import '../Styles/category.css'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import cat1 from '../Image/cat1.png'
import cat2 from '../Image/cat2.png'
import cat3 from '../Image/cat3.png'
import cat4 from '../Image/cat4.png'
import cat5 from '../Image/cat5.jpg'

function Category() {
  return (
    <div className='category'>
      <div className="container">
        <div className="category_wrapper">
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
            <SwiperSlide><img src={cat1} alt="cat1" /> <h4>Bumper plates</h4></SwiperSlide>
            <SwiperSlide><img src={cat2} alt="cat2" /> <h4>Squat racks</h4></SwiperSlide>
            <SwiperSlide><img src={cat3} alt="cat3" /> <h4>Garage package</h4></SwiperSlide>
            <SwiperSlide><img src={cat4} alt="cat4" /> <h4>Affiliate outfitting</h4></SwiperSlide>
            <SwiperSlide><img src={cat5} alt="cat5" /> <h4>Squat racks</h4></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Category