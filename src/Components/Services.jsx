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

"use client"; // Only for app directory in Next.js

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Services() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/services.json');
            const json = await res.json();
            setData(json);
        };

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-12">
            {data.map((item) => {
                return <div className='sm:col-span-12 md:col-span-6 lg:col-span-4'>
                    <Image src={item.img} width={314} height={208} />
                </div>
            })}
        </div>
    );
}
