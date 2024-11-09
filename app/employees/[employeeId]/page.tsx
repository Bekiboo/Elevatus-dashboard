'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Employee } from '@/models/employee'
import { useParams } from 'next/navigation'

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

  useEffect(() => {
    getEmployee(employeeId).then((data) => {
      setEmployee(data)
    })
  }, [employeeId])

  if (!employee)
    return (
      <>
        <div>Employee not found</div>

        <Link
          href="/employees"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Employee List
        </Link>
      </>
    )

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Employee Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {employee.firstName} {employee.lastName}
        </h2>
        <p>
          <strong>Job Title:</strong> {employee.jobTitle}
        </p>
        <p>
          <strong>Preferred Full Name:</strong> {employee.preferredFullName}
        </p>
        <p>
          <strong>Employee Code:</strong> {employee.employeeCode}
        </p>
        <p>
          <strong>Email Address:</strong> {employee.emailAddress}
        </p>
        <p>
          <strong>Phone Number:</strong> {employee.phoneNumber}
        </p>
        <p>
          <strong>Region:</strong> {employee.region}
        </p>
        <p>
          <strong>Years of Service:</strong> {employee.yearsOfService}
        </p>
        <p>
          <strong>Specialty:</strong> {employee.specialty}
        </p>
      </div>
      <Link
        href="/donors"
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Donor List
      </Link>
    </div>
  )
}

export default EmployeeDetails
