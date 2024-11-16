'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Employee } from '@/models/employee'
import { useParams } from 'next/navigation'
import EditEmployeeModal from './EditEmployeeModal'

const getEmployee = async (employeeId: string) => {
  try {
    const response = await fetch(`/api/employees/${employeeId}`, {
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

const EmployeeDetails = () => {
  const params = useParams()
  const employeeId = params.employeeId as string

  const [employee, setEmployee] = useState<Employee | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployee(employeeId)
        setEmployee(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchEmployee()
  }, [employeeId])

  const handleSave = (updatedEmployee: Employee) => {
    setEmployee(updatedEmployee)
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold ">Employee Details</h1>
        <Link
          href="/employees"
          className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Employees List
        </Link>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && !employee && <p>Employee not found</p>}
      {employee && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <header className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">
              {employee.firstName} {employee.lastName}
            </h2>
            <button
              className="text-gray-400 hover:text-gray-800 text-sm"
              onClick={() => setIsEditModalOpen(true)}
            >
              Edit ✎
            </button>
          </header>
          <p>
            <strong>Job Title:</strong> {employee.jobTitle}
          </p>
          <p>
            <strong>Email Address:</strong> {employee.emailAddress}
          </p>
          <p>
            <strong>Specialty:</strong> {employee.specialty}
          </p>
          <EditEmployeeModal
            isOpen={isEditModalOpen}
            employee={employee}
            onClose={() => setIsEditModalOpen(false)}
            onSave={handleSave}
          />
        </div>
      )}
    </div>
  )
}

export default EmployeeDetails
