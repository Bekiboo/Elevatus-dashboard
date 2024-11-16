import { Employee } from '@/models/employee'
import { useState } from 'react'
import AreYouSureModal from '@/app/components/AreYouSureModal'

interface EditEmployeeModalProps {
  isOpen: boolean
  employee: Employee
  onClose: () => void
  onSave: (updatedEmployee: Employee) => void
}

const deleteEmployee = async (employeeId: string) => {
  try {
    const response = await fetch(`/api/employees?id=${employeeId}`, {
      method: 'DELETE',
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

const editEmployee = async (
  employeeId: string,
  updatedEmployee: Partial<Employee>
) => {
  try {
    const response = await fetch(`/api/employees/${employeeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployee),
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

const EditEmployeeModal = ({
  isOpen,
  employee,
  onClose,
  onSave,
}: EditEmployeeModalProps) => {
  // Fields to exclude from editing
  const nonEditableFields = ['_id', '__v', 'createdAt', 'updatedAt', 'id']
  const editableFields = Object.keys(employee).filter(
    (field) => !nonEditableFields.includes(field)
  )

  // Initialize formData with only editable fields
  const initialFormData = editableFields.reduce((acc, field) => {
    acc[field] = employee[field as keyof Employee]
    return acc
  }, {} as Partial<Employee>)

  const [formData, setFormData] = useState(initialFormData)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!isOpen) return null

  const handleDelete = async () => {
    setIsModalOpen(false)
    await deleteEmployee(employee._id!)
    window.location.href = '/employees'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await editEmployee(employee._id!, formData)
    onSave(formData as Employee)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-96 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Edit Employee</h2>
        <form onSubmit={handleSubmit}>
          {editableFields.map((field, idx) => (
            <div key={idx} className="flex flex-col mb-2">
              <label
                htmlFor={field}
                className="text-sm font-semibold capitalize"
              >
                {field.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                value={(formData as never)[field] || ''}
                onChange={handleInputChange}
                className="border text-sm border-gray-300 rounded px-3 py-1"
              />
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <AreYouSureModal
              isOpen={isModalOpen}
              onConfirm={handleDelete}
              onCancel={() => setIsModalOpen(false)}
              message="Are you sure you want to delete this employee?"
            />

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-auto"
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
              onClick={() => setIsModalOpen(true)}
            >
              Delete
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditEmployeeModal
