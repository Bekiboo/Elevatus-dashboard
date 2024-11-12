import connectMongoDB from '@/libs/mongodb'
import { Employee } from '@/models/employee'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const req = await request.json()
  console.log(req)
  await connectMongoDB()
  const newEmployee = await Employee.create(req)
  return NextResponse.json(
    { message: 'Employee created', newEmployee },
    { status: 201 }
  )
}

export async function GET() {
  await connectMongoDB()
  const employees = await Employee.find()
  return NextResponse.json(employees)
}

export async function DELETE(request: Request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')
  await connectMongoDB()
  await Employee.findByIdAndDelete({ _id: id })
  return NextResponse.json({ message: 'Employee deleted' }, { status: 200 })
}
