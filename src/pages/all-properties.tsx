import React from 'react'
import { Add } from '@mui/icons-material'
import { useList } from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'
import { PropertyCard, CustomButton } from 'components'


//whenever we use useNavigate Property you should capital function name
const AllProperties = () => {
    const navigate = useNavigate();
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography fontSize={20} fontWeight={500} color="#111423">All Properties</Typography>


        </Stack>
    )
}

export default AllProperties