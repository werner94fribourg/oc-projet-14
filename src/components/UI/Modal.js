import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, IconButton } from '@mui/material';

const titleStyle = {
  width: 500,
  borderRadius: 4,
  m: 0,
  p: '25px 15px',
};

const closeButtonStyle = {
  position: 'absolute',
  right: 8,
  top: '50%',
  transform: 'translateY(-50%) scale(1.5)',
};

const SubmitModal = props => {
  const { open, handleClose } = props;
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={titleStyle}>Employee Created!</DialogTitle>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={closeButtonStyle}
        >
          <CloseIcon />
        </IconButton>
      </Dialog>
    </div>
  );
};

export default SubmitModal;
