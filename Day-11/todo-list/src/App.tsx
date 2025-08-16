import React from 'react'
import Navbar from './components/Navbar'
import TaskList from './components/TaskList'
import TomorrowPreview from './components/TomorrowPreview'
import { Bot } from 'lucide-react'
import BottomNavigation from './components/BottomNavigation'

const App = () => {
  return (
    <div>
      <Navbar />
      <TaskList />
      <TomorrowPreview />
      <BottomNavigation />
    </div>
  )
}

export default App