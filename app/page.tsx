'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [currentDonorsCount, setCurrentDonorsCount] = useState(0)
  const [activeChildrenCount, setActiveChildrenCount] = useState(0)
  const [staffMembersCount, setStaffMembersCount] = useState(0)

  useEffect(() => {
    // Simulating API calls to fetch data
    setTimeout(() => {
      setCurrentDonorsCount(Math.floor(Math.random() * 20) + 10)
      setActiveChildrenCount(Math.floor(Math.random() * 30) + 10)
      setStaffMembersCount(Math.floor(Math.random() * 15) + 5)
    }, 2000)
  }, [])

  return (
    <>
      <main className="py-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">
            The Elevatus Foundation
          </h1>
          <small className="block text-center mb-8 text-gray-600">
            Because they deserve their childhood back
          </small>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-64">
              <h2 className="text-xl font-semibold mb-2">Current Donors</h2>
              <p>{currentDonorsCount}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-64">
              <h2 className="text-xl font-semibold mb-2">Active Children</h2>
              <p>{activeChildrenCount}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-64">
              <h2 className="text-xl font-semibold mb-2">Staff Members</h2>
              <p>{staffMembersCount}</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-8">
            We strive to provide support and resources to those in need.
          </p>
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-semibold">Key Initiatives</h3>
            <ul className="list-disc pl-5">
              <li>Child Sponsorship Program</li>
              <li>Education Support</li>
              <li>Healthcare Services</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
