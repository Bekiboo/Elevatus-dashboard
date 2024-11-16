'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Donor } from '@/models/donor'
import { useParams } from 'next/navigation'
import AddSponsoredChildModal from './AddSponsoredChildModal'

const DonorDetails = () => {
  const params = useParams()
  const donorId = params.donorId as string

  const [donor, setDonor] = useState<Donor | null>(null)
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // fetch donor data
    fetch(`/api/donors/${donorId}`)
      .then((res) => res.json())
      .then(setDonor)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [donorId])

  console.log(donor)
  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold ">Donor Details</h1>
        <Link
          href="/donors"
          className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Donors List
        </Link>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && !donor && <p>Donor not found</p>}
      {donor && (
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
            <strong>Monthly Donation:</strong> $
            {donor.monthlyDonation.toFixed(2)}
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
          <button
            className="border border-blue-500 hover:bg-blue-600 text-blue-500 hover:text-white px-2 py-1 rounded mt-4"
            onClick={() => setShowModal(true)}
          >
            Link Unsponsored Child
          </button>
        </div>
      )}
      {/* sponsored children */}
      {donor && donor.children.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Sponsored Children</h2>
          <ul>
            {donor.children.map((child: any) => (
              <li key={child._id}>
                <Link href={`/children/${child._id}`}>
                  {child.firstName} {child.lastName}{' '}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showModal && (
        <AddSponsoredChildModal
          isOpen={showModal}
          donor={donor!}
          onClose={() => setShowModal(false)}
          onSave={setDonor}
        />
      )}
    </div>
  )
}

export default DonorDetails
