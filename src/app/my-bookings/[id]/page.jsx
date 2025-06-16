
import BookingUpdateForm from "@/Components/forms/BookingUpdateForm";
import { headers } from "next/headers";
import React from "react";

export default async function UpdateBookingPage({ params }) {
    const p = await params;
    const res = await fetch(
        // `https://nextjs-car-doctor-kappa.vercel.app/api/my-bookings/${p.id}`,
        `http://localhost:3000/api/my-bookings/${p.id}`, {


        headers: new headers(await headers()),
    }
    );
    const data = await res.json();
    return (
        <div>
            <BookingUpdateForm data={data} />
        </div>
    );
}