import { useState } from "react";

const SearchInput = ({ setSearchQuery }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto relative p-3">
      <input
        type="search"
        className="outline-none w-full p-4 ps-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for cities or airports."
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="submit"
        className="text-white absolute end-2.5 bottom-4 outline-none font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-search"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </button>
    </form>
  );
};

export default SearchInput;
