'use client'
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
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

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7">Contact Information</h2>
            <p className="mt-1 text-sm leading-6">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="firstName" className="block text-sm font-medium leading-6">First name</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none focus:ring-gray-500 sm:text-sm sm:leading-6"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="lastName" className="block text-sm font-medium leading-6">Last name</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none focus:ring-gray-500 sm:text-sm sm:leading-6"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6">Email address</label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none focus:ring-gray-500 sm:text-sm sm:leading-6"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="mobile" className="block text-sm font-medium leading-6">Phone Number</label>
                <div className="mt-2">
                  <input
                    id="mobile"
                    name="mobile"
                    autoComplete="phone number"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none focus:ring-gray-500 sm:text-sm sm:leading-6"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6">Country</label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none focus:ring-gray-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="streetAddress" className="block text-sm font-medium leading-6">Street address</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none focus:ring-gray-500 sm:text-sm sm:leading-6"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6">City</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none focus:ring-gray-500 sm:text-sm sm:leading-6"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium leading-6">State / Province</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none focus:ring-gray-500 sm:text-sm sm:leading-6"
                    value={formData.region}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="postalCode" className="block text-sm font-medium leading-6">ZIP / Postal code</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none focus:ring-gray-500 sm:text-sm sm:leading-6"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
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
}
