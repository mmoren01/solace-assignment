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
    <div className="font-serif text-xl">
      <div className="flex items-center space-x-2">
        <span>Search for:</span>
        <input
          className="border border-black p-1"
          onChange={onChange}
          value={searchTerm}
        />
                <button
          onClick={() => handleClick('reset')}
          className="px-4 py-2 border border-black text-custom-offwhite bg-medium-green rounded hover:bg-dark-green"
        >
          Reset
        </button>
        <button
          onClick={() => handleClick('search')}
          disabled={searchTerm === ''}
          className="px-4 py-2 border border-black text-custom-offwhite bg-medium-green rounded hover:bg-dark-green"
        >
          Search
        </button>
      </div>
    </div>
  )
}