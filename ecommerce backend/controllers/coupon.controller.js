const CouponModel = require('../models/coupon.model');

// ✅ Add new coupon
const addCoupon = async (req, res) => {
  try {
    const { 
      name, 
      productType, 
      code, 
      endTime, 
      discountPercentage, 
      minimumAmount, 
      status 
    } = req.body;
    
    const image = req.file ? req.file.filename : null;

    const newCoupon = new CouponModel({
      name,
      productType,
      code,
      endTime: endTime ? new Date(endTime) : undefined,
      discountPercentage,
      minimumAmount,
      status: status || 'active',
      image
    });

    const savedCoupon = await newCoupon.save();
    res.status(201).json(savedCoupon);
  } catch (error) {
    console.error('Error adding coupon:', error);
    if (error.code === 11000) { // Duplicate key error (for unique code)
      return res.status(400).json({ error: 'Coupon code already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Get all coupons
const getAllCoupons = async (req, res) => {
  try {
    const coupons = await CouponModel.find();
    res.status(200).json(coupons);
  } catch (error) {
    console.error('Error fetching coupons:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Get coupon by ID
const getCouponById = async (req, res) => {
  try {
    const coupon = await CouponModel.findById(req.params.id);
    if (!coupon) return res.status(404).json({ error: 'Coupon not found' });
    res.status(200).json(coupon);
  } catch (error) {
    console.error('Error fetching coupon by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Update coupon
const updateCoupon = async (req, res) => {
  try {
    const { 
      name, 
      productType, 
      code, 
      endTime, 
      discountPercentage, 
      minimumAmount, 
      status 
    } = req.body;
    
    const image = req.file ? req.file.filename : undefined;

    // Validate discount percentage if provided
    if (discountPercentage && (discountPercentage < 0 || discountPercentage > 100)) {
      return res.status(400).json({ error: 'Discount percentage must be between 0-100' });
    }

    // Validate minimum amount if provided
    if (minimumAmount && minimumAmount < 0) {
      return res.status(400).json({ error: 'Minimum amount must be positive' });
    }

    const updateData = {
      ...(name && { name }),
      ...(productType && { productType }),
      ...(code && { code }),
      ...(endTime && { endTime: new Date(endTime) }),
      ...(discountPercentage && { discountPercentage }),
      ...(minimumAmount && { minimumAmount }),
      ...(status && { status }),
      ...(image && { image })
    };

    const updatedCoupon = await CouponModel.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedCoupon) return res.status(404).json({ error: 'Coupon not found' });
    res.status(200).json(updatedCoupon);
  } catch (error) {
    console.error('Error updating coupon:', error);
    if (error.code === 11000) { // Duplicate key error
      return res.status(400).json({ error: 'Coupon code already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Delete coupon
const deleteCoupon = async (req, res) => {
  try {
    const deleted = await CouponModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Coupon not found' });
    res.status(200).json({ message: 'Coupon deleted successfully' });
  } catch (error) {
    console.error('Error deleting coupon:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon
};