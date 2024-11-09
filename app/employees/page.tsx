'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Employee } from '@/models/employee'

const getEmployees = async () => {
  try {
    const response = await fetch('/api/employees', {
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

const EmplemployeesList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([])
  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data)
    })
  }, [])

  const router = useRouter()

  const handleRowClick = (employeeId: string) => {
    router.push(`/employees/${employeeId}`)
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Employee List</h1>
      <table className="min-w-full bg-white shadow-md rounded-b-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Job Title</th>
            <th className="px-4 py-2">Specialty</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee._id}
              onClick={() => handleRowClick(employee._id)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="border px-4 py-2">{employee.firstName}</td>
              <td className="border px-4 py-2">{employee.lastName}</td>
              <td className="border px-4 py-2">{employee.jobTitle}</td>
              <td className="border px-4 py-2">{employee.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmplemployeesList
