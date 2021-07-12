import React from 'react'
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widget from './Widget';

function App() {

  /* const user= null; */
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">

        {!user ? (
          <Login />
          
          ) : (

          <>  
          
          <Header />
          <div className="body">
              
              <Sidebar />
          
              <Feed />

              <Widget />

          </div>

        </>
        )}
        
    </div>
  );
}

export default App;
