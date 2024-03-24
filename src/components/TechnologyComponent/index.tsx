"use client";

import React, { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import SmallScreenTechnologyCard from "./SmallScreenTechnologyCard";
import HeadingComponent from "../HeadingComponent";

export const TaskComp = {
    heading: 'Technologies We Utilize',
    subheading: 'Explore the technologies we leverage to optimize website performance and design.',
    card: [
        {
            image: 'https://cdn-icons-png.flaticon.com/128/5968/5968672.png',
            title: 'BootStrap 5',
            description: 'Utilizing the latest Bootstrap 5 framework, ensuring consistent and responsive design across all devices.'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042',
            title: 'Tailwind CSS',
            description: 'Leveraging Tailwind CSS to streamline styling and maintain scalability while enhancing website aesthetics.'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/875/875209.png',
            title: 'React',
            description: 'Implementing React for building dynamic and interactive user interfaces, enhancing user experience.'
        },
        {
            image: 'https://7b6a3b.n3cdn1.secureserver.net/wp-content/uploads/2023/08/nodejs-1.png?time=1703414730',
            title: 'NodeJS',
            description: 'Employing NodeJS for server-side scripting, ensuring high performance and scalability for web applications.'
        },
        {
            image: 'https://7b6a3b.n3cdn1.secureserver.net/wp-content/uploads/2023/08/angular-1.png?time=1703414730',
            title: 'Angular',
            description: 'Utilizing Angular for building robust and scalable web applications with enhanced modularity and efficiency.'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png',
            title: 'JavaScript',
            description: 'Leveraging JavaScript to add interactivity and functionality, enhancing user engagement and experience.'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/1051/1051277.png',
            title: 'HTML5',
            description: 'Implementing HTML5 to structure web content effectively, ensuring compatibility and accessibility.'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/11516/11516361.png',
            title: 'CSS',
            description: 'Utilizing CSS to style web pages efficiently, ensuring consistency and enhancing visual appeal.'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/919/919831.png',
            title: 'SCSS',
            description: 'Leveraging SCSS to streamline styling workflow, enabling easier maintenance and scalability of stylesheets.'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/919/919854.png',
            title: 'Java',
            description: 'Utilizing Java for building robust and scalable server-side applications, ensuring reliability and performance.'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/5968/5968332.png',
            title: 'PHP',
            description: 'Employing PHP for server-side scripting, enabling dynamic content generation and database interaction.'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/59/59137.png',
            title: 'WordPress',
            description: 'Leveraging WordPress for building flexible and customizable websites, empowering content creators.'
        }
    ]
};


const TechnologyFrame = () => {
	const [showAnother, setShowAnother] = useState<boolean>(
		window.innerWidth <= 1024
	);
	useEffect(() => {
		const handleWindowSize = (event: UIEvent) => {
			if (window.innerWidth <= 1024) {
				console.log("touched");
				setShowAnother(window.innerWidth <= 1024);
			} else {
				setShowAnother(false);
			}
		};
		window.addEventListener("resize", handleWindowSize);

		return () => {
			window.removeEventListener("resize", handleWindowSize);
		};
	}, []);

	return (
		<section className={`w-full h-auto py-7`}>
			<div
				className={`container max-sm:px-5 flex justify-center items-center flex-col`}
			>
                <HeadingComponent title={TaskComp.heading} subtitle={TaskComp.subheading} />
				<div className="w-full h-auto mt-7 grid grid-cols-[repeat(auto-fit,_minmax(350px,1fr))] max-lg:grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] max-sm:grid-cols-[repeat(auto-fit,_minmax(100px,1fr))] gap-5">
					{TaskComp.card.map((items: any, index: number) => {
						return showAnother ? (
							<SmallScreenTechnologyCard
								key={items.title + index}
								image={items.image}
								title={items.title}
								description={items.description}
							/>
						) : (
							<TechnologyCard
								key={items.title + index}
								image={items.image}
								title={items.title}
								description={items.description}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TechnologyFrame;
