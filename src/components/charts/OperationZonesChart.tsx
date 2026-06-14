"use client";

import ReactECharts from "echarts-for-react";

import { operationZones } from "@/data/zones";

export function OperationZonesChart() {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: ({ name, value }: { name: string; value: number }) => `${name}: ${value} territorios`,
    },
    color: ["#175c2d", "#2f7d45", "#a77b4f"],
    series: [
      {
        name: "Zonas de operacion",
        type: "pie",
        radius: ["42%", "72%"],
        avoidLabelOverlap: true,
        itemStyle: { borderRadius: 12, borderColor: "#ffffff", borderWidth: 4 },
        label: { color: "#0e3b22", fontWeight: 700 },
        data: operationZones.map((zone) => ({ name: zone.name, value: zone.value })),
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 340, width: "100%" }} />;
}
