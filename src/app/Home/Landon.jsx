
import  ParticleComponent from "./ParticleComponent";
import OurServices from "../pages/services";
import Usercustomers from "../pages/customers";
import ProjectPage from "../pages/project";
import Userfaqs from "../pages/faqs";
import Userfooter from "../pages/footer";

export default function Landon() {
  return (
    <div className="block">
      <div className="relative m-10 md:flex gap-5 md:mx-36">
        <div className="my-6">
          <p>Techers</p>
          <h1 className="text-skyBlue text-3xl font-bold my-5 md:text-4xl">
            We're Creative Digital Agency
          </h1>

          <p className="text-gray-500">
            We have your digital solution on web design, mobile app development,
            SEO, branding & digital marketing
          </p>
          <div className="my-5">
            <button className="bg-skyBlue text-white px-4 py-2 rounded hover:bg-skyBlue-darkened duration-500 mr-3">
              Get a proposal
            </button>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 duration-500">
              Portfolio
            </button>
          </div>
        </div>

        <div className="m-4">
        <ParticleComponent />
        </div>
      </div>

      {/* Separating div with class sm-scrollbar */}
      <div className="">
        <div>
          <OurServices />
        </div>
        <div>
          <ProjectPage/>
        </div>
        <div className="">
          <Usercustomers />
        </div>
        <div>
          <Userfaqs />
        </div>
        <div>
          <Userfooter/>
        </div>
      </div>
    </div>
  );
}