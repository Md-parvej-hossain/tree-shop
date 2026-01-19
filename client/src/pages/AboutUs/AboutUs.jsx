import topImg from '../../assets/aboutImage/topImg.jpg';
import consterOne from '../../assets/aboutImage/consterOne.jpg';
import continerTwo from '../../assets/aboutImage/continerTwo.jpg';
import continerThree from '../../assets/aboutImage/continerThree.jpg';
import img1 from '../../assets/aboutImage/img1.jpg';
import img2 from '../../assets/aboutImage/img2.jpg';
import img3 from '../../assets/aboutImage/img3.jpg';
import img4 from '../../assets/aboutImage/img4.jpg';
const AboutUs = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('${topImg}')`,
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* CONTAINER 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={`${consterOne}`}
            alt="Our Mission"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <div className="">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to bring nature closer to people by providing
              healthy plants and sustainable solutions for greener living.
            </p>
          </div>
        </div>

        {/* CONTAINER 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where every home and workspace is enriched
              with greenery, improving well-being and environmental balance.
            </p>
          </div>
          <img
            src={`${continerTwo}`}
            alt="Our Vision"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>

        {/* CONTAINER 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={`${continerThree}`}
            alt="Why Choose Us"
            className="rounded-xl shadow-lg"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 leading-relaxed">
              We focus on quality, sustainability, and customer satisfaction.
              Every plant is carefully nurtured and delivered with care.
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE GALLERY SECTION */}
      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Green Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <img
            src={`${img4}`}
            className="md:col-span-2 row-span-2 h-full object-cover rounded-xl"
          />
          <img src={`${img1}`} className="h-full object-cover rounded-xl" />
          <img src={`${img2}`} className="h-full object-cover rounded-xl" />
          <img
            src={`${img3}`}
            className="md:col-span-2 h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
