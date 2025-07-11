import React from "react";
export default function Footer() {
  return (
    <div className="mt-12 space-y-4 text-white text-sm flex flex-col items-center">
      <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/20 shadow-md hover:shadow-cyan-500/30 transition-all duration-300">
        <a
          className="font-semibold hover:"
          href="https://www.sumit.sbs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me
        </a>
      </div>

      <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/20 shadow-md hover:shadow-cyan-500/30 transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white/80"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.92.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.69-3.88-1.54-3.88-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.74 2.67 1.23 3.32.94.1-.74.4-1.23.73-1.51-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.96 10.96 0 012.86-.39c.97 0 1.95.13 2.86.39 2.18-1.5 3.13-1.18 3.13-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.45-2.68 5.43-5.24 5.71.41.35.78 1.04.78 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.79.54A10.502 10.502 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
        </svg>
        <a
          className="font-semibold hover:"
          href="https://github.com/SUMITDROY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute on GitHub
        </a>
      </div>
    </div>
  );
}
