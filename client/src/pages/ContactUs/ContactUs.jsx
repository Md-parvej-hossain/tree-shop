import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-500 mt-2">
            We’d love to hear from you. Please fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body space-y-4">
                <h3 className="text-xl font-semibold">Get in Touch</h3>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-primary text-xl" />
                  <span>admin@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-primary text-xl" />
                  <span>+8801866783060</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Map (optional) */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body p-0">
                <iframe
                  title="map"
                  className="w-full h-64 rounded-lg"
                  src="https://www.google.com/maps?q=Dhaka&output=embed"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-4">Send Message</h3>

              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32 w-full"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button className="btn btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
