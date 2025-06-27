
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
        <div>
            <section className="flex justify-center mb-8">
                <figure className="relative">
                    <Image
                        src={"/assets/images/checkout/checkout.png"}
                        width={1337}
                        height={300}
                        alt={"banner"}
                    />
                    <div className="transparent-layer overlay-bg absolute w-full h-full border-2 border-red-400 top-0">
                        <div className="w-full h-full font-bold text-2xl flex items-center ps-16">
                            <div>
                                <h1 className="text-white">{data.title}</h1>
                            </div>
                        </div>
                    </div>
                </figure>
            </section>
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
        </div>
    );
}