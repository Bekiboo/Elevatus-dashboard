'use client'

import { donors } from './donors'
import { useRouter } from 'next/navigation'

const DonorsList: React.FC = () => {
  const router = useRouter()

  const handleRowClick = (donorId: string) => {
    router.push(`/donors/${donorId}`)
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Donor List</h1>
      <table className="min-w-full bg-white shadow-md rounded-b-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">Monthly Donation</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr
              key={donor.name}
              onClick={() => handleRowClick(donor.id)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="border px-4 py-2">{donor.name}</td>
              <td className="border px-4 py-2">{donor.email}</td>
              <td className="border px-4 py-2">{donor.startDate}</td>
              <td className="border px-4 py-2">
                ${donor.monthlyDonation.toFixed(2)}
              </td>
              <td className="border px-4 py-2">{donor.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DonorsList
