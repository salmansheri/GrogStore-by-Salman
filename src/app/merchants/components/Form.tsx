"use client";

import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";
const Form = () => {
  const router = useRouter(); 
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      shopName: "",
      shopAddress: "",
      city: "",
    },
  });

  const onClick: SubmitHandler<FieldValues> = async (data) => {
   try {
    setIsLoading(true); 
    const response = await axios.post("/api/merchants", data); 
    const id = response.data.id; 
    toast.success("Congratulations! you are now a Merchant"); 
    router.push(`merchants/home/${id}`); 

   } catch(error: any) {
      toast.error("someting went wrong"); 
   } finally {
    setIsLoading(false); 

   }
  };

  return (
    <div className="w-[60%] border p-10 bg-gray-500/5 shadow-lg mt-5">
      <div>
        <label className="text-lg font-semibold">Name</label>
        <input
            {...register('name')}
          className="w-full my-2  "
          placeholder="Enter Your Name"
          type="text" disabled={isLoading}
        />
      </div>
      <div>
        <label className="text-lg font-semibold">Email</label>
        <input
            {...register('email')}
          className="w-full my-2"
          placeholder="Enter Your Email"
          type="text" disabled={isLoading}
        />
      </div>
      <div>
        <label className="text-lg font-semibold">Shop name</label>
        <input
            {...register('shopName')}
          className="w-full my-2"
          placeholder="Enter Your Shop Name"
          type="text" disabled={isLoading}
        />
      </div>
      <div>
        <label className="text-lg font-semibold">Shop Address</label>
        <input
            {...register('shopAddress')}
          className="w-full my-2"
          placeholder="Enter Your Shop Address"
          type="text" disabled={isLoading}
        />
      </div>
      <div>
        <label className="text-lg font-semibold">City</label>
        <select {...register('city')} className="w-full my-2" defaultValue="Bangalore" disabled={isLoading}>
          <option>Please Select Your City</option>
          <option value="bangalore">Bangalore</option>
          <option value="chennai">Chennai</option>
          <option value="krishnagiri">Krishnagiri</option>
        </select>
      </div>
      <button onClick={handleSubmit(onClick)} className="bg-lightGreen px-4 py-2 rounded-full mt-5 text-white">
        {isLoading ? "Loading... " : "Continue"}
      </button>
    </div>
  );
};

export default Form;
