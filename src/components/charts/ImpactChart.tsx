"use client";

import ReactECharts from "echarts-for-react";

import { impactFocus } from "@/data/zones";

export function ImpactChart() {
  const option = {
    grid: { left: 20, right: 20, top: 20, bottom: 30, containLabel: true },
    xAxis: { type: "value", axisLabel: { color: "#475569" }, splitLine: { lineStyle: { color: "#e2e8f0" } } },
    yAxis: {
      type: "category",
      data: impactFocus.map((item) => item.name),
      axisLabel: { color: "#0e3b22", fontWeight: 700 },
    },
    color: ["#2f7d45"],
    tooltip: { trigger: "axis" },
    series: [
      {
        type: "bar",
        data: impactFocus.map((item) => item.value),
        barWidth: 20,
        itemStyle: { borderRadius: [0, 12, 12, 0] },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 320, width: "100%" }} />;
}
