import Link from 'next/link'
import React from 'react'

export default function Btn() {
  return (
    <div>
           <div className="mt-6 text-center md:ml-6">
              <Link
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                rel="noreferrer"
                href="/#vsl"
              >
                <span className="flex justify-center">Começar</span>
              </Link>
              <br className="sm:hidden" />
            
            </div>
    </div>
  )
}
