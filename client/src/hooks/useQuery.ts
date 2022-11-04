import axios from 'axios';
import { useState, useEffect } from 'react'

const useQuery = (url?: string) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: ''
  });

  {url && 
    useEffect(() => {
      const fetch = async () => {
        axios.get(url)
          .then(({ data }) => setState({ data, isLoading: false, error: '' }))
          .catch(({ message }) => setState({ data: null, isLoading: false, error: message }))
      }

      fetch();
    }, [url])
  }

  return state;
}