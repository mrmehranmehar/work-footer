import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <figure className="md:flex bg-blue-900 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/123.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hy my email Name:MrAhadMehar890@gmail.com and other details etc.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black-500 dark:text-sky-400">
        Email Name.
      </div>
      <div className="text-Black-700 dark:text-slate-500">
      MrAhadMehar890@gmail.com
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default page