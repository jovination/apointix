"use client"
import React from 'react';
import { ReactNode } from 'react';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Link, CalendarDays, Clock, BarChart2, Settings, Sun, Moon } from 'lucide-react'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import ModeToggle from '@/components/ui/ModeToggle';


export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState('events')
  
  
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex h-screen bg-background">
        <aside className="w-60 border-r border-border flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary" />
              <span className="font-semibold">Jovin Shija</span>
            </div>
          </div>
          
          <nav className="p-2 space-y-1">
            <Button
              variant={activeTab === 'events' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('events')}
            >
              <Link className="mr-2 h-4 w-4" />
              Event types
            </Button>
            
            <Button
              variant={activeTab === 'bookings' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('bookings')}
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              Bookings
            </Button>
            
            <Button
              variant={activeTab === 'availability' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('availability')}
            >
              <Clock className="mr-2 h-4 w-4" />
              Availability
            </Button>
            
            <Button
              variant={activeTab === 'insights' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('insights')}
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              Insights
            </Button>
          </nav>
          
          <div className="mt-auto p-4 space-y-2 border-t border-border">
            <Button
              variant={activeTab === 'settings' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            
            <ModeToggle />
          </div>
        </aside>
        
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}