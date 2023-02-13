import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Styles applied to the title of the modal.
 */
const titleStyle = {
  width: 500,
  borderRadius: 4,
  m: 0,
  p: '25px 15px',
};

/**
 * Styles applied to the close button in the modal.
 */
const closeButtonStyle = {
  position: 'absolute',
  right: 8,
  top: '50%',
  transform: 'translateY(-50%) scale(1.5)',
};

/**
 * Component representing the confirmation modal when the user successfully submits the employee's form.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
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

SubmitModal.propTypes = {
  /** variable representing the state of the modal (open or closed) */
  open: PropTypes.bool.isRequired,
  /** handler function used to close the modal. */
  handleClose: PropTypes.func.isRequired,
};

export default SubmitModal;
