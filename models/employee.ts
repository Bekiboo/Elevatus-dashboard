import { Schema, model, models } from 'mongoose'

export interface Employee {
  _id: string
  firstName: string
  lastName: string
  preferredFullName: string
  jobTitle: string
  employeeCode: string
  emailAddress: string
  phoneNumber: string
  region: string
  yearsOfService: number
  specialty: string
}

const employeeSchema = new Schema<Employee>(
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

export const Employee =
  models.Employee || model<Employee>('Employee', employeeSchema)
