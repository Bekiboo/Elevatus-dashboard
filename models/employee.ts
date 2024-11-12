import { Schema, model, models } from 'mongoose'

export interface Employee {
  _id?: string
  firstName: string
  lastName: string
  jobTitle: string
  emailAddress: string
  specialty: string
}

const employeeSchema = new Schema<Employee>(
  {
    firstName: String,
    lastName: String,
    jobTitle: String,
    emailAddress: String,
    specialty: String,
  },
  { timestamps: true }
)

export const Employee =
  models.Employee || model<Employee>('Employee', employeeSchema)
