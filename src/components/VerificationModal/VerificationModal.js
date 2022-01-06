import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Divider } from "@material-ui/core";
import "./VerificationModal.css";

const VerificationModal = () => {
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if(element.nextSibling){
        element.nextSibling.focus()
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return ( 
   <>
      <div className="div">
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
              Generate OTP
          </Button>
      </div>
      <div>
        <Dialog
          open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
         >
        <DialogTitle id="form-dialog-title">Phone Verification Modal</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Enter the OTP you've received on 89206-6XXXX
          </DialogContentText>
          <div>
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-field"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                  />    
              );
            })}
          </div>
        </DialogContent>

        <DialogActions className="dialog-actions">
          <Button onClick={handleClose} color="primary">
            Change Your Number
          </Button>

          <Button onClick={handleClose} color="primary">
            Resend OTP
          </Button>
        </DialogActions>
        <div style={{marginBottom: '5px' , textAlign: 'center'}}>

        <Button variant="contained" color="primary">
          Verify Phone Number
        </Button>
        </div>
      </Dialog>
    </div>
    </>
  );
};

export default VerificationModal;
