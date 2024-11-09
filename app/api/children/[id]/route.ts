import connectMongoDB from '@/libs/mongodb'
import { Child } from '@/models/child'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params
  const { id } = params
  const { newTitle: title, newDescription: description } = await request.json()
  await connectMongoDB()
  await Child.findByIdAndUpdate(id, { title, description })
  return NextResponse.json({ message: 'Child updated' }, { status: 200 })
}

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params
  const { id } = params
  await connectMongoDB()
  const child = await Child.findOne({ _id: id })
  return NextResponse.json(child, { status: 200 })
}
