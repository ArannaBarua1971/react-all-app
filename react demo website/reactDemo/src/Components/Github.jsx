import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="relative h-[400px] w-[300px] rounded-md mx-auto">
        <img
          src={data.avatar_url}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{data.name}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Follower : {data.followers}
          </p>
          <a href={data.html_url} target="_blank" className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </a>
        </div>
      </div>
    </div>
  );
}

export const githubInfo = async () => {
  let res = await fetch("https://api.github.com/users/ArannaBarua1971");
  return res.json();
};
