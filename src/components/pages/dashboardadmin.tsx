import { CalendarDays} from "lucide-react";
import Image from "next/image";
import { FaRegCircleDot } from "react-icons/fa6";
import { ImInfo } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { LiaSignalSolid } from "react-icons/lia";
import { LuReplaceAll } from "react-icons/lu";
import { MdDarkMode, MdLightMode, MdOutlinePartyMode } from "react-icons/md";
import { PiCar, PiDotsThreeOutlineDuotone, PiHouseFill } from "react-icons/pi";
import { RiSettingsLine } from "react-icons/ri";
import { TbLogout2, TbMessageDots } from "react-icons/tb";

function Dashboardcomponent() {
    return (
        <>
            <main className="h-[900px] max-w-[1440px] mx-auto bg-[#F6F7F9] flex">
                {/* menu left box 01 */}
                <div className="h-[900px] w-[286px] bg-white flex flex-col items-center justify-evenly">
                    {/* inner box 01 */}
                    <ul className="h-[470px] w-[254px] flex flex-col items-center justify-evenly ">
                        {/* 01 */}
                        <li className="h-[28px] w-[220px] text-[#94A7CB] text-sm pl-2">M A I N  M E N U</li>
                        {/* 02 */}
                        <li className="h-[56px] w-[254px] bg-blue-500 rounded-xl text-white flex items-center  hover:bg-[#ED3F3F] cursor-pointer text-lg pl-5 gap-3 ">
                            <PiHouseFill className="text-2xl" />
                            <span>Dashboard</span>
                        </li>
                        {/* 03 */}
                        <li className="h-[28px] w-[220px] text-lg flex items-center gap-2 text-[#94A7CB]">
                            <PiCar className="text-3xl hover:text-[#ED3F3F]" />
                            <span className="text-">Car Rent</span>
                        </li>
                        {/* 04 */}
                        <li className="h-[28px] w-[220px] text-lg flex items-center gap-2 text-[#94A7CB]">
                            <LiaSignalSolid className="text-3xl hover:text-[#ED3F3F]" />
                            <span className="text-">Insight</span>
                        </li>
                        {/* 05 */}
                        <li className="h-[28px] w-[220px] text-lg flex items-center gap-2 text-[#94A7CB]">
                            <LuReplaceAll className="text-3xl hover:text-[#ED3F3F]" />
                            <span className="text-">Reimburse</span>
                        </li>
                        {/* 06 */}
                        <li className="h-[28px] w-[220px] text-lg flex items-center gap-2 text-[#94A7CB]">
                            <TbMessageDots className="text-3xl hover:text-[#ED3F3F]" />
                            <span className="text-">Inbox</span>
                        </li>
                        {/* 07 */}
                        <li className="h-[28px] w-[220px] text-lg flex items-center gap-3 text-[#94A7CB]">
                            <CalendarDays className="text-3xl hover:text-[#ED3F3F]" />
                            <span className="text-">Calender</span>
                        </li>

                    </ul>
                    {/* inner box 02 */}
                    <ul className="h-[386px] w-[254px] flex flex-col items-center justify-evenly ">
                        {/* 01 */}
                        <li className="h-[28px] w-[220px] text-[#94A7CB] text-sm pl-2">P R E F E R E N C E S</li>
                        {/* 02 */}
                        <li className="h-[28px] w-[220px] text-lg flex items-center gap-2 text-[#94A7CB]">
                            <RiSettingsLine className="text-3xl hover:text-[#ED3F3F]" />
                            <span className="text-">Settings</span>
                        </li>
                        {/* 03 */}
                        <li className="h-[28px] w-[220px] text-lg flex items-center gap-2 text-[#94A7CB]">
                            <ImInfo className="text-3xl hover:text-[#ED3F3F]" />
                            <span className="text-">Help & Center</span>
                        </li>
                        {/* 04 */}
                        <li className="h-[34px] w-[220px] text-lg flex items-center justify-between gap-2 text-[#94A7CB]">
                            <span className="flex items-center gap-2">
                                <MdOutlinePartyMode className="text-3xl hover:text-[#ED3F3F]" />
                                <span className="text-">Dark Mode</span>
                            </span>
                            <ul className="h-[34px] w-[68px] rounded-2xl bg-[#F6F7F9] flex items-center justify-between ">
                                <li className="h-[34px] w-[34px] rounded-full text-2xl text-white hover:text-[#ED3F3F] bg-blue-500 flex items-center justify-center " >
                                    <MdLightMode />
                                </li>
                                <li className=" h-[34px] w-[34px] rounded-full text-2xl flex items-center justify-center hover:text-[#ED3F3F]">
                                    <MdDarkMode />
                                </li>
                            </ul>

                        </li>
                        {/* 05 */}
                        <li className="h-[28px] w-[220px] text-lg mt-16 flex items-center gap-2 text-[#94A7CB]">
                            <TbLogout2 className="text-3xl hover:text-[#ED3F3F]" />
                            <span className="text-">Log Out</span>
                        </li>
                    </ul>
                </div>
                {/* Detail penal right box 02 */}
                <div className="h-[900px] w-[1156px] flex justify-evenly items-center">
                    {/* inner box 01 */}
                    <div className="h-[836px] w-[534px]">
                        <ul className="h-[836px] w-[534px] bg-white rounded-xl flex flex-col items-center justify-evenly">
                            {/* 01 */}
                            <li className="h-[24px] w-[486px] text-2xl font-bold ">Details Rental</li>
                            {/* 02 */}
                            <li className="h-[272px] w-[486px]  rounded-xl ">
                                <Image src={"/images/Maps.png"} height={272} width={486} alt="location" />
                            </li>
                            {/* 03 */}
                            <li className="h-[72px] w-[486px] flex items-center justify-between">
                                <Image src={"/images/Look.png"} height={72} width={132} alt="location" />

                                <ul className="h-[60px] w-[330px] flex items-start justify-between ">
                                    <li className="h-[60px]  flex flex-col justify-between">
                                        <p className="text-2xl font-bold">Nissan GT - R</p>
                                        <span className="text-[#90A3BF] ">Sport Car</span>
                                    </li>
                                    <li className="text-[#90A3BF] ">#9761</li>
                                </ul>
                            </li>
                            {/* 04 */}
                            <li className="h-[85px] w-[486px] bg-white rounded-xl">
                                {/* radio item */}
                                <ul className=" h-[20px] flex items-center gap-3">
                                    <li className="text-blue-500 cursor-pointer hover:text-[#EB4949]"><FaRegCircleDot /></li>
                                    <li className="text-xl font-semibold">Pick - Up</li>
                                </ul>
                                {/* red item */}
                                <ul className="h-[48px] w-[486px] flex justify-between">
                                    <li className="space-y-2 pt-3">
                                        <div className="text-xl font-bold ">Locations</div>
                                        <div className="flex gap-3">
                                            <p className="text-[#EB4949] text-sm ">Select your city</p>
                                            <IoIosArrowDown className="mt-[4px]" />
                                        </div>
                                    </li>
                                    <li className="h-[48px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                                    <li className="space-y-2 pt-3">
                                        <div className="text-xl font-bold ">Date</div>
                                        <div className="flex gap-3">
                                            <p className="text-[#EB4949] text-sm ">Select your date</p>
                                            <IoIosArrowDown className="mt-[4px]" />
                                        </div>
                                    </li>
                                    <li className="h-[48px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                                    <li className="space-y-2 pt-3">
                                        <div className="text-xl font-bold ">Time</div>
                                        <div className="flex gap-3">
                                            <p className="text-[#EB4949] text-sm">Select your time</p>
                                            <IoIosArrowDown className="mt-[4px]" />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            {/* 05 */}
                            <li className="h-[85px] w-[486px] bg-white rounded-xl">
                                {/* radio item */}
                                <ul className=" h-[20px] flex items-center gap-3">
                                    <li className="text-blue-500 cursor-pointer hover:text-[#EB4949]"><FaRegCircleDot /></li>
                                    <li className="text-xl font-semibold">Drop - Off</li>
                                </ul>
                                {/* red item */}
                                <ul className="h-[48px] w-[486px] flex justify-between">
                                    <li className="space-y-2 pt-3">
                                        <div className="text-xl font-bold ">Locations</div>
                                        <div className="flex gap-3">
                                            <p className="text-[#EB4949] text-sm ">Select your city</p>
                                            <IoIosArrowDown className="mt-[4px]" />
                                        </div>
                                    </li>
                                    <li className="h-[48px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                                    <li className="space-y-2 pt-3">
                                        <div className="text-xl font-bold ">Date</div>
                                        <div className="flex gap-3">
                                            <p className="text-[#EB4949] text-sm ">Select your date</p>
                                            <IoIosArrowDown className="mt-[4px]" />
                                        </div>
                                    </li>
                                    <li className="h-[48px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                                    <li className="space-y-2 pt-3">
                                        <div className="text-xl font-bold ">Time</div>
                                        <div className="flex gap-3">
                                            <p className="text-[#EB4949] text-sm">Select your time</p>
                                            <IoIosArrowDown className="mt-[4px]" />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            {/* 06 */}
                            <li className="border-2 h-[1px] w-[486px] "></li>
                            {/* 07 */}
                            {/* <li className="border-2 h-[48px] w-[486px] "></li> */}
                            <li className="h-[48px] w-[486px] flex items-center justify-between">
                                <ul>
                                    <li className="text-2xl font-bold">Total Rental Price</li>
                                    <li className="text-[#90A3BF]">Overall price and includes rental discount</li>
                                </ul>
                                <span className="text-3xl font-bold">$80.00</span>
                            </li>
                        </ul>
                    </div>
                    {/* inner box 02 */}
                    <div className="h-[836px] w-[524px] bg-[#F6F7F9] flex flex-col justify-between">
                        {/* box 01 */}
                        <div className="h-[324px] w-[524px] bg-white rounded-xl flex flex-col items-center justify-evenly">
                            {/* 01 */}
                            <div className="h-[28px] w-[476px] flex items-center justify-between text-2xl font-bold">
                                <span className="">Top 5 Car Rental </span>
                                <PiDotsThreeOutlineDuotone className="text-3xl hover:text-[#FF4423] cursor-pointer" />
                            </div>
                            {/* 02  */}
                            <ul className="h-[220px] w-[476px] flex items-center justify-between">

                                <li className="h-[220px] w-[220px] flex items-center justify-center relative">
                                    {/* contant */}
                                    <div className="h-[63px] w-[100px] flex flex-col items-center justify-between absolute">
                                        <span className="text-3xl font-bold">{`72,030`}</span>
                                        <span className="text-sm text-[#90A3BF]">Rental Car</span>
                                    </div>
                                    {/* image */}
                                    <Image src={"/images/Chart.png"} height={220} width={220} alt="chart" />

                                </li>
                                <li >
                                    <ul className="h-[220px] w-[232px] flex flex-col justify-between">
                                        {/* catagery Car 1 */}
                                        <li className="h-[24px] w-[232px] flex items-center justify-between">
                                            <div className="h-[24px] flex items-center gap-3">
                                                <span className="h-[16px] w-[16px] rounded-full bg-[#0D3559] hover:bg-[#FF4423] cursor-pointer "></span>
                                                <span className="text-[#90A3BF]  text- font-semibold pb-1">Sport Car</span>
                                            </div>
                                            <span className="text-lg font-semibold">{`17,439`}</span>
                                        </li>
                                        {/* catagery Car 2 */}
                                        <li className="h-[24px] w-[232px] flex items-center justify-between">
                                            <div className="h-[24px] flex items-center gap-3">
                                                <span className="h-[16px] w-[16px] rounded-full bg-[#175D9C] hover:bg-[#FF4423] cursor-pointer "></span>
                                                <span className="text-[#90A3BF]  text- font-semibold pb-1">SUV</span>
                                            </div>
                                            <span className="text-lg font-semibold">{`9,478`}</span>
                                        </li>
                                        {/* catagery Car 3 */}
                                        <li className="h-[24px] w-[232px] flex items-center justify-between">
                                            <div className="h-[24px] flex items-center gap-3">
                                                <span className="h-[16px] w-[16px] rounded-full bg-[#2185DE] hover:bg-[#FF4423] cursor-pointer "></span>
                                                <span className="text-[#90A3BF]  text- font-semibold pb-1">Coupe</span>
                                            </div>
                                            <span className="text-lg font-semibold">{`18,197`}</span>
                                        </li>
                                        {/* catagery Car 4 */}
                                        <li className="h-[24px] w-[232px] flex items-center justify-between">
                                            <div className="h-[24px] flex items-center gap-3">
                                                <span className="h-[16px] w-[16px] rounded-full bg-[#63A9E8] hover:bg-[#FF4423] cursor-pointer "></span>
                                                <span className="text-[#90A3BF]  text- font-semibold pb-1">Hatchback</span>
                                            </div>
                                            <span className="text-lg font-semibold">{`12,510`}</span>
                                        </li>
                                        {/* catagery Car 5 */}
                                        <li className="h-[24px] w-[232px] flex items-center justify-between">
                                            <div className="h-[24px] flex items-center gap-3">
                                                <span className="h-[16px] w-[16px] rounded-full bg-[#A6CEF2] hover:bg-[#FF4423] cursor-pointer "></span>
                                                <span className="text-[#90A3BF]  text- font-semibold pb-1">MPV</span>
                                            </div>
                                            <span className="text-lg font-semibold">{`14,406`}</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* box 02 */}
                        <div className="h-[480px] w-[524px] bg-white rounded-xl flex flex-col items-center justify-evenly">
                            {/* 01 */}
                            <ul className="h-[24px] w-[476px] flex items-center justify-between">
                                <li className="text-xl font-bold ">Recent Transaction</li>
                                <li className="text-[#3563E9] cursor-pointer hover:text-[#ED3F3F] ">View All</li>
                            </ul>
                            {/* 02 */}
                            <ul className="h-[376px] w-[476px] flex flex-col items-center justify-between ">
                                {/* recent car transection 01 */}
                                <li className="h-[70px] w-[476px] flex items-center justify-between">
                                    <div className="h-[70px] w-[270px] flex items-center justify-between">
                                        <Image src={"/images/car (12).png"} height={70} width={132} alt="Nissan GT - R" />
                                        <ul className="h-[48px] w-[125px] flex flex-col justify-between">
                                            <li className="text-xl font-semibold">Nissan GT - R</li>
                                            <li className="text-[#90A3BF] ">Sport Car</li>
                                        </ul>
                                    </div>
                                    <ul className="h-[48px] w-[108px] flex flex-col items-end justify-between">
                                        <li className="text-[#90A3BF] ">20 July</li>
                                        <li className="text-xl font-semibold">$80.00</li>
                                    </ul>
                                </li>
                                {/* hr line */}
                                <li className="h-[1px] w-[476px] bg-slate-200"></li>
                                 {/* recent car transection 02 */}
                                 <li className="h-[70px] w-[476px] flex items-center justify-between">
                                    <div className="h-[70px] w-[270px] flex items-center justify-between">
                                        <Image src={"/images/car (13).png"} height={70} width={132} alt="Nissan GT - R" />
                                        <ul className="h-[48px] w-[125px] flex flex-col justify-between">
                                            <li className="text-xl font-semibold">Koegnigsegg</li>
                                            <li className="text-[#90A3BF] ">Sport Car</li>
                                        </ul>
                                    </div>
                                    <ul className="h-[48px] w-[108px] flex flex-col items-end justify-between">
                                        <li className="text-[#90A3BF] ">19 July</li>
                                        <li className="text-xl font-semibold">$99.00</li>
                                    </ul>
                                </li>
                                {/* hr line */}
                                <li className="h-[1px] w-[476px] bg-slate-200"></li>
                                 {/* recent car transection 03 */}
                                 <li className="h-[70px] w-[476px] flex items-center justify-between">
                                    <div className="h-[70px] w-[270px] flex items-center justify-between">
                                        <Image src={"/images/car (14).png"} height={70} width={132} alt="Nissan GT - R" />
                                        <ul className="h-[48px] w-[125px] flex flex-col justify-between">
                                            <li className="text-xl font-semibold">Rolls - Royce</li>
                                            <li className="text-[#90A3BF] ">Sport Car</li>
                                        </ul>
                                    </div>
                                    <ul className="h-[48px] w-[108px] flex flex-col items-end justify-between">
                                        <li className="text-[#90A3BF] ">18 July</li>
                                        <li className="text-xl font-semibold">$96.00</li>
                                    </ul>
                                </li>
                                {/* hr line */}
                                <li className="h-[1px] w-[476px] bg-slate-200"></li>
                                 {/* recent car transection 04 */}
                                 <li className="h-[70px] w-[476px] flex items-center justify-between">
                                    <div className="h-[70px] w-[270px] flex items-center justify-between">
                                        <Image src={"/images/car (15).png"} height={70} width={132} alt="Nissan GT - R" />
                                        <ul className="h-[48px] w-[125px] flex flex-col justify-between">
                                            <li className="text-xl font-semibold">CR - V</li>
                                            <li className="text-[#90A3BF] ">SUV</li>
                                        </ul>
                                    </div>
                                    <ul className="h-[48px] w-[108px] flex flex-col items-end justify-between">
                                        <li className="text-[#90A3BF] ">17 July</li>
                                        <li className="text-xl font-semibold">$80.00</li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Dashboardcomponent;