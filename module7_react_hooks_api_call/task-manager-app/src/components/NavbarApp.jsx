import React from "react";
import { Link } from "react-router-dom";
export default function NavbarApp() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link to="/" className="text-2xl font-bold">
          Task Manager App
        </Link>
        <ul className="flex flex-row space-x-10">
          <li>
            <Link to="/add-task" className="hover:underline">
              Add task
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
