import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Homepage from "./pages/Homepage"
import Navbar from './layout/Navbar'
import Jobs from "./pages/jobs"
import FreelanceJobs from "./pages/freelance-jobs"
import Membership from "./pages/Membership"
import Newsletter from "./pages/Newsletter"
import Writers from "./pages/Writers"
import Signup from "./pages/signup"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Homepage/>}/>
        <Route path="jobs" element={<Jobs/>}/>
        <Route path="freelance-jobs" element={<FreelanceJobs/>}/>
        <Route path="membership" element={<Membership/>}/>
        <Route path="newsletter" element={<Newsletter/>}/>
        <Route path="writers" element={<Writers/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
