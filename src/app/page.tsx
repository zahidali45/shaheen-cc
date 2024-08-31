import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/zahid.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        "Shaheen CC is a new team of Rahim yar Khan who has made a name for himself in a short span of time and this team will be playing matches with Rahimyar Khan's teams in the near future and will have many successes which has made him  has achieved a lot of success in a short period of time, so inshallah it will do well in the coming time as well and the second thing is that all the boys who are playing in this team are all new talents and all of them have new blood and this is a  The team runs under an effort led."
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          SHAHEEN CC RUKNPUR
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Shaheen CC Ruknpur
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page