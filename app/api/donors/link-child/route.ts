import connectMongoDB from '@/libs/mongodb'
import { Donor } from '@/models/donor'
import { Child } from '@/models/child'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { donorId, childId } = await request.json()

  await connectMongoDB()

  // Check if the child is already linked to another donor
  const child = await Child.findById(childId)
  if (child.donor) {
    return NextResponse.json(
      { message: 'Child is already sponsored' },
      { status: 400 }
    )
  }

  // Link the child to the donor
  const donor = await Donor.findByIdAndUpdate(
    donorId,
    { $push: { children: childId } },
    { new: true }
  )

  await Child.findByIdAndUpdate(childId, { donor: donorId })

  return NextResponse.json(
    { message: 'Child linked to donor', donor },
    { status: 200 }
  )
}
