import defaultNodeApi from '@/app/rest-api/api/node-api/defaultNodeApi';
import { Box, IconButton, Stack, Switch, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Edit } from '@mui/icons-material';

const api = defaultNodeApi();

const VideoGalleryTable = (props) => {
  const {videoGalleryList,fetchVideoGalleryList,onClickEdit} = props;
  const columns = [
    { field: 'id', headerName: 'S.NO', width: 60,
        renderCell: (params) => {
           const rowIndex = params.api.getAllRowIds().indexOf(params.id)+1;
            return (
                <strong className='font-bold text-center self-center'>{rowIndex}</strong>
            );
        }
    },
    {
      field: 'video',
      headerName: 'Video',
      width: 150,
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
    {field: 'action', headerName: 'Action', width: 120, sortable: false, 
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
    { field: 'categoryName', headerName: 'category', },
    { field: 'fileName', headerName: 'name', width:150},
    { field: 'uploadedBy', headerName: 'Uploaded By',width:200 },
  ];
  
  useEffect(()=>{
    fetchVideoGalleryList();
  },[]);
  return (
    <>
    <Box>
      <Box className="bg-[#009688] text-center">
        <Typography variant='p' className="font-bold text-xl text-white ">Video Gallery List</Typography>
      </Box>
      <Box>
        <DataGrid
          rows={videoGalleryList}
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{
            
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}  
          disableRowSelectionOnClick
          rowHeight={100}
          sx={{
            "& .MuiDataGrid-cell": {
                border: 1,
                borderRight: 0,
                borderTop: 0,
                borderColor:'lightgrey',
                // add more css for customization
                p:0,
                textAlign:'center'
                },
          }}
        />
      </Box>
    </Box>
    </>
  )
}

export default VideoGalleryTable