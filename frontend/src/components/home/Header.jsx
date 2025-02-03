import React from "react";
import Logout from "../Logout";

const Header = () => {
  return (
    <header className="w-full py-6 px-10 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          {/* Bank Logo Placeholder */}
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            <image
              href="https://img.icons8.com/?size=100&id=G7aypYM0Cvnn&format=png&color=000000"
              width="24"
              height="24"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
          Webnovel
        </h1>
      </div>
    </header>
  );
};

export default Header;
