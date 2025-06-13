import { authOptions } from "@/lib/authOptions";
import { collectionNamesObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection)

    const p = await params;
    const query = { _id: new ObjectId(p.id) }
    const session = await getServerSession(authOptions)
    const currentBooking = await bookingCollection.deleteOne(query);

    const isOwnerOk = session?.user?.email == currentBooking.email
    if (isOwnerOk) {
        const deleteResponse = await serviceCollection.deleteOne(query);
        revalidatePath('/my-bookings')
        return NextResponse.json(deleteResponse)
    }
    else {
        return NextResponse.json({ success: false, message: "Forbidden Action" }, { status: 401 })
    }


    // const serviceCollection = await dbConnect(collectionNamesObj.servicesCollection);


}

export const GET = async (req, { params }) => {
    const p = await params;

    const serviceCollection = await dbConnect(collectionNamesObj.servicesCollection);
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(data)
}
