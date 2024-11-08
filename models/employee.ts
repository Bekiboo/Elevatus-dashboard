import mongoose, { Schema } from 'mongoose'

const employeeSchema = new Schema(
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

const Employee =
  mongoose.models.Employee || mongoose.model('Employee', employeeSchema)

export default Employee
