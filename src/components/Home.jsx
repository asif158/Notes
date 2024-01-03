import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteNote } from '../Reducer'
import { MdDelete } from 'react-icons/md'
import { FaPen, FaEye } from 'react-icons/fa'

function Home() {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes)
  // console.log(notes)
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    noteId: null,
  })

  const handleDelete = (id) => {
    setDeleteConfirmation({ isOpen: true, noteId: id })
  }

  const handleConfirmDelete = () => {
    dispatch(deleteNote({ id: deleteConfirmation.noteId }))
    setDeleteConfirmation({ isOpen: false, noteId: null })
  }

  const handleCancelDelete = () => {
    setDeleteConfirmation({ isOpen: false, noteId: null })
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="max-w-3xl w-full bg-gray-900 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Notepad +
        </h1>
        <Link
          to="/create"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-full inline-block mb-6"
        >
          Create Note +
        </Link>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-2 px-4 border-b hidden md:table-cell text-center">
                  ID
                </th>
                <th className="py-2 px-4 border-b text-center">Title</th>
                <th className="py-2 px-4 border-b hidden md:table-cell text-center">
                  Body
                </th>
                <th className="py-2 px-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}
                >
                  <td className="py-2 px-4 border-b hidden md:table-cell text-center">
                    {note?.id}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {note?.title.slice(0, 10)}
                  </td>
                  <td className="py-2 px-4 border-b hidden md:table-cell text-center">
                    {`${note?.body.slice(0, 20)}...`}
                  </td>
                  <td className="py-2 px-4 border-b flex flex-wrap justify-center md:justify-around items-center">
                    <Link
                      to={`/view/${note.id}`}
                      className="bg-green-500 text-white font-bold py-1 px-2 rounded-full m-1"
                    >
                      <FaEye />
                    </Link>
                    <Link
                      to={`/edit/${note.id}`}
                      className="bg-blue-500 text-white font-bold py-1 px-2 rounded-full m-1"
                    >
                      <FaPen />
                    </Link>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="bg-red-500 text-white font-bold py-1 px-2 rounded-full m-1"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {deleteConfirmation.isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-gray-900 p-8 rounded-lg shadow-md text-white">
            <p className="text-lg mb-4">
              Are you sure you want to delete this note?
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleCancelDelete}
                className="bg-gray-500 text-white font-bold py-1 px-2 rounded-full mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white font-bold py-1 px-2 rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
