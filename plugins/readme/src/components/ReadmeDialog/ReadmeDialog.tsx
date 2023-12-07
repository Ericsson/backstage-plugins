import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { FetchComponent } from '../FetchComponent';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const ReadmeDialog = ({ open, onClose }: Props) => {
  return (
    <Dialog
      maxWidth="md"
      open={open}
      onClose={onClose}
      data-testid="content-dialog"
    >
      <DialogTitle>README</DialogTitle>
      <DialogContent dividers>
        <FetchComponent />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          aria-label="close"
          onClick={onClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};