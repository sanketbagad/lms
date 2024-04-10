import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";

const AdminProfile = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="h-full m-auto py-6">
    <div className="columns-1 md:flex w-fit sm:w-full ">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }} 
        className="w-full md:w-2/5 p-2 space-x-3 sm:py-6 lg:p-5 bg-gray-900 shadow-md rounded-xl"
          >
        <div className="flex justify-center mx-2 w-full">
          <span className="text-xl font-semibold block">Admin Profile</span>
          {/* <a href="#" className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a> */}
        </div>
        {/* <span className="text-gray-600">This information is secret so be careful</span> */}
        <div className="w-full pt-5  mx-2 flex justify-center">
          <img id="showImage" className="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt="" />
        </div>
        <div className="w-full pt-10  mx-2 flex justify-center">
          {selectedImage && <img id="showImage" className="max-w-xs w-32 items-center border" src={selectedImage} alt="" />}
          {!selectedImage && <span className="text-gray-600 text-xs">select image you want to change</span>}
        </div>
        <div className="w-full pt-8  mx-2 flex justify-center">
          <label htmlFor="profileImage" className="-mt-2 text-sm mb-4 sm:mb-auto sm:text-base font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800 cursor-pointer">Change Profile</label>
          <input id="profileImage" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </div>
        </motion.div>

        <div className='m-5 md:m-2'></div>
      
      <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="w-full md:w-3/5 p-8 bg-gray-900 lg:ml-4 rounded-xl shadow-md"
          >
        <div className="rounded  shadow p-6">
          <div className="pb-6">
            <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Name</label>
            <input disabled id="username" className="border-1  rounded-r px-4 py-2 w-full" type="text" value="Jane Name" />
          </div>
          <div className="pb-4">
            <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Email</label>
            <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" value="example@example.com" />
            <span className="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
          </div>
        </div>
      </motion.div>
    </div>

    <div className="block md:flex mt-5">   
      <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="w-full  p-8 bg-gray-900 rounded-xl shadow-md"
          >
        <div className="rounded shadow p-2">
          <div className="pb-6">
            <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Current Password</label>
            <div className="flex">
              <input disabled id="current-passsword" className="border-1  rounded-r px-4 py-2 w-full" type="text" value="Please enter your current password" />
            </div>
          </div>
          <div className="pb-6">
            <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">New Password</label>
            <div className="flex">
              <input disabled id="new-passsword" className="border-1  rounded-r px-4 py-2 w-full" type="text" value="Please enter new password" />
            </div>
          </div>
          <div className="pb-4">
            <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Confirm New Password</label>
            <input disabled id="confirm-new-password" className="border-1  rounded-r px-4 py-2 w-full" type="email" value="Please enter new password again" />
            {/* <span className="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span> */}
          </div>
          <div className="flex justify-between pt-4">
          <a href="#" className="text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Change Password</a>
        </div>
        </div>
      </motion.div>
    </div>
  </div>
 );
};

export default AdminProfile;