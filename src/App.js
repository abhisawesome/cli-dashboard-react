import React from 'react';

const App = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lightweight Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Metric 1</h2>
          <p className="text-4xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Metric 2</h2>
          <p className="text-4xl font-bold text-green-600">5,678</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Metric 3</h2>
          <p className="text-4xl font-bold text-purple-600">9,012</p>
        </div>
      </div>
    </div>
  );
};

export default App;