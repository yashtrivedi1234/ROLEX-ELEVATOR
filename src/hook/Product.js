// accesores list
import img1 from '../assets/product/accessories/acc1.png'
import img2 from '../assets/product/accessories/acc2.png'
import img3 from '../assets/product/accessories/acc3.png'
import img4 from '../assets/product/accessories/acc4.png'
import img5 from '../assets/product/accessories/acc5.png'



const productData = [
    {
        "name":"Hospital Lift",
        "photo": "image",
        "about": "Hospital lifts are the ideal solution for the secure movement of patients, patient beds, or wheelchairs. Designed specifically for hospitals, our lifts ensure smooth operation with precision to meet the needs of patients and caregivers.\n\nOur hospital lifts are built for easy entry and exit, prioritizing comfort and speed. As the leading hospital lift manufacturer and supplier in Lucknow, we offer elevators in various sizes with capacities of 13, 15, and 26 passengers. A 26-passenger stretcher lift can accommodate an OT bed, attendees, and necessary equipment.",
        "feature": {
            "f1": {
                "capacity": "13 to 26 passengers",
                "stops": "2 to 40 Floors",
                "type": "MR & MRL | Geared & Gearless",
                "speed": "0.5mps to 2.5mps"
            }
        },
        "benefit": {
            "image": "image",
            "benefit": "Our hospital lifts are designed with patient care as the top priority, ensuring that every hospital or healthcare setting can rely on efficient, safe, and secure lifting systems. Explore the key features that set our lifts apart:",
            "list": [
                { "point": "Hospital lifts installed with patient care in mind" },
                { "point": "Lift safety & security is our utmost priority" },
                { "point": "Automatic Rescue Device always active during descent, even in case of motor failure" },
                { "point": "GSM system that connects the lift to emergency services" },
                { "point": "Communication system can be used as an instant replacement for fixed lines via mobile (cellular) solution" }
            ]
        },
        "productType": [
            {
                "product": {
                    "image": "image",
                    "name": "SKY ELITE"
                }
            }
        ],
        "accessories": [
            { "acc": { "image": img1, "name": "Intercom" } },
            { "acc": { "image": img2, "name": "Key Switch" } },
            { "acc": { "image": img3, "name": "Camera Only" } },
            { "acc": { "image": img4, "name": "RFID" } },
            { "acc": { "image": img5, "name": "Fire" } }
        ],
        "gate":[
            { "gate": { "image": "img1", "name": "Full SS Door" } },
            { "gate": { "image": "img2", "name": "Full Glass Door" } },
            { "gate": { "image": "img3", "name": "Half Glass Door" } },
       
            { "gate": { "image": "img5", "name": "Small Vision Door" } } 
        ],
        "productType1" :[
            {
              product: {
                image: "image",
                name: "SKY ELITE",
                models: [
                  {
                    model: "ROL-1D01",
                    rearWall: "Center Panel Circle, Design Hairline Finish",
                    sideWall: "Designer Hairline Finish",
                    suspendedCeiling: "Round Designer Finish 304",
                    skirting: "Floor Matte",
                    machineType: "Gearless",
                    modelName: "MG127M",
                    capacity: "884kg",
                    staticLoad: null
                  },
                  {
                    model: "ROL-1D02",
                    rearWall: "Center Panel Design, Hairline Finish",
                    sideWall: "Designer Hairline Glass Finish",
                    suspendedCeiling: "Square Designer Finish 304",
                    skirting: "Floor Matting",
                    machineType: "Gearless",
                    modelName: "SG113-N",
                    capacity: "884kg",
                    staticLoad: null
                  },
                  {
                    model: "ROL-1D03",
                    rearWall: "Center Panel Glass Designer Finish",
                    sideWall: "Designer Scratchless Finish",
                    suspendedCeiling: "Round Designer Finish 304",
                    skirting: "Floor Matting",
                    machineType: "Gearless",
                    modelName: "RTG 24P 1213",
                    capacity: "884kg",
                    staticLoad: null
                  }
                ]
              }
            },
            {
              product: {
                image: "image",
                name: "Cauldron 165N",
                models: [
                  {
                    model: "ROL-4D01",
                    rearWall: "MS PO Green",
                    sideWall: "Oyster White",
                    suspendedCeiling: "MS Hairline With Spot Lights",
                    skirting: "Anti Skid Matte",
                    machineType: "Geared",
                    modelName: "Cauldron-165N",
                    capacity: "884 Kg",
                    staticLoad: "2000 Kg"
                  },
                  {
                    model: "ROL-4D02",
                    rearWall: "MS PO Red",
                    sideWall: "Oyster White",
                    suspendedCeiling: "MS Hairline With Spot Lights",
                    skirting: "Anti Skid Matte",
                    machineType: "Geared",
                    modelName: "Cauldron-165N",
                    capacity: "884 Kg",
                    staticLoad: "2000 Kg"
                  },
                  {
                    model: "ROL-4D03",
                    rearWall: "MS PO Blue",
                    sideWall: "Oyster White",
                    suspendedCeiling: "MS Hairline With Spot Lights",
                    skirting: "Anti Skid Matte",
                    machineType: "Geared",
                    modelName: "Cauldron-165N",
                    capacity: "884 Kg",
                    staticLoad: "2000 Kg"
                  }
                ]
              }
            },
            {
              product: {
                image: "image",
                name: "M87",
                models: [
                  {
                    model: "ROL-1D01",
                    rearWall: "Stainless Steel Hairline Finish",
                    sideWall: "Stainless Steel Scratchless Finish",
                    suspendedCeiling: "Square Shape Round Lights",
                    skirting: "Matte",
                    machineType: "Geared",
                    modelName: "M87",
                    capacity: "884Kg",
                    staticLoad: "2600Kg"
                  },
                  {
                    model: "ROL-1D02",
                    rearWall: "Stainless Steel Moon Rock Finish",
                    sideWall: "Stainless Steel Scratchless Finish",
                    suspendedCeiling: "Square Shape Square Lights",
                    skirting: "Matte",
                    machineType: "Geared",
                    modelName: "MR13 H",
                    capacity: "884Kg",
                    staticLoad: "2600Kg"
                  },
                  {
                    model: "ROL-1D03",
                    rearWall: "Stainless Steel Scratchless Finish",
                    sideWall: "Stainless Steel Hairline Finish",
                    suspendedCeiling: "Square Shape Round Lights",
                    skirting: "Matte",
                    machineType: "Geared",
                    modelName: "M87",
                    capacity: "884Kg",
                    staticLoad: "2600Kg"
                  }
                ]
              }
            }
          ],
        
        "url":"hospital_lift"
    },
    {
        "name":"Passenger Lift",
        "photo": "image",
        "about": "Passenger lifts are designed to take passengers up and down a vertical lift shaft. Cabin and shaft sizes can vary in a passenger lift. We have different varieties of designs and models in passenger lifts. Passenger lifts are designed to suit every construction requirement, with trouble-free performance and low maintenance costs. Passenger elevator capacity is related to the available floor space.\n\nGenerally, passenger elevators are available in capacities from 6 to 20 passengers and speeds varying between 0.5 Meter/sec to 1 Meter/Sec. Choice of passenger elevator typically depends on the type of building (Commercial, Residential, Hotel, Mall, Housing Society, etc.) and parameters such as passenger traffic movement.",
        "feature": {
            "f1": {
                "capacity": "6 to 20 passengers",
                "stops": "22 Floors",
                "maxRise": "75M",
                "speed": "0.5mps to 1mps"
            }
        },
        "benefit": {
            "image": "image",
            "benefit": "Passenger lift features are designed to ensure safety, comfort, and aesthetics:",
            "list": [
                { "point": "Interior and exterior up-gradation of lift with attractive finishing" },
                { "point": "Wide range of false ceiling design options for lighting in lift cabin" },
                { "point": "Lift safety & security is our optimum priority" },
                { "point": "Operating panel with numeric lock password, RFID, Biometric in touch and buttons options" },
                { "point": "Geared as well as gearless mechanism" }
            ]
        },
        "productType": [
            {
                "product": {
                    "image": "image",
                    "name": "SKY KING"
                }
            },
            {
                "product": {
                    "image": "image",
                    "name": "SKY GOLD RISE"
                }
            },
            {
                "product": {
                    "image": "image",
                    "name": "SKY SUPERLATIVE"
                }
            },
            {
                "product": {
                    "image": "image",
                    "name": "SKY MASTER"
                }
            }
        ],
        "accessories": [
            { "acc": { "image": img1, "name": "Intercom" } },
            { "acc": { "image": img2, "name": "Key Switch" } },
            { "acc": { "image": img3, "name": "Camera Only" } },
            { "acc": { "image": img4, "name": "RFID" } },
            { "acc": { "image": img5, "name": "Fire" } }
        ],
        "gate":[
            { "gate": { "image": "img1", "name": "Full SS Door" } },
            { "gate": { "image": "img2", "name": "Full Glass Door" } },
            { "gate": { "image": "img3", "name": "Half Glass Door" } },
        
            { "gate": { "image": "img5", "name": "Small Vision Door" } } 
        ],
            "url":"passenger_lift"
    },
    {
        "name":"Home Lift",
        "photo": "image",
        "about": "Home Lift (Hydraulic Lift): Residential Elevators for Home\nWe have hydraulic passenger elevators, in which no designed Machine room is required as well as no pit room is required. The residential elevators for home is a wonderful package incorporating luxurious mix of technology, aesthetics and craftsmanship that can truly supplement the decor and comfort of your dream home. We also maintain safety and security standards at the optimum level. It adds as a helping aid for the disabled. Impress your guests with the multi-featured marvel designed with the kind of options that you and your architect would love to explore. It’s not just a luxury, but a status symbol too.",
        "feature": {
            "f1": {
                "capacity": "4 to 8 passengers (Hydraulic)",
                "stops": "2 to 5 Floors",
                "type": "MRL",
                "speed": "0.5mps to 0.75mps",
                "hydraulicGood": "500 to 5,000 kg"
            }
        },
        "benefit": {
            "image": "image",
            "benefit": "Hydraulic passenger lift features are designed to ensure safety, comfort, and aesthetics:",
            "list": [
                { "point": "Interior and exterior up-gradation of lift with attractive finishing" },
                { "point": "Wide range of false ceiling design options for lighting in lift cabin" },
                { "point": "Operating panel with numeric lock password, RFID, Biometric in touch and buttons options" },
                { "point": "Standard controller is provided in a special cabinet of small dimensions" },
                { "point": "No need of dip pit and overhead" },
                { "point": "100% Customize solution" },
                { "point": "Only up direction power consumption" }
            ]
        },
        "productType": [
            {
                "product": {
                    "image": "image",
                    "name": "SKY HYDRO QUEEN GOLD"
                }
            },
            {
                "product": {
                    "image": "image",
                    "name": "SKY HYDRO ACE SILVER"
                }
            },
            {
                "product": {
                    "image": "image",
                    "name": "SKY HYDRO JETT"
                }
            }
        ],
        "accessories": [
            { "acc": { "image": img1, "name": "Intercom" } },
            { "acc": { "image": img2, "name": "Key Switch" } },
            { "acc": { "image":  img3, "name": "Camera Only" } },
            { "acc": { "image": img4, "name": "RFID" } },
            { "acc": { "image": img5, "name": "Fire" } }
        ],
        "gate":[
            { "gate": { "image": "img1", "name": "Full SS Door" } },
            { "gate": { "image": "img2", "name": "Full Glass Door" } },
            { "gate": { "image": "img3", "name": "Half Glass Door" } },
  
            { "gate": { "image": "img5", "name": "Small Vision Door" } } 
        ],
            "url":"home_lift"
    },
    {
        "name":"Good Lift",
        "photo": "image",
        "about": "Goods Lift Manufacturer in Lucknow\nGoods lifts are designed to move goods, pallets, and heavy loads between two or more floors. Goods Lifts are used for lifting heavy or light industrial material. These lifts are fitted with shutters and are installed with hoists, push buttons, and switches. Specially designed for various industrial applications, these lifts are renowned for optimum performance with low maintenance. They normally have harder wearing interior finishes to protect the car from damage caused during use and travel at a slower speed to protect the heavy goods in vertical transit. Rolex Elevator - Goods Lift Manufacturer in Lucknow, offers a wide range of Freight Elevators for various kinds of applications with a capacity ranging from 500 Kg to 5,000 Kg. We offer different freight elevator styles based on your desired application and specific requirements. As always, our team is experienced in customizing standard designs to fit any application.",
        "feature": {
            "f1": {
                "capacity": "500kg to 5,000kg",
                "stops": "2 Floors",
                "type": "Geared/Gearless",
                "speed": "0.5mps to 2.5mps"
            }
        },
        "benefit": {
            "image": "image",
            "benefit": "Goods lift features are designed to ensure safety, efficiency, and robustness:",
            "list": [
                { "point": "We offer a wide range of Freight Elevators for various kinds of applications with a capacity ranging from 500 kg to 5,000 kg." },
                { "point": "We recommend and offer different freight elevator styles based on your desired application and specific requirements." },
                { "point": "Any size of pallets can be easily fitted into our designed cabin sizes." },
                { "point": "Even automated guided vehicles (AGV) are also added into lift cabins." }
            ]
        },
        "productType": [
            {
                "product": {
                    "image": "image",
                    "name": "SKY CARGO"
                }
            },
            {
                "product": {
                    "image": "image",
                    "name": "SKY WHEEL"
                }
            }
        ],
        "accessories": [
            { "acc": { "image": img1, "name": "Intercom" } },
            { "acc": { "image": img2, "name": "Key Switch" } },
            { "acc": { "image": img3, "name": "Camera Only" } },
            { "acc": { "image": img4, "name": "RFID" } },
            { "acc": { "image": img5, "name": "Fire" } }
        ],
        "gate":[
            { "gate": { "image": "img1", "name": "Full SS Door" } },
            { "gate": { "image": "img2", "name": "Full Glass Door" } },
            { "gate": { "image": "img3", "name": "Half Glass Door" } },
  
            { "gate": { "image": "img5", "name": "Small Vision Door" } } 
        ],
        "url":"good_lift"
    }
];


export default productData
