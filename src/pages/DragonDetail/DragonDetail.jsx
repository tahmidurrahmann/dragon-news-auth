import {  useLoaderData, useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import Detail from "./Detail";

const DragonDetail = () => {

    const [details, setDetails] = useState({});

    const news = useLoaderData();
    const { id } = useParams();
    
    useEffect(() => {
        const singleNews = news.find(aNews => aNews._id == id);
        setDetails(singleNews);
    }, [id, news])

console.log(details);
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                    {
                        <Detail detail={details}></Detail>
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default DragonDetail;