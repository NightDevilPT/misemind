interface IProps {
	text: string;
	icons: any;
}

export const ContactCards = ({ text, icons }: IProps) => {
	return (
		<div className={`w-full h-auto flex justify-start items-start gap-3`}>
			<div className={`w-5 h-5 text-[#22c55e]`}>{icons}</div>
			<h1 className="flex-1 text-primary-fg text-sm">{text}</h1>
		</div>
	);
};
