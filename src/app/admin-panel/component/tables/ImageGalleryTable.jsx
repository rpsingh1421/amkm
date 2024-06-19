import defaultNodeApi from '@/app/rest-api/api/node-api/defaultNodeApi';
import { Box, IconButton, Stack, Switch, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ViewImage from '@/app/components/ViewImage';
import Image from 'next/image';

const api = defaultNodeApi();

const ImageGalleryTable = () => {
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
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => {
        return(
          <Image width={100} height={100} alt={params.row.fileName} className='h-full w-full p-[2%]' 
            src={`https://store.amkmofficial.com/${params.row.filePath}`} 
          />
        )
      }
    },
    {field: 'action', headerName: 'Action', width: 120, sortable: false, 
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
    { field: 'status',headerName: 'status', width: 90,sortable: false,
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
    { field: 'categoryName', headerName: 'category', },
    { field: 'fileName', headerName: 'name', },
    { field: 'uploadedBy', headerName: 'Uploaded By', },
  ];
  const [imageGalleryList,setImageGalleryList] = useState([]);
  /**===============view image related */
  const [openImageDialog,setOpenImageDialog] = useState(false);
  const [imagePath,setImagePath] =useState('');
 
    /**===============view image related */
  const fetchImageGalleryList = async()=>{
    const response = await api.get('/rest-api/photo-gallery');
    if (response.data.status) {
      setImageGalleryList(response.data.body);
    }
  }
  useEffect(()=>{
    fetchImageGalleryList();
  },[]);
  return (
    <>
    <Box>
      <Box className="bg-[#009688] text-center">
        <Typography variant='p' className="font-bold text-xl text-white ">Image Gallery List</Typography>
      </Box>
      <Box>
        <DataGrid
          rows={imageGalleryList}
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{
            
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}  
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
    <ViewImage imagePath={imagePath} openImageDialog={openImageDialog} setOpenImageDialog={setOpenImageDialog}/>
    </>
  )
}

export default ImageGalleryTable