import Image from "next/image"

export default function Pic() {
    return (
        <div>
            {/* <Image
            className=""
                src={'/arror.svg'}
                alt="arrow"
                layout="fill"
                objectFit="cover"
            /> */}
            <Image
                src={"/pic.png"}
                alt={"Company Image"}
                layout="fill"
                objectFit="cover"
            />
{/* 
            <Image
            className="rotate-180"
                src={'/arror.svg'}
                alt="arrow"
                layout="fill"
                objectFit="cover"
            /> */}

        </div>
    )
}