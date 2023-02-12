import React from 'react'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import { PieChartProps } from 'interfaces/home'

import ReactApexChart from 'react-apexcharts'

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
    return (
        <Box id="chart" flex={1} display="flex" bgcolor="#fcfcfc" flexDirection="row" justifyContent="space-between" alignContent="center" pl={3.5} py={2} gap={2} borderRadius="15px" minHeight="110px" width="fit-content">

            <Stack direction="column">
                <Typography fontSize={14} color="808191">{title}</Typography>
                <Typography fontWeight={700} mt={1}>{value}</Typography>
            </Stack>

            <ReactApexChart
                options={{
                    chart: { type: 'donut' },
                    legend: { show: false },
                    dataLabels: { enabled: false },
                    colors: colors

                }}
                series={series}
                type="donut"
                width="150px"
            />


        </Box>


    )
}

export default PieChart