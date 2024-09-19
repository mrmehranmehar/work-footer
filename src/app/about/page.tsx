import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <figure className="md:flex bg-gray-600 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/111.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hy i am Mehran Nice Colloge First year Student.I am online Work Facbook markting usa.Usa House Dealer Craglist and Amazon Fba Seller.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black-900 dark:text-sky-400">
        Mr Mehran
      </div>
      <div className="text-black-700 dark:text-slate-500">
        Fb Marketing.Amazon Fba Seller.
      </div>
    </figcaption>
  </div>
</figure>

    </div>
  )
}

export default page