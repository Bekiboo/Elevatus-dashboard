'use client'

import { donors } from './donors'

const DonorsList: React.FC = () => {
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
            <tr key={donor.name}>
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
