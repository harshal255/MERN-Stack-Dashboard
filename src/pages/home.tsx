import React from 'react'
import { useList } from '@pankod/refine-core'
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from 'components'
import { Typography, Box, Stack } from '@pankod/refine-mui'





const Home = () => {


    return (
        <Box>
            <Typography fontSize={20} fontWeight={500} color="#111420">Dashboard</Typography>

            <Box mt="15px" display="flex" flexWrap="wrap" gap={2}>
                <PieChart title="Properties for Sale" value={684} series={[75, 75]} colors={['#e4e8ef', '#475be8']} ></PieChart>
                <PieChart title="Properties for Rant" value={550} series={[60, 40]} colors={['#e4e8ef', '#98FB98']}></PieChart>
                <PieChart title="Total Customers" value={5584} series={[75, 25]} colors={['#e4e8ef', '#fd8539']}></PieChart>
                <PieChart title="Properties for Cities" value={555} series={[10, 90]} colors={['#e4e8ef', '#fe6d8e']}></PieChart>
            </Box>

            <Stack mt="15px" width="100%" direction={{ xs: 'column', lg: 'row' }} gap={2}>
                <TotalRevenue></TotalRevenue>
                <PropertyReferrals></PropertyReferrals>


            </Stack>


        </Box>

    )
}

export default Home