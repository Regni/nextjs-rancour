"use client"
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const RosterSorter = ({ currentSort }: { currentSort: string }) => {

  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
     if (value === 'reset') {
    params.delete('sortBy')
  } else {
    params.set('sortBy', value)
  }
   
    router.push(`?${params.toString()}`)
  }
  return (
    <Select onValueChange={handleChange} value={currentSort}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort Roster" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value="a-z">Alphabetical a-z</SelectItem>
          <SelectItem value="z-a">Alphabetical z-a</SelectItem>
          <SelectItem value="role">Role</SelectItem>
          <SelectItem value="rank">Rank</SelectItem>
          <SelectItem value="reset">No sort</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default RosterSorter