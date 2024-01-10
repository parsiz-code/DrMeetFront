import { Grid } from '@mui/material'
import { Image } from '@nextui-org/react'
import React, { FC } from 'react'

interface IProps {
    doctorName?: string
}

const DoctorDetailBar: FC<IProps> = ({doctorName}) => {
  return (
    <div>
        <Grid container className='px-10 py-2'>
            <Grid item xs={12} sm={9} md={9} lg={9}>
                <h1 className='mb-2 text-[1.2rem] font-bold'>{doctorName}</h1>
                <h2 className='text-[1rem] text-gray-700'>فوق تخصص مغز و اعصاب </h2>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3} className='hidden md:block'>
                <Image src='/images/drmeet final1.png' width={150}/>
            </Grid>
        </Grid>
    </div>
  )
}

export default DoctorDetailBar