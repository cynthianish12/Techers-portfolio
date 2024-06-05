import Descr from "../components/Descr";
import Factor from "../components/Factor";

export default function Factors() {
    return (
        <div className="bg-gray-200 py-8 px-12">
            <div>
                <h1 className="text-blue-600 text-center text-3xl my-8">Our Unique Factors</h1>
            </div>
            <div className="flex justify-center space-x-8">
                <Factor
                    src="/factor.png"
                    desc="Innovative Solutions"
                />
                <Factor
                    src="/factor.png"
                    desc="Customer-Centric Approach"
                />
                <Factor
                    src="/factor.png"
                    desc="Experienced Team"
                />
                <Factor
                    src="/factor.png"
                    desc="Quality Assurance"
                />
            </div>
            <div className="mt-12">
            </div>
        </div>
    );
}
