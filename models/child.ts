import mongoose, { Schema } from 'mongoose'

const childSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthdate: { type: Date, required: true },
    enrollmentDate: { type: Date, required: true },
    gradeLevel: { type: Number, required: true },
    healthStatus: { type: String, required: true },
    guardianName: { type: String, required: true },
    guardianContact: { type: String, required: true },
    address: { type: String, required: true },
    comments: { type: String },
    lastCheckupDate: { type: Date },
  },
  { timestamps: true }
)

const Child = mongoose.models.Child || mongoose.model('Child', childSchema)

export default Child
