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
              key={raider.character.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <RaiderCard
                name={raider.character.name}
                realm={raider.character.realm}
                rank={raider.rank}
                wowClass={raider.character.class}
                spec={raider.character.active_spec_name}
                role={raider.character.active_spec_role}
                lastUpdate={raider.character.last_crawled_at}
                avatarUrl={raider.character.avatar_url}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  )
}

export default RosterAnimationComponent
