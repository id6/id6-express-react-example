import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@id6/react';

export function Secret() {
  const { user } = useAuth();

  const [secret, setSecret] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/secret')
      .then(({ data }) => {
        setSecret(data);
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  return loading ? (
    <>Loading...</>
  ) : error ? (
    <>Cannot load secret: {error!.message}</>
  ) : (
    <>The secret is {secret}</>
  )
}
