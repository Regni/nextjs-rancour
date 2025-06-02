"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { syncRosterDB } from '@/lib/raiderio/getRoster'

const SyncButton = ({toBeSynced  }: {toBeSynced: string}) => {

   const handleClick = async () => {
    try {
      const res = await fetch(`/api/sync/${toBeSynced}`, {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || `Failed to sync ${toBeSynced}.`);
      }

      alert(`${toBeSynced} succesfully updated!.`);
    } catch (error) {
      alert((error as Error).message || "An unknown error occurred.");
    }
  };
  return (
     <Button  onClick={handleClick}>Sync {`${toBeSynced}`} to db</Button>
  )
}

export default SyncButton