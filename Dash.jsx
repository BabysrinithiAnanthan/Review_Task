import React from 'react';
import { Home, Store, ChartColumnStacked, BarChart3, CircleStar, LogOut, BadgeInfo, ShieldUser } from "lucide-react";
import { Search, Bell, ChevronDown } from "lucide-react";
import profileImg from "./assets/logo.png";
import graph from "./assets/Graph.png";
import graph1 from "./assets/Graph!!.png";
import { useNavigate } from "react-router-dom";



const Dash = () => {

    const navigate = useNavigate();
    const menuItems = [
        { label: "Dashboard", icon: Home, path: "/Dashboard" },
        { label: "Vendors", icon: Store, path: "/Form" },
        { label: "Customers", icon: ShieldUser, path: " /" },
        { label: "Cateogary", icon: ChartColumnStacked, path: " /" },
        { label: "Reports", icon: BarChart3, path: "/ " },
        { label: "Orders", icon: CircleStar, path: "/ " },
        { label: "CMS", icon: CircleStar, path: " /" }

    ];
    const stats = [
        { title: "Subscription Rate", value: "721K", change: "+11.01%", color: "green", bg: "rgb(255, 242, 222)" },
        { title: "Total Earnings", value: "376K", change: "-0.03%", color: "red", bg: "rgb(242, 248, 255)" },
        { title: "New Users", value: "1,156", change: "+15.1%", color: "green", bg: "rgb(255, 242, 222)" },
        { title: "New Vendor", value: "239", change: "+0.06%", color: "green", bg: "rgb(242, 248, 255)" },
    ];
    const categories = [
        { name: 'Plastic', img: 'https://cdn-icons-png.flaticon.com/512/2666/2666631.png' },
        { name: 'Glass', img: 'https://cdn-icons-png.flaticon.com/512/1831/1831952.png' },
        { name: 'Paper', img: 'https://cdn-icons-png.flaticon.com/512/2541/2541991.png' },
        { name: 'Organic', img: 'https://cdn-icons-png.flaticon.com/512/1844/1844510.png' },

    ];

    return (
        <div className='home-page '>
            <div className='container-fluid p-3 min-vh-100'>
                <div className='row rounded-3 gap-0 '>
                    <div className='col-auto logo-section  ' style={{ borderRadius: "20px" }}>
                        <button className='btn btn-warnings mt-3  px-5  rounded-4 text-white logo-section-logo'>Logo</button>

                        <div className='d-flex flex-column mt-5'>
                            {menuItems.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <button
                                        key={index}
                                        className="btn btn-light ms-3 logo-section-button mt-2 py-3 rounded-4 d-flex align-items-center"
                                        onClick={() => navigate(item.path)}
                                    >
                                        <Icon size={20} className="me-3" />
                                        <span className="icon-desc">{item.label}</span>
                                    </button>
                                );
                            })}
                            <div className='logout d-flex flex-column align-items-end w-100 mt-5'>
                                <button
                                    className="btn btn-light ms-3 logo-section-button mt-5 py-3 rounded-4 d-flex align-items-center">
                                    <BadgeInfo size={20} className="me-3" />
                                    <span className="icon-desc">Help</span>
                                </button>
                                <button onClick={() => navigate("/")}
                                    className="btn btn-light ms-3 logo-section-button mt-2 py-3 rounded-4 d-flex align-items-center">
                                    <LogOut size={20} className="me-3" />
                                    <span className="icon-desc">Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-9 ms-4 vendor-section'>
                        <div className="vendor-header">
                            <div
                                className="d-flex justify-content-between align-items-center px-5 py-3"
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "30px",
                                }}
                            >

                                <h3 className="fw-bold m-0">DashBoard</h3>


                                <div className="d-flex align-items-center gap-4">
                                    <Search size={22} style={{ cursor: "pointer" }} />
                                    <Bell size={22} style={{ cursor: "pointer" }} />


                                    <div
                                        className="d-flex align-items-center px-3 py-2"
                                        style={{
                                            background: "#ffffff",
                                            borderRadius: "50px",
                                            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                                        }}
                                    >
                                        <img
                                            src={profileImg}
                                            alt="profile"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                                marginRight: "10px",
                                            }}
                                        />

                                        <span className="fw-semibold me-2">Super Admin</span>
                                        <ChevronDown size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='today-box mt-4 p-4' style={{ background: "#ffffff", borderRadius: "30px" }}>
                            <h5 className='fw-bold'>Today</h5>
                            <div className="d-flex gap-3 mt-3 flex-wrap">
                                {stats.map((item, index) => (
                                    <div
                                        key={index}
                                        className="d-flex flex-column align-items-center  "
                                        style={{
                                            background: item.bg, borderRadius: "20px", width: "250px"
                                        }}
                                    >
                                        <span className="fs-6 fw-medium fw-semibold opacity-75">{item.title}</span>

                                        <div className="d-flex align-items-center gap-5 mt-3">
                                            <span className="fs-5">{item.value}</span>
                                            <span style={{ color: item.color }} className='fs-6 opacity-50'>{item.change}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='row'>
                                <div className='col-9 mt-3 p-'>
                                    {<img src={graph} className='graph'></img>}
                                </div>
                                <div className='col-3 mt-3 ' style={{ background: "rgb(242, 248, 255)", borderRadius: "20px" }} >
                                    <h5 className='ms-0 mt-3'>Categories</h5>
                                    <div className='grapn-cat d-flex flex-column gap-3 mt-3'>
                                        {categories.map((item, index) => {
                                            return (
                                                <div className='d-flex  py-3 gap-5 ms-0 justify-content-center bg-white rounded-4' style={{ width: "250px" }}>
                                                    <img src={item.img} alt={item.name} style={{ width: '40px' }} />

                                                    <div className="small fw-bold fs-6" >{item.name}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>


                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src={graph1} className='graph mt-4 rounded-3'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Dash
