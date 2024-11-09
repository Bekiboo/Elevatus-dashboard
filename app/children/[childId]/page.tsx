'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Child } from '@/models/child'
import { useParams } from 'next/navigation'

const getChild = async (childId: string) => {
  try {
    const response = await fetch(`/api/children/${childId}`, {
      cache: 'no-store',
    })
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message)
    }

    return data
  } catch (error) {
    console.error(error)
  }
}

const ChildDetails = () => {
  const params = useParams()
  const childId = params.childId as string

  const [child, setChild] = useState<Child | null>(null)

  useEffect(() => {
    getChild(childId).then((data) => {
      setChild(data)
    })
  }, [childId])

  if (!child)
    return (
      <>
        <div>Child not found</div>

        <Link
          href="/children"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Children List
        </Link>
      </>
    )

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Child Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {child.firstName} {child.lastName}
        </h2>
        <p>
          <strong>Grade Level:</strong> {child.gradeLevel}
        </p>
        {/* <p>
          <strong>Enrollement Date:</strong> {child.enrollmentDate}
        </p> */}
        <p>
          <strong>Adress:</strong> {child.address}
        </p>
        <p>
          <strong>Health Status:</strong> {child.healthStatus}
        </p>
        {/* <p>
          <strong>Birth Date:</strong> {child.birthdate}
        </p> */}
        <p>
          <strong>Guardian Contact:</strong>
          {child.guardianContact}
        </p>
        <p>
          <strong>Guardian Name:</strong> {child.guardianName}
        </p>
        {/* <p>
          <strong>Last Checkup Update:</strong> {child.lastCheckupDate}
        </p> */}
        <p>
          <strong>Comments:</strong> {child.comments}
        </p>
      </div>
      <Link
        href="/children"
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Children List
      </Link>
    </div>
  )
}

export default ChildDetails
