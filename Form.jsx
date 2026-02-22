import React from 'react';
import { Home, Store, ChartColumnStacked, BarChart3, CircleStar, LogOut, BadgeInfo, ShieldUser } from "lucide-react";
import { Search, Bell, ChevronDown } from "lucide-react";
import react from "./assets/logo.png";
import Card from './Card';
import addition from './assets/img1.png';
import { useState } from 'react';



const Form = ({ details, setdetails, add }) => {

    const [toggle, setToggle] = useState(false);
    const menuItems = [
        { label: "Dashboard", icon: Home, path: "/Dashboard" },
        { label: "Vendors", icon: Store },
        { label: "Customers", icon: ShieldUser },
        { label: "Category", icon: ChartColumnStacked },
        { label: "Reports", icon: BarChart3 },
        { label: "Orders", icon: CircleStar },
        { label: "CMS", icon: CircleStar }

    ];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdetails({ ...details, [name]: value });
    };
    const vendorFields = [
        { label: "Shop Name", name: "shopname", type: "text" },
        { label: "GST Number", name: "gstnumber", type: "text" },
        { label: "Mobile Number", name: "mobile", type: "tel" },
        { label: "Alternate Mobile", name: "altermobile", type: "tel" },
        { label: "Email ID", name: "email", type: "email" },
    ];

    const subscriptionFields = [
        { label: "Actual Price", name: "acprice", type: "tel" },
        { label: "Discount", name: "dis", type: "text" },
        { label: "Discounted Price", name: "disprice", type: "text" },
    ];
    const selectFields = [
        { label: "Country", name: "country" },
        { label: "State/province", name: "state" },
        { label: "City/Town", name: "city" },
    ];

    const addressFields = [
        { label: "Address", name: "address", col: "col-8" },
        { label: "Pincode", name: "pincode", col: "col-4" },

    ];

    const aboutFields = [
        { label: "Landmark", name: "landmark", col: "col-4", type: "text" },
        { label: "About Company", name: "about", col: "col-8", type: "textarea" }
    ]

    const selectFields2 = [
        { label: "Subcription package", name: "sub" },
        { label: "Subcription type", name: "subtype" },
        { label: "Discount type", name: "distype" },
    ];
    const uploadItems = [
        { title: "Add Shop Logo" },
        { title: "Add Shop Banner" },
    ];
    const categories = [
        { name: 'Plastic', img: 'https://cdn-icons-png.flaticon.com/512/2666/2666631.png', selected: true },
        { name: 'Glass', img: 'https://cdn-icons-png.flaticon.com/512/1831/1831952.png', selected: true },
        { name: 'Paper', img: 'https://cdn-icons-png.flaticon.com/512/2541/2541991.png', selected: true },
        { name: 'Organic', img: 'https://cdn-icons-png.flaticon.com/512/1844/1844510.png', selected: false },
        { name: 'Metal', img: 'https://cdn-icons-png.flaticon.com/512/2921/2921385.png', selected: false },
        { name: 'Clothing', img: 'https://cdn-icons-png.flaticon.com/512/2965/2965250.png', selected: false },
        { name: 'Cardboards', img: 'https://cdn-icons-png.flaticon.com/512/3045/3045501.png', selected: false },
        { name: 'Wood', img: 'https://cdn-icons-png.flaticon.com/512/4601/4601004.png', selected: false },
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
                                        key={index} onClick={()=>navigate(item.path)}
                                        className="btn btn-light ms-3 logo-section-button mt-2 py-3 rounded-4 d-flex align-items-center"
                                    >
                                        <Icon size={20} className="me-3" />
                                        <span className="icon-desc">{item.label}</span>
                                    </button>
                                );
                            })}
                            <div className='logout d-flex flex-column align-items-end w-100 mt-5'>
                                <button

                                    className="btn btn-light ms-3 logo-section-button mt-5 py-3 rounded-4 d-flex align-items-center"
                                >
                                    <BadgeInfo size={20} className="me-3" />
                                    <span className="icon-desc">Help</span>
                                </button>
                                <button  onClick={()=>navigate("/")}
                                

                                    className="btn btn-light ms-3 logo-section-button mt-2 py-3 rounded-4 d-flex align-items-center"
                                >
                                    <LogOut size={20} className="me-3" />
                                    <span className="icon-desc">Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col ms-4 vendor-section'>
                        <div className="vendor-header">
                            <div
                                className="d-flex justify-content-between align-items-center px-5 py-3"
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "30px",
                                }}
                            >

                                <h3 className="fw-6 m-0 fs-4">Vendor</h3>


                                <div className="d-flex align-items-center gap-4">
                                    <Search size={22} style={{ cursor: "pointer" }} className="text-muted" />
                                    <Bell size={22} style={{ cursor: "pointer" }} className='text-muted' />


                                    <div
                                        className="d-flex align-items-center px-3 py-2"
                                        style={{
                                            background: "#ffffff",
                                            borderRadius: "50px",
                                            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                                        }}
                                    >
                                        <img
                                            src={react}
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
                        <div className='row form rounded-4 mt-5'>
                            <div className='col-12 col-md-12 col-lg-12 col-xl-12 mx-auto'>
                                <form className='form-body py-4 ' onSubmit={(e) => { e.preventDefault() }}>
                                    <h5 className='fw-bolder'>Add new Vendor</h5>
                                    <div className="vendor mt-3">
                                        <div className="row p-1">
                                            {vendorFields.map((field, index) => (
                                                <div key={index} className="form-elements col-4 mt-3">
                                                    <label>{field.label}</label>
                                                    <input
                                                        type={field.type}
                                                        name={field.name}
                                                        value={details[field.name]}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <h5 className='mt-4 fw-bolder'>Subscription Details</h5>

                                    <div className='vendor mt-3'>
                                        <div className='row p-1'>
                                            {selectFields2.map((field, index) => (
                                                <div key={index} className="form-elements col-4 mt-3">
                                                    <label>{field.label}</label>
                                                    <select
                                                        className="form-select"
                                                        name={field.name}
                                                        value={details[field.name]}
                                                        onChange={handleChange}
                                                    >
                                                        <option value=""></option>
                                                        <option value="normal">normal</option>
                                                    </select>
                                                </div>
                                            ))}

                                            {subscriptionFields.map((field, index) => (
                                                <div key={index} className="form-elements col-4 mt-3">
                                                    <label>{field.label}</label>
                                                    <input
                                                        type={field.type}
                                                        name={field.name}
                                                        value={details[field.name]}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            ))}
                                        </div>


                                    </div>
                                    <h5 className='mt-4 fw-bolder'>Address Details</h5>
                                    <div className='Address'>
                                        <div className='row p-1'>


                                            {addressFields.map((field, index) => (
                                                <div key={index} className={`form-elements ${field.col} mt-3`}>
                                                    <label>{field.label}</label>
                                                    <input
                                                        type="text"
                                                        name={field.name}
                                                        value={details[field.name]}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            ))}

                                            {selectFields.map((field, index) => (
                                                <div key={index} className="form-elements col-4 mt-3">
                                                    <label>{field.label}</label>
                                                    <select
                                                        className="form-select"
                                                        name={field.name}
                                                        value={details[field.name]}
                                                        onChange={handleChange}
                                                    >
                                                        <option value=""></option>
                                                        <option value="normal">normal</option>
                                                    </select>
                                                </div>
                                            ))}

                                            {aboutFields.map((field, index) => (
                                                <div key={index} className={`form-elements ${field.col} mt-3`}>
                                                    <label>{field.label}</label>
                                                    <input
                                                        type={field.type}
                                                        name={field.name}
                                                        value={details[field.name]}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            ))}

                                        </div>

                                    </div>
                                    <div className="add-items-section mt-5">
                                        <div className="row">
                                            {uploadItems.map((item, index) => (
                                                <div key={index} className="col-4">
                                                    <h4>{item.title}</h4>

                                                    <div className="add-box rounded-4 mt-4">
                                                        <input type="file" accept="image/*" hidden />
                                                        <img src={addition} className="img img-thumbnail" alt="preview" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='category-section'>
                                        <h3 className='mt-5'>Categories Dealing with</h3>
                                        <div className='d-flex flex-wrap gap-3 mt-5'>
                                            {categories.map((cat, i) => (
                                                <Card key={i} category={cat} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="other-details mt-5">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">Follow General Price</label>
                                            <div className="form-check form-switch custom-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={toggle}
                                                    onChange={() => setToggle(!toggle)}
                                                />
                                                <label className="form-check-label ms-2 small">{toggle ? 'Yes' : 'No'}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='submit-button d-flex justify-content-end'>
                                        <button type='submit' onClick={() => add()} className='btn btn-warnings  mx-end px-5 mt-4 text-white' >Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form