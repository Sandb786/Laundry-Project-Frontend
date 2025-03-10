import React, { useState } from 'react';
import { Button, Dialog, DialogBody, DialogHeader, DialogFooter, Input, Select, Option } from "@material-tailwind/react";

export default function FackOrder({ addOrder }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    serviceType: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, serviceType: value });
  };

  const handleSubmit = () => {
    if (formData.customerName && formData.serviceType) {
      addOrder({ customer: formData.customerName, orderType: formData.serviceType });
      setOpen(false);
      setFormData({ customerName: '', serviceType: '' }); // Reset form
    }
  };

  return (
    <div className="p-4">
      <Button onClick={() => setOpen(true)} color="blue">Create Order</Button>

      <Dialog open={open} handler={() => setOpen(false)}>
        <DialogHeader>Create New Order</DialogHeader>
        <DialogBody>
          <div className="space-y-4">
            <Input label="Customer Name" name="customerName" value={formData.customerName} onChange={handleChange} />
            <Select label="Service Type" onChange={handleSelectChange}>
              <Option value="Washing">Washing</Option>
              <Option value="Dry Cleaning">Dry Cleaning</Option>
              <Option value="Ironing">Ironing</Option>
              <Option value="Folding">Folding</Option>
              <Option value="Stain Removal">Stain Removal</Option>
              <Option value="Premium Wash">Premium Wash</Option>
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="gray" onClick={() => setOpen(false)}>Cancel</Button>
          <Button color="blue" onClick={handleSubmit}>Submit Order</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
