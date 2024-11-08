import mongoose, { Schema } from 'mongoose'

const donorSchema = new Schema(
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

const Donor = mongoose.models.Donor || mongoose.model('Donor', donorSchema)

export default Donor
