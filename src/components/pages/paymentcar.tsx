import Image from "next/image";
import { FaRegCircleDot, FaRegStar, FaStar } from "react-icons/fa6";

function Paymentcarcomponent() {
    return (
        <>
            <main className="h-[2240px] max-w-[1440px] mx-auto bg-[#F6F7F9] flex items-center justify-evenly">
                {/* main billing info section  01*/}
                <div className="h-[2176px] w-[852px] flex flex-col justify-between  ">
                    {/* inner box  01 & billing info */}
                    <div className="h-[336px] w-[852px] rounded-xl bg-white  flex flex-col items-center justify-evenly">
                        {/* billing info */}
                        <ul className="h-[48px] w-[804px] flex items-end justify-between ">
                            <li>
                                <p className="text-2xl font-bold">Billing Info</p>
                                <span className="text-[#90A3BF] ">Please enter your billing info</span>
                            </li>
                            <li className="text-[#90A3BF] ">Step 1 of 4</li>
                        </ul>
                        {/* information */}
                        <ul className="h-[230px] w-[804px] flex items-end justify-between flex-wrap ">
                            <li className="h-[92px] w-[386px] flex flex-col justify-between">
                                <span className="text-xl font-semibold ">Name</span>
                                <input className="h-[56px] w-[386px] rounded-lg bg-[#F6F7F9] text-[#90A3BF] text-xl pl-10 " type="text" name="name" placeholder="Your name" />
                            </li>
                            <li className="h-[92px] w-[386px] flex flex-col justify-between">
                                <span className="text-xl font-semibold ">Phone Number</span>
                                <input className="h-[56px] w-[386px] rounded-lg bg-[#F6F7F9] text-[#90A3BF] text-xl pl-10 " type="number" name="name" placeholder="Phone number" />
                            </li>
                            <li className="h-[92px] w-[386px] flex flex-col justify-between">
                                <span className="text-xl font-semibold ">Address</span>
                                <input className="h-[56px] w-[386px] rounded-lg bg-[#F6F7F9] text-[#90A3BF] text-xl pl-10 " type="text" name="name" placeholder="Address" />
                            </li>
                            <li className="h-[92px] w-[386px] flex flex-col justify-between">
                                <span className="text-xl font-semibold ">Town / City</span>
                                <input className="h-[56px] w-[386px] rounded-lg bg-[#F6F7F9] text-[#90A3BF] text-xl pl-10 " type="text" name="name" placeholder="Town or city" />
                            </li>
                        </ul>
                    </div>
                    {/* inner box 02 */}
                    <div className="h-[664px] w-[852px] ">
                        <ul className="h-[664px] w-[852px] rounded-xl bg-white flex flex-col items-center justify-evenly ">
                            {/* section o1 */}
                            <li className="h-[48px] w-[804px]"><ul className="h-[48px] w-[804px] flex items-end justify-between ">
                                <li>
                                    <p className="text-2xl font-bold">Rental Info</p>
                                    <span className="text-[#90A3BF] ">Please select your rental date</span>
                                </li>
                                <li className="text-[#90A3BF] ">Step 2 of 4</li>
                            </ul>
                            </li>
                            {/* section o2 */}
                            <li className="h-[260px] w-[804px]">
                                <span>
                                    <ul className="flex items-center gap-2">
                                        <li className="text-blue-500 cursor-pointer hover:text-[#EB4949]"><FaRegCircleDot /></li>
                                        <li className="text-xl font-semibold">Pick - Up</li>
                                    </ul>
                                </span>
                                <ul className="h-[230px] w-[804px] flex items-end justify-between flex-wrap ">
                                    <li className="h-[92px] w-[386px] flex flex-col justify-between">
                                        <span className="text-xl font-semibold ">Locations</span>
                                        <span className="h-[56px] w-[386px] rounded-lg bg-[#F6F7F9]">
                                            <select className="h-[56px] w-[366px] rounded-lg bg-[#F6F7F9] text-[#90A3BF] text-xl pl-10">
                                                <option value="date">Select your city</option>
                                                <option value="karachi">Karachi</option>
                                                <option value="RYK">Rahim Yar Khan</option>
                                                <option value="lahore">Lahore</option>
                                                <option value="islamabad">Islamabad</option>
                                            </select>
                                        </span>
                                    </li>
                                    <li className="h-[92px] w-[386px] flex flex-col justify-between">
                                        <span className="text-xl font-semibold ">Date</span>
                                        <span className="h-[56px] w-[386px] rounded-lg bg-[#F6F7F9]">
                                            <select className="h-[56px] w-[366px] rounded-lg bg-[#F6F7F9] text-[#90A3BF] text-xl pl-10">
                                                <option value="date">Select your date </option>
                                            </select>
                                        </span>
                                    </li>
                                    <li className="h-[92px] w-[386px] flex flex-col justify-between">
                                        <span className="text-xl font-semibold ">Time</span>
                                        <span className="h-[56px] w-[386px] rounded-lg bg-[#F6F7F9]">
                                            <select className="h-[56px] w-[366px] rounded-lg bg-[#F6F7F9] text-[#90A3BF] text-xl pl-10">
                                                <option value="name">Select your time</option>
                                                <option value="Hours">Hours</option>
                                                <option value="minutes">Minutes</option>
                                                <option value="secconds">seconds</option>
                                            </select>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            {/* section o3 */}
                            <li className="h-[260px] w-[804px]">
                                <span>
                                    <ul className="flex items-center gap-2">
                                        <li className="text-[#5CAFFC] cursor-pointer hover:text-[#EB4949]"><FaRegCircleDot /></li>
                                        <li className="text-xl font-semibold">Drop - Off</li>
                                    </ul>
                                </span>
                                <ul className="h-[230px] w-[804px] flex items-end justify-between flex-wrap ">
                                    <li className="h-[92px] w-[386px] flex flex-col justify-between">
                                        <span className="text-xl font-semibold ">Locations</span>
                                        <span className="h-[56px] w-[386px] rounded-lg bg-[#F6F7F9]">
                                            <select className="h-[56px] w-[366px] rounded-lg bg-[#F6F7F9] text-[#90A3BF] text-xl pl-10">
                                                <option value="date">Select your city</option>
                                                <option value="karachi">Karachi</option>
                                                <option value="RYK">Rahim Yar Khan</option>
                                                <option value="lahore">Lahore</option>
                                                <option value="islamabad">Islamabad</option>
                                            </select>
                                        </span>
                                    </li>
                                    <li className="h-[92px] w-[386px] flex flex-col justify-between">
                                        <span className="text-xl font-semibold ">Date</span>
                                        <span className="h-[56px] w-[386px] rounded-lg bg-[#F6F7F9]">
                                            <select className="h-[56px] w-[366px] rounded-lg bg-[#F6F7F9] text-[#90A3BF] text-xl pl-10">
                                                <option value="date">Select your date </option>
                                            </select>
                                        </span>
                                    </li>
                                    <li className="h-[92px] w-[386px] flex flex-col justify-between">
                                        <span className="text-xl font-semibold ">Time</span>
                                        <span className="h-[56px] w-[386px] rounded-lg bg-[#F6F7F9]">
                                            <select className="h-[56px] w-[366px] rounded-lg bg-[#F6F7F9] text-[#90A3BF] text-xl pl-10">
                                                <option value="name">Select your time</option>
                                                <option value="Hours">Hours</option>
                                                <option value="minutes">Minutes</option>
                                                <option value="secconds">seconds</option>
                                            </select>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* inner box 03 */}
                    <div className="h-[596px] w-[852px] rounded-xl bg-white flex flex-col items-center justify-evenly">
                        {/* 01 */}
                        <div className="h-[48px] w-[804px]">
                            <ul className="h-[48px] w-[804px] flex items-end justify-between ">
                                <li>
                                    <p className="text-2xl font-bold">Payment Method</p>
                                    <span className="text-[#90A3BF] ">Please enter your payment method</span>
                                </li>
                                <li className="text-[#90A3BF] ">Step 1 of 4</li>
                            </ul>
                        </div>
                        {/* 02 */}
                        <div className="h-[308px] w-[804px]  bg-[#F6F7F9] rounded-xl flex flex-col items-center justify-evenly">
                            <span className="h-[20px] w-[804px] flex items-center justify-between px-7">
                                <ul className="flex items-center gap-2">
                                    <li className="text-blue-500 cursor-pointer hover:text-[#EB4949]"><FaRegCircleDot /></li>
                                    <li className="text-xl font-semibold">Credit Card</li>
                                </ul>
                                <Image src={"/images/visa.png"} height={20} width={92} alt="VISA" />
                            </span>
                            <ul className="h-[230px] w-[804px] flex items-end justify-evenly flex-wrap ">
                                <li className="h-[92px] w-[362px] flex flex-col justify-between">
                                    <span className="text-xl font-semibold ">Card Number</span>
                                    <input className="h-[56px] w-[362px] rounded-lg bg-white text-[#90A3BF] text-xl pl-10 " type="text" name="name" placeholder="Card number" />
                                </li>
                                <li className="h-[92px] w-[362px] flex flex-col justify-between">
                                    <span className="text-xl font-semibold ">Expration Date</span>
                                    <input className="h-[56px] w-[362px] rounded-lg bg-white text-[#90A3BF] text-xl pl-10 " type="text" name="name" placeholder="DD / MM / YY" />
                                </li>
                                <li className="h-[92px] w-[362px] flex flex-col justify-between">
                                    <span className="text-xl font-semibold ">Card Holder</span>
                                    <input className="h-[56px] w-[362px] rounded-lg bg-white text-[#90A3BF] text-xl pl-10 " type="text" name="name" placeholder="Card holder" />
                                </li>
                                <li className="h-[92px] w-[362px] flex flex-col justify-between">
                                    <span className="text-xl font-semibold ">CVC</span>
                                    <input className="h-[56px] w-[362px] rounded-lg bg-white text-[#90A3BF] text-xl pl-10 " type="text" name="name" placeholder="CVC" />
                                </li>

                            </ul>
                        </div>
                        {/* 03 */}
                        <div className="h-[56px] w-[804px] flex items-center bg-[#F6F7F9] rounded-xl">
                            <span className="h-[20px] w-[804px] flex items-center justify-between px-6">
                                <label className="flex items-center gap-4 text-xl font-semibold">
                                    <input type="radio" name="PayPal" value="PayPal" />PayPal</label>
                                <Image src={"/images/PayPal.png"} height={24} width={100} alt="PayPal" />
                            </span>
                        </div>
                        {/* 04 */}
                        <div className="h-[56px] w-[804px] flex items-center bg-[#F6F7F9] rounded-xl">
                            <span className="h-[20px] w-[804px] flex items-center justify-between px-6">
                                <label className="flex items-center gap-4 text-xl font-semibold">
                                    <input type="radio" name="Bitcoin" value="Bitcoin" />Bitcoin</label>
                                <Image src={"/images/Bitcoin.png"} height={20} width={94} alt="Bitcoin" />
                            </span>
                        </div>
                    </div>
                    {/* inner box 04 */}
                    <div className="h-[484px] w-[852px] rounded-xl bg-white flex flex-col justify-evenly">
                        {/* o1 */}
                        <div className="h-[48px] w-[804px] mx-auto">
                            <ul className="h-[48px] w-[804px] flex items-end justify-between ">
                                <li>
                                    <p className="text-2xl font-bold">Confirmation</p>
                                    <span className="text-[#90A3BF] ">We are getting to the end. Just few clicks and your rental is ready!</span>
                                </li>
                                <li className="text-[#90A3BF] ">Step 4 of 4</li>
                            </ul>
                        </div>
                        {/* 02 */}
                        <div className="h-[136px] w-[804px] mx-auto flex flex-col justify-between">
                            <span className="h-[56px] w-[804px] flex items-center px-6 bg-[#F6F7F9]  rounded-lg ">
                                <label className="flex gap-4 text-[#1F2544]  text-lg font-semibold">
                                    <input type="checkbox" name="intersts" value="intrests" />I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                            </span>
                            <span className="h-[56px] w-[804px] flex items-center px-6 bg-[#F6F7F9] rounded-lg ">
                                <label className="flex gap-4 text-[#1F2544]  text-lg font-semibold">
                                    <input type="checkbox" name="intersts" value="intrests" />I agree with our terms and conditions and privacy policy.</label>
                            </span>

                        </div>
                        {/* 03 */}
                        <div className="h-[56px] w-[140px] ml-6 cursor-pointer hover:bg-[#EB4949]  rounded-xl bg-blue-500 text-white text-xl font-semibold flex items-center justify-center">Rent Now</div>
                        {/* 04 */}
                        <div className="h-[100px] w-[548px] ml-6">
                            <ul className="h-[100px] w-[548px] flex flex-col justify-between `">
                                <li className="h-[32px] w-[32px] ">
                                    <Image src={"/images/ic-security-safety.png"} height={32} width={32} alt="saifty-icon" />
                                </li>
                                <li className="h-[52px] flex flex-col justify-between ">
                                    <p className="text- font-semibold">All your data are safe</p>
                                    <span className="text-[#90A3BF] text-sm ">We are using the most advanced security to provide you the best experience ever.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* main summery section  02*/}
                <div className="h-[2176px] w-[492px]">
                    {/* inner box */}
                    <ul className="h-[560px] w-[492px] rounded-xl bg-white flex flex-col items-center justify-evenly ">
                        {/* summary */}
                        <li className="h-[76px] w-[444px]">
                            <p className="text-2xl font-bold">Rental Summary</p>
                            <span className="text-[#90A3BF]">Prices may change depending on the length of the rental and the price of your rental car.</span>
                        </li>
                        {/* image & reviewers */}
                        <li className="h-[108px] w-[444px] flex items-center justify-start gap-5">
                            <span><Image className="rounded-xl" src={"/images/detailcar 1.jpg"} height={108} width={132} alt="car" /> </span>
                            <span className="h-[72px] w-[230px] ">
                                <span className="text-[35px] font-bold">Nissan GT - R</span>
                                <ul className="flex items-center justify-between">
                                    <li className="text-[#FBAD39] text-[17px] flex gap-[4px] "><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar className="text-[#ED3F3F]" /></li>
                                    <li className="text-[#ED3F3F]">440+ Reviewer</li>
                                </ul>

                            </span>
                        </li>
                        {/* hr line */}
                        <li className="h-[1px] w-[444px] bg-[#90A3BF]"></li>
                        {/* Subtotal */}
                        <li className="h-[20px] w-[444px] flex items-center justify-between">
                            <span className="text-[#90A3BF] text-xl ">Subtotal</span>
                            <span className="text-2xl font-semibold ">$80.00</span>
                        </li>
                        {/* Tax */}
                        <li className="h-[20px] w-[444px] flex items-center justify-between">
                            <span className="text-[#90A3BF] text-xl ">Tax</span>
                            <span className="text-2xl font-semibold ">$0</span>
                        </li>
                        {/* Apply now */}
                        <li className="h-[56px] w-[444px] bg-[#F6F7F9] rounded-xl flex items-center justify-between px-10">
                            <span className="text-[#90A3BF] text-xl ">Apply promo code</span>
                            <span className="text-2xl font-semibold cursor-pointer hover:text-[#ED3F3F] ">Apply now</span>
                        </li>
                        {/* Total Rental Price */}
                        <li className="h-[48px] w-[444px] flex items-center justify-between">
                            <ul>
                                <li className="text-2xl font-bold">Total Rental Price</li>
                                <li className="text-[#90A3BF]">Overall price and includes rental discount</li>
                            </ul>
                            <span className="text-3xl font-bold">$80.00</span>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Paymentcarcomponent;