import { Advocate } from "@/types/advocates";

type HomepageTableTypes = {
  advocates: Advocate[]
}

export default function HomepageTable({ advocates }: HomepageTableTypes) {
  return(
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
        {advocates.map((advocate) => {
          const {
            id,
            firstName,
            lastName,
            city,
            degree,
            specialties,
            yearsOfExperience,
            phoneNumber
          } = advocate

          return (
            <tr key={id}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{city}</td>
              <td>{degree}</td>
              <td>
                {specialties.map((specialty, index) => (
                  <div key={`specialty-${index}`}>{specialty}</div>
                ))}
              </td>
              <td>{yearsOfExperience}</td>
              <td>{phoneNumber}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}