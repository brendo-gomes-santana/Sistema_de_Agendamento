import { BrowserRouter as Router} from 'react-router-dom'
import RoutasNotAuth from './RotasNaoAuth'
import RoutasAuthUser from './AuthUser'
export default function RouterApp() {
  return (
    <Router>
      
      <RoutasNotAuth/> 

      <RoutasAuthUser/>
    </Router>
  )
}
