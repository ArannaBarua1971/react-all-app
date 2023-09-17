import React from "react";

function Home() {
  return (
    <div
      className="w-full h-[700px] bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/006/852/804/non_2x/abstract-blue-background-simple-design-for-your-website-free-vector.jpg")`,
      }}
    >
      <section class="py-10 text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto w-full text-center md:max-w-2xl">
            <h2 class="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">
              Get full access to Platform
            </h2>
            <p class="mx-auto mt-4 max-w-xl text-base leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nesciunt eos facilis debitis voluptas iure consectetur odit fugit
              voluptate recusandae?
            </p>
          </div>
          <form action="#" method="POST" class="mx-auto mt-12 max-w-xl">
            <div class="flex flex-col items-center sm:flex-row sm:justify-center">
              <div class="flex w-full max-w-sm items-center space-x-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                  type="email"
                  placeholder="Email"
                />
                <button
                  type="button"
                  class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
          <div class="mt-8 flex items-center justify-center px-8 sm:px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 "
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span class="ml-2 text-sm">
              Your data is complely secured with us. We don&#x27;t share with
              anyone.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
