import type { Advocate } from "../../types/advocates";

import { Dispatch, SetStateAction, useState } from "react";

type SearchBarProps = {
  advocates: Advocate[]
  setFilteredAdvocates: Dispatch<SetStateAction<Advocate[]>>
}

export default function SearchBar({ advocates, setFilteredAdvocates }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = async (button: string): Promise<void> => {
    if (button === 'reset') {
      setFilteredAdvocates(advocates);
      setSearchTerm('');
    };

    if (button === 'search') {
      console.log("filtering advocates...");
      const response = await fetch('/api/advocates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchTerm }),
      });

      const jsonResponse = await response.json();
      console.log('jsonResponse', jsonResponse)
      setFilteredAdvocates(jsonResponse.data);
    };
  };

  return (
    <div>
      <p>Search</p>
      <p>
        Searching for: <span id="search-term"></span>
      </p>
      <input style={{ border: "1px solid black" }} onChange={onChange} value={searchTerm} />
      <button onClick={() => handleClick('reset')}>Reset</button>
      <button onClick={() => handleClick('search')} disabled={searchTerm === ''}>Search</button>
    </div>
  )
}