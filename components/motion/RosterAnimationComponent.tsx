'use client'

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import RaiderCard from '@/components/RaiderCard'

const RosterAnimationComponent = ({ roster }: { roster: any[] }) => {
  return (
    <LayoutGroup>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <AnimatePresence>
          {roster.map((raider) => (
            <motion.div
              layout
              key={raider.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <RaiderCard
                name={raider.name}
                realm={raider.realm}
                rank={raider.rank}
                wowClass={raider.class}
                spec={raider.spec}
                role={raider.role}
                lastUpdate={raider.raiderioUpdate}
                avatarUrl={raider.avatarUrl}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  )
}

export default RosterAnimationComponent
