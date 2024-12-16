import { Radar } from "lucide-react";
import Image from "next/image";
import { BiSolidCheckSquare } from "react-icons/bi";
import { BsFuelPumpFill } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { RiHeart3Line } from "react-icons/ri";

function Detailcarcmponent() {
    return (
        <>
            <main className="h-[2016px] max-w-[1440px] mx-auto bg-[#F6F7F9] flex items-center justify-between ">
                {/* main left container */}
                <div className="h-[2016px] w-[360px] space-y-12 bg-white ">
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
                {/* main right  conatiner */}
                <div className="h-[2016px] w-[1016px] mx-auto flex flex-col justify-evenly ">
                    {/* inner 1st */}
                    <div className="h-[508px] w-[1016px] flex justify-between ">
                        {/* 01 img box */}
                        <div className="h-[508px] w-[492px] flex flex-col justify-between ">
                            <ul className="h-[360px] w-[492px] relative">
                                <li className="absolute h-[160px] w-[322px] text-white flex flex-col justify-between mt-[26px] ml-[26px] ">
                                    <p className="text-3xl font-semibold">Sports car with the best design and acceleration</p>
                                    <p className="text-[17px]">Safety and comfort while driving a
                                        futuristic and elegant sports car</p>
                                </li>
                                <li>
                                    <Image className="h-[360px] w-[492px] rounded-lg " src={"/images/detailcar.jpg"} height={360} width={492} alt="image" />
                                </li>
                            </ul>
                            <ul className="h-[124px] w-[492px] flex justify-between">
                                <li className="border-4 border-blue-500 rounded-lg h-[124px] w-[148px] flex items-center justify-center ">
                                    <Image className="h-[108px] w-[132px] rounded-lg " src={"/images/detailcar 1.jpg"} height={108} width={132} alt="image" />
                                </li>
                                <li className="h-[124px] w-[148px] ">

                                    <Image className="h-[124px] w-[148px] rounded-lg " src={"/images/detailcar 2.jpg"} height={124} width={148} alt="image" />
                                </li>
                                <li className="h-[124px] w-[148px] ">
                                    <Image className="h-[124px] w-[148px] rounded-lg " src={"/images/detailcar 3.jpg"} height={124} width={148} alt="image" />
                                </li>
                            </ul>
                        </div>
                        {/* 02 content box */}
                        <div>
                            <ul className="h-[508px] w-[492px] rounded-lg bg-white flex flex-col items-center justify-evenly ">
                                {/* 01 */}
                                <li className="h-[72px] w-[444px]">
                                    <ul className="h-[72px] w-[444px] flex justify-between">
                                        <li className="h-[72px] w-[220px] ">
                                            <span className="text-[35px] font-bold">Nissan GT - R</span>
                                            <ul className="flex items-center justify-between">
                                                <li className="text-[#FBAD39] text-[17px] flex gap-[4px] "><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar className="text-[#ED3F3F]" /></li>
                                                <li className="text-[#ED3F3F]">440+ Reviewer</li>
                                            </ul>
                                        </li>
                                        <li><GoHeartFill className="text-3xl text-[#ED3F3F] cursor-pointer hover:text-blue-500" />
                                        </li>
                                    </ul>
                                </li>
                                {/* 02 */}
                                <li className="h-[120px] w-[444px] text-[#596780] text-xl leading-loose ">
                                    NISMO has become the embodiment of {`Nissan's`} outstanding performance inspired by the most unforgiving proving ground the {`"race track"`}.
                                </li>
                                {/* 03 */}
                                <li className="h-[72px] w-[444px] flex justify-between text-xl font-semibold">
                                    <ul className="h-[72px] w-[200px] text-end flex flex-col justify-between">
                                        <li><span className="text-[#ED3F3F] pr-16">Type Car</span> Sport</li>
                                        <li><span className="text-[#ED3F3F] pr-12">Steering </span>Manual</li>
                                    </ul>
                                    <ul className="h-[72px] w-[200px] text-end flex flex-col justify-between">
                                        <li><span className="text-[#ED3F3F] pr-12">Capacit</span> 2 Person</li>
                                        <li><span className="text-[#ED3F3F] pr-[85px]">Gasoline</span> 70L</li>
                                    </ul>
                                </li>
                                {/* 04 */}
                                <li className="h-[56px] w-[444px] ">
                                    <ul className="h-[56px] w-[444px] mx-auto flex items-center justify-between ">
                                        <li className="h-[56px] w-[200px] text-3xl font-bold  ">
                                            <p>$80.00/ <span className="text-[#EB4949] font-semibold text-lg"> day</span></p>
                                            <p className="line-through text-[#EB4949] font-semibold text-lg">$100.00</p>
                                        </li>
                                        <li className="h-[56px] w-[140px] flex items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-[#EB4949] rounded-md text-lg ">Rent Now</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* inner 2nd */}
                    <div className="bg-white h-[452px] w-[1016px] ">
                        <ul className="h-[452px] w-[968px] mx-auto flex flex-col items-center justify-evenly">
                            <li className="h-[28px] w-[136px] mr-[830px] flex justify-between">
                                <span className="text-xl font-semibold">Reviews</span>
                                <span className="h-[28px] w-[44px] rounded-md bg-blue-500 text-white flex items-center justify-center">13</span>
                            </li>
                            <li className="h-[124px] w-[968px] flex flex-col items-end justify-between ">
                                {/* img & conttent */}
                                <ul className="h-[56px] w-[968px] flex items-center justify-between">
                                    <li className="h-[56px] w-[210px] flex justify-between">
                                        <span>
                                            <Image className="h-[56px] w-[56px] rounded-full " src={"/images/CEO.jpg"} height={56} width={56} alt="image" />
                                        </span>
                                        <span className="h-[56px] w-[138px] flex flex-col justify-between">
                                            <span className="text-xl font-bold">Hasnain Abass</span>
                                            <span className="text-[#ED3F3F] text-sm">CEO at Bukalapak</span>
                                        </span>
                                    </li>
                                    <li className="h-[56px] w-[128px] flex flex-col items-end justify-between ">
                                        <span>21 July 2022</span>
                                        <span className="text-[#FBAD39] text-[17px] flex gap-[4px] "><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar className="text-[#ED3F3F] " /></span>
                                    </li>
                                </ul>
                                {/* pera content */}
                                <div className="h-[56px] w-[896px] text-[#596780] text-md">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition the service provided by the officers is also very friendly and very polite.</div>
                            </li>
                            <li className="h-[124px] w-[968px] flex flex-col items-end justify-between ">
                                {/* img & conttent */}
                                <ul className="h-[56px] w-[968px] flex items-center justify-between">
                                    <li className="h-[56px] w-[210px] flex justify-between">
                                        <span>
                                            <Image className="h-[56px] w-[56px] rounded-full " src={"/images/women.png"} height={56} width={56} alt="image" />
                                        </span>
                                        <span className="h-[56px] w-[138px] flex flex-col justify-between">
                                            <span className="text-xl font-bold">Skylar Dias</span>
                                            <span className="text-[#ED3F3F] text-sm">CEO at Amazon</span>
                                        </span>
                                    </li>
                                    <li className="h-[56px] w-[128px] flex flex-col items-end justify-between ">
                                        <span>22 July 2022</span>
                                        <span className="text-[#FBAD39] text-[17px] flex gap-[4px] "><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar className="text-[#ED3F3F] " /></span>
                                    </li>
                                </ul>
                                {/* pera content */}
                                <div className="h-[56px] w-[896px] text-[#596780] text-md">We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition the service provided by the officers is also very friendly and very polite.</div>
                            </li>
                            <li className="h-[44px] w-[132px] ">
                                <select name="pakistan" id="#" className="h-[44px] w-[132px] cursor-pointer text-lg font-semibold border-none">
                                    <option value="Pakistan">Show All</option>
                                    <option value="Pakistan">Pakistan</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    {/* inner 3rd */}
                    <div className="h-[448px] w-[1016px] flex flex-col justify-between">
                        {/* <div className="border-2 h-[44px] w-[1016px] "></div> */}
                        <ul className="h-[44px] w-[1016px] flex items-center justify-between px-5">
                            <li className="text-[#EB4949] font-semibold">Recent Car</li>
                            <li className="text-blue-500 font-semibold">View All</li>
                        </ul>
                        <div className="h-[388px] w-[1016px] flex justify-between flex-wrap ">
                            {/* img box 01 */}
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
                            {/* img box 02 */}
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
                            {/* img box 03 */}
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
                    </div>
                    {/* inner 4th */}
                    <div className="h-[448px] w-[1016px] flex flex-col justify-between">
                        <ul className="h-[44px] w-[1016px] flex items-center justify-between px-5">
                            <li className="text-[#EB4949] font-semibold">Recomendation Car</li>
                            <li className="text-blue-500 font-semibold">View All</li>
                        </ul>
                        <div className="h-[388px] w-[1016px] flex justify-between flex-wrap ">
                            {/* img box 01 */}
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
                            {/* img box 02 */}
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
                            {/* img box 03 */}
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
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Detailcarcmponent;