import { useState, useEffect } from 'react';

const useFetchProjects = (url: string) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, [url]);

  return { projects, loading };
};

export default useFetchProjects;
