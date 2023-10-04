import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg1 from '../../../src/assets/1.png'
import bg2 from '../../../src/assets/2.png'
import bg3 from '../../../src/assets/3.png'
import moment from 'moment';
import frame from '../../../src/assets/Frame.svg'

const LeftSideNav = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <h1 className="text-xl font-semibold text-[#403F3F] mb-5">All Category</h1>
            <h1 className="text-xl font-semibold text-[#403F3F] bg-[#E7E7E7] py-4 text-center rounded-lg mb-6">National News</h1>
            <div className="space-y-6">
                {
                    category.map(category => <Link
                        to={`/category/${category.id}`}
                        className="block text-center text-xl text-[#9F9F9F] font-medium"
                        key={category.id}>
                        {category.name}</Link>)
                }
            </div>
            <div className="space-y-5 flex justify-center">
                <div>
                    <div className="space-y-5 my-5">
                            <img className="mx-auto w-full" src={bg1} alt="" />
                        <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="flex gap-3">
                            <span>Sports</span> <img src={frame} alt="" />
                            <p>{moment().format("dddd, MMM D, YYYY")}</p>
                        </div>
                    </div>
                    <div className="space-y-5 my-5">
                        <img className="mx-auto w-full" src={bg2} alt="" />
                        <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="flex gap-3">
                            <span>Sports</span> <img src={frame} alt="" />
                            <p>{moment().format("dddd, MMM D, YYYY")}</p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <img className="mx-auto w-full" src={bg3} alt="" />
                        <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="flex gap-3">
                            <span>Sports</span> <img src={frame} alt="" />
                            <p>{moment().format("dddd, MMM D, YYYY")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;