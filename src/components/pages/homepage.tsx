import Image from "next/image";
import { LuArrowUpDown } from "react-icons/lu";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { BsFuelPumpFill } from "react-icons/bs";
import { Radar } from "lucide-react";
import { MdPeopleAlt } from "react-icons/md";
import { RiHeart3Line } from "react-icons/ri";


function HomeComponent() {
    return (
        <>
            <main className="bg-[#f6f7f9] h-[2120px] max-w-[1440px] mx-auto space-y-8">
                {/*box 01 */}
                <div className="h-[360px] max-w-[1312px] mx-auto ">
                   <ul className="h-[360px] w-[1312px] flex justify-between">
                         {/* img 1st */}
                    <li className="h-[360px] w-[640px]  rounded-xl relative ">
                        {/* content */}
                        <ul className="absolute h-[224px] w-[284px] text-white flex flex-col justify-between mt-[26px] ml-[26px] ">
                            <li className="h-[160px] w-[284px] flex flex-col justify-between">
                              <p className="text-3xl font-semibold">The Best Platform for Car Rental</p>
                              <p className="text-[17px] ">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                            </li>
                            <li className="h-[44px] w-[120px] bg-blue-500 rounded-md flex items-center justify-center text-[17px] font-semibold cursor-pointer hover:bg-[#EB4949]">Rental Car</li>
                        </ul>
                <Image className="h-[360px] w-[640px]  rounded-xl" src={"/images/Ads 1.jpg"} height={900} width={900} alt="img" />
                    </li>
                         {/* img 2nd */}
                         <li className="h-[360px] w-[640px]  rounded-xl relative ">
                        {/* content */}
                        <ul className="absolute h-[224px] w-[284px] text-white flex flex-col justify-between mt-[26px] ml-[26px] ">
                            <li className="h-[160px] w-[284px] flex flex-col justify-between">
                              <p className="text-3xl font-semibold">Easy way to rent a car at a low price</p>
                              <p className="text-[17px] ">Providing cheap car rental services and safe and comfortable facilities.</p>
                            </li>
                            <li className="h-[44px] w-[120px] bg-[#54A6FF] rounded-md flex items-center justify-center text-[17px] font-semibold cursor-pointer hover:bg-[#EB4949]">Rental Car</li>
                        </ul>
                <Image className="h-[360px] w-[640px]  rounded-xl" src={"/images/Ads 2.png"} height={900} width={900} alt="img" />
                    </li>
                   </ul>
                </div>
                {/* box 02 */}
                <div  className="h-[132px] max-w-[1312px] mx-auto   flex items-center justify-between">
                    {/* div 01 */}
                    <div className="h-[132px] w-[582px] border-2 bg-white rounded-xl px-10 py-4">
                        {/* radio item */}
                        <ul className="flex items-center gap-2">
                            <li className="text-blue-500 cursor-pointer hover:text-[#EB4949]"><FaRegCircleDot/></li>
                            <li className="text-xl font-semibold">Pick - Up</li>
                        </ul>
                        {/* red item */}
                        <ul className="flex justify-between">
                            <li  className="space-y-2 pt-3">
                                <div className="text-xl font-bold ">Locations</div>
                                <div className="flex gap-5">
                                <p className="text-[#EB4949] text-sm ">Select your city</p>
                                <IoIosArrowDown className="mt-[4px]"/>
                                </div>
                            </li>
                            <li className="h-[60px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                            <li  className="space-y-2 pt-3">
                                <div className="text-xl font-bold ">Date</div>
                                <div className="flex gap-5">
                                <p className="text-[#EB4949] text-sm ">Select your date</p>
                                <IoIosArrowDown className="mt-[4px]"/>
                                </div>
                            </li>
                            <li className="h-[60px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                            <li  className="space-y-2 pt-3">
                                <div className="text-xl font-bold ">Time</div>
                                <div className="flex gap-5">
                                <p className="text-[#EB4949] text-sm">Select your time</p>
                                <IoIosArrowDown className="mt-[4px]"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* div 02 */}
                    <div className="h-[60px] w-[60px] bg-blue-500 rounded-xl text-white cursor-pointer hover:bg-[#EB4949] flex items-center justify-center text-xl"><LuArrowUpDown/></div>
                    {/* div 03 */}
                    <div className="h-[132px] w-[582px] border-2 bg-white rounded-xl px-10 py-4">
                        {/* radio item */}
                        <ul className="flex items-center gap-2">
                            <li className="text-blue-500 cursor-pointer hover:text-[#EB4949]"><FaRegCircleDot/></li>
                            <li className="text-xl font-semibold">Drop - Off</li>
                        </ul>
                        {/* red item */}
                        <ul className="flex justify-between">
                            <li  className="space-y-2 pt-3">
                                <div className="text-xl font-bold ">Locations</div>
                                <div className="flex gap-5">
                                <p className="text-[#EB4949] text-sm ">Select your city</p>
                                <IoIosArrowDown className="mt-[4px]"/>
                                </div>
                            </li>
                            <li className="h-[60px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                            <li  className="space-y-2 pt-3">
                                <div className="text-xl font-bold ">Date</div>
                                <div className="flex gap-5">
                                <p className="text-[#EB4949] text-sm ">Select your date</p>
                                <IoIosArrowDown className="mt-[4px]"/>
                                </div>
                            </li>
                            <li className="h-[60px] w-[1px] bg-[#C3D4E9] mt-2"></li>
                            <li  className="space-y-2 pt-3">
                                <div className="text-xl font-bold ">Time</div>
                                <div className="flex gap-5">
                                <p className="text-[#EB4949] text-sm">Select your time</p>
                                <IoIosArrowDown className="mt-[4px]"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* box 03 */}
                <div className="h-[1356px] max-w-[1312px] mx-auto">
                    {/* 01 */}
                        <ul className="h-[44px] w-[1312px] flex items-center justify-between">
                            <li className="text-[#EB4949] font-semibold">Popular Car</li>
                            <li className="text-blue-500 font-semibold">View All</li>
                        </ul>
                    {/* 02 */}
                    <div className="h-[388px] w-[1312px] flex items-center justify-between">
                        {/* img box 01 */}
                      <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">Koenigsegg</p>
                                <p className="text-[#EB4949] font-semibold">Sport</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><GoHeartFill/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[72px] max-w-[232px] mx-auto ">
                           <Image  className="h-[72px] w-[232px]" src={"/images/car.png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>90L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>2 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                            <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$99.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                      {/* img box 02 */}
                      <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">Nissan GT - R</p>
                                <p className="text-[#EB4949] font-semibold">Sport</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><RiHeart3Line/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[72px] max-w-[232px] mx-auto ">
                           <Image  className="h-[72px] w-[232px]" src={"/images/car (1).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>80L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>2 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                            <li className="h-[48px] w-[116px] text-xl font-bold  ">
                                <p>$80.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></p>
                                <p className="line-through text-[#EB4949] font-semibold text-lg">$100.00</p>
                                </li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                      {/* img box 03 */}
                      <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">Rolls - Royce</p>
                                <p className="text-[#EB4949] font-semibold">Sedan</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><GoHeartFill/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[72px] max-w-[232px] mx-auto ">
                           <Image  className="h-[72px] w-[232px]" src={"/images/car (2).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>70L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>4 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                            <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$96.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                      {/* img box 04 */}
                      <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">Nissan GT - R</p>
                                <p className="text-[#EB4949] font-semibold">Sport</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><RiHeart3Line/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[72px] max-w-[232px] mx-auto ">
                           <Image  className="h-[72px] w-[232px]" src={"/images/car (3).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>80L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>2 People</li>
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
                    {/* 03 */}
                    <div className="h-[44px] max-w-[1312px] mx-auto text-[#EB4949] text-xl flex items-center ">Recomendation Car</div>
                    {/* 04 */}
                    <div className="h-[828px] max-w-[1312px] mx-auto  flex items-center justify-between flex-wrap ">
                     {/* img box 01 */}
                     <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">All New Rush</p>
                                <p className="text-[#EB4949] font-semibold">SUV</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><RiHeart3Line/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[100px] max-w-[248px] mx-auto ">
                           <Image  className="h-[100px] w-[248px]" src={"/images/car (4).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>70L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>6 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                        <li className="h-[48px] w-[116px] text-xl font-bold  ">
                                <p>$72.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></p>
                                <p className="line-through text-[#EB4949] font-semibold text-lg">$80.00</p>
                                </li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                     {/* img box 02 */}
                     <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">CR  - V</p>
                                <p className="text-[#EB4949] font-semibold">SUV</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><GoHeartFill/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[100px] max-w-[248px] mx-auto ">
                           <Image  className="h-[100px] w-[248px]" src={"/images/car (5).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>80L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>6 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                            <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$80.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                     {/* img box 03 */}
                     <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">All New Terios</p>
                                <p className="text-[#EB4949] font-semibold">SUV</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><RiHeart3Line/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[100px] max-w-[248px] mx-auto ">
                           <Image  className="h-[100px] w-[248px]" src={"/images/car (6).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>90L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>6 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                            <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$74.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                     {/* img box 04 */}
                     <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">CR  - V</p>
                                <p className="text-[#EB4949] font-semibold">SUV</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><GoHeartFill/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[100px] max-w-[248px] mx-auto ">
                           <Image  className="h-[100px] w-[248px]" src={"/images/car (7).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>80L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>6 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                            <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$80.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                     {/* img box 05 */}
                    <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">MG ZX Exclusice</p>
                                <p className="text-[#EB4949] font-semibold">Hatchback</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><GoHeartFill/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[112px] max-w-[264px] mx-auto ">
                           <Image  className="h-[112px] w-[264px]" src={"/images/car (8).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>70L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>4 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                        <li className="h-[48px] w-[116px] text-xl font-bold  ">
                                <p>$76.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></p>
                                <p className="line-through text-[#EB4949] font-semibold text-lg">$80.00</p>
                                </li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                     {/* img box 06 */}
                     <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">New MG ZS</p>
                                <p className="text-[#EB4949] font-semibold">SUV</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><RiHeart3Line/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[112px] max-w-[288px] mx-auto ">
                           <Image  className="h-[112px] w-[288px]" src={"/images/car (9).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>80L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>6 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                            <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$80.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                     {/* img box 07 */}
                     <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">MG ZX Excite</p>
                                <p className="text-[#EB4949] font-semibold">Hatchback</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><GoHeartFill/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[112px] max-w-[264px] mx-auto ">
                           <Image  className="h-[112px] w-[264px]" src={"/images/car (10).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>90L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>4 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                            <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$74.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                     {/* img box 08 */}
                     <ul className="h-[388px] w-[304px] bg-white rounded-2xl py-6 flex flex-col justify-between">
                        <ul className="flex items-center justify-between px-5">
                            <li>
                                <p className="text-2xl font-semibold">New MG ZS</p>
                                <p className="text-[#EB4949] font-semibold">SUV</p>
                            </li>
                            <li className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500"><RiHeart3Line/>
                            </li>
                        </ul>
                        {/* img */}
                        <ul className="h-[112px] max-w-[288px] mx-auto ">
                           <Image  className="h-[112px] w-[288px]" src={"/images/car (11).png"} height={72} width={232} alt="car"/>
                        </ul>
                        <ul className="h-[24px] w-[250px] mx-auto flex items-center justify-between text-md text-[#EB4949]">
                            <li className="flex gap-2"><BsFuelPumpFill className="text-xl "/>80L</li>
                            <li className="flex gap-2"><Radar className="text-xl "/>Manual</li>
                            <li className="flex gap-2"><MdPeopleAlt className="text-2xl "/>6 People</li>
                        </ul>
                        <ul className="h-[44px] w-[265px] mx-auto flex items-center justify-between ">
                            <li className="h-[44px] w-[116px] text-xl font-bold flex items-center ">$80.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></li>
                            <li className="h-[44px] w-[116px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                        </ul>
                      </ul>
                    </div>         
                </div>
                {/* box 04 */}
                <ul className=" h-[44px] max-w-[734px] ml-[635px] flex items-center justify-between ">
                    <li className="h-[44px] w-[156px] rounded-xl bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] text-xl font-semibold flex items-center justify-center">Show more car</li>
                    <li className="text-[#EB4949] font-semibold">120 Car</li>
                </ul>
            </main>
        </>
    )
}

export default HomeComponent;