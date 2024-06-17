import { Box } from '@mui/material'
import Image from 'next/image';
import React from 'react'

const PreviewImage = (props) => {
    const {uploadedFiles,fieldName,defaultImage} = props;
    const file = uploadedFiles.find(item => item.fieldName === fieldName);

    return (
      <Box className="w-1/3">
        <Image width={100} height={100} src={file ? file.preview : defaultImage} className="w-1/2" alt={fieldName} />
      </Box>
    );
  };
export default PreviewImage