import mongoose, { Schema } from 'mongoose'

const employeeSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    preferredFullName: String,
    jobTitle: String,
    employeeCode: String,
    emailAddress: String,
    phoneNumber: String,
    region: String,
    yearsOfService: Number,
    specialty: String,
  },
  { timestamps: true }
)

const Employee =
  mongoose.models.Employee || mongoose.model('Employee', employeeSchema)

export default Employee
