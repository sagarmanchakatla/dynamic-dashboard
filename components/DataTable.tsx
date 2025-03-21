// "use client";
import { useState } from "react";

const DataTable = ({ data }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const filteredData = data.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Title</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post.id}>
              <td className="border p-2">{post.id}</td>
              <td className="border p-2">{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        {Array.from(
          { length: Math.ceil(filteredData.length / postsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className="p-2 border"
              disabled={currentPage === i + 1}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default DataTable;
