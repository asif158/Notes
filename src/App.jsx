//components
import Home from './Home'
import Create from './Create'
import Update from './Update'
//redux react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Reducer from './Reducer'

function App() {
  const store = configureStore({
    reducer: {
      notes: Reducer,
    },
  })
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
