'use client'

import { useRouter } from 'next/navigation'
import { employees } from '../employees'

const EmployeeDetails: React.FC<{ params: { employeeId: string } }> = ({
  params,
}) => {
  const router = useRouter()

  const employee = employees.find((c) => c.id == params.employeeId)
  console.log(params.employeeId)

  if (!employee) return <div>Employee not found</div>

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
      <button
        onClick={() => router.back()}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Employee List
      </button>
    </div>
  )
}

export default EmployeeDetails
