import React from 'react'

// Example in React (JSX)
// src/App.jsx
const HelpSection = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 p-8">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-300">Help Section</h2>

      <h3 className="text-2xl font-semibold mb-4">FAQ</h3>
      <ul className="space-y-4">
        <li className="bg-green-900 p-4 rounded-lg">
          <strong className="text-lg">What is HACKTOBER 2024?</strong>
          <p className="mt-2">
          Hacktoberfest is a month-long event in October that encourages Open Source contributors and developers worldwide to give back to the global tech community
          </p>
        </li>
        <li className="bg-green-900 p-4 rounded-lg">
          <strong className="text-lg">How can I join HACKTOBER 2024?</strong>
          <p className="mt-2">
            To join, simply register through our official website and choose the challenges you want to participate in.
          </p>
        </li>
        <li className="bg-green-900 p-4 rounded-lg">
          <strong className="text-lg">Do I need prior experience?</strong>
          <p className="mt-2">
            No, Hacktober 2024 is open to everyone, from beginners to experienced developers.
          </p>
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-10 mb-4">Hacktober 2024 Event Details</h3>
      <p className="bg-green-900 p-4 rounded-lg">
        <strong>Date:</strong> October 1 - October 31, 2024<br />
        <strong>Location:</strong> Virtual and On-site <br />
        <strong>Prizes:</strong> Winners will receive tech gadgets, gift vouchers, and internship opportunities. <br />
        <strong>How to Participate:</strong>  Register at the official Hacktoberfest website, contribute to open-source projects, and complete the required number of pull requests to earn rewards.  
      </p>

      <h3 className="text-2xl font-semibold mt-10 mb-4">Registration Process</h3>
      <ol className="list-decimal list-inside bg-green-900 p-4 rounded-lg space-y-2">
        <li>Visit the official website at <a href="https://hackathon2024.com" className="text-green-300 underline">hackathon2024.com</a>.</li>
        <li>Click on "Register Now" and fill out the registration form.</li>
        <li>Choose your preferred challenges and submit your team details.</li>
        <li>Once registered, you will receive a confirmation email with further instructions.</li>
      </ol>
    </div>
  );
};

export default HelpSection;

