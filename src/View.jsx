import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function View() {
  const { id } = useParams()
  const notes = useSelector((state) => state.notes)

  const existingNote = notes.find((note) => note.id === parseInt(id, 10))
  if (!existingNote) {
    return (
      <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
        <p className="text-red-500 text-lg">Note not found!</p>
      </div>
    )
  }

  const { title, body } = existingNote

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-500 mb-6">View Note</h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-400"
          >
            Title
          </label>
          <div className="bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3">
            {title}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-400"
          >
            Note
          </label>
          <div className="bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3">
            {body}
          </div>
        </div>
        <Link
          to="/"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full my-3 inline-block"
        >
          Back
        </Link>
      </div>
    </div>
  )
}

export default View
