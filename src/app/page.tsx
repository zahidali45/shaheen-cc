import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/zahid.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        “شاہین سی سی رحیم یار خان کی ایک نئی ٹیم ہے جس نے کم وقت میں ہی ایفرٹ کر کے اپنا نام بنایا ہے اور یہ ٹیم انے والے وقت میں رحیم یار خان کی ٹیموں کے ساتھ میچز کھیلے گی اور بہت سی کامیابی حاصل کرے گی جس نے اس نے کم وقت میں بہت سی کامیابی حاصل کی ہے تو انشاءاللہ انے والے ٹائم میں بھی یہ اچھی افر کرے گی اور دوسری بات یہ کہ اس ٹیم میں کھیلنے والے جتنے بھی لڑکے ہیں سارے نئے ٹیلینڈر ہیں اور سب میں ہی نیا خون ہے اور یہ ایک ٹیم ایک ایفرٹ کے تحت چلتی ہے اس ٹیم کو چلانے والے کیپٹن محمد ارشد.”
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