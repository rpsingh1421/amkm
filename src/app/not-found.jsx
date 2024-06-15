import Link from 'next/link'
import { headers } from 'next/headers'
import { Box, Typography } from '@mui/material'
 
export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  const data = await getSiteData(domain)
  return (
    <Box>
      <Typography variant='h2'>Not Found: {data.name}</Typography>
      <Typography>Could not find requested resource</Typography>
      <Typography>
        View <Link href="/blog">all posts</Link>
      </Typography>
    </Box>
  )
}