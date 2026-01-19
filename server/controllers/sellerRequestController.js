const SellerRequest = require('../models/SellerRequest');

// Create request
exports.createRequest = async (req, res) => {
  try {
    const { email } = req.body;

    // 1️⃣ Validate required field
    if (!email) {
      return res.status(400).json({
        message: 'Email is required',
      });
    }

    // 2️⃣ Check if seller request already exists
    const isExist = await SellerRequest.findOne({ email });

    if (isExist) {
      return res.status(409).json({
        message: 'Seller request already submitted',
      });
    }

    // 3️⃣ Create new request
    const request = await SellerRequest.create(req.body);

    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({
      message: 'Failed to create seller request',
      error: err.message,
    });
  }
};

// Get all requests (Admin)
exports.getAllRequests = async (req, res) => {
  try {
    const requests = await SellerRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get request by email
exports.getMyRequest = async (req, res) => {
  try {
    const request = await SellerRequest.findOne({
      email: req.params.email,
    });
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update status
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await SellerRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete request
exports.deleteRequest = async (req, res) => {
  try {
    await SellerRequest.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Request deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
