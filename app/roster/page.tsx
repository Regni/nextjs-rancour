
import React from 'react'
import { getRosterDB } from '@/lib/raiderio/getRoster'
import RosterSorter from '@/components/RosterSorter'
import RosterAnimationComponent from '@/components/motion/RosterAnimationComponent'

interface PageProps {
    searchParams: Promise<{ sortBy?: string }>
    
}


const page = async ({ searchParams } :PageProps) => {
     const {sortBy = ""} = await searchParams
      
  let roster: any = []

  
  
  try{
    roster = await getRosterDB()
  }catch(err){
    return (<section>
        <h1>Roster Page</h1>
        <p className="text-red-500">Error loading roster: {(err as Error).message}</p>
      </section>)

  }


  const sortRoster = (roster: any[]) => {
    const sorted = [...roster]
    switch (sortBy) {
      case 'a-z':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'z-a':
        return sorted.sort((a, b) => b.name.localeCompare(a.name))
      case 'role':
        return sorted.sort((a, b) => a.role.localeCompare(b.role))
      case 'rank':
        return sorted.sort((a, b) => a.rank - b.rank)
      default:
        return roster
    }
  }

  const sortedRoster = sortRoster(roster)
  
  return (
    <section className="w-full p-4 bg-background-accent dark:bg-background-accent flex-grow">
  <div className="flex justify-between items-center mb-4 p-2">
    <h1 className="text-5xl font-extrabold">roster page</h1>
    <RosterSorter currentSort={sortBy} />
  </div>

  <RosterAnimationComponent roster={sortedRoster} />
</section>
  )

}
export default page