import OfficerTabButton  from '@/components/OfficerTabButton'
import OfficerWeekliesView from '@/components/OfficerWeekliesView'
import SyncButton from '@/components/SyncButton'
import Image from 'next/image'
import React from 'react'
interface PageProps {
    searchParams: Promise<{ mode?: string }>
    
}
const page = async ({ searchParams } :PageProps) => {
 const {mode = "weeklies"}  = await searchParams ; // default tab

  return (
    <div>
      <nav className="flex justify-between items-center p-4">
        <OfficerTabButton mode="weeklies"/>
        <OfficerTabButton mode="applications"/>
        <OfficerTabButton mode="homepage"/>
        <div className="flex flex-col gap-2 max-w-fit">
          <SyncButton toBeSynced="roster" />
          <SyncButton toBeSynced="weeklies" />
        </div>
      </nav>
      
     <h1>officer page</h1>
      <section className="p-4">
        {mode === "weeklies" && <OfficerWeekliesView />}
        {mode === "applications" && <p>Here you can manage applications.</p>}
        {mode === "homepage" && <div><Image src="/rancour_on_ice.png" alt="logo" width={1280} height={650}/></div>}
        </section>
    </div>
  )
}

export default page