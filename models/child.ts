import { Schema, model, models } from 'mongoose'

export interface Child {
  _id: string
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
  },
  { timestamps: true }
)

export const Child = models.Child || model<Child>('Child', childSchema)
