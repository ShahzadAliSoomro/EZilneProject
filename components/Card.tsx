import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { TfiAngleRight } from "react-icons/tfi";


const CardArray = [
    {
        id: 1,
        image: "/eziline1.jpeg",
        title: "Business Insurance",
        text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    },
    {
        id: 2,
        image: "/eziline2.jpeg",
        title: "Banking Investigation",
        text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    },
    {
        id: 3,
        image: "/eziline1.jpeg",
        title: "Finance Management", 
        text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    },
    {
        id: 4,
        image: "/eziline2.jpeg",
        title: "Banking Investigation",
        text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    }
]
export default function Card() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
  return (
    <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    // <div className="max-w-screen-2xl mx-auto px-4 relative">
    //   <Slider {...settings}>
    //     {CardArray.map((data) => (
     
    //         <div
    //           key={data.id}
    //           className="h-auto px-5 relative overflow-visible"
    //         >
    //           <Image
    //             className="mx-auto rounded-[30px] left-0 right-0"
    //             src={data.image}
    //             alt="Banking Insurance"
    //             width={150}
    //             height={100}
    //           />
    //           <div className="p-12 -mt-[83px] border rounded-3xl hover:text-white duration-300 cursor-pointer z-1 hover:bg-blue-800">
    //             <h2 className="mx-auto text-center mt-40 text-4xl font-bold">
    //               {data.title}
    //             </h2>
    //             <span className="text-2xl text-center text-auto flex mt-10">
    //               {data.text}
    //             </span>
    //             <div className="mt-12 w-12 h-12 mx-auto bg-blue-700 rounded-xl">
    //               <TfiAngleRight
    //                 size={25}
    //                 className="mx-auto relative top-[10px] text-white"
    //               />
    //             </div>
    //           </div>
    //         </div>
 
    //     ))}
    //   </Slider>
    // </div>
    
    // <div className='max-w-screen-2xl mx-auto px-4 relative '>
    //   <Slider {...settings}>
    //     {CardArray.map((item) => (

    //         <div
    //         key={item.id} 
    //         className='p-14 relative w-[400px] rounded-xl shadow-xl
    //     hover:bg-blue-900 hover:text-white duration-300 cursor-pointer'>
    //       <div className=''>
    //         <Image
    //          className="mx-auto  rounded-[30px] absolute -top-8 left-0
    //          right-0 shadow-xl"
    //          src={item.image}
    //          alt="banking Insurance"
    //          width={200}
    //          height={500} />
    //          <h2 className='mx-auto text-center mt-40 text-4xl font-bold'>
    //            {item.title}
    //          </h2>
    //          <span className='text-2xl  text-center text-auto flex mt-10'>
    //             {item.text}
    //          </span>
    //          <div className='mt-12 w-12  h-12 mx-auto bg-blue-900 rounded-xl'>
    //             <TfiAngleRight 
    //             size={25}
    //             className="mx-auto relative top-[10px] text-white"/>
    //          </div>
    //       </div>
    //     </div>
    //     ))}
    //     </Slider>
    // </div>
  )
}
