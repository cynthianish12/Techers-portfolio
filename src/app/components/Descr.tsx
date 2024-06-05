import Image from "next/image";
import Pic from "./Pic";

export default function Descr() {
    return (
        <div className="flex m-[4rem] space-x-[10rem] ">
            <div className="max-w-[800px] space-y-[2rem] ">
                <h2 className="text-[2rem]">About Our Company</h2>
                <p>At Techers Corp, we are dedicated to delivering cutting-edge solutions that empower businesses to thrive in the digital age. With a team of skilled professionals and a commitment to innovation, we specialize in developing custom software tailored to meet the unique needs and challenges of our clients. From web and mobile applications to enterprise solutions, our goal is to provide seamless and scalable technology solutions that drive growth and transformation. With a focus on quality, reliability, and customer satisfaction, we strive to exceed expectations and deliver tangible results that make a difference.</p>
                <></>
                <p>Our approach is centered on collaboration, transparency, and continuous improvement. We work closely with our clients to understand their goals and objectives, leveraging our technical expertise and industry insights to deliver solutions that align with their strategic vision. Whether you're a startup looking to launch a new product or an established enterprise seeking to modernize your systems, we're here to help you succeed. At Techers Corp, we're not just building software – we're building partnerships that last.</p>
            </div>
            <div className="relative h-[30rem] w-[35rem]">
                <Pic />
            </div>
        </div>
    );
}
