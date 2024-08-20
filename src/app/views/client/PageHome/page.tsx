"use client";
import NewArrivalsFirstPage from "./NewArrivalsFirst/page";
import NewArrivalsSecondPage from "./NewArrivalsSecond/page";
import BannerSaleOffPage from "./BannerSaleOff/page";
import AmbassadorsPage from "./Ambassadors/page";
import TopSellerPage from "./TopSellers/page";
import { getData } from "../../../../services/api";
import api from "@/types/api";
import React, { useState, useEffect } from "react";

export default function PageHomePage() {
    const [data, setData] = useState<api[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                setData(result as api[]);
                console.log(result);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {/* {data.map((d, i) => (
                <div key={i}>
                    <p>{d.id}</p>
                </div>
            ))} */}
            <NewArrivalsFirstPage />
            <NewArrivalsSecondPage />
            <BannerSaleOffPage />
            <TopSellerPage />
            <BannerSaleOffPage />
            <AmbassadorsPage />
        </div>
    );
}
