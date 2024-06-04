import Descr from "../components/Descr";
import Factor from "../components/Factor";

export default function Factors() {
    return (
        <div className="bg-[#ccc] py-[0.5rem] px-[8rem] ">
            <div>
                <h1 className="text-[blue] text-center text-[3rem] my-[4rem] ">Company Unique Factor</h1>
            </div>
            <div className="flex space-x-[4rem] ">
                <Factor
                    src="/785a1b9c359640da6bc9cfe3670b42ba.jpg"
                    desc="unique factor 1"
                />
                <Factor
                    src="/785a1b9c359640da6bc9cfe3670b42ba.jpg"
                    desc="unique factor 1"
                />
                <Factor
                    src="/785a1b9c359640da6bc9cfe3670b42ba.jpg"
                    desc="unique factor 1"
                />
                <Factor
                    src="/785a1b9c359640da6bc9cfe3670b42ba.jpg"
                    desc="unique factor 1"
                />



            </div>
        </div>

    )
}