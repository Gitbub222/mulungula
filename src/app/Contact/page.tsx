'use client'
import { useState } from "react";
import countriesData from "./../../../public/countries.json";
import { DataStore } from '@aws-amplify/datastore';
import { ContactInfo } from '../../models/models'; // Adjust the import path based on your project structure

export default function Home() {
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "United States",
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const validationErrors = validateForm();
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        await DataStore.save(
          new ContactInfo({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            mobile: formData.mobile,
            country: formData.country,
            streetAddress: formData.streetAddress,
            city: formData.city,
            region: formData.region,
            postalCode: formData.postalCode,
          })
        );
        console.log("Form submitted successfully");
      } catch (error) {
        console.error("Error saving form data:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Phone number is required";
    if (!formData.streetAddress) newErrors.streetAddress = "Street address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.region) newErrors.region = "State/Province is required";
    if (!formData.postalCode) newErrors.postalCode = "ZIP/Postal code is required";

    return newErrors;
  };

  const { countries }: any = countriesData;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7">Contact Information</h2>
            <p className="mt-1 text-sm leading-6">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {renderInputField("firstName", "First name", "given-name")}
              {renderInputField("lastName", "Last name", "family-name")}
              {renderInputField("email", "Email address", "email", "email")}
              {renderInputField("mobile", "Phone Number", "phone number")}
              {renderSelectField("country", "Country", countries)}
              {renderInputField("streetAddress", "Street address", "street-address")}
              {renderInputField("city", "City", "address-level2")}
              {renderInputField("region", "State / Province", "address-level1")}
              {renderInputField("postalCode", "ZIP / Postal code", "postal-code")}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );

  function renderInputField(name: any, label: any, autoComplete: any, type: any = "text") {
    return (
      <div className="sm:col-span-3">
        <label htmlFor={name} className="block text-sm font-medium leading-6">{label}</label>
        <div className="mt-2">
          <input
            type={type}
            name={name}
            id={name}
            autoComplete={autoComplete}
            className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
              errors[name] ? "ring-red-600 focus:ring-red-600" : "ring-gray-300 focus:ring-indigo-600"
            }`}
            value={formData[name]}
            onChange={handleChange}
          />
          {errors[name] && <p className="mt-2 text-sm text-red-600">{errors[name]}</p>}
        </div>
      </div>
    );
  }

  function renderSelectField(name: any, label: any, options: any) {
    return (
      <div className="sm:col-span-3">
        <label htmlFor={name} className="block text-sm font-medium leading-6">{label}</label>
        <div className="mt-2">
          <select
            id={name}
            name={name}
            autoComplete={name}
            className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
              errors[name] ? "ring-red-600 focus:ring-red-600" : "ring-gray-300 focus:ring-indigo-600"
            }`}
            value={formData[name]}
            onChange={handleChange}
          >
            {options.map((option: any, index: any) => (
              <option key={index} value={option.name}>{option.name}</option>
            ))}
          </select>
          {errors[name] && <p className="mt-2 text-sm text-red-600">{errors[name]}</p>}
        </div>
      </div>
    );
  }
}
