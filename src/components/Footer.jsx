import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <footer class="bg-white shadow-sm  dark:bg-gray-800">
        <div class="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" class="hover:underline">MovieMate</Link>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">LinkedIn</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Youtube</a>
            </li>
            <li>
                <a href="#" class="hover:underline">GitHub</a>
            </li>
        </ul>
        </div>
    </footer>

  )
}

export default Footer
