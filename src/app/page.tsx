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


    const [activeNavbarIndex, changeActiveNavbar] = useState(0);
    const [hoverNavbarIndex, changeHoverActiveNavbar] = useState(-1);

    const navbarHandler = (e: any) =>
    {
        const { scrollTop } = e.target;
        var currentScroll = Math.round(scrollTop/961);
        if(activeNavbarIndex!=currentScroll){
            changeActiveNavbar(currentScroll)
        }
    }
    const navBarActiveColor = "rgb(255,255,255)";

    const navbarMouseInHandler = (event: any) =>
    {
        changeHoverActiveNavbar(event.target.getAttribute('data-index'));
    }

    const navbarMouseLeaveHandler = (event: any) =>
    {
        changeHoverActiveNavbar(-1);
    }


    const navigation = [
        { name: 'Home', href: '#home', color: activeNavbarIndex==0 || hoverNavbarIndex ==0 ? navBarActiveColor : "", icon: <Home sx={{ fontSize: 40 }} color={activeNavbarIndex==0 ? "inherit" : undefined} className="navbar-icon"/> },
        { name: 'About Me', href: '#about', color: activeNavbarIndex==1 || hoverNavbarIndex ==1  ? navBarActiveColor : "", icon: <AccountCircle sx={{ fontSize: 40 }} color={activeNavbarIndex==1 ? "inherit" : undefined}  className="navbar-icon"/> },
        { name: 'Projects', href: '#project', color: activeNavbarIndex==2 || hoverNavbarIndex ==2  ? navBarActiveColor : "", icon: <FolderSpecial sx={{ fontSize: 40 }}  color={activeNavbarIndex==2 ? "inherit" : undefined} className="navbar-icon"/> },
        { name: 'Contact', href: '#contact', color: activeNavbarIndex==3 || hoverNavbarIndex ==3  ? navBarActiveColor : "", icon: <ContactPhone sx={{ fontSize: 40 }} color={activeNavbarIndex==3 ? "inherit" : undefined}  className="navbar-icon"/> },
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
                <ul className="p-5">
                    {navigation.map((item, index) => (
                        <li key={item.name} className="w-full inline-block" onMouseEnter={navbarMouseInHandler} onMouseLeave={navbarMouseLeaveHandler}>
                            <a

                                key={item.name}
                                href={item.href}
                                className={classNames(
                                        activeNavbarIndex == index || hoverNavbarIndex == index ? 'navbar-active' : 'navbar-inactive',
                                    'navbar'
                                )}
                                aria-current={activeNavbarIndex == index || hoverNavbarIndex == index ? 'page' : undefined}
                            >
                                <div className={'flex'} style={{height:'60px'}}>
                                    <div
                                        data-index={index}
                                        className={classNames(
                                        activeNavbarIndex == index || hoverNavbarIndex == index ? 'navbar-icon-active' : 'navbar-icon-inactive',
                                        'place-content-center text-center'
                                    )} style={{width:'60px'}}>
                                        {item.icon}
                                    </div>
                                    <div data-index={index} className={'flex-grow place-content-center'}>
                                    <span data-index={index} className={'uppercase font-extrabold ms-2'} style={{color: item.color}}>
                                    {item.name}
                                </span>
                                    </div>
                                </div>

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