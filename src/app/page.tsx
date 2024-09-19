import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-gray-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/1.JPG" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        Hy luxury house 3 Bedroom 2 Bathroom 1 Large living room 1OpenKitchen and 2car Grage good condation House.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Home
        </div>
        <div className="text-slate-700 dark:text-slate-500">
        Los angles califonia Street no.2 Code:21537.
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page