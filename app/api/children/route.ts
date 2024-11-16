import connectMongoDB from '@/libs/mongodb'
import { Child } from '@/models/child'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { title, description } = await request.json()
  await connectMongoDB()
  await Child.create({ title, description })
  return NextResponse.json({ message: 'Child created' }, { status: 201 })
}

export async function GET(request: Request) {
  await connectMongoDB()
  const url = new URL(request.url)
  const unsponsored = url.searchParams.get('unsponsored')

  const query = unsponsored === 'true' ? { donor: null } : {}
  const children = await Child.find(query)
  return NextResponse.json(children)
}

export async function DELETE(request: Request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')
  await connectMongoDB()
  await Child.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Child deleted' }, { status: 200 })
}
