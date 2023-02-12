import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, IconButton } from '@mui/material';

const style = {
  width: 500,
  borderRadius: 4,
  m: 0,
  p: '25px 15px',
};

const SubmitModal = props => {
  const { open, handleClose } = props;
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={style}>Employee Created!</DialogTitle>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%) scale(1.5)',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Dialog>
    </div>
  );
};

export default SubmitModal;
