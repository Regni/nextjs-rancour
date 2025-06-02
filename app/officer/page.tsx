
import SyncButton from '@/components/SyncButton'
import React from 'react'

const page = () => {
 


  return (
    <div> <h1>officer page</h1>
     <SyncButton toBeSynced={"roster"}/>
    <SyncButton toBeSynced={"weeklies"}/>
    </div>
  )
}

export default page