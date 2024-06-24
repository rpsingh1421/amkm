import defaultNodeApi from '@/lib/api/defaultNodeApi';
import { Box, IconButton, Stack, Switch, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { Suspense, useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ViewImage from '@/app/components/Dialogs/ViewImageDialog';
import Image from 'next/image';
import TableLoadingSkeleton from '@/app/components/Layout/TableLoadingSkeleton';
import NoRowsLayout from '@/app/components/Layout/NowRowsLayout';

const api = defaultNodeApi();

const ImageGalleryTable = (props) => {
  const{isLoading,imageGalleryList,fetchImageGalleryList} = props;
  const columns = [
    { field: 'id',headerAlign: 'center', headerName: 'S.NO', width: 60,
        renderCell: (params) => {
           const rowIndex = params.api.getAllRowIds().indexOf(params.id)+1;
            return (
                <strong className='font-bold text-center self-center'>{rowIndex}</strong>
            );
        }
    },
    {
      field: 'image',
    headerAlign: 'center', headerName: 'Image',
      width: 150,
      renderCell: (params) => {
        return(
          <Image width={100} height={100} alt={params.row.fileName} className='h-full w-full p-[2%]' 
            src={`https://store.amkmofficial.com/${params.row.filePath}`} 
          />
        )
      }
    },
    {field: 'action',headerAlign: 'center', headerName: 'Action', width: 120, sortable: false, 
      renderCell: (params) => {
          const viewImage = (e) => {
            const currentRow = params.row;
            setImagePath(params.row.filePath);
            setOpenImageDialog(true);
          };
          const onClickDelete = async(e) => {
            const currentRow = params.row;
            const response = await api.get(`/rest-api/photo-gallery/crud?action=delete&id=${currentRow._id}`);
            console.log(response);  
            if(response.data.status){
                fetchImageGalleryList();
              }
          };
          return (
            <Stack direction="row" spacing={2}>
              <IconButton color='warning' onClick={viewImage}><RemoveRedEyeIcon/></IconButton>
              <IconButton color='error' onClick={onClickDelete}><DeleteForeverIcon/></IconButton>
            </Stack>
          );
      },
    },
    { field: 'status',headerAlign: 'center',headerName: 'status', width: 90,sortable: false,
        // disableClickEventBubbling: true,  
        renderCell: (params) => {
            const onClick = async(e) => {
            const currentRow = params.row;
            console.log("currentRowId:",currentRow._id);
            const response = await api.get(`/rest-api/photo-gallery/crud?action=modify-status&id=${currentRow._id}`);
            console.log(response);  
            if(response.data.status){
                fetchImageGalleryList();
              }
          };
            return (
                <Switch checked={params.row.status} color='success' onChange={onClick}/>
            );
        },
    },
    { field: 'categoryName',headerAlign: 'center', headerName: 'category', flex: 0.5},
    { field: 'fileName',headerAlign: 'center', headerName: 'name', flex: 1,},
    { field: 'uploadedBy',headerAlign: 'center', headerName: 'Uploaded By',flex: 1, },
  ];
  
  /**===============view image related */
  const [openImageDialog,setOpenImageDialog] = useState(false);
  const [imagePath,setImagePath] =useState('');
 
    /**===============view image related */
  
  useEffect(()=>{
    fetchImageGalleryList();
  },[]);
  return (
    <>
    <Box>
      <Box className="bg-[#009688] text-center dark:bg-boxdark">
        <Typography variant='p' className="font-bold text-xl text-white ">Image Gallery List</Typography>
      </Box>
      <Box className={`${isLoading && 'h-[400px]'} w-full dark:bg-bodydark2`}>
      <DataGrid
        rows={imageGalleryList}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{
          
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}  
        disableRowSelectionOnClick
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
            '& .MuiDataGrid-columnHeader': {border:1,borderColor:'lightgrey'},
            '& .MuiDataGrid-columnHeaderTitle': {fontWeight: 'bold' },
          }}
          slots={{
            noRowsOverlay: NoRowsLayout,
            loadingOverlay: TableLoadingSkeleton,
          }}
          loading={isLoading}
        
      />
      </Box>
    </Box>
    <ViewImage imagePath={imagePath} openImageDialog={openImageDialog} setOpenImageDialog={setOpenImageDialog}/>
    </>
  )
}

export default ImageGalleryTable

function loadingOverlay(){
  return(
    <TableLoadingSkeleton/>
  )
}