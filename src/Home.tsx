import React from 'react'
import { useAuth } from '@id6/react'
import { Secret } from './Secret';

export function Home() {
  const { loading, error, user, signOut } = useAuth();

  const logout = () => {
    signOut().catch(console.error);
  };

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error: {error.message}</p>
  ) : (
    <div>
      {user ? (
        <p>
          Signed in as {user.name}
          <button type="button" onClick={logout}>Sign out</button>
        </p>
      ) : (
        <p>
          <a href="http://localhost:3002">Sign in</a>
        </p>
      )}
      <Secret/>
    </div>
  );
}
