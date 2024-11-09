'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Child } from '@/models/child'

const getChildren = async () => {
  try {
    const response = await fetch('/api/children', {
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

const ChildrenList: React.FC = () => {
  const [children, setChildren] = useState<Child[]>([])
  useEffect(() => {
    getChildren().then((data) => {
      setChildren(data)
    })
  }, [])

  const router = useRouter()

  const handleRowClick = (childId: string) => {
    router.push(`/children/${childId}`)
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Child List</h1>
      <table className="min-w-full bg-white shadow-md rounded-b-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Health Status</th>
            <th className="px-4 py-2">Enrollment Date</th>
            <th className="px-4 py-2">Grade Level</th>
            <th className="px-4 py-2">Last Checkup Date</th>
          </tr>
        </thead>
        <tbody>
          {children.map((child) => (
            <tr
              key={child._id}
              onClick={() => handleRowClick(child._id)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="border px-4 py-2">{child.firstName}</td>
              <td className="border px-4 py-2">{child.healthStatus}</td>
              {/* <td className="border px-4 py-2">{child.enrollmentDate}</td> */}
              <td className="border px-4 py-2">{child.gradeLevel}</td>
              {/* <td className="border px-4 py-2">{child.lastCheckupDate}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ChildrenList
