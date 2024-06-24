import { Avatar, Badge, Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Visitor = () => {
  return (
    <Paper className='w-[40%]'>
        <Box className='border-b border-borderGray p-[3%]'>
            <Typography className='font-semibold text-xl'>Visitor Messages</Typography>
        </Box>
        <Box>
        {chatData.map((chat, key) => (
          <Link
            href="#"
            className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <Box className="relative h-14 w-14 rounded-full">
              <Badge color="secondary" badgeContent={99}>
                <Avatar
                    // src={chat.avatar}
                    alt="User"
                />
              </Badge>
            </Box>

            <Box className="flex flex-1 items-center justify-between">
              <Box>
                <Typography className="font-medium text-black dark:text-white">
                  {chat.name}
                </Typography>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time} min</span>
                </p>
              </Box>
              {chat.textCount !== 0 && (
                <Box className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    {chat.textCount}
                  </span>
                </Box>
              )}
            </Box>
          </Link>
        ))}
      </Box>
    </Paper>
  )
}

export default Visitor
const chatData = [
    {
      avatar: "/images/user/user-01.png",
      name: "Devid Heilo",
      text: "How are you?",
      time: 12,
      textCount: 3,
      dot: 3,
    },
    {
      avatar: "/images/user/user-02.png",
      name: "Henry Fisher",
      text: "Waiting for you!",
      time: 12,
      textCount: 0,
      dot: 1,
    },
    {
      avatar: "/images/user/user-04.png",
      name: "Jhon Doe",
      text: "What's up?",
      time: 32,
      textCount: 0,
      dot: 3,
    },
    {
      avatar: "/images/user/user-05.png",
      name: "Jane Doe",
      text: "Great",
      time: 32,
      textCount: 2,
      dot: 6,
    },
    {
      avatar: "/images/user/user-01.png",
      name: "Jhon Doe",
      text: "How are you?",
      time: 32,
      textCount: 0,
      dot: 3,
    },
    {
      avatar: "/images/user/user-03.png",
      name: "Jhon Doe",
      text: "How are you?",
      time: 32,
      textCount: 3,
      dot: 6,
    },
  ];