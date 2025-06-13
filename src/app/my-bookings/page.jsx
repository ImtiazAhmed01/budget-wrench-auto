"use client"
import MyBookingsTable from '@/Components/tables/MyBookingsTable';
import React, { useEffect, useState } from 'react';

export default function MyBookingsPages() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchMyBookings = async () => {
            const res = await fetch('http://localhost:3000/api/service')
            const d = await res.json();
            setData(d);
        }
        fetchMyBookings();
    }, [])
    return (
        <div>
            <MyBookingsTable data={data}></MyBookingsTable>
        </div>
    );
};

