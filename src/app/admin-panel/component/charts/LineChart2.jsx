import { LineChart } from '@mui/x-charts'
import React from 'react'

const LineChart2 = () => {
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  return (
    <LineChart
        width={500}
        height={300}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        series={[
            {curve: "linear", data: pData, label: 'pv' },//curve options: 'catmullRom', 'linear', 'monotoneX', 'monotoneY', 'natural', 'step', 'stepBefore', 'stepAfter'
            {curve: "linear", data: uData, label: 'uv' },
        ]}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
    />
  )
}

export default LineChart2