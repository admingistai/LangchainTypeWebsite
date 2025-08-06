"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"

export const DateTimeSelector = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTimeZone, setSelectedTimeZone] = useState("pacific")

  return (
    <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-purple-500/30 rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg" />
      <Card className="!bg-transparent !border-0 !shadow-none">
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-white text-xl">Select a Date & Time</CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-6">
        {/* Calendar */}
        <div className="bg-black/20 rounded-lg p-4 border border-gray-500">
          <div className="[&_.rdp]:!bg-black [&_.rdp_*]:!bg-black [&_.rdp]:!border-gray-500 [&_.rdp_.rdp-day:hover]:!bg-white/10 [&_.rdp_.rdp-day_selected]:!bg-purple-600">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="!bg-black rounded-md text-white border border-gray-500"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 bg-black",
              month: "space-y-4 bg-black",
              caption: "flex justify-center pt-1 relative items-center bg-black",
              caption_label: "text-sm font-medium text-white",
              nav: "space-x-1 flex items-center bg-black",
              nav_button: "h-7 w-7 bg-black p-0 opacity-50 hover:opacity-100 text-white hover:bg-white/10",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1 bg-black",
              head_row: "flex bg-black",
              head_cell: "text-gray-400 rounded-md w-9 font-normal text-[0.8rem] bg-black",
              row: "flex w-full mt-2 bg-black",
              cell: "h-9 w-9 text-center text-sm p-0 relative bg-black [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-white/5 [&:has([aria-selected])]:bg-white/5 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-white hover:bg-white/10 transition-colors bg-black",
              day_range_end: "day-range-end",
              day_selected: "bg-purple-600 text-white hover:bg-purple-700 focus:bg-purple-600 focus:text-white",
              day_today: "bg-white/10 text-white",
              day_outside: "day-outside text-gray-500 opacity-50 aria-selected:bg-white/5 aria-selected:text-gray-400 aria-selected:opacity-30 bg-black",
              day_disabled: "text-gray-500 opacity-50 bg-black",
              day_range_middle: "aria-selected:bg-white/5 aria-selected:text-white",
              day_hidden: "invisible bg-black",
            }}
            components={{
              IconLeft: ({ ...props }) => <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />,
              IconRight: ({ ...props }) => <HugeiconsIcon icon={ArrowRight01Icon} size={16} />,
            }}
            />
          </div>
        </div>

        {/* Timezone Selector */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">Time zone</label>
          <Select value={selectedTimeZone} onValueChange={setSelectedTimeZone}>
            <SelectTrigger className="bg-white/5 border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="pacific" className="text-white hover:bg-gray-700">
                Pacific Time - US & Canada (5:48pm)
              </SelectItem>
              <SelectItem value="eastern" className="text-white hover:bg-gray-700">
                Eastern Time - US & Canada (8:48pm)
              </SelectItem>
              <SelectItem value="central" className="text-white hover:bg-gray-700">
                Central Time - US & Canada (7:48pm)
              </SelectItem>
              <SelectItem value="mountain" className="text-white hover:bg-gray-700">
                Mountain Time - US & Canada (6:48pm)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      </Card>
    </div>
  )
}