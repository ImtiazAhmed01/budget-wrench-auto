import { collectionNamesObj, dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

export default async function ServiceDetailsPage({ params }) {
    const p = await params;
    const serviceCollection = await dbConnect(collectionNamesObj.servicesCollection);
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
    return (
        <div>
            <section className='flex justify-center '>
                <figure className='w-full relative'>
                    <Image src={"/assets/images/checkout/checkout.png"} width={1137} height={300} alt='' />
                    <div className='transparent-layer absolute w-full h-full border-2 border-red-400 top-0'>
                        <div className='w-full h-full flex items-center'>
                            <div>
                                <h1 className='text-white'>Service details</h1>
                            </div>
                        </div>
                    </div>
                </figure>
            </section>
            <p>{p.id}</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

