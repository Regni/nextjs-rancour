"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { syncRosterDB } from '@/lib/raiderio/getRoster'

const SyncRosterButton = () => {

   const handleClick = async () => {
    try {
      const res = await fetch("/api/sync", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to sync roster.");
      }

      alert("Roster synced successfully!");
    } catch (error) {
      alert((error as Error).message || "An unknown error occurred.");
    }
  };
  return (
     <Button  onClick={handleClick}>Sync to db</Button>
  )
}

export default SyncRosterButton