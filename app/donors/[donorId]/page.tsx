'use client'

import { useRouter } from 'next/navigation'
import { donors } from '../donors'

const DonorDetails: React.FC<{ params: { donorId: string } }> = ({
  params,
}) => {
  const router = useRouter()

  const donor = donors.find((d) => d.id == params.donorId)
  console.log(params.donorId)

  if (!donor) return <div>Donor not found</div>

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Donor Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{donor.name}</h2>
        <p>
          <strong>Email:</strong> {donor.email}
        </p>
        <p>
          <strong>Start Date:</strong> {donor.startDate}
        </p>
        <p>
          <strong>Monthly Donation:</strong> ${donor.monthlyDonation.toFixed(2)}
        </p>
        <p>
          <strong>Status:</strong> {donor.status}
        </p>
        <p>
          <strong>Last Donated:</strong> {donor.lastDonationDate}
        </p>
        <p>
          <strong>Total Donated:</strong> $
          {donor.totalDonated ? donor.totalDonated.toFixed(2) : '0.00'}
        </p>
        <p>
          <strong>Frequency:</strong> {donor.frequency}
        </p>
        <p>
          <strong>Payment Method:</strong> {donor.paymentMethod}
        </p>
        <p>
          <strong>Notes:</strong> {donor.notes}
        </p>
      </div>
      <button
        onClick={() => router.back()}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Donor List
      </button>
    </div>
  )
}

export default DonorDetails
