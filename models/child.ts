import { Schema, model, models } from 'mongoose'

export interface Child {
  _id?: string
  firstName: string
  lastName: string
  birthdate: Date
  enrollmentDate: Date
  gradeLevel: number
  healthStatus: string
  guardianName: string
  guardianContact: string
  address: string
  comments: string
  lastCheckupDate: Date
  donor: Schema.Types.ObjectId
}

const childSchema = new Schema<Child>(
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
    donor: { type: Schema.Types.ObjectId, ref: 'Donor' }, // Reference to Donor
  },
  { timestamps: true }
)

export const Child = models.Child || model<Child>('Child', childSchema)
