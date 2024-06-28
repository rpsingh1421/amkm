"use client"
import defaultNodeApi from '@/lib/api/defaultNodeApi'
import { FolderOpen } from '@mui/icons-material'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { PageDataContext } from './Home'
import { useForm } from 'react-hook-form'

const api = defaultNodeApi();

const storePath = process.env.NEXT_PUBLIC_STORE;
const AboutSection = () => {
    const {pageData,setPageData,initialContent} = useContext(PageDataContext);
    const { register, handleSubmit, formState: { errors, dirtyFields,isDirty  }, clearErrors, reset, watch } = useForm({
        // Set the initial values from pageData:
        defaultValues: pageData //defaultValues with a synchronous object:
    });
    const[editing,setEditing] = useState(true);
    const [responseDetails,setResponseDetails] = useState({
        status:'',
        message:''
      })
    const fetchAboutSectionData = async()=>{
        try {
            const response = await axios.get('/rest-api/home-page?section=About Us');
            if(response.data.body){
                setPageData(response.data.body);
            }
        } catch (error) {
           console.error(error) ;
        }
    }
    const[selectedFile,setSelectedFile] = useState({});
    const [previewImage,setPreviewImage] = useState();
    const handleFileChange=(e)=>{
        // console.log("selectedfile:",e.target.files)
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const preview = URL.createObjectURL(file) // Create an object URL for each file
            setPreviewImage(preview);
            setSelectedFile(file);
        }
    }
    const removeSelectedFile = () => {
        setSelectedFile(null);
        setPreviewImage(undefined);
        const fileInput = document.getElementById('image1');
        if (fileInput) fileInput.value = '';
      };

    const handleDataSubmit = async (data) => {
        console.log("all form datas:",data)
        console.log("dirty fields:",dirtyFields);
        const changedFields = Object.keys(dirtyFields);
        
        if (changedFields.length === 0 && !selectedFile) {
          // No fields changed and no new file selected
          console.log("No changes detected");
        //   return;
        }
        // Create a new object with updated data
        let updatedPageData = { ...pageData };
        
        changedFields.map(field => {
            if(field!=='image1'){
                updatedPageData[field] = data[field];
            }
        });
        if(changedFields.includes('image1') && selectedFile){
            //first upload file to server and get filepath 
            const formdata = new FormData();
            formdata.append('uploadedFile',selectedFile);
            try {
                const fileUploadResponse = await axios.post('https://store.amkmofficial.com/upload-file.php', formdata, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  });
                // console.log("file upload response:",fileUploadResponse)
                if (fileUploadResponse.data.status) {
                    const filepath = fileUploadResponse.data.body.file_path;
                    // setPageData(pre=>({...pre,image1:filepath}));
                    updatedPageData['image1'] = filepath;
                }
            } catch (error) {
                setResponseDetails({status:false,message:'failed to upload file'})
                console.log("error in uploading file",error);
            }
        }
        if (editing) { 
             
            try {
                const updateRespose = await axios.put('/rest-api/home-page',updatedPageData);
                console.log('about page data updated response:',updateRespose);
                setPageData(initialContent);
                setResponseDetails({status:false,message:updateRespose.data.message})
            } catch (error) {
                setResponseDetails({status:false,message:'failed to upload abut data'})
                console.log('failed to update:',error)
            }
            
        }else{
            // console.log('pagedata for save:',updatedPageData)
            try {
                const createRespose = await axios.post('/rest-api/home-page',updatedPageData);
                console.log('about page data saved response:',createRespose);
                setPageData(initialContent);
                setResponseDetails({status:false,message:createRespose.data.message})
            } catch (error) {
                setResponseDetails({status:false,message:'failed to create about data'})
                console.log('failed to create:',error)
            }
        }      
    };
    useEffect(()=>{
        fetchAboutSectionData();
    },[])
    useEffect(() => {
        reset(pageData);//it will use the latest pageData values.
    }, [pageData, reset]);
  return (
    <Paper className='w-[90%] m-auto mt-[1%] py-[3%] rounded-xl'>
        <Box component={'form'} onSubmit={handleSubmit(handleDataSubmit)} className='w-3/4 m-auto'>
            <Typography className={`${responseDetails.status?'text-green-500':'text-red'}`}>{responseDetails.message}</Typography>
            <Box className="flex gap-[3%] mb-[2%]">
                <Typography className='w-[25%] font-bold'>Select Image </Typography>
                <Box className='w-[60%]'>
                    {watch('image1') && 
                        <Box className='flex gap-[3%] items-center' >
                            <Image src={typeof watch('image1') === 'string'?`${storePath}/${watch('image1')}` :previewImage} width={100} height={100} sx={{width:'auto', height:'auto'}} className='border-2 border-borderGray rounded-xl' alt='selected_image_for_about'/>
                            {previewImage && <Button onClick={removeSelectedFile} variant='contained' color='error' size='small' className='h-fit'>remove</Button>}
                        </Box>
                    }
                    <Typography className='text-sm text-bgRed'>{errors.image1 && errors.image1?.message}</Typography>
                </Box>
                
                <label htmlFor='image1'>
                    <TextField
                        // fullWidth
                        type="file"
                        name="image1"
                        id="image1"
                        className="sr-only"
                        onChange={handleFileChange}
                        // value={watch('image1')}
                        inputProps={{
                        // accept: "image/png, image/jpeg,, image/jpg",
                        // multiple: true  // Enable multiple file selection,
                            ...register('image1', {
                                // required: 'Image is required',
                                // validate: {
                                //     fileSelected: (value) => value && value.length > 0 || 'Please select an image',
                                //     fileType: (value) => {
                                //         if (value && value[0]) {
                                //             const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
                                //             return acceptedTypes.includes(value[0].type) || 'File type not supported. Please upload a PNG, JPEG, or JPG image.';
                                //         }
                                //         return 'Please select an image';
                                //     }
                                // }
                                validate: {
                                    fileOrPath: (value) => {
                                        if (typeof value === 'string' && value.trim() !== '') {
                                            // It's a valid file path
                                            return true;
                                        }
                                        if (value instanceof FileList && value.length > 0) {
                                            // It's a valid file selection
                                            const file = value[0];
                                            const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
                                            return acceptedTypes.includes(file.type) || 'File type not supported. Please upload a PNG, JPEG, or JPG image.';
                                        }
                                        return 'Please select an image or provide a valid file path';
                                    }
                                }
                            })
                        }}
                        
                    />
                    <span>
                        {/* <FolderOpen color='inherit' className='text-black bg-yellow-500'/> */}
                        <Image src='/open-folder-icon.jpg' alt='folder_icon' width={30} height={30} className='cursor-pointer'/>
                    </span>
                </label>
                
            </Box>
            
            <Box className="flex gap-[3%] mb-[2%]">
                <Typography className='w-[25%] font-bold'>Title</Typography>
                <TextField
                    fullWidth
                    size='small'
                    value={watch('section')}
                    {...register('section', {
                        required: 'Title field should not be empty',
                        pattern: {
                            value: /^[a-zA-Z]+(\s[a-zA-Z]+)?$/,
                            message: "Please enter one or two words using only alphabets."
                        }
                    })}
                    error={!!errors.section}
                    helperText={errors.section?.message}
                    disabled
                />

            </Box>
            <Box className="flex gap-[3%] mb-[2%]">
                <Typography className='w-[25%] font-bold'>Message</Typography>
                
                <TextField
                    fullWidth
                    size='small'
                    {...register('content', {
                        required: 'Content field should not be empty',
                        pattern: {
                        value: /^(?:[a-zA-Z,''""&.]+(?:\s|$)){0,50}$/,
                        message: "Only letters, comma, apostrophe, quotation marks, ampersand, full stop, spaces allowed. Max 20 words."
                        }
                    })}
                    value={watch('content')}
                    error={!!errors.content}
                    helperText={errors.content?.message}
                    multiline
                    rows={3}
                />
            </Box>
            <Box className="flex justify-end">
                <Button disabled={!isDirty} variant='contained' size='small' className='' type='submit'>upload</Button>
            </Box>
        </Box>
    </Paper>
  )
}

export default AboutSection
