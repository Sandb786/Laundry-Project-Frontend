import React, { useState } from "react";
import { Button, Card, Typography, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import { User, Phone, Edit } from "lucide-react";

export default function Owner_Info() {
  const [open, setOpen] = useState(false);

  const [ownerInfo, setOwnerInfo] = useState({
    name: "John Doe",
    contact: "9876543210",
  });

  const [tempInfo, setTempInfo] = useState(ownerInfo);

  const handleOpen = () => {
    setTempInfo(ownerInfo);
    setOpen(!open);
  };

  const handleChange = (e) => {
    setTempInfo({ ...tempInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setOwnerInfo(tempInfo);
    setOpen(false);
  };

  return (
    <>
      <Card className="p-5 shadow-lg">
        <Typography variant="h5" color="black" className="font-bold border-b-2 border-gray-300 pb-4 flex gap-2">
          <User size={24} className="mt-0.5" /> Owner Information
        </Typography>

        <div className="p-3">
          <Typography variant="h6" color="black">Owner Name:</Typography>
          <Typography variant="lead">{ownerInfo.name}</Typography>
        </div>

        <div className="p-3">
          <Typography variant="h6" color="black">Contact:</Typography>
          <div className="flex items-center gap-2 p-2">
            <Phone size={20} />
            <Typography variant="lead">: {ownerInfo.contact}</Typography>
          </div>
        </div>

        <div className="text-center">
          <Button variant="outlined" onClick={handleOpen}>Update</Button>
        </div>
      </Card>

      {/* Update Dialog */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Update Owner Information</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input label="Owner Name" name="name" value={tempInfo.name} onChange={handleChange} />
            <Input label="Contact" name="contact" value={tempInfo.contact} onChange={handleChange} />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="gray" onClick={handleOpen}>Cancel</Button>
          <Button variant="filled" color="blue" onClick={handleSave}>Save</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
