'use client'
import React from 'react';
import Slider from "react-slick";
import Image from "next/image";


export default function Myhomeclub() {
    var settings = {
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        arrows:false,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:4000
    };

    var myhomeclub = [
        "/project/1.png",
        "/project/2.png",
        "/project/3.png",
        "/project/4.png",
        "/project/5.png",
        "/project/6.png",
    ];
    return (
        <Slider {...settings} className="w-auto">

            {myhomeclub.map((x, i) =>
                <div key={i}>
                    <div>
                        {/*<Image src={"/project/"+{x}+".png"} className="mx-auto"*/}
                        <Image src={x} className="mx-auto"
                               width={0}
                               height={0}
                               style={{width: '100%', height: 'auto'}}
                               sizes="100vw" alt={'project-'+i}></Image>
                    </div>
                </div>
            )}

        </Slider>
    );
}