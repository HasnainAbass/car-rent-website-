import { Radar } from "lucide-react";
import Image from "next/image";
import { BiSolidCheckSquare } from "react-icons/bi";
import { BsFuelPumpFill } from "react-icons/bs";
import { FaRegCircleDot } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { RiHeart3Line } from "react-icons/ri";
function CategoryComponent() {
    return (
        <>
            <main className="h-[1700px] xl:h-[1600px] max-w-[1440px] mx-auto bg-[#F6F7F9] flex items-center justify-between">
                {/* Main left container */}
                <div className="hidden lg:block lg:h-[1700px] xl:h-[1600px] w-[360px] space-y-12 bg-white lg:pl-5">
                    {/* inner box 1 */}
                    <div className="h-[352px] w-[176px] ml-7 mt-7 ">
                        <ul className="h-[352px] w-[176px] flex flex-col justify-between py-3">
                            <li className="text-[#90A3BF] "> T Y P E</li>
                            <li className="flex gap-2 text-gray-700 text-xl font-semibold"><div className="h-[22px] w-[22px]  rounded-md text-blue-500 text-[28px]"><BiSolidCheckSquare /></div> Sport <span className=" text-[#90A3BF] "> (10)</span></li>
                            <li className="flex gap-2  text-gray-700 text-xl font-semibold"><div className="h-[25px] w-[25px]  rounded-md text-blue-500 text-[28px] "><BiSolidCheckSquare /></div> SUV  <span className=" text-[#90A3BF] "> (12)</span></li>
                            <li className="flex gap-2 text-gray-700 text-xl font-semibold"><div className="h-[25px] w-[25px] mt-[3px] border-2  rounded-md "></div> MPV  <span className=" text-[#90A3BF] "> (16)</span></li>
                            <li className="flex gap-2 text-gray-700 text-xl font-semibold"><div className="h-[25px] w-[25px] mt-[3px] border-2  rounded-md "></div>Sedan  <span className=" text-[#90A3BF] "> (20)</span></li>
                            <li className="flex gap-2 text-gray-700 text-xl font-semibold"><div className="h-[25px] w-[25px] mt-[3px] border-2  rounded-md "></div> Coupe  <span className=" text-[#90A3BF] "> (14)</span></li>
                            <li className="flex gap-2 text-gray-700 text-xl font-semibold"><div className="h-[25px] w-[25px] mt-[3px] border-2  rounded-md "></div> Hatchback  <span className=" text-[#90A3BF] "> (14)</span></li>
                        </ul>
                    </div>
                    {/* inner box 2 */}
                    <div className="h-[240px] w-[176px] ml-7 ">
                        <ul className="h-[240px] w-[176px] flex flex-col justify-between py-3">
                            <li className="text-[#90A3BF] ">C A P A C I T Y</li>
                            <li className="flex gap-2  text-gray-700 text-xl font-semibold"><div className="h-[25px] w-[25px]  rounded-md text-blue-500 text-[28px] "><BiSolidCheckSquare /></div> 2 Person  <span className=" text-[#90A3BF] "> (10)</span></li>
                            <li className="flex gap-2 text-gray-700 text-xl font-semibold"><div className="h-[25px] w-[25px] mt-[3px] border-2  rounded-md "></div> 4 Person  <span className=" text-[#90A3BF] "> (14)</span></li>
                            <li className="flex gap-2 text-gray-700 text-xl font-semibold"><div className="h-[25px] w-[25px] mt-[3px] border-2  rounded-md "></div>6 Person  <span className=" text-[#90A3BF] "> (12)</span></li>
                            <li className="flex gap-2 text-gray-700 text-xl font-semibold"><div className="h-[22px] w-[22px]  rounded-md text-blue-500 text-[28px]"><BiSolidCheckSquare /></div> 8 or More <span className=" text-[#90A3BF] "> (16)</span></li>
                        </ul>
                    </div>
                    {/* inner box 3 */}
                    <div className="h-[104px] max-w-[296px] mx-auto  ">
                        <ul className="h-[104px] w-[296px] flex flex-col justify-between">
                            <li className="text-[#90A3BF]">P R I C E</li>
                            <li className="mt-4">
                                <Image className="h-[20px] w-[290px] " src={"/images/pricerange.png"} height={300} width={300} alt="pricerange" />
                            </li>
                            <li className="text-[#596780] font-semibold text-xl">Max. $100.00</li>
                        </ul>
                    </div>
                </div>

                {/* Main right container */}
                <div className="h-[1600px] max-w-[1015px] mx-auto flex flex-col py- justify-evenly">
                    {/* main  box 01 */}
                   <div className="">
                   <div className="h-auto xl:h-[132px] max-w-[1015px] mx-auto  flex flex-col xl:flex-row items-center justify-center gap-10 relative">
                        {/* div 01 */}
                        <div className="h-[132px] w-[486px] bg-white rounded-xl px-5 py-4">
                            {/* radio item */}
                            <ul className="flex items-center gap-2">
                                <li className="text-blue-500 cursor-pointer hover:text-[#EB4949]"><FaRegCircleDot /></li>
                                <li className="text-xl font-semibold">Pick - Up</li>
                            </ul>
                            {/* red item */}
                            <ul className="flex justify-between">
                                <li className="space-y-2 pt-3">
                                    <div className="text-xl font-bold ">Locations</div>
                                    <div className="flex gap-3">
                                        <p className="text-[#EB4949] text-sm ">Select your city</p>
                                        <IoIosArrowDown className="mt-[4px]" />
                                    </div>
                                </li>
                                <li className="h-[60px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                                <li className="space-y-2 pt-3">
                                    <div className="text-xl font-bold ">Date</div>
                                    <div className="flex gap-3">
                                        <p className="text-[#EB4949] text-sm ">Select your date</p>
                                        <IoIosArrowDown className="mt-[4px]" />
                                    </div>
                                </li>
                                <li className="h-[60px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                                <li className="space-y-2 pt-3">
                                    <div className="text-xl font-bold ">Time</div>
                                    <div className="flex gap-3">
                                        <p className="text-[#EB4949] text-sm">Select your time</p>
                                        <IoIosArrowDown className="mt-[4px]" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* div 02 */}
                        <div className="absolute h-[63px] w-[63px] bg-blue-500 shadow-lg hover:shadow-blue-800/100  rounded-xl text-white cursor-pointer hover:bg-[#EB4949] flex items-center justify-center text-xl"><LuArrowUpDown /></div>
                        {/* div 03 */}
                        <div className="h-[132px] w-[486px] bg-white rounded-xl px-5 py-4">
                            {/* radio item */}
                            <ul className="flex items-center gap-2">
                                <li className="text-[#5CAFFC] cursor-pointer hover:text-[#EB4949]"><FaRegCircleDot /></li>
                                <li className="text-xl font-semibold">Drop - Off</li>
                            </ul>
                            {/* red item */}
                            <ul className="flex justify-between">
                                <li className="space-y-2 pt-3">
                                    <div className="text-xl font-bold ">Locations</div>
                                    <div className="flex gap-3">
                                        <p className="text-[#EB4949] text-sm ">Select your city</p>
                                        <IoIosArrowDown className="mt-[4px]" />
                                    </div>
                                </li>
                                <li className="h-[60px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                                <li className="space-y-2 pt-3">
                                    <div className="text-xl font-bold ">Date</div>
                                    <div className="flex gap-3">
                                        <p className="text-[#EB4949] text-sm ">Select your date</p>
                                        <IoIosArrowDown className="mt-[4px]" />
                                    </div>
                                </li>
                                <li className="h-[60px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                                <li className="space-y-2 pt-3">
                                    <div className="text-xl font-bold ">Time</div>
                                    <div className="flex gap-3">
                                        <p className="text-[#EB4949] text-sm">Select your time</p>
                                        <IoIosArrowDown className="mt-[4px]" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                   </div>
                    {/* main box 02 */}
                    <div className="h-auto xl:h-[1228px] w-auto xl:w-[1015px] flex items-center justify-center gap-8 xl:gap-0 xl:justify-between  flex-wrap  py-6 ">
                        {/* img box 01 */}
                        <div className="hidden xl:block">
                        <ul className="h-[388px] w-[317px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                            <ul className="flex items-center justify-between px-5">
                                <li>
                                    <p className="text-2xl font-semibold">Koenigsegg</p>
                                    <p className="text-[#EB4949] font-semibold">Sport</p>
                                </li>
                                <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><GoHeartFill />
                                </li>
                            </ul>
                            {/* img */}
                            <ul className="h-[72px] max-w-[232px] mx-auto ">
                                <Image className="h-[72px] w-[232px]" src={"/images/car.png"} height={72} width={232} alt="car" />
                            </ul>
                            <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                                <li className="flex gap-2"><BsFuelPumpFill className="text-xl " />90L</li>
                                <li className="flex gap-2"><Radar className="text-xl " />Manual</li>
                                <li className="flex gap-2"><MdPeopleAlt className="text-2xl " />2 People</li>
                            </ul>
                            <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                                <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$99.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                                <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                            </ul>
                        </ul>
                        </div>
                        {/* img box 02 */}
                        <div className="hidden xl:block">
                        <ul className="h-[388px] w-[317px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                            <ul className="flex items-center justify-between px-5">
                                <li>
                                    <p className="text-2xl font-semibold">Nissan GT - R</p>
                                    <p className="text-[#EB4949] font-semibold">Sport</p>
                                </li>
                                <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><RiHeart3Line />
                                </li>
                            </ul>
                            {/* img */}
                            <ul className="h-[72px] max-w-[232px] mx-auto ">
                                <Image className="h-[72px] w-[232px]" src={"/images/car (1).png"} height={72} width={232} alt="car" />
                            </ul>
                            <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                                <li className="flex gap-2"><BsFuelPumpFill className="text-xl " />80L</li>
                                <li className="flex gap-2"><Radar className="text-xl " />Manual</li>
                                <li className="flex gap-2"><MdPeopleAlt className="text-2xl " />2 People</li>
                            </ul>
                            <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                                <li className="h-[48px] w-[116px] text-xl font-bold  ">
                                    <p>$80.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></p>
                                    <p className="line-through text-[#EB4949] font-semibold text-lg">$100.00</p>
                                </li>
                                <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                            </ul>
                        </ul>
                        </div>
                        {/* img box 03 */}
                       <div className="hidden sm:block">
                       <ul className="h-[388px] w-[317px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                            <ul className="flex items-center justify-between px-5">
                                <li>
                                    <p className="text-2xl font-semibold">Rolls - Royce</p>
                                    <p className="text-[#EB4949] font-semibold">Sedan</p>
                                </li>
                                <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500">< RiHeart3Line />
                                </li>
                            </ul>
                            {/* img */}
                            <ul className="h-[72px] max-w-[232px] mx-auto ">
                                <Image className="h-[72px] w-[232px]" src={"/images/car (2).png"} height={72} width={232} alt="car" />
                            </ul>
                            <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                                <li className="flex gap-2"><BsFuelPumpFill className="text-xl " />70L</li>
                                <li className="flex gap-2"><Radar className="text-xl " />Manual</li>
                                <li className="flex gap-2"><MdPeopleAlt className="text-2xl " />4 People</li>
                            </ul>
                            <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                                <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$96.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                                <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                            </ul>
                        </ul>
                       </div>
                        {/* img box 04 */}
                        <div className="hidden sm:block">
                        <ul className="h-[388px] w-[317px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                            <ul className="flex items-center justify-between px-5">
                                <li>
                                    <p className="text-2xl font-semibold">All New Rush</p>
                                    <p className="text-[#EB4949] font-semibold">SUV</p>
                                </li>
                                <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><RiHeart3Line />
                                </li>
                            </ul>
                            {/* img */}
                            <ul className="h-[100px] max-w-[248px] mx-auto ">
                                <Image className="h-[100px] w-[248px]" src={"/images/car (4).png"} height={72} width={232} alt="car" />
                            </ul>
                            <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                                <li className="flex gap-2"><BsFuelPumpFill className="text-xl " />70L</li>
                                <li className="flex gap-2"><Radar className="text-xl " />Manual</li>
                                <li className="flex gap-2"><MdPeopleAlt className="text-2xl " />6 People</li>
                            </ul>
                            <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                                <li className="h-[48px] w-[116px] text-xl font-bold  ">
                                    <p>$72.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></p>
                                    <p className="line-through text-[#EB4949] font-semibold text-lg">$80.00</p>
                                </li>
                                <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                            </ul>
                        </ul>
                        </div>
                        {/* img box 05 */}
                        <div className="hidden sm:block">
                        <ul className="h-[388px] w-[317px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                            <ul className="flex items-center justify-between px-5">
                                <li>
                                    <p className="text-2xl font-semibold">CR  - V</p>
                                    <p className="text-[#EB4949] font-semibold">SUV</p>
                                </li>
                                <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><GoHeartFill />
                                </li>
                            </ul>
                            {/* img */}
                            <ul className="h-[100px] max-w-[248px] mx-auto ">
                                <Image className="h-[100px] w-[248px]" src={"/images/car (5).png"} height={72} width={232} alt="car" />
                            </ul>
                            <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                                <li className="flex gap-2"><BsFuelPumpFill className="text-xl " />80L</li>
                                <li className="flex gap-2"><Radar className="text-xl " />Manual</li>
                                <li className="flex gap-2"><MdPeopleAlt className="text-2xl " />6 People</li>
                            </ul>
                            <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                                <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$80.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                                <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                            </ul>
                        </ul>
                        </div>
                        {/* img box 06 */}
                        <ul className="h-[388px] w-[317px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                            <ul className="flex items-center justify-between px-5">
                                <li>
                                    <p className="text-2xl font-semibold">All New Terios</p>
                                    <p className="text-[#EB4949] font-semibold">SUV</p>
                                </li>
                                <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><RiHeart3Line />
                                </li>
                            </ul>
                            {/* img */}
                            <ul className="h-[100px] max-w-[248px] mx-auto ">
                                <Image className="h-[100px] w-[248px]" src={"/images/car (6).png"} height={72} width={232} alt="car" />
                            </ul>
                            <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                                <li className="flex gap-2"><BsFuelPumpFill className="text-xl " />90L</li>
                                <li className="flex gap-2"><Radar className="text-xl " />Manual</li>
                                <li className="flex gap-2"><MdPeopleAlt className="text-2xl " />6 People</li>
                            </ul>
                            <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                                <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$74.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                                <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                            </ul>
                        </ul>
                        {/* img box 07 */}
                        <ul className="h-[388px] w-[317px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                            <ul className="flex items-center justify-between px-5">
                                <li>
                                    <p className="text-2xl font-semibold">MG ZX Exclusice</p>
                                    <p className="text-[#EB4949] font-semibold">Hatchback</p>
                                </li>
                                <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500">< RiHeart3Line />
                                </li>
                            </ul>
                            {/* img */}
                            <ul className="h-[112px] max-w-[264px] mx-auto ">
                                <Image className="h-[112px] w-[264px]" src={"/images/car (8).png"} height={72} width={232} alt="car" />
                            </ul>
                            <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                                <li className="flex gap-2"><BsFuelPumpFill className="text-xl " />70L</li>
                                <li className="flex gap-2"><Radar className="text-xl " />Manual</li>
                                <li className="flex gap-2"><MdPeopleAlt className="text-2xl " />4 People</li>
                            </ul>
                            <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                                <li className="h-[48px] w-[116px] text-xl font-bold  ">
                                    <p>$76.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></p>
                                    <p className="line-through text-[#EB4949] font-semibold text-lg">$80.00</p>
                                </li>
                                <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                            </ul>
                        </ul>
                        {/* img box 08 */}
                        <ul className="h-[388px] w-[317px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                            <ul className="flex items-center justify-between px-5">
                                <li>
                                    <p className="text-2xl font-semibold">New MG ZS</p>
                                    <p className="text-[#EB4949] font-semibold">SUV</p>
                                </li>
                                <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><RiHeart3Line />
                                </li>
                            </ul>
                            {/* img */}
                            <ul className="h-[112px] max-w-[288px] mx-auto ">
                                <Image className="h-[112px] w-[288px]" src={"/images/car (9).png"} height={72} width={232} alt="car" />
                            </ul>
                            <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                                <li className="flex gap-2"><BsFuelPumpFill className="text-xl " />80L</li>
                                <li className="flex gap-2"><Radar className="text-xl " />Manual</li>
                                <li className="flex gap-2"><MdPeopleAlt className="text-2xl " />6 People</li>
                            </ul>
                            <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                                <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$80.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                                <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                            </ul>
                        </ul>
                        {/* img box 09 */}
                        <div className="hidden xl:block">
                        <ul className="h-[388px] w-[317px] bg-white rounded-2xl py-6 xl:flex flex-col justify-between">
                            <ul className="flex items-center justify-between px-5">
                                <li>
                                    <p className="text-2xl font-semibold">MG ZX Excite</p>
                                    <p className="text-[#EB4949] font-semibold">Hatchback</p>
                                </li>
                                <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><GoHeartFill />
                                </li>
                            </ul>
                            {/* img */}
                            <ul className="h-[112px] max-w-[264px] mx-auto ">
                                <Image className="h-[112px] w-[264px]" src={"/images/car (10).png"} height={72} width={232} alt="car" />
                            </ul>
                            <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                                <li className="flex gap-2"><BsFuelPumpFill className="text-xl " />90L</li>
                                <li className="flex gap-2"><Radar className="text-xl " />Manual</li>
                                <li className="flex gap-2"><MdPeopleAlt className="text-2xl " />4 People</li>
                            </ul>
                            <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                                <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$74.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                                <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                            </ul>
                        </ul>
                        </div>
                    </div>
                    {/* main box 03 */}
                    <ul className="h-[44px] max-w-[586px] ml-72 lg:ml-[300px] pr-8 xl:ml-[430px] flex items-center justify-between ">
                        <li className="h-[44px] w-[156px] rounded-xl bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] text-xl font-semibold flex items-center justify-center">Show more car</li>
                        <li className="text-[#EB4949] font-semibold">120 Car</li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default CategoryComponent;