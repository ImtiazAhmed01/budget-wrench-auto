// "use client"
import MyBookingsTable from '@/Components/tables/MyBookingsTable';
import { headers } from 'next/headers';
// import React, { useEffect, useState } from 'react';
const fetchMyBookings = async () => {
    const res = await fetch('http://localhost:3000/api/service', {
        headers: headers(),
    })
    const d = await res.json();
    return d;
}
export default async function MyBookingsPages() {
    // const [data, setData] = useState([])
    // useEffect(() => {

    //     fetchMyBookings();
    // }, [])
    const data = await fetchMyBookings();
    return (
        <div>
            <MyBookingsTable data={data}></MyBookingsTable>
        </div>
    );
};

