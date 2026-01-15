

const BecomeASellerModal = ({ open, setOpen }) => {

  return (
    <>
      

      {/* Modal */}
      {open && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            {/* Close Button */}
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <h3 className="text-lg font-bold mb-2">Become a Seller</h3>

            <p className="text-sm text-gray-600 mb-4">
              Start selling your products on our platform. Fill in your details
              and submit your request.
            </p>

            {/* Example Form */}
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Shop Name"
                className="input input-bordered w-full"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
              />

              <textarea
                placeholder="Why do you want to become a seller?"
                className="textarea textarea-bordered w-full"
              />

              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BecomeASellerModal;
