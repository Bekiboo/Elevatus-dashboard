'use client'

import { employees } from './employees'
import { useRouter } from 'next/navigation'

const EmplemployeesList: React.FC = () => {
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
              key={employee.id}
              onClick={() => handleRowClick(employee.id)}
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
// {
//   id: '1',
//   firstName: 'Sarah',
//   lastName: 'Taylor',
//   preferredFullName: 'Sarah Taylor',
//   jobTitle: 'Program Director',
//   employeeCode: 'PD001',
//   emailAddress: 'sarah.taylor@ngo.org',
//   phoneNumber: '+1-555-123-4567',
//   region: 'North America',
//   yearsOfService: 8,
//   specialty: 'Child Development',
// },
