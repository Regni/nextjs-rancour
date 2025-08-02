import React from "react";
import { getApplications } from "@/lib/db/applications";
const OfficerApplicationView = async () => {
  const applications = await getApplications();

  return (
    <div>
      <h2>Officer Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.id}>{app.characterName}</li>
        ))}
      </ul>
    </div>
  );
};

export default OfficerApplicationView;
