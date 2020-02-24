import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Ticket from './components/Tickets';

import { Layout, Menu } from 'antd';
import AllTickets from './components/AllTickets';

const { Header} = Layout;

function App() {
  return (
      <Router>
        <div>
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo-dummy"><h1><Link to="/">Ticket-Master</Link></h1></div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >   
                    <Menu.Item key="3"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/ticket">Raise Ticket</Link></Menu.Item>
                    <Menu.Item key="r"><Link to="/alltickets">Ticktes</Link></Menu.Item>
                    <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/register">SignUp</Link></Menu.Item>
                </Menu>
        </Header>
        </Layout>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/ticket" component={Ticket} />
          <Route path="/alltickets" component={AllTickets} />
        </Switch>
      </Router>
  );
}

export default App;
