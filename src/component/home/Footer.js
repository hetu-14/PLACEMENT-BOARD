import { footerLinks, socialMedia } from "../constants/index"

const Footer = () => {
    return (
        <footer className=" bg-black">
            <div className=" flex justify-between items-center gap-20 flex-wrap max-lg:flex-col mx-7 my-10" >
                <div className="flex flex-col items-start my-10">
                    <a href="/">
                    </a>
                    <p className=" text-base leading-7 font-montserrattext-white sm:max-w-sm text-white ">
                        Get Shoes ready for the new term at your nearest Nike store.Find your perfect size In store.Get Rewards
                    </p>
                    <div className="flex items-center gap-5">
                        {socialMedia.map((icon) => (
                            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">


                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap my-28">
                    {footerLinks.map((section) => (
                        <div key={section}>
                            <h4 className="text-white font-monterrat text-2xl leading-normal font-medium mb-6">
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-gray-400 cursor-pointer"
                                        key={link.name}>
                                        <a>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
                    <img
                        src="/images/copyright.svg"
                        alt="copy right"
                        width={20}
                        height={20}
                        className="rounded-full m-0" />
                    <p>© 2023 LDRP-ITR. All rights reserved </p>
                </div>
                <p className="cursor-pointer">
                    Terms&Conditions
                </p>
            </div>
        </footer>
    )
}

export default Footer