import React from "react";

const ContactUs = () => {
  return (
    <div className="pl-16 pr-16 pt-28 z-0">
      <h1 className="font-bold text-red-600">ContactUs</h1>
      <form>
        <input
          className="border border-black m-3 p-3 rounded"
          placeholder="name"
          type="text"
        />
        <br />
        <input
          className="border border-black m-3 p-3 rounded"
          placeholder="Message"
          type="text"
        />
        <br />
        <button className="border border-black m-3 p-3 rounded bg-gray-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
