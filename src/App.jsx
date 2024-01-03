//components
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import View from './components/View'
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
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
