import { BookText, Check, ClipboardList, Eye, Home, Settings, UserCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography
} from "@material-tailwind/react";

export default function Confirmation(props) 
{
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  return (

    <div className="mx-auto p-5 py-12 flex flex-col items-center">

      {/* Confirmation Card */}
      <Card className="border-2 border-green-700  max-w-xl ">

        <CardBody>

          <div className="flex items-start space-x-3">

            <span className="text-xl bg-green-700 p-2 rounded-full">
              <Check className="text-white" size={30} />
            </span>

            <div>
              <h2 className="font-bold text-lg">Great {props.UserObj.ownerName}!</h2>
              <p className="font-semibold">Your Registration is Successful!</p>
              <p className="text-gray-600">
                Your laundry management system is now set up. You can manage customers, orders, and more.
              </p>

              <p className="text-black mt-5 shadow-lg text-center">
                Laundry ID: <span className="font-bold text-green-700"> {props.UserObj.laundryMobile}</span> ( laundry mobile no. )
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex ml-15 gap-4 mt-6 flex-col md:flex-row">

            {/* Home Button */}
            <Button className="bg-green-700 cursor-pointer " variant="filled" onClick={() => navigate("/")}> 
              <Home size={18} className="md:mr-2 ml-20 md:ml-0" /> Go to Home
            </Button>

            {/* Show Details Button */}
            <Button color="gray" variant="outlined" onClick={() => setModalIsOpen(true)}>
              <Eye size={18} className="ml-20 md:ml-0" /> View Details
            </Button>


          </div>

        </CardBody>

      </Card>

      {/* Modal Popup for Details */}
      <Dialog open={modalIsOpen} handler={setModalIsOpen} size="xl" className="rounded-lg">

        <DialogHeader className="bg-cyan-800 text-white p-4 rounded-t-lg  font-bold ">
          <BookText size={24} className="mr-2" /> 
          Entered Details
        </DialogHeader>


        <DialogBody className="text-gray-700 space-y-6 p-6">

          <Typography variant="h6" className="text-cyan-900 font-semibold text-lg flex mb-2 "><ClipboardList size={24} className="mr-2"/> Laundry Info</Typography>
          <div className="border-b border-gray-400 pb-3 pl-10  grid md:grid-cols-2 gap-2 md:gap-4">
            <p><strong>Name:</strong> {props.UserObj.laundryName}</p>
            <p><strong>Landmark:</strong> {props.UserObj.landmark}</p>
            <p><strong>Pincode:</strong> {props.UserObj.pincode}</p>
            <p><strong>City:</strong> {props.UserObj.city}</p>
            <p><strong>State:</strong> {props.UserObj.state}</p>
            <p><strong>Mobile:</strong> {props.UserObj.laundryMobile}</p>
          </div>

          <Typography variant="h6" className="text-cyan-900 font-semibold text-lg flex mb-2 "><UserCheck size={24} className="mr-2"/> Owner Info</Typography>
          <div className="border-b border-gray-400 pb-3 pl-10  grid  md:grid-cols-2 md:gap-4 gap-2">
            <p><strong>Name:</strong> {props.UserObj.ownerName}</p>
            <p><strong>Phone:</strong> {props.UserObj.ownerPhone}</p>
            <p><strong>Selected Plan:</strong> {props.UserObj.selectedPlan}</p>
          </div>

          <Typography variant="h6" className="text-cyan-900 font-semibold text-lg flex mb-2 "><Settings size={24} className="mr-2"/> Service Info</Typography>
          <div>
           
            {props.UserObj.services.length > 0 ? (
              <ul className="list-disc pl-15  grid  md:grid-cols-2 md:gap-3 gap-2">
                {props.UserObj.services.map((service, index) => (
                  <li key={index} className="text-black">{service.name} - ₹{service.price}</li>
                ))}
              </ul>
            ) : (
              <p>No services added.</p>
            )}
          </div>

        </DialogBody>


        <DialogFooter className="bg-gray-100 p-4 rounded-b-lg flex justify-end">
          <Button color="red" variant="filled" onClick={() => setModalIsOpen(false)}>Close</Button>
        </DialogFooter>

      </Dialog>

    </div>
  );
}
