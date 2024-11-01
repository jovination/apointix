'use client'

import React from 'react'
import { Plus, Search, Link2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export  function Events() {
  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center justify-between border p-4">
        <div>
          <h1 className="text-2xl font-semibold">Event Types</h1>
          <p className="text-sm text-muted-foreground">
            Create events to share for people to book on your calendar.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New
        </Button>
      </div>
      <div className="px-1 py-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search" 
            className="pl-8" 
            aria-label="Search event types"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8 border-dashed border rounded-md w-full ">
        <div className="text-center space-y-5">
          <div className="mx-auto size-20 bg-muted rounded-full flex items-center justify-center">
            <Link2 className="h-8 w-8 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Create your first event type</h2>
            <p className="text-muted-foreground max-w-sm mx-auto text-sm">
              Event types enable you to share links that show available times on your calendar and allow people to make bookings with you.
            </p>
          </div>
          <Button size="lg">
            Create
          </Button>
        </div>
      </div>
    </div>
  )
}