import React from 'react'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import { ArrowCircleUpRounded } from '@mui/icons-material'
import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config'
import ReactApexChart from 'react-apexcharts'





const TotalRevenue = () => {
    return (
        <Box p={4}
            flex={1}
            bgcolor="#fcfcfc"
            id="chart"
            display="flex"
            flexDirection="column"
            borderRadius="15px"
            mt="15px"

        >
            <Typography fontSize={18} fontWeight={600} color="#11142d">
                Total Revenue
            </Typography>


            <Stack my="15px" direction="row" gap={4} flexWrap="wrap">
                <Typography fontSize={28} fontWeight={700} color="#11142d">$243,985</Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                    <ArrowCircleUpRounded sx={{
                        fontSize: 25, color: '#475b8'
                    }} />
                    <Stack>
                        <Typography fontSize={15} color="#475be8">
                            0.08%
                        </Typography>
                        <Typography fontSize={12} color="#808191">
                            Then Last Month
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <ReactApexChart series={TotalRevenueSeries}
                type="bar"
                height={250}

                options={TotalRevenueOptions}
            ></ReactApexChart>

        </Box>
    )
}

export default TotalRevenue