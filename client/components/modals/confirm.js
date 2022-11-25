import { removeCurrentUser } from "../../store/slice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { postJSON } from "../../apis/clients"
import { toast } from "react-toastify"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: 'primary.main',
  boxShadow: 24,
  p: 4,
};

const ConfirmModal = ({ openConfirm, handleOpenConfirm, handleCloseConfirm , type, blogId }) => {

  const dispatch = useDispatch()
  const router = useRouter()

  const logout = () => {
    handleCloseConfirm()
    dispatch(removeCurrentUser())
    router.push('/')
  } 

  const remove = async () => {
    try {
      const res = await postJSON(`${process.env.SERVER}/blog/delete`, { blogId })
      if (res.msg !== 'ok') return toast.error("Something went wrong. Please try again!")
      toast.info('Selected blog deleted successfully')
    }
    catch (error) {
      toast.error('Server is closed lool')
    }
  }

  return (
    <div>
      <Button onClick={handleOpenConfirm}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openConfirm}
        onClose={handleCloseConfirm}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openConfirm}>
          <Box sx={style}>
            <Typography
              sx={{ color: 'secondary.main' }}
              variant="subtitle1"
              component="h2">
              {`Are you sure you want to ${type === 'logout' ? 'exit?' : 'delete this item?'}`}
            </Typography>
            <Container
              disableGutters
              sx={{
                display: "flex",
                justyfyContent: "space-between",
                gap: '16px',
                mt: "30px"
              }}>
              <Button onClick={handleCloseConfirm} variant="cancel">Cancel</Button>
              <Button onClick={type === 'logout' ? logout : remove} variant="yes">Yes</Button>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ConfirmModal