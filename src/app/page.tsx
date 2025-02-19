"use client";

import { Advocate } from "../types/advocates";

import { useEffect, useState } from "react";

import SearchBar from "./components/search-bar";

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
      <h1>Solace Advocates</h1>
      <br />
      <br />
        <SearchBar
          advocates={advocates}
          setFilteredAdvocates={setFilteredAdvocates}
        />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            const {
              firstName,
              lastName,
              city,
              degree,
              specialties,
              yearsOfExperience,
              phoneNumber
            } = advocate

            return (
              <tr key={`${firstName} ${lastName}, ${degree} - ${phoneNumber}`}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{city}</td>
                <td>{degree}</td>
                <td>
                  {specialties.map((specialty) => (
                    <div key={specialty}>{specialty}</div>
                  ))}
                </td>
                <td>{yearsOfExperience}</td>
                <td>{phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
