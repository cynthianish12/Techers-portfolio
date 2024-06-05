import Member from "../../components/Member";

export default function Team() {
    return (
        <div className="mt-[2rem] mb-[5rem] space-y-[3rem] flex flex-col items-center">
            <div className="text-center space-y-[2rem]">
                <h1 className="text-[2.5rem]">Meet the Team</h1>
                <p className="max-w-[800px] mx-auto">
                    Our team is composed of skilled individuals dedicated to delivering exceptional results. With a diverse range of talents and expertise, we collaborate closely to ensure success in every project we undertake. From concept development to execution, we strive to exceed expectations and drive innovation. Our team members are passionate about their work, always seeking new challenges and opportunities for growth. Together, we create impactful solutions that make a difference.
                </p>
            </div>
            <div className="flex justify-center mx-[5rem] space-x-[8rem]">
                <Member
                    src={"/placeholder.jpeg"}
                    name="Asimwe Landry"
                    role="Senior Front-end Developer"
                />
                <Member
                    src={"/aimable.jpg"}
                    name="Aimable Kwizera"
                    role="Senior Back-end Developer"
                />
                <Member
                    src={"/cynthia.jpg"}
                    name="Nishimwe Cynthia Marie"
                    role="Project Manager"
                />
                <Member
                    src={"/IMG-20240404-WA0018.jpg"}
                    name="Dios Muneza"
                    role="UX/UI Designer"
                />
                <Member
                    src={"/picture.jpg"}
                    name="Aine Dushimire"
                    role="Front-End Dev"
                />
            </div>
        </div>
    );
}
