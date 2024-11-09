import connectMongoDB from '@/libs/mongodb'
import { Donor } from '@/models/donor'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params
  const { id } = params
  const { newTitle: title, newDescription: description } = await request.json()
  await connectMongoDB()
  await Donor.findByIdAndUpdate(id, { title, description })
  return NextResponse.json({ message: 'Donor updated' }, { status: 200 })
}

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params
  const { id } = params
  await connectMongoDB()
  const donor = await Donor.findOne({ _id: id })
  return NextResponse.json(donor, { status: 200 })
}
