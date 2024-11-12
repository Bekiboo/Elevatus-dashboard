import connectMongoDB from '@/libs/mongodb'
import { Employee } from '@/models/employee'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params
  const { id } = params
  const req = await request.json()
  await connectMongoDB()
  await Employee.findByIdAndUpdate(id, req)
  return NextResponse.json({ message: 'Employee updated' }, { status: 200 })
}

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params
  const { id } = params
  await connectMongoDB()
  const employee = await Employee.findOne({ _id: id })
  return NextResponse.json(employee, { status: 200 })
}
