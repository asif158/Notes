import { createSlice } from '@reduxjs/toolkit'
import { storedNotes } from './Data'

// const storednotes = JSON.parse(localStorage.getItem('notes')) || []

const noteSlice = createSlice({
  name: 'notes',
  initialState: storedNotes,
  reducers: {
    addNote: (state, action) => {
      const { title, body } = action.payload
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1
      state.push({ id, title, body })
      // console.log(action)
      // const { title, body } = action.payload
      // const id = state.length + 1
      // state.push({ id, title, body })
      // localStorage.setItem('notes', JSON.stringify(state))
    },
    updateNote: (state, action) => {
      const { id, title, body } = action.payload
      // var updatedNote = [...state]
      const finalNote = state.find((note) => note.id === id)

      if (finalNote) {
        finalNote.title = title
        finalNote.body = body
        return finalNote
        // return (temp[updatedNote] = { id, title, body })
        // state[updatedNoteIndex] = { ...state[updatedNoteIndex], title, body }
        // localStorage.setItem('notes', JSON.stringify(state));
      }
    },
    deleteNote: (state, action) => {
      const { id } = action.payload
      const indexToDelete = state.findIndex((note) => note.id === id)
      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1)
      }
      // if (indexToDelete !== -1) {
      //   state.splice(indexToDelete, 1)
      //   localStorage.setItem('notes', JSON.stringify(state))
      // }
    },
  },
})

export const { addNote, updateNote, deleteNote } = noteSlice.actions
export default noteSlice.reducer
