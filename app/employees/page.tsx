'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Employee } from '@/models/employee'
import AddEmployeeModal from './AddEmployeeModal'

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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data)
    })
  }, [])

  const router = useRouter()

  const handleAddEmployee = (
    newEmployee: Omit<Employee, '_id' | '__v' | 'createdAt' | 'updatedAt'>
  ) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee])
  }

  const handleRowClick = (employeeId: string) => {
    router.push(`/employees/${employeeId}`)
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold ">Employee List</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Employee
        </button>
        <AddEmployeeModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddEmployee}
        />
      </div>{' '}
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
              onClick={() => handleRowClick(employee._id!)}
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
