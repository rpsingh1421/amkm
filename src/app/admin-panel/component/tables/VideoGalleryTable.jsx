import defaultNodeApi from '@/app/rest-api/api/node-api/defaultNodeApi';
import { Box, IconButton, LinearProgress, Stack, Switch, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Edit } from '@mui/icons-material';
import TableLoadingSkeleton from '@/app/components/Layout/TableLoadingSkeleton';

import { styled } from '@mui/material/styles';

import { useDemoData } from '@mui/x-data-grid-generator';
import NoRowsLayout from '@/app/components/Layout/NowRowsLayout';
const api = defaultNodeApi();

const VideoGalleryTable = (props) => {
  const [isLoading,setIsLoading] = useState(true);
  const {videoGalleryList,fetchVideoGalleryList,onClickEdit} = props;
  const columns = [
    { field: 'id', width: 80,headerName:'S.No.',headerAlign:'center',
        renderCell: (params) => {
           const rowIndex = params.api.getAllRowIds().indexOf(params.id)+1;
            return (
                <strong className='font-bold text-center self-center'>{rowIndex}</strong>
            );
        }
    },
    {
      field: 'video',
     headerAlign: 'center', headerName: 'Video',
      width: 150,
      // headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return(
            <iframe 
                className='w-[100%]'
                src={params.row.filePath} 
                title="YouTube video player" 
            >    
            </iframe>
        )
      }
    },
    {field: 'action',headerAlign: 'center', headerName: 'Action', width: 120, sortable: false, 
      renderCell: (params) => {
        
          const onClickDelete = async(e) => {
            const currentRow = params.row;
            const response = await api.delete(`/rest-api/video-gallery/${currentRow._id}`);
            console.log(response);  
            if(response.data.status){
                fetchVideoGalleryList();
              }
          };
          return ( 
            <Box className='flex items-center justify-center h-full'>
                <IconButton color='info' onClick={()=>onClickEdit(params.row._id)}><Edit/></IconButton>
                <IconButton color='error' onClick={onClickDelete}><DeleteForeverIcon/></IconButton>
            </Box>
          );
      },
    },
    { field: 'status',headerName: 'status', width: 90,sortable: false,
        // disableClickEventBubbling: true,  
        renderCell: (params) => {
            const onClick = async(e) => {
            const currentRow = params.row;
            console.log("currentRowId:",currentRow._id);
            const response = await api.get(`/rest-api/video-gallery/${currentRow._id}?action=modify-status`);
            console.log(response);  
            if(response.data.status){
                fetchVideoGalleryList();
              }
          };
            return (
                <Switch checked={params.row.status} color='success' onChange={onClick}/>
            );
        },
    },
    { field: 'categoryName',headerAlign: 'center', headerName: 'category', },
    { field: 'fileName',headerAlign: 'center', headerName: 'name', width:150},
    { field: 'uploadedBy',headerAlign: 'center', headerName: 'Uploaded By',width:200 },
  ];
  
  useEffect(()=>{
    fetchVideoGalleryList();
    setIsLoading(false);
  },[]);
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });
  console.log("data/:",data);
  return (
    <>
    <Box>
      <Box className="bg-[#009688] text-center">
        <Typography variant='p' className="font-bold text-xl text-white ">Video Gallery List</Typography>
      </Box>
      <Box className={`${isLoading && 'h-[400px]'} w-full dark:bg-bodydark2`}>
        <DataGrid
          // rows={videoGalleryList || []}
          rows={videoGalleryList}
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{
            
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}  
          disableRowSelectionOnClick
          rowHeight={100}
          autoHeight
          sx={{
            '--DataGrid-overlayHeight': '300px',
            "& .MuiDataGrid-cell": {
                border: 1,
                borderRight: 0,
                borderTop: 0,
                borderColor:'lightgrey',
                // add more css for customization
                p:0,
                textAlign:'center'
                },
            // '& .super-app-theme--header': {
            //   backgroundColor: 'rgba(255, 7, 0, 0.55)',
            // },
            '& .MuiDataGrid-columnHeader': { backgroundColor: "#000000",border:'1px solid lightgray'},
            '& .MuiDataGrid-columnHeaderTitle': {fontWeight: 'bold',color:'#ffffff' },
          }}
          slots={{
            noRowsOverlay: NoRowsLayout,
            loadingOverlay: TableLoadingSkeleton,
          }}
          loading={isLoading}
        />
      </Box>
    </Box>
    </>
  )
}

export default VideoGalleryTable

// function CustomNoRowsOverlay() {
//   return (
//     <TableLoadingSkeleton/>
//   );
// }

