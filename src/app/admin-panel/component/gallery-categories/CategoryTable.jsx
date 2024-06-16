import React, { useContext, useEffect } from 'react'
import { CategoryContext } from '../../gallery/AddCategoryDialog'
import { Box, Icon, IconButton, Stack, Switch, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DataGrid } from '@mui/x-data-grid';
import defaultNodeApi from '@/app/rest-api/api/node-api/defaultNodeApi';
import axios from 'axios';

const api = defaultNodeApi();
const CategoryTable = () => {
    const{fetchedCategoryList,setFetchedCategoryList,fetchCategoryList}= useContext(CategoryContext);
    const columns = [
        { field: 'id', headerName: 'S.NO', width: 60,
            renderCell: (params) => {
               const rowIndex = params.api.getAllRowIds().indexOf(params.id)+1;
                return (
                    <strong className='font-bold text-center self-center'>{rowIndex}</strong>
                );
            },
         },
        {
          field: 'category_name',
          headerName: 'Category Name',
          width: 150,
        //   editable: true,
        },
        {
          field: 'category_type',
          headerName: 'Media Type',
          width: 120,
        },
        { field: 'status',headerName: 'status', width: 90,sortable: false,
            // disableClickEventBubbling: true,  
            renderCell: (params) => {
                const onClick = async(e) => {
                const currentRow = params.row;
                console.log("currentRowId:",currentRow._id);
                const response = await axios.get(`/rest-api/media-categories/crud?action=modify-status&id=${currentRow._id}`);
                console.log(response);  
                if(response.data.status){
                    fetchCategoryList();
                  }
              };
                return (
                    <Switch checked={params.row.status} color='success' onChange={onClick}/>
                );
            },
        },
        {field: 'action', headerName: 'Action', width: 120, sortable: false, 
            renderCell: (params) => {
                const onClickEdit = (e) => {
                  const currentRow = params.row;
                //   edit(currentRow.id);
                };
                const onClickDelete = async(e) => {
                  const currentRow = params.row;
                  const response = await axios.get(`/rest-api/media-categories/crud?action=delete&id=${currentRow._id}`);
                  console.log(response);  
                  if(response.data.status){
                      fetchCategoryList();
                    }
                };
                return (
                  <Stack direction="row" spacing={2}>
                    <IconButton color='warning' onClick={onClickEdit}><BorderColorIcon/></IconButton>
                    <IconButton color='error' onClick={onClickDelete}><DeleteForeverIcon/></IconButton>
                  </Stack>
                );
            },
          }
      ];
    useEffect(()=>{
      fetchCategoryList();
    },[])
  return (
    <Box className="w-max">
        <Box className="bg-slate-600 text-center">
            <Typography className='text-white'>Media Category Table</Typography>
        </Box>
        <DataGrid
            className='w-fit'
            getRowId={(row) => row._id}
            rows={fetchedCategoryList}
            columns={columns}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            initialState={{
            
                pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}  
            disableRowSelectionOnClick
        />
    </Box>
  )
}

export default CategoryTable