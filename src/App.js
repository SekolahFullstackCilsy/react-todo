import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import LoginPage from './pages/auth/login'
// import RegisterPage from './pages/auth/register'
import ListTodoPage from './pages/todo'
import DetailTodoPage from './pages/todo/detail'
import AddTodoPage from './pages/todo/add'
import DeleteTodoPage from './pages/todo/delete'
import UpdateTodoPage from './pages/todo/update'
// import NotFoundPage from './pages/notfound'
import ProtectedLayout from './components/protectedLayout'

import ListUserPage from './pages/user'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
        <Router>
          <Layout>
            <Switch>
                {/* <Route component={LoginPage} path="/login"/>
                <Route component={RegisterPage} path="/register"/> */}
                
                <Route component={ListUserPage} exact path="/users"/>
                <ProtectedLayout component={AddTodoPage} path="/todo/add"/>
                <Route component={UpdateTodoPage} path="/todo/:id/update"/>
                <ProtectedLayout component={DeleteTodoPage} path="/todo/:id/delete"/>
                <Route component={DetailTodoPage} path="/todo/:id"/>
                <Route component={ListTodoPage} exact path="/"/>
                {/* <ProtectedLayout component={NotFoundPage} /> */}
            </Switch>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
