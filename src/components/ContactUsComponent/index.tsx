import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { ContactCards } from "./ContactCards";

const contactCards = [
	{
		text: `1105 A 11th Floor Pearls
		Best Heights 2
		NSP, DELHI 110034 INDIA`,
		icons: <FaLocationDot className={`w-full h-full`} />,
	},
	{
		text: `hr@misemind.com, info@misemind.com`,
		icons: <MdEmail className={`w-full h-full`} />,
	},
	{
		text: `+91-98689-08193`,
		icons: <FaPhoneAlt className={`w-full h-full`} />,
	},
	{
		text: `Monday–Saturday: 10:00AM–7:00PM
		Sunday: CLOSED`,
		icons: <AiFillClockCircle className={`w-full h-full`} />,
	},
];

const ContactUsComponent = () => {
	return (
		<div
			className={`container h-auto grid grid-cols-1 gap-1 my-10 max-sm:px-5`}
		>
			<h1
				className={`w-full h-auto text-3xl font-bold text-primary-fg font-mont  relative after:w-16 after:h-1 after:content-[''] after:absolute after:rounded-full after:bg-red-500 after:left-0 after:-bottom-1`}
			>
				Contact Us
			</h1>
			<span
				className={`w-full h-auto my-5 text-base font-mont text-secondary-fg`}
			>
				Please let us know if you have a question, want to leave a
				comment, or would like further information about Misemind
			</span>
			<div className={`h-auto grid grid-cols-10 gap-8 mt-5`}>
				<div
					className={`w-full h-auto col-span-6 max-lg:col-span-full grid grid-cols-2 max-sm:grid-cols-1 gap-5`}
				>
					{contactCards?.map((items: any, index: number) => (
						<ContactCards
							key={items.text + "-" + index}
							text={items.text}
							icons={items.icons}
						/>
					))}
					<div className={`w-full col-span-full h-80`}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.878507466889!2d77.14880467601813!3d28.69328068131854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d3030eeabd%3A0x48bb592066ac53a9!2sMISEMIND%20TECHNOLOGIES%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1711355326572!5m2!1sen!2sin"
							className={`w-full h-full`}
							loading="lazy"
						></iframe>
					</div>
				</div>
				<div
					className={`h-auto col-span-4 max-lg:col-span-full flex justify-start items-start flex-col rounded`}
				>
					<h1 className={`text-2xl font-mont text-primary-fg`}>
						Talk to us
					</h1>
					<ContactUsForm />
				</div>
			</div>
		</div>
	);
};

export default ContactUsComponent;

export const ContactUsForm = () => {
	return (
		<form className={`w-full h-auto grid grid-cols-1 gap-3 mt-5`}>
			<input
				type="text"
				className={`w-full font-mont text-primary-fg h-auto p-3 px-4 rounded outline-none bg-secondary-bg placeholder:text-secondary-fg`}
				placeholder="Firstname"
			/>
			<input
				type="text"
				className={`w-full font-mont text-primary-fg h-auto p-3 px-4 rounded outline-none bg-secondary-bg placeholder:text-secondary-fg`}
				placeholder="Lastname"
			/>
			<input
				type="text"
				className={`w-full font-mont text-primary-fg h-auto p-3 px-4 rounded outline-none bg-secondary-bg placeholder:text-secondary-fg`}
				placeholder="Email-ID"
			/>
			<textarea className={`w-full h-20 font-mont text-primary-fg p-3 px-4 rounded outline-none bg-secondary-bg placeholder:text-secondary-fg`} placeholder="Description"></textarea>
			<button className={`w-full h-auto flex justify-center items-center bg-primary-fg text-primary-bg p-3 rounded font-bold`}>Submit</button>
		</form>
	);
};
