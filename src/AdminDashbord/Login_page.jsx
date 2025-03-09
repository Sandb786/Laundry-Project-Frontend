import { useState } from "react";
import { Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import { Eye, EyeClosed } from "lucide-react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Login_page(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate(); // Returns a function that can be used to navigate to a different location

  const [formData, setFormData] = useState({
    laundryId: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // If laundry ID matches and no password is set, open the popup
    if (name === "laundryId" && value === props.UserObj.laundryMobile && !props.UserObj.password) {
      setOpenDialog(true);
    }
  };

  // Handle Password Submission
  const handlePasswordSubmit = () => 
    {
    if (newPassword.length >= 8 && newPassword.length <= 15) 
      {
      props.UserObj.password = newPassword; // Update UserObj (ideally, update it in the backend)
      toast.success("Password Created Successfully!");
      setOpenDialog(false);
    } else {
      toast.info("Password must be at least 8 characters long");
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.laundryId === props.UserObj.laundryMobile && formData.password === props.UserObj.password) 
    {
      navigate("/admin-dashboard");
    } else {
      toast.error("Invalid Credentials! Login Faild", {position: "top-center",});
    }
  };

  return (
    <>
      <section className="flex items-center justify-center h-screen bg-gray-100 p-4 relative">
        
        {/* Back Button */}
        <Link to="/" className="absolute top-6 left-6">
          <Button className="flex items-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition">
            ⇐ Home
          </Button>
        </Link>

        <div className="bg-white border border-gray-300 shadow-xl rounded-lg p-8 w-full max-w-md">
          
          {/* Sign In Heading */}
          <Typography variant="h3" className="text-center text-gray-800 font-semibold mb-2">
            Sign In {props.UserObj.laundryName}
          </Typography>

          <Typography className="text-center text-gray-600 text-[16px] mb-8">
            Enter your Laundry ID and password to access your admin dashboard.
          </Typography>

          {/* Form Section */}
          <form className="text-left" onSubmit={handleSubmit}>

            {/* Laundry ID Field */}
            <div className="mb-6">
              <label htmlFor="laundry-id">
                <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                  Laundry ID
                </Typography>
              </label>
              <input
                type="number"
                name="laundryId"
                value={formData.laundryId}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-300"
                placeholder="Enter your Laundry ID"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6 relative">
              <label htmlFor="password">
                <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                  Password
                </Typography>
              </label>
              <div className="relative">
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-300 pr-10"
                  placeholder="Enter your password"
                />
                {/* Eye Icon for Toggling Password Visibility */}
                <i
                  onClick={() => setPasswordShown(!passwordShown)} 
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                >
                  {passwordShown ? <Eye className="h-5 w-5" /> : <EyeClosed className="h-5 w-5" />}
                </i>
              </div>
            </div>

            {/* Sign In Button */}
            <Button color="black" size="lg" className="mt-4 w-full" type="submit">
              Sign In
            </Button>

            {/* Forgot Password */}
            <div className="mt-4 flex justify-end">
              <Typography
                as="a"
                href="#"
                onClick={() => alert("Forgot password coming soon")}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Forgot Password?
              </Typography>
            </div>

            {/* Create Account Link */}
            <Typography variant="small" className="mt-4 text-center text-gray-600">
              Not registered?{" "}
              <Link to="/register" className="font-medium text-black hover:underline">
                Create an account
              </Link>
            </Typography>

          </form>
        </div>
      </section>

      {/* Password Creation Dialog */}
      <Dialog open={openDialog} handler={() => setOpenDialog(false)}>
        <DialogHeader>Create Your Password</DialogHeader>

        <DialogBody>
          <div className="relative p-3">
           
             <input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-300"
                placeholder="Enter your Laundry ID"
              />
          </div>
        </DialogBody>

        <DialogFooter>
          <Button variant="text" color="gray" onClick={() => setOpenDialog(false)} className="mr-2">
            Cancel
          </Button>
          <Button color="blue" onClick={handlePasswordSubmit}>
            Save Password
          </Button>
        </DialogFooter>
      </Dialog>

      <ToastContainer/>
    </>
  );
}
