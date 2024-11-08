import mongoose, { Schema } from 'mongoose'

const childSchema = new Schema(
  {
    id: String,
    name: String,
    email: String,
    startDate: Date,
    monthlyDonation: Number,
    status: String,
    lastDonationDate: Date,
    totalDonated: Number,
    frequency: String,
    paymentMethod: String,
    notes: String,
  },
  { timestamps: true }
)

const Child = mongoose.models.Child || mongoose.model('Child', childSchema)

export default Child
