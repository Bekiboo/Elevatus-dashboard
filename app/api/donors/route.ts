import connectMongoDB from '@/libs/mongodb'
import { Donor } from '@/models/donor'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { title, description } = await request.json()
  await connectMongoDB()
  await Donor.create({ title, description })
  return NextResponse.json({ message: 'Donor created' }, { status: 201 })
}

export async function GET() {
  await connectMongoDB()
  const donors = await Donor.find()
  return NextResponse.json(donors)
}

export async function DELETE(request: Request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')
  await connectMongoDB()
  await Donor.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Donor deleted' }, { status: 200 })
}
