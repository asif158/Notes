import { createSlice } from '@reduxjs/toolkit'
// import { storedNotes } from './Data'

const storedNotes = JSON.parse(localStorage.getItem('notes')) || []

const noteSlice = createSlice({
  name: 'notes',
  initialState: storedNotes,
  reducers: {
    addNote: (state, action) => {
      // console.log(action)
      const { title, body } = action.payload
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1
      state.push({ id, title, body })
      localStorage.setItem('notes', JSON.stringify(state))
    },
    updateNote: (state, action) => {
      const { id, title, body } = action.payload
      state.forEach((item, index) => {
        if (item.id == id) {
          state[index].title = title
          state[index].body = body
        }
      })
      localStorage.setItem('notes', JSON.stringify(state))
    },
    deleteNote: (state, action) => {
      const { id } = action.payload
      const indexToDelete = state.findIndex((note) => note.id === id)
      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1)
        localStorage.setItem('notes', JSON.stringify(state))
      }
    },
  },
})

export const { addNote, updateNote, deleteNote } = noteSlice.actions
export default noteSlice.reducer
