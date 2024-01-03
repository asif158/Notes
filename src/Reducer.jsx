import { createSlice } from '@reduxjs/toolkit'
import { storedNotes } from './Data'

// const storedUsers = JSON.parse(localStorage.getItem('notes')) || []

const userSlice = createSlice({
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
      const updatedUser = state.find((user) => user.id === id)

      if (updatedUser) {
        updatedUser.title = title
        updateNote.body = body
        // return (temp[updatedUser] = { id, title, body })
        // state[updatedUserIndex] = { ...state[updatedUserIndex], title, body }
        // localStorage.setItem('notes', JSON.stringify(state));
      }
    },
    deleteNote: (state, action) => {
      const { id } = action.payload
      const indexToDelete = state.findIndex((user) => user.id === id)
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

export const { addNote, updateNote, deleteNote } = userSlice.actions
export default userSlice.reducer
