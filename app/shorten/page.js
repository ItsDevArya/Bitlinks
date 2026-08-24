"use client";

import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })

      .catch((error) => console.error(error));
  };

  const copyURL = async () => {
    await navigator.clipboard.writeText(generated);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-lg my-16 p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-3xl tracking-tight text-gray-900">
          Generate Short URLs
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Turn long URLs into simple, shareable links.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-700">
            Original URL
          </label>

          <input
            type="text"
            value={url}
            className="px-4 py-3 rounded-xl border border-gray-300 bg-white shadow-sm transition-all duration-200 focus:outline-none focus:border-gray-500 focus:ring-4 focus:ring-gray-200 hover:border-gray-400"
            placeholder="https://example.com/your-long-url"
            onChange={(e) => {
              seturl(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-700">
            Custom Short URL
          </label>

          <input
            type="text"
            value={shorturl}
            className="px-4 py-3 rounded-xl border border-gray-300 bg-white shadow-sm transition-all duration-200 focus:outline-none focus:border-gray-500 focus:ring-4 focus:ring-gray-200hover:border-gray-400"
            placeholder="my-link"
            onChange={(e) => {
              setshorturl(e.target.value);
            }}
          />
        </div>

     <button
  onClick={generate}
  className="group relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 border border-gray-900 transition-all duration-200 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 p-3 py-3 font-bold text-white"
>
  <span className="relative z-10">
    Generate Short URL →
  </span>
</button>
      </div>

      {generated && (
        <div className="mt-2 rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-sm text-gray-700">
              Your short URL
            </span>

            <button
              onClick={copyURL}
              className="p-2 rounded-lg border border-gray-200 bg-gray-50
        hover:bg-gray-100 hover:border-gray-300
        transition-all duration-200"
              title="Copy URL"
            >
              {copied ? (
                <span className="text-sm font-semibold text-gray-700">✓</span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 7.5V6.75A2.25 2.25 0 0110.5 4.5h6.75a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25h-.75M13.5 19.5H6.75A2.25 2.25 0 014.5 17.25V10.5a2.25 2.25 0 012.25-2.25h6.75a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25z"
                  />
                </svg>
              )}
            </button>
          </div>

          <code className="block rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5">
            <Link
              target="_blank"
              href={generated}
              className="text-gray-700 hover:text-black underline underline-offset-2 break-all transition"
            >
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  );
};

export default Shorten;
