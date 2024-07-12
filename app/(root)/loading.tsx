"use client"

import { Audio } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className=" flex justify-center items-center text-4xl">
      <Audio height="80" width="80" color="green" ariaLabel="loading" />
    </div>
  );
}
