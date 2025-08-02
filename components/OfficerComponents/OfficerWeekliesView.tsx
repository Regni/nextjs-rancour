import { getCurrentWeeklies } from "@/lib/raiderio/getWeeklies";
import { Separator } from "@/components/ui/separator";
import RosterAnimationComponent from "@/components/motion/RosterAnimationComponent";
import React from "react";

const OfficerWeekliesView = async () => {
  const weeklyRoster = await getCurrentWeeklies();

  const raiderWithoutWeekies = weeklyRoster.filter(
    (weeklieEntry: any) => weeklieEntry.completed === false
  );
  const raiderWithWeekies = weeklyRoster.filter(
    (weeklieEntry: any) => weeklieEntry.completed === true
  );

  return (
    <section>
      <h3>Raider that didn't do their weeklies</h3>
      <Separator className="my-2" />
      <RosterAnimationComponent
        roster={raiderWithoutWeekies}
        officerPage={true}
      />
      <Separator className="my-2" />
      <h3>Raider that did their weeklies</h3>
      <Separator className="my-2" />
      <RosterAnimationComponent roster={raiderWithWeekies} officerPage={true} />
    </section>
  );
};

export default OfficerWeekliesView;
