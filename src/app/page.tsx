'use client'
import {useState} from 'react';
import AnimatedCursor from "react-animated-cursor";
import {AccountCircle, ContactPhone, FolderSpecial, Home} from "@mui/icons-material";
import "animate.css/animate.compat.css"
import HomePage from "@/app/(page)/home";
import About from "@/app/(page)/about";
import Project from "@/app/(page)/project";
import Contact from "@/app/(page)/contact";
import Image from "next/image";

export default function Page() {
    const colors = [
        "rgba(255,172,18,0.2)",
        "rgb(119,225,109)",
        "rgba(164,191,217,0.2)",
        "rgba(95,194,194,0.2)",
        "rgba(194,121,121,0.2)"
    ];
    const [index, alterIndex] = useState(0);

    const nextPage = () => {
        var newIndex = index+1;
        if(newIndex>colors.length){
            newIndex = 0;
        }
        alterIndex(newIndex);
    };
    const previousPage = () =>{
        var newIndex = index-1;
        if(newIndex<0){
            newIndex = 0;
        }
        alterIndex(newIndex);
    };

    const [activeNavbarIndex, changeActiveNavbar] = useState(0);

    const navbarHandler = (e: any) =>
    {
        const { scrollTop } = e.target;
        var currentScroll = Math.round(scrollTop/961);
        if(activeNavbarIndex!=currentScroll){
            changeActiveNavbar(currentScroll)
        }
    }
    const navBarActiveColor = "rgb(255,255,255)";

    const navigation = [
        { name: 'Home', href: '#home', color: activeNavbarIndex==0 ? navBarActiveColor : "", icon: <Home sx={{ fontSize: 40 }} color={activeNavbarIndex==0 ? "inherit" : undefined} className="me-2"/> },
        { name: 'About Me', href: '#about', color: activeNavbarIndex==1 ? navBarActiveColor : "", icon: <AccountCircle sx={{ fontSize: 40 }} color={activeNavbarIndex==1 ? "inherit" : undefined}  className="me-2"/> },
        { name: 'Projects', href: '#project', color: activeNavbarIndex==2 ? navBarActiveColor : "", icon: <FolderSpecial sx={{ fontSize: 40 }}  color={activeNavbarIndex==2 ? "inherit" : undefined} className="me-2"/> },
        { name: 'Contact', href: '#contact', color: activeNavbarIndex==3 ? navBarActiveColor : "", icon: <ContactPhone sx={{ fontSize: 40 }} color={activeNavbarIndex==3 ? "inherit" : undefined}  className="me-2"/> },
    ]

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }




    return (
        <div id="mainContainer" className="main-container" onScroll={navbarHandler}>

            <div className="main-navbar">
                <div className="" style={{backgroundColor:'rgba(96,96,96,0.32)'}}>
                    <Image src='/brand_me_white.png' className="mx-auto" width={150} height={150} alt={'brand'}></Image>
                </div>
                <ul className="">
                    {navigation.map((item, index) => (
                        <li key={item.name} className="p-5 w-full inline-block">
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                        activeNavbarIndex == index ? 'navbar-active' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium p-5 w-full block float-left'
                                )}
                                aria-current={activeNavbarIndex == index ? 'page' : undefined}
                            >
                                {item.icon}
                                <span className={'uppercase font-extrabold'}
                                      style={{color: item.color}}>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="subContainer" className="container-xl main">
                <AnimatedCursor
                    color="119, 225,109"
                    outerSize={50}
                    outerScale={2}
                    trailingSpeed={5}
                    showSystemCursor={true}
                    innerSize={0}
                />
                <section id={'home'} className="h-screen">
                    <HomePage/>
                </section>

                <section id={'about'} className="h-screen">
                    <About/>
                </section>

                <section id={'project'} className="h-screen">
                    <Project/>
                </section>

                <section id={'contact'} className="h-screen section">
                    <Contact/>
                </section>
            </div>
        </div>


    );
}