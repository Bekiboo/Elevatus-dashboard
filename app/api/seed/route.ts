import { seedDatabase } from '@/scripts/seed'
import { NextResponse } from 'next/server'

export async function POST() {
  await seedDatabase()
  return NextResponse.json({ message: 'db Seeded' }, { status: 201 })
}
