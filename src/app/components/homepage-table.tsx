import { Advocate } from "@/types/advocates";

type HomepageTableTypes = {
  advocates: Advocate[]
}

export default function HomepageTable({ advocates }: HomepageTableTypes) {
  return(
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="grid grid-cols-12">
            <th className="px-4 py-2 border-b text-center col-span-1">First Name</th>
            <th className="px-4 py-2 border-b text-center col-span-1">Last Name</th>
            <th className="px-4 py-2 border-b text-center col-span-1">City</th>
            <th className="px-4 py-2 border-b text-center col-span-1">Degree</th>
            <th className="px-4 py-2 border-b text-center col-span-5">Specialties</th>
            <th className="px-4 py-2 border-b text-center col-span-1">Years of Experience</th>
            <th className="px-4 py-2 border-b text-center col-span-2">Phone Number</th>
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
              phoneNumber,
            } = advocate;

            return (
              <tr key={id} className="grid grid-cols-12">
                <td className="px-4 py-2 border-b text-center col-span-1">{firstName}</td>
                <td className="px-4 py-2 border-b text-center col-span-1">{lastName}</td>
                <td className="px-4 py-2 border-b text-center col-span-1">{city}</td>
                <td className="px-4 py-2 border-b text-center col-span-1">{degree}</td>
                <td className="px-4 py-2 border-b text-left col-span-5">
                  <ul className="list-disc list-inside">
                    {specialties.map((specialty, index) => (
                      <li key={`specialty-${index}`}>{specialty}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-2 border-b text-center col-span-1">{yearsOfExperience}</td>
                <td className="px-4 py-2 border-b text-center col-span-2">{phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}