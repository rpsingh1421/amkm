import { Box } from '@mui/material'
import React from 'react'

const PreviewImage = (props) => {
    const {uploadedFiles,fieldName,defaultImage} = props;
    const file = uploadedFiles.find(item => item.fieldName === fieldName);

    return (
      <Box className="w-1/3">
        <img src={file ? file.preview : defaultImage} className="w-1/2" alt={fieldName} />
      </Box>
    );
  };
export default PreviewImage