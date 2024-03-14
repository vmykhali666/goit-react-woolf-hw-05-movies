import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ search: searchQuery });
  };

  useEffect(() => {
    const query = searchParams.get('search');
    query && setSearchQuery(query);
  }
  , [searchParams]);


  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
