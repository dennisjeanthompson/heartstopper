import React, { useState, useEffect, useRef } from "react";
import jumpscareImage from "./assets/jumpscareImage.jpg";
import jumpscareSound from "./assets/jumpscareSound.mp3";

function Content() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isJumpscareVisible, setIsJumpscareVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const image = new Image();
    image.src = jumpscareImage;
    image.onload = () => {
      setIsImageLoaded(true);
    };
    audioRef.current = new Audio(jumpscareSound);
    audioRef.current.loop = true; // Make the sound loop infinitely
  }, []);

  const handleClick = () => {
    if (!isJumpscareVisible && isImageLoaded) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsJumpscareVisible(true);
    }
  };

  return (
    <>
      {isJumpscareVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <img
            src={jumpscareImage}
            alt="Jumpscare"
            className="h-screen w-screen object-cover"
          />
        </div>
      )}
      {!isJumpscareVisible && (
        <div className="h-screen w-full flex items-center justify-center bg-[#e5e5e5]" style={{ cursor: 'pointer' }}>
          <div className="bg-white shadow-xl border border-gray-300 mx-4 max-w-2xl w-full px-10 py-12 flex flex-col items-center relative font-serif" style={{ minHeight: '80vh', maxWidth: 700, borderRadius: '8px' }}>
            {/* Resume Header */}
            <div className="w-full flex flex-col items-center border-b border-gray-300 pb-4 mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Dennis R. Santos</h1>
              <span className="text-gray-600 text-base">📍 Quezon City, Metro Manila</span>
              <span className="text-gray-500 text-sm mt-1">📱 0917-654-3281 &bull; ✉️ abbasing13@gmail.com</span>
            </div>
            {/* Download PDF Button */}
            <button
              onClick={handleClick}
              className="mb-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition-colors flex items-center gap-2 print:hidden"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 12l-4-4m4 4l4-4m-8 8h8a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z" />
              </svg>
              Download PDF
            </button>
            {/* Resume Sections */}
            <div className="w-full text-[15px]">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 mb-1">Career Objective</h2>
                <p className="text-gray-700 leading-relaxed">
                  Fresh graduate with a Bachelor of Science in Psychology, eager to begin a career in the BPO industry. Highly motivated, adaptable, and skilled in communication and problem-solving. Seeking an opportunity to apply interpersonal skills and contribute to a dynamic customer service team.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 mb-1">Education</h2>
                <div className="flex flex-col gap-1">
                  <div>
                    <span className="font-semibold">Central Colleges of the Philippines – Quezon City</span><br/>
                    Bachelor of Science in Psychology<br/>
                    <span className="text-gray-500 text-xs">Graduated: 2025</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 mb-1">Internship / Experience</h2>
                <div className="flex flex-col gap-1">
                  <div>
                    <span className="font-semibold">University Practicum – Psychology Department</span><br/>
                    <span className="text-gray-500 text-xs">Jan 2025 – Apr 2025</span>
                  </div>
                  <ul className="list-disc ml-6 text-gray-700">
                    <li>Assisted in basic HR and counseling-related tasks.</li>
                    <li>Conducted interviews and surveys for research and documentation.</li>
                    <li>Supported administrative functions such as data encoding and filing.</li>
                    <li>Gained experience in handling sensitive information with confidentiality.</li>
                  </ul>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 mb-1">Skills</h2>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-700 list-disc ml-6">
                  <li>Strong verbal and written communication</li>
                  <li>Customer service orientation</li>
                  <li>Conflict resolution and problem-solving</li>
                  <li>Adaptable to fast-paced environments</li>
                  <li>Computer literate (MS Office, Google Workspace)</li>
                  <li>Active listening and empathy skills</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 mb-1">Achievements & Activities</h2>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Dean’s Lister (if applicable)</li>
                  <li>Member, Psychology Society (CCP)</li>
                  <li>Participated in university-led seminars and training workshops</li>
                  <li>Volunteer in community outreach programs (mental health awareness campaigns)</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 mb-1">References</h2>
                <p className="text-gray-700">Available upon request.</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-0 w-full flex flex-col items-center">
              <span className="text-gray-400 text-xs mb-2">This is a sample resume PDF. Click the download button or anywhere to continue.</span>
             
              <a
               
                className="hover:scale-110 active:scale-95 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  height="24px"
                  width="24px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>github [#142]</title> <desc>Created with Sketch.</desc>
                    <defs> </defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        fill="#222"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[#142]"
                          >
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          {/* Make the whole area clickable for jumpscare */}
          <div className="absolute inset-0" style={{ zIndex: 1 }} onClick={handleClick}></div>
        </div>
      )}
  </>
  );
}
export default Content;
