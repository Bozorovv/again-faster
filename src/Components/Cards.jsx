import '../Styles/cards.css'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import CardsProps from './CardsProps';
import cards1 from '../Image/cards1.svg'

function Cards() {
  return (
    <div className='cards'>
      <div className="container">
        <div className="cards_wrapper">
            <CardsProps rasm={cards1} nomi={"Comprehensive products and services"} text={"Since 2006 we have provided everything you need to pursue functional fitness: pull-up rigs, rubber flooring, turf, safety mats, barbells, bumpers, plyo boxes, climbing ropes, kettlebells, rowers and more. We make sure that you're fully outfitted from Day One, saving you time and money."}/>
            <CardsProps rasm={cards1} nomi={"One-on-one consultation"} text={"Our team is composed of experienced athletes and coaches who know what you need to run a successful gym. They’ve stood in your shoes, and will guide you through the critical questions involved in creating an ideal equipment package for your gym."}/>
            <CardsProps rasm={cards1} nomi={"Facility layout and design service"} text={"Our engineering team can help design your facility for maximum functionality. We’ll make sure your equipment list makes sense with your space, and we can provide everything from simple schematics to light-and-shadow renderings for marketing purposes."}/>
            <CardsProps rasm={cards1} nomi={"Rapid delivery"} text={"We stock nearly every item we sell in our United States warehouses. Completed orders ship within 2 business days, ensuring that we can get you your equipment quickly."}/>
            <CardsProps rasm={cards1} nomi={"100% Satisfaction guarantee"} text={"Our equipment is designed, prototyped, and tested in-house. We create our equipment with the needs of the coach in mind, and we subject every piece to rigorous abuse to make sure it meets the needs of a high-volume, high-impact facility. We stand behind our equipment 100%, with the best warranties in the business."}/>
            <CardsProps rasm={cards1} nomi={"exceptional customer service"} text={"The Again Faster team is one call, click or email away. When you need help, we’re here, with extremely rapid response times and a single ethos driving our actions: we treat you as we’d expect to be treated."}/>
              </div>
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
    0: { slidesPerView: 1, spaceBetween: 15 },
    500: { slidesPerView: 1.5, spaceBetween: 20 },
    768: { slidesPerView: 1.5, spaceBetween: 25 },
    1024: { slidesPerView: 1.5, spaceBetween: 40 },
  }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
          
                 <SwiperSlide> 
                <CardsProps rasm={cards1} nomi={"Comprehensive products and services"} text={"Since 2006 we have provided everything you need to pursue functional fitness: pull-up rigs, rubber flooring, turf, safety mats, barbells, bumpers, plyo boxes, climbing ropes, kettlebells, rowers and more. We make sure that you're fully outfitted from Day One, saving you time and money."}/>
            </SwiperSlide>
           
            <SwiperSlide> 
                <CardsProps rasm={cards1} nomi={"Comprehensive products and services"} text={"Since 2006 we have provided everything you need to pursue functional fitness: pull-up rigs, rubber flooring, turf, safety mats, barbells, bumpers, plyo boxes, climbing ropes, kettlebells, rowers and more. We make sure that you're fully outfitted from Day One, saving you time and money."}/>
            </SwiperSlide>
           
            <SwiperSlide> 
                <CardsProps rasm={cards1} nomi={"Comprehensive products and services"} text={"Since 2006 we have provided everything you need to pursue functional fitness: pull-up rigs, rubber flooring, turf, safety mats, barbells, bumpers, plyo boxes, climbing ropes, kettlebells, rowers and more. We make sure that you're fully outfitted from Day One, saving you time and money."}/>
            </SwiperSlide>
           
            <SwiperSlide> 
                <CardsProps rasm={cards1} nomi={"Comprehensive products and services"} text={"Since 2006 we have provided everything you need to pursue functional fitness: pull-up rigs, rubber flooring, turf, safety mats, barbells, bumpers, plyo boxes, climbing ropes, kettlebells, rowers and more. We make sure that you're fully outfitted from Day One, saving you time and money."}/>
            </SwiperSlide>
           
            <SwiperSlide> 
                <CardsProps rasm={cards1} nomi={"Comprehensive products and services"} text={"Since 2006 we have provided everything you need to pursue functional fitness: pull-up rigs, rubber flooring, turf, safety mats, barbells, bumpers, plyo boxes, climbing ropes, kettlebells, rowers and more. We make sure that you're fully outfitted from Day One, saving you time and money."}/>
            </SwiperSlide>
           
            <SwiperSlide> 
                <CardsProps rasm={cards1} nomi={"Comprehensive products and services"} text={"Since 2006 we have provided everything you need to pursue functional fitness: pull-up rigs, rubber flooring, turf, safety mats, barbells, bumpers, plyo boxes, climbing ropes, kettlebells, rowers and more. We make sure that you're fully outfitted from Day One, saving you time and money."}/>
            </SwiperSlide>
          
           
           
        
          </Swiper>
      </div>
    </div>
  )
}

export default Cards
