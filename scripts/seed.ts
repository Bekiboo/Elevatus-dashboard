import connectMongoDB from '@/libs/mongodb'
import mongoose from 'mongoose'
import { dummyDonors } from './dummyDonors'
import { dummyChildren } from './dummyChildren'
import { dummyEmployees } from './dummyEmployees'
import { Employee } from '@/models/employee'
import { Child } from '@/models/child'
import { Donor } from '@/models/donor'

export async function seedDatabase() {
  await connectMongoDB()
  try {
    // Clear existing data
    await Employee.deleteMany({})
    await Child.deleteMany({})
    await Donor.deleteMany({})

    const result = { length: 0 }

    // Insert new data
    result.length += (await Employee.insertMany(dummyEmployees)).length
    result.length += (await Child.insertMany(dummyChildren)).length
    result.length += (await Donor.insertMany(dummyDonors)).length

    console.log(`${result.length} documents were inserted`)
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await mongoose.disconnect()
  }
}
