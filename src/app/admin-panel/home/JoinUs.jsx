"use client"
import defaultNodeApi from '@/lib/api/defaultNodeApi'
import { Close } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, InputLabel, Paper, Skeleton, TextField, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { PageDataContext } from './Home'
import { useForm } from 'react-hook-form'
import ImageUploadOptions from '../component/ImageSelection/ImageUploadOptions'

const api = defaultNodeApi();

const storePath = process.env.NEXT_PUBLIC_STORE;
const JoinUs = () => {
    const {pageData,setPageData,initialContent} = useContext(PageDataContext);
    const [isLoading,setIsLoading] = useState(true);
    const { register, handleSubmit, formState: { errors, dirtyFields,isDirty  }, clearErrors, reset, watch } = useForm({
        // Set the initial values from pageData:
        defaultValues: pageData //defaultValues with a synchronous object:
    });
    const[editing,setEditing] = useState(pageData._id && pageData.section);
    const [responseDetails,setResponseDetails] = useState({
        status:'',
        message:''
      })
    const fetchJoinUsSectionData = async()=>{
        try {
            const response = await axios.get('/rest-api/home-page?section=Join Us');
            console.log('join us sectio data fetch responses :',response)
            if(response.data.body){
                setPageData(response.data.body);
            }else{
                setPageData({...initialContent,section:'Join Us'})
            }
            setIsLoading(false)
        } catch (error) {
           console.error(error) ;
           setIsLoading(false)
        }
    }

    const handleDataSubmit = async (data) => {
             console.log ("data finally submitted****:",data)
        if (editing) {         
            try {
                const updateRespose = await axios.put(`/rest-api/home-page/${pageData._id}`,data);
                console.log('about page data updated response:',updateRespose);
                setPageData({...initialContent,section:'Join Us'});
                setResponseDetails({status:true,message:updateRespose.data.message})
                fetchJoinUsSectionData();
            } catch (error) {
                setResponseDetails({status:false,message:'failed to upload abut data'})
                console.log('failed to update:',error)
            }
            
        }else{
        //     // console.log('pagedata for save:',updatedPageData)
            try {
                const createResponse = await axios.post('/rest-api/home-page',data);
                console.log('join us section data saved response:',createResponse);
                setPageData({...initialContent,section:'Join Us'});
                setResponseDetails({status:true,message:createResponse.data.message});
                fetchJoinUsSectionData();
            } catch (error) {
                setResponseDetails({status:false,message:'failed to create about data'})
                console.log('failed to create:',error)
            }
        }      
    };
    useEffect(()=>{
        fetchJoinUsSectionData();
    },[])
    useEffect(() => {
        reset(pageData);//it will use the latest pageData values.
    }, [pageData, reset]);

    /**========================================================== */
    const [selectedimage,setSelectedimage] = useState();
    const [action,setAction] = useState();
    const selectAction = (actions,image)=>{
        if(pageData && pageData._id){
            console.log("id:",pageData._id)
            console.log("selected action is received action")
            setAction(actions);
        }else{
            setAction('add');
            console.log("selected action is add action")
        }
        
        setSelectedimage(image);
    }
    const onCloseDialog = ()=>{   
        console.log("selected image path:",watch(selectedimage));   
        setSelectedimage(undefined);
    }
    const updateImageFilePath = (savedImageFilePtah)=>{
        console.log("received image path to add/change:",savedImageFilePtah)
        if (selectedimage=='image1') {
            setPageData(pre=>({...pre,image1:savedImageFilePtah}));
        } else {
            setPageData(pre=>({...pre,image2:savedImageFilePtah}));
        }
    }
  return (
    <Paper className='w-[90%] m-auto mt-[1%] py-[3%] rounded-xl'>
        <Box component={'form'} onSubmit={handleSubmit(handleDataSubmit)} className='w-3/4 m-auto'>
            <Typography className={`${responseDetails.status?'text-green-500':'text-red'}`}>{responseDetails.message}</Typography>

            {isLoading? <Box className='flex gap-[3%]'>
                <Skeleton variant="rectangular" className='w-full h-[200px]' width={350} height={200}/>
                <Skeleton variant="rectangular" className='w-full h-[200px]'  width={350} height={200}/>
            </Box>:
                <Box className='flex gap-[5%]'>
                <Box className='text-center w-[45%]'>
                    <Box className='h-[20vh] relative '>
                        <textField className='sr-only' { ...register('image1', {validate: {
                                    fileOrPath: (value) => {
                                        if (typeof value === 'string' && value.trim() !== '') {
                                            // It's a valid file path
                                            return true;
                                        }
                                        return 'Please select an image';
                                    }
                                }})}/>
                        <Image 
                            src={watch(`image1`) ? `${storePath}/${watch('image1')}`
                                                :`/hand-touching-icon.jpg`
                                            }
                            alt={`join_us_image1`}
                            width={950} 
                            height={100} 
                            className='w-full h-full border border-borderGray'
                        />
                        
                    </Box>
                    {errors.image1 && <Typography className='text-sm text-bgRed'>{errors.image1?.message}</Typography>}
                    {!watch('image1') && <Button className='rounded-full my-[2%]' variant='contained' size='small' onClick={()=>selectAction('add','image1')}>add</Button> }
                    {watch('image1') && <Button className='rounded-full my-[2%]' variant='contained' size='small' onClick={()=>selectAction('change','image1')}>change</Button>}
                </Box>
                <Box className='text-center w-[45%]'>
                    <Box className='h-[20vh] relative'>
                        <textField className='sr-only' { ...register('image2', {validate: {
                                    fileOrPath: (value) => {
                                        if (typeof value === 'string' && value.trim() !== '') {
                                            // It's a valid file path
                                            return true;
                                        }
                                        return 'Please select an image';
                                    }
                                }})}/>
                        <Image 
                            src={watch('image2') ? `${storePath}/${watch('image2')}`
                                                :`/hand-touching-icon.jpg`
                                            }
                            alt={`join_us_image1`}
                            width={950} 
                            height={50} 
                            className='w-full border border-borderGray h-full'
                        />
                    </Box>
                    {errors.image2 && <Typography className='text-sm text-bgRed'>{errors.image2?.message}</Typography>}
                    {!watch('image2') && <Button className='rounded-full my-[2%]' variant='contained' size='small' onClick={()=>selectAction('add','image2')}>add</Button> }
                    {watch('image2') && <Button className='rounded-full my-[2%]' variant='contained' size='small' onClick={()=>selectAction('change','image2')}>change</Button>}
                    
                </Box>
            </Box>}
            <Box className="flex gap-[3%] mb-[2%]">
                <Typography className='w-[25%] font-bold'>Content</Typography>
                
                <TextField
                    fullWidth
                    size='small'
                    {...register('content', {
                        required: 'Content field should not be empty',
                        pattern: {
                        value: /^(?:[a-zA-Z,''""&.()]+(?:\s|$)){0,50}$/,
                        message: "Only letters, comma, apostrophe, quotation marks, ampersand, full stop, spaces allowed. Max 20 words."
                        }
                    })}
                    value={watch('content')}
                    // onChange={(e)=>setPageData(pre=>({...pre,content:e.target.value}))}
                    error={!!errors.content}
                    helperText={errors.content?.message}
                    multiline
                    rows={3}
                />
            </Box>
            <Box className="flex justify-end">
                {pageData && pageData._id ? editing &&
                <Button disabled={!isDirty} variant='contained' size='small' className='' type='submit'>upload</Button>
                :
                <Button disabled={!watch('content')} variant='contained' size='small' className='' type='submit'>add</Button>}
            </Box>
        </Box>
        {selectedimage &&
        <Dialog open sx={{
                "& .MuiDialog-container": {
                    
                "& .MuiPaper-root": {
                    width: "90%",
                    margin:'auto',
                    height:'80vh',
                    overflow:'hidden'

                      // Set your width here
                },
                },
            }} fullScreen>
                <DialogActions className="p-0">
                    <IconButton onClick={()=>onCloseDialog()} size="small" className="text-white bg-red hover:bg-bgRed rounded-none p-[0.5%]"><Close/></IconButton>
                </DialogActions>
                <DialogContent className="h-[70vh] overflow-hidden">
                    <ImageUploadOptions 
                        updateImageFilePath={updateImageFilePath}
                        selectedimage={selectedimage}
                        action={action}
                        closeDialog={onCloseDialog}
                        sectionId = {pageData && pageData._id}
                    />
                </DialogContent>
            </Dialog>
            }
    </Paper>
  )
}

export default JoinUs
