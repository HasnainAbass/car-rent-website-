function Footer(){
    return(
        <main>
            <footer className="h-[650px]  md:h-[550px] max-w-[1440px] mx-auto">
                {/*inner 1st box */}
                <div className="h-[800px] sm:h-[500px] md:h-[370px] lg:h-[414px] max-w-[1320px] flex-wrap flex items-end justify-evenly lg:justify-between lg:px-10">
                     {/* div 01 */}
                   <div className="h-[108px] md:h-[300px] w-[500px] sm:w-[680px] sm:ml-8 md:ml-0  md:w-[292px]">
                    <ul className="h-[108px] w-[292px] flex flex-col justify-between">
                        <li className="text-3xl font-semibold text-[#3563E9] ">MORENT</li>
                        <li className="text-neutral-500">Our vision is to provide convenience and help increase your sales business.</li>
                    </ul>
                   </div>
                   {/* div 02 */}
                    <div className="h-[244px] sm:h-[300px] lg:h-[300px] w-[500px] sm:w-[182px] lg:w-[384px] flex md:justify-end">
                        <ul className="h-[244px] w-[152px] flex flex-col justify-between text-xl text-neutral-500">
                            <li className="font-semibold text-black">About</li>
                            <li>How it works</li>
                            <li>Featured</li>
                            <li>Partnership</li>
                            <li>Bussiness Relation</li>
                        </ul>
                    </div>
                    {/* div 03 */}
                    <div className="h-[300px] w-[240px] sm:w-[182px]  md:w-[152px]">
                    <ul className="h-[244px] w-[152px] flex flex-col justify-between text-xl text-neutral-500">
                            <li className="font-semibold text-black">Community</li>
                            <li>Events</li>
                            <li>Blog</li>
                            <li>Podcast</li>
                            <li>Invite a friend</li>
                        </ul>
                    </div>
                    {/* div 04 */}
                    <div className="h-[300px] w-[240px] sm:w-[172px] md:w-[100px] lg:w-[112px] flex justify-end">
                    <ul className="h-[244px] w-[100px] md:w-[152p] lg:w-[112px] flex flex-col justify-between text-xl text-neutral-500">
                            <li className="font-semibold text-black">Socials</li>
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
                <hr />
                {/*inner 2nd box */}
                    <ul className=" h-[130px] max-w-[1320px] mx-auto text-xl  flex flex-wrap items-center justify-between">
                        <li className="w-[500px]">©2022 MORENT. All rights reserved</li>
                        <li className="flex gap-20">
                            <p>Privacy & Policy</p>
                            <p>Terms & Condition</p>
                        </li>
                    </ul>
            </footer>
        </main>
    )
}

export default Footer;