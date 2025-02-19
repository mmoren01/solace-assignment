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

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm) ||
        advocate.yearsOfExperience === parseInt(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
    setSearchTerm("");
  };

  return (
    <div>
      <p>Search</p>
      <p>
        Searching for: <span id="search-term"></span>
      </p>
      <input style={{ border: "1px solid black" }} onChange={onChange} />
      <button onClick={onClick}>Reset Search</button>
    </div>
  )
}