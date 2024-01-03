import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from './Reducer'

function Update() {
  const { id } = useParams()
  const notes = useSelector((state) => state.notes)
  // console.log(notes)
  const existingNotes = notes.filter((note) => note.id === parseInt(id, 10))
  // console.log(existingNotes)
  const { title, body } = existingNotes[0]
  const [updateTitle, setTitle] = useState(title)
  const [updateBody, setBody] = useState(body)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateNote({ id: id, title: updateTitle, body: updateBody }))
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-500 mb-6">
          Update The Note
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-400"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              title="title"
              className="form-input mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3"
              placeholder="Enter Title"
              value={updateTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-400"
            >
              Note
            </label>
            <textarea
              type="text"
              id="note"
              title="body"
              className="form-input mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3"
              placeholder="Enter Note"
              value={updateBody}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full my-3">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update
