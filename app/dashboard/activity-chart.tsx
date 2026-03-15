"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";

const activityData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 1.8 },
  { day: "Thu", hours: 4.0 },
  { day: "Fri", hours: 2.7 },
  { day: "Sat", hours: 1.5 },
  { day: "Sun", hours: 0.8 },
];

export function DashboardActivityChart() {
  return (
    <div className="h-[240px]">
      <ChartContainer
        config={{
          hours: {
            label: "Hours",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <BarChart
          data={activityData}
          margin={{ top: 16, right: 16, bottom: 0, left: 0 }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <Bar
            dataKey="hours"
            fill="var(--color-hours)"
            radius={[4, 4, 0, 0]}
          />
          <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
