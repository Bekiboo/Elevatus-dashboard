import { Schema, model, models } from 'mongoose'

export interface Donor {
  _id?: string
  name: string
  email: string
  startDate: Date
  monthlyDonation: number
  status: string
  lastDonationDate: Date
  totalDonated: number
  frequency: string
  paymentMethod: string
  notes: string
  children: Schema.Types.ObjectId[]
}

const donorSchema = new Schema<Donor>(
  {
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
    children: [{ type: Schema.Types.ObjectId, ref: 'Child' }], // List of children
  },
  { timestamps: true }
)

export const Donor = models.Donor || model<Donor>('Donor', donorSchema)
