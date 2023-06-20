"use client";

import axios from "axios";
import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

interface FormProps {
  merchantId: string | undefined;
  ownerName: string | undefined;
}

const Form: React.FC<FormProps> = ({ merchantId, ownerName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      merchantId: merchantId,
      ownerName: ownerName,
      productName: "",

      category: "",
      price: "",
    },
  });

  const productImage = watch("image");

  const changeBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = () => {
        reject(fileReader.error);
      };
    });
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    let file = e.target.files[0];
    const base64 = await changeBase64(file);
    setImage(base64 as any);
  };

  

  const onClick: SubmitHandler<FieldValues> = (data) => {
    
    setIsLoading(true);
    axios
      .post("/api/products", {
        ...data,
        image: image
      })
      .then(() => {
        toast.success("Your Product is added!");
      })
      .catch((error) => toast.error("Something went Wrong"))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="flex w-full lg:justify-center lg:items-center">
      <div className="bg-gray-500/5 p-5 w-full lg:w-[60%] rounded-lg flex flex-col space-y-5 shadow-lg">
        <div>
          <label className="text-lg font-semibold">Product Name: </label>
          <input
          {...register('productName')}
            disabled={isLoading}
            className="w-full rounded-md my-2"
            type="text"
          />
        </div>
        <div>
          <label className="text-lg font-semibold">Price: </label>
          <input
            disabled={isLoading}
            className="w-full rounded-md my-2"
            {...register('price')}
            type="number"
          />
        </div>
        <div>
          <label className="text-lg font-semibold">Product Image </label>
          <input
            disabled={isLoading}
            className="w-full my-2"
            type="file"
            onChange={(e) => uploadImage(e)}
          />
        </div>
        <div>
          <label className="text-lg font-semibold"> </label>
          <select
            disabled={isLoading}
            className="w-full my-2"
            {...register("category")}
          >
            <option>Groceries</option>
          </select>
        </div>
        <button
          onClick={handleSubmit(onClick)}
          className="bg-lightGreen py-2 rounded-full text-white hover:bg-opacity-80"
        >
          {isLoading ? "Loading... " : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default Form;
