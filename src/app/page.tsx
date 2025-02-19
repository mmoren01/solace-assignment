"use client";

import { Advocate } from "../types/advocates";

import { useEffect, useState } from "react";

import SearchBar from "./components/search-bar";
import HomepageTable from "./components/homepage-table";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  return (
    <main style={{ margin: "24px" }}>
        <SearchBar
          advocates={advocates}
          setFilteredAdvocates={setFilteredAdvocates}
        />
      <br />
      <br />
      <HomepageTable advocates={filteredAdvocates} />
    </main>
  );
}
