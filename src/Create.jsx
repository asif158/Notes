import { useState } from 'react'
import { addNote } from './Reducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNote({ id: notes[notes.length - 1]?.id + 1, title, body }))
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-500 mb-6">Add New Note</h2>
        <form onSubmit={handleSubmit}>
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
              name="title"
              className="form-input mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3"
              placeholder="Enter Title"
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
              name="body"
              className="form-input mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3"
              placeholder="Enter Note"
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full my-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Create
