import image1 from "../assets/product/productlist1.jpg";
import image2 from "../assets/product/productlist2.jpg";
import image3 from "../assets/product/productlist3.jpg";
import image4 from "../assets/product/productlist2.jpg";

import p1 from '../assets/productlist/pas1.jpg'
import p2 from '../assets/productlist/pas2.jpeg'
import p3 from '../assets/productlist/pas3.jpg'
import p4 from '../assets/productlist/pas4.jpg'

import h1 from '../assets/productlist/h1.png'
import h2 from '../assets/productlist/h1.png'
import h3 from '../assets/productlist/h3.png'

import hy1 from '../assets/productlist/hy1.png'
import hy2 from '../assets/productlist/hy2.png'
import hy3 from '../assets/productlist/hy3.jpg'


import g1 from '../assets/productlist/g1.jpg'
import g2 from '../assets/productlist/g2.jpg'


import slugify from "slugify";


const allProduct = [
    {
        "name": "Passenger Lift",
        "description": "A passenger lift is designed to transport people vertically between floors in a safe, efficient, and comfortable manner. These lifts come in various designs and capacities, catering to residential, commercial, and industrial buildings. Equipped with modern safety features and smooth operation, passenger lifts enhance convenience and accessibility.",
        "quality": [
            "Smooth and noise-free operation",
            "Advanced safety features for secure travel",
            "Energy-efficient and low maintenance",
            "Customizable interiors for aesthetic appeal"
        ],
        "features": [
            "Interior and exterior upgrades with attractive finishing",
            "Multiple ceiling design options with modern lighting",
            "Enhanced security with numeric lock, RFID, and biometric access",
            "Available in both geared and gearless mechanisms"
        ],
        "product_types": [
            {
                "name": "SKY KING",
                "image": p1
            },
            {
                "name": "SKY GOLD RISE",
                "image": p2
            },
            {
                "name": "SKY SUPERLATIVE",
                "image": p3
            },
            {
                "name": "SKY MASTER",
                "image": p4
            }
        ],
        "image":image1,
        url: "passenger-lift"
    },
    {
        "name": "Hospital Lift",
        "description": "Hospital lifts are designed for the safe and smooth movement of patients, hospital beds, and medical equipment. These lifts ensure easy access for patients, doctors, and attendants while maintaining high precision and reliability. Our hospital lifts come in various capacities and configurations to meet the unique needs of healthcare facilities.",
        "quality": [
            "Spacious design for easy patient transportation",
            "Smooth and jerk-free movement for patient comfort",
            "Advanced safety mechanisms for emergency situations",
            "High durability and low maintenance"
        ],
        "features": [
            "Designed with patient care as the top priority",
            "Automatic Rescue Device ensures safety during power failure",
            "GSM System for emergency lift connectivity",
            "Advanced communication system for instant assistance"
        ],
        "product_types": [
            {
                "name": "SKY ELITE",
                "image": h1
            },
            {
                "name": "SKY METRO",
                "image": h2
            },
            {
                "name": "SKY CRESCENT",
                "image": h3
            },
          
        ],
        "image":image2,
        url: "hospital-lift",
    },
    {
        "name": "Home Lift",
        "description": "Our Home Lift (Hydraulic Lift) is a perfect blend of luxury, technology, and functionality, designed to enhance home convenience. These lifts do not require a dedicated machine room or deep pit, making them ideal for residential installations. They provide a smooth, safe, and comfortable experience while adding a touch of elegance to your home.",
        "quality": [
            "Compact and space-efficient design",
            "Smooth and silent hydraulic operation",
            "Advanced safety and security features",
            "Customizable to match home interiors"
        ],
        "features": [
            "Interior and exterior customization with premium finishing",
            "Wide range of ceiling design options for aesthetic appeal",
            "Operating panel with numeric lock, RFID, and biometric access",
            "No deep pit or overhead machine room required",
            "Energy-efficient with power consumption only in the upward direction"
        ],
        "product_types": [
            {
                "name": "SKY HYDRO QUEEN GOLD",
                "image": hy1
            },
            {
                "name": "SKY HYDRO ACE SILVER",
                "image": hy2
            },
            {
                "name": "SKY HYDRO JETT",
                "image": hy3
            },
           
        ],
        "image":image3,
        url: "home-lift",
    },
    {
        "name": "Goods Lift",
        "description": "Goods lifts are designed for transporting heavy loads, pallets, and industrial materials between floors. These lifts are equipped with shutters, hoists, and advanced control mechanisms for smooth and secure operation. Built for durability and reliability, our goods lifts offer high performance with minimal maintenance, making them ideal for warehouses, factories, and commercial spaces.",
        "quality": [
            "High load-bearing capacity with sturdy construction",
            "Smooth and controlled lifting operation",
            "Durable interior to prevent damage during transit",
            "Customizable cabin sizes for different applications"
        ],
        "features": [
            "Wide range of freight elevators with 500kg to 5,000kg capacity",
            "Customizable freight lift styles based on specific requirements",
            "Spacious cabin design to accommodate various pallet sizes",
            "Support for Automated Guided Vehicles (AGV) in lift cabins"
        ],
        "product_types": [
            {
                "name": "SKY CARGO",
                "image": g1
            },
            {
                "name": "SKY WHEEL",
                "image": g2
            }
        ],
        "image":image4,
        url: "goods-lift"
    }
]




export default allProduct