import React from "react";

export default function Layout({ children }) {
  return (
    <div className="mx-auto h-screen">
      <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-blue-900 h-2/4">
        {children}
      </div>
    </div>
  );
}
