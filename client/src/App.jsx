import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './admin/Dashboard'
import Layout from './Layout'
import Home from './pages/Home'
import CreateUser from './admin/CreateUser'
import Assigntask from './admin/AssignTask'
import ShowReport from './admin/ShowReport'
import UserDashboard from './user/userDashboard'
import UserTask from './user/UserTask'
import WelcomePage from './admin/WelcomePage';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />

          </Route>

          <Route path='/admindashboard' element={<Dashboard />}>

            <Route index element={<WelcomePage />} />
            <Route path="createuser" element={<CreateUser />} />
            <Route path="assigntask" element={<Assigntask/>} />
            <Route path="showreport" element={<ShowReport />} />


          </Route>

          <Route path="userdashboard" element={<UserDashboard />}>
            <Route index element={<WelcomePage/>} />
            <Route path="usertask" element={<UserTask/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;