import React from "react";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 mt-15 p-5">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <Link
          to="/"
          className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-600"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
}
