import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
import HelpSection from './HelpSection'
import Timeline from './TimeLine'
function App() {
  // const [count, setCount] = useState(0)
  const Router=createBrowserRouter([
    {
      path:"/About",element:<HelpSection/>
    },
    {
      path:"/",
    }
  ])
  return (
    <div>
        {/* <RouterProvider router={Router}/> */}
        <Timeline/>
        {/* <Note/> */}
        {/*Hi Commited */}
    </div>
  )
}

export default App
