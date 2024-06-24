"use client"
import { Box, IconButton, LinearProgress, Stack, Switch, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ViewImage from '@/app/components/Dialogs/ViewImageDialog';
import Image from 'next/image';
import axios from 'axios';
import defaultNodeApi from '@/lib/api/defaultNodeApi';
import TableLoadingSkeleton from '@/app/components/Layout/TableLoadingSkeleton';
import NoRowsLayout from '@/app/components/Layout/NowRowsLayout';

const api = defaultNodeApi();
const SERVER_OPTIONS = {
  useCursorPagination: false,
};

const DynamicDataGrid = () => {
  const[isLoading,setIsLoading] = useState(true);
   // Define the columns for the DataGrid
  const columns = [
    { field: 'id', headerAlign: 'center',headerName: 'S.NO', width: 60,
        renderCell: (params) => {
            const rowIndex = params.api.getAllRowIds().indexOf(params.id)+1;
            return (
                <strong className='font-bold text-center self-center'>{rowIndex}</strong>
            );
        }
    },
    {
      field: 'image',
      headerAlign: 'center',headerName: 'Image',
      width: 150,
      renderCell: (params) => {
        return(
          <Image width={100} height={100} alt={params.row.fileName} className='h-full w-full p-[2%]' 
            src={`https://store.amkmofficial.com/${params.row.filePath}`} 
          />
        )
      }
    },
    {field: 'action', headerAlign: 'center',headerName: 'Action', width: 120, sortable: false, 
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
              fetchRowCount();  
              fetchRows();
              }
          };
          return (
            <Box className='flex items-center justify-center h-full'>
              <IconButton color='warning' onClick={viewImage}><RemoveRedEyeIcon/></IconButton>
              <IconButton color='error' onClick={onClickDelete}><DeleteForeverIcon/></IconButton>
            </Box>
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
              fetchRowCount();  
              fetchRows();
              }
          };
            return (
              
                <Switch checked={params.row.status} color='success' onChange={onClick}/>
            );
        },
    },
    { field: 'categoryName', headerAlign: 'center',headerName: 'category', },
    { field: 'fileName', headerAlign: 'center',headerName: 'name', },
    { field: 'uploadedBy', headerAlign: 'center',headerName: 'Uploaded By',flex:1 },
  ];

  // State to manage pagination settings
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  // State to store the total row count from the server
  const [rowCount, setRowCount] = useState(5); //for detail expalination read in last for explaination of this line
    
  // State to store the row count used by the DataGrid
  const [rowCountState, setRowCountState] = useState(rowCount);
    
  // Update rowCountState whenever rowCount changes
  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      rowCount !== undefined ? rowCount : prevRowCountState,
    );
  }, [rowCount, setRowCountState]);


  // State to store the rows fetched from the server
  const [rowData, setRowData] = useState([]);
  const [sortModel, setSortModel] = useState([]);
  const [filterModel, setFilterModel] = useState({ items: [] });

  // Function to fetch the total row count from the server
  const fetchRowCount = async ()=>{
    await axios.get("/rest-api/photo-gallery/pagination",)
    .then((response)=>{
        setRowCount(response.data.body);
        console.log(response.data.body);
    })
  }
  // Function to fetch the rows for the current page and page size from the server
  const fetchRows = async()=>{
    const { page, pageSize } = paginationModel;
    const sortField = sortModel.length ? sortModel[0].field : 'createdAt';
    const sortOrder = sortModel.length ? sortModel[0].sort : 'asc';
    const filter = filterModel.items.length ? filterModel.items[0].value : '';
    await axios.get(`/rest-api/photo-gallery/pagination/${page}/${pageSize}`,{
      params: { //attached as query string in url like?sortField=''&.....
        sortField,
        sortOrder,
        search: filter,
      }
    })
      .then((response)=>{
          
          setRowData(response.data.body);
          setIsLoading(false);
          console.log(response.data.body);
      })
    console.log(paginationModel.pageSize);
  }
  // Effect to fetch row count and rows when paginationModel changes
  useEffect(()=>{
    fetchRowCount();
    fetchRows();    
  },[paginationModel])
//   }, [paginationModel, sortModel, filterModel]);
    

    /**===============view image related */
  const [openImageDialog,setOpenImageDialog] = useState(false);
  const [imagePath,setImagePath] =useState('');
  return (
    <>
    <Box>
      <Box className="bg-[#009688] text-center dark:bg-boxdark">
        <Typography variant='p' className="font-bold text-xl text-white ">Image Gallery List</Typography>
      </Box>
      <Box className={`${isLoading && 'h-[400px]'} w-full dark:bg-bodydark2`}>
      <DataGrid
        columns={columns} // Column definitions
        rows={rowData} // Data to be displayed in the grid
        getRowId={(row) => row._id} // Custom row ID function
        pageSizeOptions={[5, 10, 25]} // Options for the page size dropdown
        rowCount={rowCountState} // Total number of rows
        paginationModel={paginationModel} // Current pagination settings
        /**==below code is wriiten if pagination model not defined by user */
        // initialState={{
          
        //   pagination: { paginationModel: { pageSize: 5 } },
        // }}
        disableRowSelectionOnClick

        //*======server side Sorting section */
        sortingMode="server"
        onSortModelChange={setSortModel}
        //*======server side Sorting section */

        //*======server side filter section */
        filterMode="server"
        onFilterModelChange={setFilterModel}
        //*======server side filter section */

        //*======server side pagination section */
        paginationMode="server" // Enable server-side pagination
        onPaginationModelChange={setPaginationModel} //this is called when no.of rows per page chnged or pagenumber change
        //*======server side pagination section */
        slots={{
          loadingOverlay: TableLoadingSkeleton,
          noRowsOverlay: NoRowsLayout,
        }}
        loading = {isLoading}

        rowHeight={50}
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
          // '& .MuiDataGrid-columnHeader': { backgroundColor: "#000000",border:'1px solid lightgray'},
          '& .MuiDataGrid-columnHeaderTitle': {fontWeight: 'bold',color:'#000000' },
        }}
      />
     </Box>
    </Box>
    <ViewImage imagePath={imagePath} openImageDialog={openImageDialog} setOpenImageDialog={setOpenImageDialog}/>
    </>
    
  )
}

export default DynamicDataGrid



/**The initial value of 20 for rowCount in the line const [rowCount, setRowCount] = useState(20); is given as a default or placeholder value. This serves a few purposes:

Preventing Initial Load Issues:

When the component first renders, it needs a value for rowCount to correctly set up the DataGrid. Providing an initial value of 20 ensures that the DataGrid has a value to work with, even before the actual data is fetched from the server. This can prevent potential issues like the DataGrid trying to render without knowing how many rows there are.
Placeholder for User Experience:

An initial value can provide a better user experience by showing a loading state or a preliminary setup. It makes the DataGrid look populated while the actual data is being fetched. Users won't see a completely empty grid, which might be confusing or jarring.
Avoiding Undefined Errors:

If rowCount is undefined initially, it might cause errors in the DataGrid's rendering logic that expects a number. By initializing with 20, you ensure that rowCount is always a valid number.
Explanation of Initial Row Count Effect
Impact on Pagination:

The DataGrid component uses rowCount to determine the number of pages and how to handle pagination. An initial value ensures that the pagination controls are correctly set up even before the actual data count is fetched.
State Update:

Once the actual row count is fetched from the server, the setRowCount function updates the state with the real value. The useEffect hook listening to rowCount changes ensures that the DataGrid is re-rendered with the correct total number of rows. */