import Member from "../components/Member";

export default function Team() {
    return(
        <div className="mt-[2rem] flex flex-col items-center">
            <div className="text-center space-y-[2rem]">
                <h1 className="text-[2.5rem]">Meet the team</h1>
                <p>
                    Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻<br />
                    意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅<br />
                    延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着<br />
                    Lorem Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方<br />
                    式使Lorem Ipsum落入大众的视野。
                </p>
            </div>
            <div className="flex justify-center mx-[5rem] space-x-[8rem]">
                <Member
                    src={"/785a1b9c359640da6bc9cfe3670b42ba.jpg"}
                    name="Asimwe Landry"
                    role="Senior Front-end dev"
                />
                <Member
                    src={"/785a1b9c359640da6bc9cfe3670b42ba.jpg"}
                    name="Asimwe Landry"
                    role="Senior Front-end dev"
                />
                <Member
                    src={"/785a1b9c359640da6bc9cfe3670b42ba.jpg"}
                    name="Asimwe Landry"
                    role="Senior Front-end dev"
                />
                <Member
                    src={"/785a1b9c359640da6bc9cfe3670b42ba.jpg"}
                    name="Asimwe Landry"
                    role="Senior Front-end dev"
                />
                                <Member
                    src={"/785a1b9c359640da6bc9cfe3670b42ba.jpg"}
                    name="Asimwe Landry"
                    role="Senior Front-end dev"
                />

            </div>
        </div>
    )
}
