"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import RaiderCard from "@/components/RaiderCard";
import OfficerPageCard from "../OfficerComponents/OfficerPageCard";

const RosterAnimationComponent = ({
  roster,
  officerPage = false,
}: {
  roster: any[];
  officerPage?: boolean;
}) => {
  return (
    <LayoutGroup>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-4">
        <AnimatePresence>
          {roster.map((raider) => (
            <motion.div
              layout
              key={raider.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {officerPage ? (
                <OfficerPageCard weeklies={raider} />
              ) : (
                <RaiderCard raider={raider} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};

export default RosterAnimationComponent;
