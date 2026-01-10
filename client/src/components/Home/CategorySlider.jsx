import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { category } from '../../api/data/category';

const CategorySlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 },
      }}
      modules={[Pagination]}
    >
      {category.map(category => (
        <SwiperSlide key={category.id}>
          <div className="bg-white rounded-xl group shadow p-4 text-center my-4 ">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-lg group-hover:scale-110 transition duration-700"
            />
            <h3 className="mt-3 font-semibold text-lg dark:text-green-400 ">
              {category.name}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
