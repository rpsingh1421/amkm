"use client"
import { Box, Paper, Switch } from '@mui/material';
import React, { Suspense } from 'react';
import CardDataStats from '../component/CardDataStats';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import LineChart1 from '../component/charts/LineChart1';
import LineChart2 from '../component/charts/LineChart2';
import FetchingData from './FetchingData';
import Loading from './Loading';
import RequestedMembers from '../component/member-request/RequestedMembers';
import Visitor from '../component/visitor/Visitor';
import Donation from '../component/Donation/Donation';

const Dashboard = () => {
  
    
  
    return (
      <>
        {/* <Paper className="min-h-[100px]">
          <Suspense fallback={<Loading/>}>
            <FetchingData/>
          </Suspense>
        </Paper> */}
        <Box className='flex gap-[2%]'>
          <Donation/>
        </Box>
        <Box className='flex gap-[2%] justify-between my-[3%]'>
          <RequestedMembers/>
          <Visitor/>
        </Box>
        <Box className='flex gap-[2%] justify-between'>
          <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp >
            <RemoveRedEye color='inherit'/>
          </CardDataStats>
          <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
            <RemoveRedEye color='inherit'/>
          </CardDataStats>
          <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
            <RemoveRedEye color='inherit'/>
          </CardDataStats>
          <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
            <RemoveRedEye color='inherit'/>
          </CardDataStats>
        </Box>
        <Box className='flex my-[2%] gap-[2%] overflow-hidden'>
          <Paper className='w-1/2'>
            <LineChart1/>
          </Paper>
          <Paper className='w-1/2'>
            <LineChart2/>
          </Paper>
        </Box>
      </>
    );
  };
  
  export default Dashboard;
// "use client"
// import { ListItem, Paper } from '@mui/material';
// import React, { Suspense } from 'react'
// import Loading from './Loading';
// import axios from 'axios';
// import FetchingData from './FetchingData';


// const Dashboard = () => {
//   return (
//     <Paper className='min-h[100px]'>
//         <Suspense fallback={<Loading/>}>
//           <FetchingData/>
//         </Suspense>
//     </Paper>
//   )
// }

// export default Dashboard