import { DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";

export default function Dialog({isOpen, ...rest}: any){

    const handleClose = () => {
        isOpen = false;
      };

    return(
        <div>
            <Dialog
            open={true}
            
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}