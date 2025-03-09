import React, { useState } from 'react';
import { Button, Card, Typography, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import { Mail, Phone, Clipboard, MapPin, User } from "lucide-react";

export default function Laundry_Info() {
  const [open, setOpen] = useState(false);

  const [laundryInfo, setLaundryInfo] = useState({
    name: "Mahawat Laundry",
    location: "50/1 Bhangarh MR10 Road",
    phone: "7879243194",
    email: "Demo@gmail.com",
    ownerName: "John Doe",
    ownerContact: "9876543210",
  });

  const [tempInfo, setTempInfo] = useState(laundryInfo);

  const handleOpen = () => {
    setTempInfo(laundryInfo);
    setOpen(!open);
  };

  const handleChange = (e) => {
    setTempInfo({ ...tempInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setLaundryInfo(tempInfo);
    setOpen(false);
  };

  return (
    <>
      <Card className="p-5 shadow-lg">
        <Typography variant="h5" color="black" className="font-bold border-b-2 border-gray-300 pb-4 flex gap-2">
          <Clipboard size={24} className="mt-0.5" /> Laundry Information
        </Typography>

        <div className="p-3">
          <Typography variant="h6" color="black">Name:</Typography>
          <Typography variant="lead">{laundryInfo.name}</Typography>
        </div>

        <div className="p-3">
          <Typography variant="h6" color="black">Location:</Typography>
          <div className="flex items-center gap-2 p-2">
            <MapPin size={20} />
            <Typography variant="lead">{laundryInfo.location}</Typography>
          </div>
        </div>

        <div className="p-3">
          <Typography variant="h6" color="black">Contact Information</Typography>
          <div className="flex items-center gap-2 p-2">
            <Phone size={20} />
            <Typography variant="lead">: {laundryInfo.phone}</Typography>
          </div>
          <div className="flex items-center gap-2 p-2">
            <Mail size={20} />
            <Typography variant="lead">: {laundryInfo.email}</Typography>
          </div>
        </div>

        {/* Owner Information */}
        <Typography variant="h5" color="black" className="font-bold border-b-2 border-gray-300 pb-4 flex gap-2 mt-5">
          <User size={24} className="mt-0.5" /> Owner Information
        </Typography>

        <div className="p-3">
          <Typography variant="h6" color="black">Owner Name:</Typography>
          <Typography variant="lead">{laundryInfo.ownerName}</Typography>
        </div>

        <div className="p-3">
          <Typography variant="h6" color="black">Contact:</Typography>
          <div className="flex items-center gap-2 p-2">
            <Phone size={20} />
            <Typography variant="lead">: {laundryInfo.ownerContact}</Typography>
          </div>
        </div>

        <div className="text-center">
          <Button variant="outlined" onClick={handleOpen}>Update</Button>
        </div>
      </Card>

      {/* Update Dialog */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Update Laundry & Owner Information</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input label="Laundry Name" name="name" value={tempInfo.name} onChange={handleChange} />
            <Input label="Location" name="location" value={tempInfo.location} onChange={handleChange} />
            <Input label="Phone" name="phone" value={tempInfo.phone} onChange={handleChange} />
            <Input label="Email" name="email" value={tempInfo.email} onChange={handleChange} />
            <Input label="Owner Name" name="ownerName" value={tempInfo.ownerName} onChange={handleChange} />
            <Input label="Owner Contact" name="ownerContact" value={tempInfo.ownerContact} onChange={handleChange} />
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
