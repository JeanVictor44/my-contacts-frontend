import {
    Routes,
    Route
} from 'react-router-dom'
import { EditContact } from './pages/EditContact'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NewContact } from './pages/NewContact'

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} index/>
            <Route path="/new" element={<NewContact />}/>
            <Route path="/edit/:id" element={<EditContact/>} />
            <Route path="/login" element={<Login/>} />

        </Routes>
    )
}
