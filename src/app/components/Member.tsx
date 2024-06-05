import Image from "next/image";

export default function Member({ src, name, role }) {
    return(
        <div className="text-center ">
            <Image
            className="rounded-tl-[50%] mb-[2rem] rounded-br-[50%] rounded-tr-[50%] shadow-lg "
            width={200}
            height={200}
            src={src}
            alt=" member description "
            />
            <h2 className="text-[1.25rem]" >{ name }</h2>
            <p className="text-[1rem] text-gray-700 " >{ role }</p>
        </div>
    )
}