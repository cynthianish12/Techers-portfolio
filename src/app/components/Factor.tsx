import Image from "next/image"

export default function Factor({ src, desc }) {
  return (
    <div className="bg-white w-[24rem] h-[12rem] space-y-[2rem] rounded-[1rem] text-center flex flex-col items-center justify-center">
      <Image
        className="rounded-[50%] shadow-md "
        width={80}
        height={80}
        src={src}
        alt="factors"
      />
      <p>{desc}</p>
    </div>
  )
}
