import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ContentCards = () => {
  return (
    <Card >
  <CardHeader>
    <CardTitle>Rancour Achieves Hall of Fame!!!</CardTitle>
    <CardDescription>some kind of test</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  )
}

export default ContentCards