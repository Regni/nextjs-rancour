import React from "react";
import { getApplications } from "@/lib/db/applications";
import ApplicationList from "./ApplicationList";
const OfficerApplicationView = async () => {
  const applications = await getApplications();

  return (
    <div>
      <h2>Officer Applications</h2>
      <ApplicationList applications={applications} />
    </div>
  );
};

export default OfficerApplicationView;
