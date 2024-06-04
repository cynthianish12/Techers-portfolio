import Image from "next/image";

export default function Descr() {
    return (
        <div className="flex m-[4rem] space-x-[5rem] ">
            <div>
                <h2 className="text-[2rem] ">About Company</h2>
                <p>Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻<br />
                意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅<br />
                延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着<br />
                Lorem Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方<br />
                式使Lorem Ipsum落入大众的视野。</p>
                <></>
                <p>Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了<br />
                一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，<br />
                还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem Ipsum段落的纸张，从<br />
                而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”<br />
                也通过同样的方式使Lorem Ipsum落入大众的视野。</p>
            </div>
            <div>
                <Image
                className="h-[30rem] w-[30rem] "
                src={"/pic.png"}
                alt={"pics to..."}
                width={300}
                height={300}
                />
            </div>
        </div>
    )
}