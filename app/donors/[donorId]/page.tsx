'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Donor } from '@/models/donor'
import { useParams } from 'next/navigation'

const getDonor = async (donorId: string) => {
  try {
    const response = await fetch(`/api/donors/${donorId}`, {
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

const DonorDetails = () => {
  const params = useParams()
  const donorId = params.donorId as string

  const [donor, setDonor] = useState<Donor | null>(null)

  useEffect(() => {
    getDonor(donorId).then((data) => {
      setDonor(data)
    })
  }, [donorId])

  if (!donor)
    return (
      <>
        <div>Donor not found</div>

        <Link
          href="/donors"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Donor List
        </Link>
      </>
    )

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Donor Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{donor.name}</h2>
        <p>
          <strong>Email:</strong> {donor.email}
        </p>
        <p>
          <strong>Start Date:</strong>
          {new Date(donor.startDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Monthly Donation:</strong> ${donor.monthlyDonation.toFixed(2)}
        </p>
        <p>
          <strong>Status:</strong> {donor.status}
        </p>
        <p>
          <strong>Last Donated:</strong>
          {new Date(donor.lastDonationDate).toLocaleDateString()}
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
      <Link
        href="/donors"
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Donor List
      </Link>
    </div>
  )
}

export default DonorDetails
