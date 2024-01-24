import RouteTitle from '@/components/Modules/RouteName/RouteName'
import { Grid } from '@mui/material'
import React from 'react'
import NewPayment from './components/newPayment'

const MyPayments = () => {
  return (
    <div>
        <RouteTitle title='پرداخت های من'/>
        <Grid container>
           <NewPayment/>
        </Grid>
    </div>
  )
}

export default MyPayments