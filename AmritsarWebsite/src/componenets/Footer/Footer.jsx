import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/places" className="hover:underline">
                    Top 10 Places
                  </Link>
                </li>
                <li>
                  <Link to="/food" className="hover:underline">
                    Food
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/travel" className="hover:underline">
                    Travel
                  </Link>
                </li>
                <li>
                  <Link to="/hotel" className="hover:underline">
                    Hotel
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024
            <a href="https://hiteshchoudhary.com/" className="hover:underline">
              exploreamritsar
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
