import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import plant1 from '../../assets/images/plant1.png';
import plant2 from '../../assets/images/plant2.png';
import plant3 from '../../assets/images/plant3.jpg';
import Button from '../Shared/button/button';
const HeroSlider = () => {
  const slides = [plant1, plant2, plant3];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f7f7f5]">
      {/* FIXED CONTENT */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Plants Gonna Make <br /> People Happy
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Natural plants for your home and office environment
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button />
              <button className="btn bg-white border border-green-700 text-green-700 shadow hover:bg-green-500 hover:text-white  ">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE SLIDER (AUTO ONLY) */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          // reverseDirection: true, // right → left
        }}
        speed={1200}
        className="h-full w-full"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="Hero Plant"
              className="w-full h-screen object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* OVERLAY FOR TEXT READABILITY */}
      <div className="absolute inset-0 bg-white/10 z-10" />
    </section>
  );
};

export default HeroSlider;
