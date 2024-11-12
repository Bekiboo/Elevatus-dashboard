import { Employee } from '@/models/employee'
import { useState } from 'react'

interface AddEmployeeModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (newEmployee: Employee) => void
}

const addEmployee = async (newEmployee: Employee) => {
  try {
    const response = await fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
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

const AddEmployeeModal = ({
  isOpen,
  onClose,
  onSave,
}: AddEmployeeModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    emailAddress: '',
    specialty: '',
  })

  if (!isOpen) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newEmployee = await addEmployee(formData)
    onSave(newEmployee.newEmployee)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-96 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="firstName"
              className="text-sm font-semibold capitalize"
            >
              First Name
            </label>
            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border text-sm border-gray-300 rounded px-3 py-1"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label
              htmlFor="lastName"
              className="text-sm font-semibold capitalize"
            >
              Last Name
            </label>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border text-sm border-gray-300 rounded px-3 py-1"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label
              htmlFor="jobTitle"
              className="text-sm font-semibold capitalize"
            >
              Job Title
            </label>
            <input
              required
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className="border text-sm border-gray-300 rounded px-3 py-1"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label
              htmlFor="emailAddress"
              className="text-sm font-semibold capitalize"
            >
              Email Address
            </label>
            <input
              required
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="border text-sm border-gray-300 rounded px-3 py-1"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label
              htmlFor="specialty"
              className="text-sm font-semibold capitalize"
            >
              Specialty
            </label>
            <input
              required
              type="text"
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleInputChange}
              className="border text-sm border-gray-300 rounded px-3 py-1"
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddEmployeeModal
