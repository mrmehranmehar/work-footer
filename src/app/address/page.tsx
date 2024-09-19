import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <figure className="md:flex bg-green-600 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/Ryk.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Rahim Yar Khan region was part of Multan province of Mughal Empire.[4] In 1881, Nawab of Bahawalpur gave the city its current name by naming it after his first born son and crown prince Rahim Yar Khan.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-Black-800 dark:text-sky-400">
        City Name.
      </div>
      <div className="text-black-700 dark:text-slate-500">
        Rahim yar Khan.
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default page