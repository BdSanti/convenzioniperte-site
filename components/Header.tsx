'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand - Sinistra */}
          <div className="shrink-0">
            <h1 className="text-xl font-bold text-blue-900">
              Convenzioni Per Te
            </h1>
          </div>

          {/* Link Navigazione - Centro (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#soluzioni-welfare"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Soluzioni Welfare
            </a>
            <a
              href="#per-i-partner"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Per i Partner
            </a>
            <a
              href="#vipsaving"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              VipSaving
            </a>
          </div>

          {/* Bottoni - Destra (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="#contatti"
              className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200"
            >
              Richiedi Demo
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Apri menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <a
                href="#soluzioni-welfare"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-900 rounded-md"
              >
                Soluzioni Welfare
              </a>
              <a
                href="#per-i-partner"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-900 rounded-md"
              >
                Per i Partner
              </a>
              <a
                href="#vipsaving"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-900 rounded-md"
              >
                VipSaving
              </a>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="space-y-2 px-3">
                <a
                  href="#contatti"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Richiedi Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
