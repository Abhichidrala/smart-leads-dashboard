"use client";

import { useEffect, useState } from "react";

interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
  source: string;
}

export default function DashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [leadStatus, setLeadStatus] = useState("New");
  const [leadSource, setLeadSource] = useState("Website");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [search, status, source, page]);

  const fetchLeads = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/leads?search=${search}&status=${status}&source=${source}&page=${page}`
      );

      const data = await response.json();

      setLeads(data.leads);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const createLead = async () => {
    try {
      await fetch("http://localhost:5000/api/leads", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          status: leadStatus,
          source: leadSource,
        }),
      });

      fetchLeads();

      setName("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLead = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/api/leads/${id}`, {
        method: "DELETE",
      });

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Smart Leads Dashboard
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6 flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          className="border p-3 rounded-lg"
          value={leadStatus}
          onChange={(e) => setLeadStatus(e.target.value)}
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
        </select>

        <select
          className="border p-3 rounded-lg"
          value={leadSource}
          onChange={(e) => setLeadSource(e.target.value)}
        >
          <option value="Website">Website</option>
          <option value="Instagram">Instagram</option>
          <option value="Referral">Referral</option>
        </select>

        <button
          onClick={createLead}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Add Lead
        </button>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Search"
          className="border p-3 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-lg"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
        </select>

        <select
          className="border p-3 rounded-lg"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        >
          <option value="">All Sources</option>
          <option value="Website">Website</option>
          <option value="Instagram">Instagram</option>
          <option value="Referral">Referral</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Source</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {leads.length > 0 ? (
              leads.map((lead) => (
                <tr
                  key={lead._id}
                  className="border-b"
                >
                  <td className="p-4">{lead.name}</td>

                  <td className="p-4">{lead.email}</td>

                  <td className="p-4">{lead.status}</td>

                  <td className="p-4">{lead.source}</td>

                  <td className="p-4">
                    <button
                      onClick={() => deleteLead(lead._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center p-8 text-gray-500"
                >
                  No Leads Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-black text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
        >
          Prev
        </button>

        <span className="flex items-center font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="bg-black text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}