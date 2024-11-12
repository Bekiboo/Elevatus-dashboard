type AreYouSureModalProps = {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
  message?: string
}

const AreYouSureModal: React.FC<AreYouSureModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  message = 'Are you sure you want to proceed?',
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default AreYouSureModal
