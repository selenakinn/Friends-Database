import React from 'react';
import './index.css';
import { Switch, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/friends/add">
            <PrivateRoute>
              <AddFriend />
            </PrivateRoute>
          </Route>

          <Route path="/friends">
            <PrivateRoute>
              <FriendsList />
            </PrivateRoute>
          </Route>

          <Route exact path="/">
            <PrivateRoute>
              <FriendsList />
            </PrivateRoute>
          </Route>
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
