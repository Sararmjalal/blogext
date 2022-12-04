import { Button, ListItem, ListItemText, ListItemAvatar, Avatar} from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { checkImg } from '../../apis/statics';
import ConfirmModal from '../modals/confirm';
import useSWRImmutable from 'swr'
import Link from 'next/link'

export default function MyBlogCard({ title, imgurl, _id, swrKey }) {

  const [openConfirm, setOpenConfirm] = useState(false)
  const { data } = useSWRImmutable(imgurl, checkImg)

  return (
      <ListItem alignItems="center" sx={{mb: '10px', p: '16px'}}>
        <ListItemAvatar>
        <Avatar
          alt="Blog Picture"
          src={data && imgurl?
            imgurl
            :
            '/statics/images/user-blog-default.svg'
          }
          >
          <img
            src='/statics/images/user-blog-default.svg'
            style={{width:"100%", height: "100%", objectFit: "cover"}}
          />
        </Avatar>
        </ListItemAvatar>
        <ListItemText
        primary={title.length < 23 ? title : title.slice(0, 23) + "..."}
        primaryTypographyProps={{
          variant: "caption",
          component: 'p'
        }}
        sx={{width:"100%"}}
        />
      <Container
        disableGutters
        maxWidth="100%"
        sx={{
          display: 'flex',
          justifyContent: "end",
          gap: "10px"
        }}>
        <Link href={{
            pathname: '/dashboard/edit-blog/[_id]',
            query: {_id}
          }}>
            <Button variant='linkAlike'>
              Edit
            </Button>
          </Link>
        <Button
          onClick={() => setOpenConfirm(true)}
          variant='linkAlikeBlack'
        >
          Delete
        </Button>
      </Container>
      <ConfirmModal
        openConfirm={openConfirm}
        handleOpenConfirm={() => setOpenConfirm(true)}
        handleCloseConfirm={() => setOpenConfirm(false)}
        type='blog'
        blogId={_id}
        swrKey={swrKey}
      />
      </ListItem>
  );
}