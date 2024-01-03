import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteNote } from './Reducer'
import { MdDelete } from 'react-icons/md'
import { FaPen, FaEye } from 'react-icons/fa'

function Home() {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes)
  // console.log(notes)

  const handleDelete = (id) => {
    dispatch(deleteNote({ id: id }))
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="max-w-3xl w-full bg-gray-900 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">Notepad +</h1>
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
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Body</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}
                >
                  <td className="py-2 px-4 border-b text-center">{note?.id}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {note?.title.slice(0, 10)}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {`${note?.body.slice(0, 20)}...`}
                  </td>
                  <td className="py-2 px-4 border-b text-center flex justify-around items-center">
                    <Link
                      to={`/view/${note.id}`}
                      className="bg-green-500 text-white font-bold py-1 px-2 rounded-full mr-2"
                    >
                      <FaEye />
                    </Link>
                    <Link
                      to={`/edit/${note.id}`}
                      className="bg-blue-500 text-white font-bold py-1 px-2 rounded-full mr-2"
                    >
                      <FaPen />
                    </Link>
                    <Link
                      onClick={() => handleDelete(note.id)}
                      className="bg-red-500 text-white font-bold py-1 px-2 rounded-full"
                    >
                      <MdDelete />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
