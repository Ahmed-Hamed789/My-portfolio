"use client"; // Ensure this file is treated as a Client Component

import './page.css'; // Import the Tailwind CSS file

export default function ContactPage() {
  return (
    <div className="contact-container">
      <h1 className="text-4xl font-bold text-white">Contact Me</h1>
      <div className="contact-details">
        <div className="detail-item">
          <h2 className="text-xl font-semibold text-white">Email</h2>
          <p className="text-white">Ahmedhamed12122002@gmail.com</p>
        </div>
        <div className="detail-item">
          <h2 className="text-xl font-semibold text-white">Phone Number</h2>
          <p className="text-white">+20 155 339 9731</p>
        </div>
        <div className="detail-item">
          <h2 className="text-xl font-semibold text-white">Country</h2>
          <p className="text-white">Egypt</p>
        </div>
        <div className="detail-item">
          <h2 className="text-xl font-semibold text-white">City, Street, Area</h2>
          <p className="text-white">Alexandria, El lewaa ahmed ali, Smouha</p>
        </div>
        <div className="detail-item">
          <h2 className="text-xl font-semibold text-white">GitHub</h2>
          <a href="https://github.com/Ahmed-Hamed789" className="text-teal hover:underline">GitHub Profile </a>
        </div>
        <div className="detail-item">
          <h2 className="text-xl font-semibold text-white">University Info</h2>
          <p className="text-white"> Bachelor of Science in Computer Science , Software Engineering</p>
          <p className="text-white"> Alamein International University , New Alamein City ,Egypt</p>
        </div>
      </div>
    </div>
  );
}
