
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, ListItemButton } from '@mui/material';
import Link from 'next/link';
import { Container } from '@mui/system';
import ConfirmModal from '../modals/confirm';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function MyBlogCard({ title, imgurl, _id }) {

  const [openConfirm, setOpenConfirm] = useState(false)
  const router = useRouter()
  return (
      <ListItem key={_id} alignItems="flex-start" sx={{mb: '10px'}}>
        <ListItemAvatar>
          <Avatar alt="Blog Picture" src={`${process.env.SERVER}/${imgurl}`} />
        </ListItemAvatar>
        <ListItemText
        primary={title}
        primaryTypographyProps={{
          variant: "caption"
        }}
      />
      <ListItemButton
      
      />
            <Container disableGutters maxWidth="100%" sx={{display:'flex', justifyContent:"end", gap:"10px"}}>
              <Button onClick={() => router.push(`/dashboard/edit-blog/${_id}`)} variant='linkAlike'>
                Edit
              </Button>
              <Button onClick={() => setOpenConfirm(true)} variant='linkAlikeBlack'>Delete</Button>
            </Container>
      <ConfirmModal openConfirm={openConfirm} handleOpenConfirm={() => setOpenConfirm(true)} handleCloseConfirm={() => setOpenConfirm(false)} type='blog' blogId={_id} />
      </ListItem>
  );
}