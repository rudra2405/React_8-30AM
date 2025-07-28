import React from "react";

export default function ContainerApp() {
  return (
    <>
      <div className="container mx-auto  p-5 mt-5 rounded-lg shadow-lg bg-yellow-600">
        <h1 className="text-3xl font-bold text-center text-dark mb-5">
          Tailwind CSS with React
        </h1>
      </div>
      <div className="container mx-auto p-5 mt-5 rounded-lg shadow-lg bg-blue-600">
        <h2 className="text-2xl font-semibold text-center text-white mb-3">
          Welcome to the Tailwind CSS Demo
        </h2>
        <p className="text-center text-white">
          This is a simple demonstration of using Tailwind CSS with React.
        </p>
      </div>

      <div class="flex container w-1/3 mt-3 bg-amber-200 mx-auto flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img
          class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNpesKuUBSdDNBqxXMrkg4uEkWptXY5tnCQ&s"
          alt=""
        />
        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">Erin Lindford</p>
            <p class="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 border-amber-200 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div>

      <div class="container mx-auto mt-5 max-w-md p-8 bg-green-200 rounded-lg shadow-lg">
        <div class="mx-auto  bg-mt-14 flex items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <img
            class="size-12 shrink-0"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNpesKuUBSdDNBqxXMrkg4uEkWptXY5tnCQ&s"
            alt="ChitChat Logo"
          />
          <div>
            <div class="text-xl font-medium text-black dark:text-white">
              ChitChat
            </div>
            <p class="text-gray-500 dark:text-gray-400">
              You have a new message!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
