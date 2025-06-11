// import React from 'react';

// export default async function Services() {
//     const res = await fetch('/services.json');
//     const data = await res.json();
//     return (

//         <div className='grid grid-cols-12'>
//             {JSON.stringify(data)}
//         </div>
//     );
// };

// "use client";

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaArrowRight } from 'react-icons/fa';

// export default function Services() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const serviceCollection = dbConnect("services")
//             const json = await serviceCollection.find({}).toArray();
//             setData(json);
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="grid grid-cols-12 gap-4">
//             {data.map((item) => (
//                 <div
//                     className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border"
//                     key={item._id}
//                 >
//                     <figure className="w-full h-3/4 flex justify-center items-center">
//                         <Image
//                             className="w-full h-full object-fit"
//                             src={item.img}
//                             width={314}
//                             height={108}
//                             alt={item.title}
//                         />
//                     </figure>
//                     <div className="flex justify-between items-center mt-4">
//                         <div>
//                             <h2 className="font-bold text-xl">{item.title}</h2>
//                             <p className="font-bold text-xl text-orange-500">
//                                 Price : ${item.price}
//                             </p>
//                         </div>
//                         <div>
//                             <Link
//                                 href={`/services/${item._id}`}
//                                 className="text-orange-500"
//                             >
//                                 <FaArrowRight />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
// app/services/page.js
// src/app/Components/Services.jsx
import { collectionNamesObj, dbConnect } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default async function Services() {
    let data = [];
    try {
        const serviceCollection = await dbConnect(collectionNamesObj.servicesCollection);
        data = await serviceCollection.find({}).toArray();
    } catch (error) {
        console.error('Error fetching services:', error);
        return <div>Error loading services. Please try again later.</div>;
    }

    return (
        <div className="grid grid-cols-12 gap-4">
            {data.map((item) => (
                <div
                    className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border"
                    key={item._id.toString()}
                >
                    <figure className="w-full h-3/4 flex justify-center items-center">
                        <Image
                            className="w-full h-full object-cover"
                            src={item.img}
                            width={314}
                            height={108}
                            alt={item.title}
                        />
                    </figure>
                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <h2 className="font-bold text-xl">{item.title}</h2>
                            <p className="font-bold text-xl text-orange-500">
                                Price: ${item.price}
                            </p>
                        </div>
                        <div>
                            <Link href={`/services/${item._id}`} className="text-orange-500">
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}