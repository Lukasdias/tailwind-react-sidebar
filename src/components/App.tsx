import { Sidebar } from './Sidebar/index'
function App() {
  return (
    <div className="flex relative w-screen h-screen bg-body-color">
      <Sidebar />
      <h1 className="mx-4 mt-4 text-3xl text-sidebar-grey">Dashboard</h1>
    </div>
  )
}

export default App
