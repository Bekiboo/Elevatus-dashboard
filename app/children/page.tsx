'use client'

import { children } from '../../scripts/dummyChildren'
import { useRouter } from 'next/navigation'

const ChildrenList: React.FC = () => {
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
              key={child.id}
              onClick={() => handleRowClick(child.id)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="border px-4 py-2">{child.firstName}</td>
              <td className="border px-4 py-2">{child.healthStatus}</td>
              <td className="border px-4 py-2">{child.enrollmentDate}</td>
              <td className="border px-4 py-2">{child.gradeLevel}</td>
              <td className="border px-4 py-2">{child.lastCheckupDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ChildrenList
