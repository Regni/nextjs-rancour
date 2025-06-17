import { RaiderType } from '@/types/raider.types'
import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const raiderCard = ({raider}: {raider: RaiderType}) => {
  const { name, rank, class : wowClass, spec, role, raiderioUpdate : lastUpdate, avatarUrl} = raider;
  const lastUpdateDate = new Date(lastUpdate)
  const rolePicture = role === "DPS" ? "/dpsBadge.png" : role === "HEALING" ? "/tankBadge.png" : "/healerBadge.png"

  const rankName = rank === 1 ? "GM" : rank === 2 ? "Officer" : rank === 4  ? "Raider" : rank=== 7 ? "Raider" :  "Trial" 
  return (
    <Card className="relative overflow-hidden w-70">
    <Image src={avatarUrl} alt='Role Badge' width={48} height={48} className='absolute top-2 right-2 rounded-tr-2xl'/>
    <Image src={rolePicture}  alt='role Badge' width={48} height={48} className='absolute bottom-0 right-0'/>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{`${spec} ${wowClass}`}</CardDescription>
    </CardHeader>
    <CardContent>
      <div>
        <p>Rank: {rankName}</p>
        
      </div>
    </CardContent>
    <CardFooter>
      <p>update at: {lastUpdateDate.toLocaleString("en-GB")}</p>
    </CardFooter>
</Card>
  )
}

export default raiderCard