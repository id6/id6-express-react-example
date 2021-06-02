import React  from 'react'
import { AuthProvider } from '@id6/react'
import { Home } from './Home';

function App() {
  return (
    <AuthProvider url="http://localhost:3002">
      <Home/>
    </AuthProvider>
  );
}

export default App;
