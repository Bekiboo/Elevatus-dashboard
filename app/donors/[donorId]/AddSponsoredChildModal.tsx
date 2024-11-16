import { Donor } from '@/models/donor'
import { useEffect, useState } from 'react'
import { Child } from '@/models/child'

interface EditDonorModalProps {
  isOpen: boolean
  donor: Donor
  onClose: () => void
  onSave: (updatedDonor: Donor) => void
}

const EditDonorModal = ({
  isOpen,
  donor,
  onClose,
  onSave,
}: EditDonorModalProps) => {
  const [unsponsoredChildren, setUnsponsoredChildren] = useState<Child[] | []>(
    []
  )
  const [selectedChild, setSelectedChild] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetch unsponsored children
    fetch('/api/children?unsponsored=true') // Update your GET endpoint to filter
      .then((res) => res.json())
      .then(setUnsponsoredChildren)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const handleLinkChild = async () => {
    const response = await fetch('/api/donors/link-child', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ donorId: donor._id, childId: selectedChild }),
    })

    console.log(selectedChild)

    if (response.ok) {
      onSave(donor)
      onClose()
    } else {
      alert('Failed to link child')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-96 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">
          Select a Child to Sponsor
        </h2>
        <select
          className="w-full border border-gray-300 rounded p-2 mb-4"
          onChange={(e) => setSelectedChild(e.target.value)}
        >
          <option className="text-gray-400" value="">
            Select
          </option>
          {loading && <option disabled>Loading...</option>}
          {unsponsoredChildren.length === 0 && (
            <option className="text-gray-400" value="" disabled>
              No children available
            </option>
          )}
          {unsponsoredChildren.length > 0 &&
            unsponsoredChildren.map((child) => (
              <option key={child._id} value={child._id}>
                {child.firstName} {child.lastName}
              </option>
            ))}
        </select>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-4"
            onClick={handleLinkChild}
          >
            Link
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 duration-100 text-white px-4 py-2 rounded mr-auto"
            onClick={() => onClose()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditDonorModal
