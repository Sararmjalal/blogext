import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useTitle, useToken } from "../../lib"
import { Container } from "@mui/system"
import { Button, Divider, TextField, Typography } from "@mui/material"
import { fetcher, refetch } from '../../apis/clients';
import Head from 'next/head';

const AddEditBlog = ({type, title, blog, setBlog, create, edit}) => {

  const editorRef = useRef(null);

  const submit = async () => {
    const swrKey = [
      `${process.env.SERVER}/blog/my-blogs`,
      {
        'Content-Type': 'application/json',
        'auth': useToken()
      }
    ]
    type === 'create' ? await create(editorRef.current.getContent()) : await edit(editorRef.current.getContent())
    await refetch(swrKey, fetcher)
  }

  return (
    <section
    onKeyDown={(e) => e.key === 'Enter' ? submit() : ""}
    >
  <Head>
   <title>{useTitle(title)}</title>
  </Head>
    <Container disableGutters sx={{mb:{xs:"40px", sm: '0'}}}>
        <Typography component='h1' variant='h2'>{type ==='create' ? 'Create New' : 'Edit'} Blog</Typography>
      <Divider sx={{ margin: '10px 0 20px 0' }} />
      <Container
        disableGutters
        maxWidth='100%'
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: '20px',
          alignItems: "start"
        }}>
        <Container
          disableGutters
          maxWidth='100%'
          sx={{
            display: {xs:'block', sm:"flex"},
            justifyContent: "space-between"
          }}>
        <TextField
          type='text'
          variant='standard'
          placeholder="Title..."
          sx={{
            '&::before': {
              borderBottom: '2px solid #dce4e7',
            },
            width: { xs: '100%', md: '48%' },
            margin:{xs: '10px 0', sm: '0'},
            fontSize: '16px',
            lineHeight: '26px',
            }}
            value={blog.title}
            onChange={(e) => setBlog({...blog, title:e.target.value})}
            />
          <TextField
            type='text'
            variant='standard'
            placeholder="Image url..."
            sx={{
              '&::before': {
                borderBottom: '2px solid #dce4e7',
              },
              width: { xs: '100%', md: '48%' },
              margin:{xs: '10px 0', sm: '0'},
              fontSize: '16px',
              lineHeight: '26px',
            }}
            value={blog.imgurl}
            onChange={(e) => setBlog({...blog, imgurl:e.target.value})}
            />
          </Container>
          <Container disableGutters maxWidth='100%'>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue={type ==='create'? "" : blog?.content}
              init={{
                height: 500,
                width:'100%',
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              }}
              />
        </Container>
          <Button variant="primaryButton" onClick={submit}>Publish</Button>
      </Container>
  </Container>
</section>
)
}

export default AddEditBlog