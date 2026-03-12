
import image from '../assets/productlist/pas1.jpg'

// models
import p1 from '../assets/model/p1.jpg'
import p2 from '../assets/model/p1.jpg'
import p3 from '../assets/model/p1.jpg'
import p21 from '../assets/model/p21.jpg'
import p22 from '../assets/model/p22.jpg'
import p23 from '../assets/model/p23.jpg'
import p31 from '../assets/model/p31.jpg'
import p32 from '../assets/model/p32.jpg'
import p33 from '../assets/model/p33.jpg'


import mg1 from '../assets/model/g1.jpg'
import mg2 from '../assets/model/g1.jpg'
import mg3 from '../assets/model/g1.jpg'
import mg21 from '../assets/model/g21.jpg'
import mg22 from '../assets/model/g22.jpg'
import mg23 from '../assets/model/g23.jpg'

import hy1 from '../assets/model/hy1.jpg'
import hy2 from '../assets/model/hy2.jpg'
import hy3 from '../assets/model/hy3.jpg'
import hy21 from '../assets/model/hy21.jpeg'
import hy22 from '../assets/model/hy22.jpeg'
import hy23 from '../assets/model/hy23.jpeg'
import hy31 from '../assets/model/hy31.jpg'
import hy32 from '../assets/model/hy32.jpg'
import hy33 from '../assets/model/hy33.jpg'


import h1 from '../assets/model/h1.jpg'
import h2 from '../assets/model/h2.jpg'
import h3 from '../assets/model/h3.jpg'
import h31 from '../assets/model/h31.jpg'
import h32 from '../assets/model/h32.jpg'
import h33 from '../assets/model/h33.jpg'



// gate

import g1 from '../assets/gate/p1.jpeg'
import g2 from '../assets/gate/p2.jpeg'
import g3 from '../assets/gate/p3.jpeg'
import g4 from '../assets/gate/p4.jpeg'
import g21 from '../assets/gate/p21.jpeg'
import g22 from '../assets/gate/p22.jpeg'
import g23 from '../assets/gate/p23.jpeg'
import g31 from '../assets/gate/p31.jpeg'
import g32 from '../assets/gate/p32.jpeg'
import g33 from '../assets/gate/p33.jpeg'


import ghy31 from '../assets/gate/hy31.jpg'
import ghy32 from '../assets/gate/hy32.jpg'
import ghy33 from '../assets/gate/hy33.jpg'






const productDescription = [


    {
        productName: 'SKY KING',
        description: 'A high-quality passenger lift with premium interiors and advanced gearless machine options.',
        features: [
            'Premium artificial onyx and mirror finish',
            'Elegant rose gold hairline sidewalls',
            'Ivory ceiling with decorative borders',
            'High-capacity gearless traction system'
        ],
        models: [
            {
                id: 'ROL-1D01',
                rearWall: 'Center Panel Artificial, Onyx Corners Black Mirror',
                sideWall: 'Center Natural Mirror with Rose Gold Hairline',
                ceiling: 'Ivory With Rose Gold Border',
                flooring: 'White Granite Matte',
                model: 'MG127XS',
                capacity: '408kg',
                torqueMoment: '240Nm',
                tractionPulley: '235-315',
                gearlessWeight: '125kg',
                voltage: '380V',
                encoder: 'ENDAT-SINDOS',
                image: p1
            },
            {
                id: 'ROL-1D02',
                rearWall: 'Center Panel Artificial, Onyx Corners Black Mirror',
                sideWall: 'Center Natural Mirror with Rose Gold Hairline',
                ceiling: 'Ivory With Rose Gold Border',
                flooring: 'Black Checks Granite Matte',
                model: 'RTG 24P 0606 C-320',
                capacity: '408kg',
                torqueMoment: '255Nm',
                tractionPulley: '240-320',
                gearlessWeight: '130kg',
                voltage: '380V',
                encoder: 'ENDAT-SINDOS',
                image:p2
            },
            {
                id: 'ROL-1D03',
                rearWall: 'Ivory Laminate With Grooving + Flute Gray Molding',
                sideWall: 'Ivory Laminate With Grooving',
                ceiling: 'MS Hairline With Spot Lights',
                flooring: 'White Granite Matte',
                model: 'SGI06-N',
                capacity: '408kg',
                torqueMoment: '220Nm',
                tractionPulley: '225-300',
                gearlessWeight: '115kg',
                voltage: '380V',
                encoder: 'ENDAT-SINDOS',
                image: p3
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Full SS Door',
                image: g1
            },
            {
                name: 'Full Glass Door',
                image: g2
            },
            {
                name: 'Half Glass Door',
                image: g3
            },
            {
                name: 'Small Vision Door',
                image:g4
            }
        ],
        image:image
    },
    {
        productName: "SKY GOLD RISE",
        description: "Premium passenger lift with elegant golden finish and advanced geared machine options.",
        features: [
            "Golden Circle Design Hairline Finish",
            "Designer Floor Matting",
            "VVVF 4 Poles Motor",
            "Advanced Geared Machine Options"
        ],
        models: [
            {
                id: "ROL-2D01",
                rearWall: "Center Panel Golden Circle Design Hairline Finish",
                sideWall: "Golden Hairline Finish",
                ceiling: "Round Designer Finish 304",
                skirting: "Designer Floor Matting",
                model: "M-67",
                capacity: "408kg",
                reductionRatios: "1/37-1/46",
                oilCapacity: "1.7L",
                gearboxWeight: "80kg",
                motors: "58 HZ",
                VVVFPoles: "4KW",
                image: p21
            },
            {
                id: "ROL-2D02",
                rearWall: "Center Panel Golden Circle Design Hairline Finish",
                sideWall: "Golden Hairline Glass Finish",
                ceiling: "Square Designer Finish 304",
                flooring: "Designer Floor Matting",
                model: "MR-6",
                capacity: "408kg",
                reductionRatios: "1/27-1/38",
                oilCapacity: "1.7L",
                gearboxWeight: "75kg",
                motors: "50 HZ",
                VVVFPoles: "4KW",
                image: p22
            },
            {
                id: "ROL-2D03",
                rearWall: "Center Panel Golden Glass Designer Finish",
                sideWall: "Golden Scratchless Finish",
                ceiling: "Round Designer Finish 304",
                flooring: "Designer Floor Matting",
                model: "MR-6",
                capacity: "408kg",
                reductionRatios: "1/27-1/38",
                oilCapacity: "1.7L",
                gearboxWeight: "75kg",
                motors: "50 HZ",
                VVVFPoles: "4KW",
                image:p23
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Full SS Door',
                image: g21
            },
            {
                name: 'Full Glass Door',
                image: g22
            },
            {
                name: 'Half Glass Door',
                image: g23
            },
            {
                name: 'Small Vision Door',
                image:g31
            }
        ],

    },
    {
        "productName": "SKY SUPERLATIVE",
        "description": "A high-quality passenger lift with premium interiors and advanced geared machine options.",
        "features": [
            "Stainless Steel 304 Hairline Finish",
            "Designer Ceiling with Square & Spotlights",
            "Artificial Granite Matte Flooring",
            "High-capacity geared traction system"
        ],
        "models": [
            {
                "id": "ROL-3D01",
                "rearWall": "Stainless Steel Cladd 304 Hairline Corners Black Mirror",
                "sideWall": "Stainless Steel 304 Design Hairline",
                "ceiling": "Designer Ceiling 304 Square",
                "flooring": "Artificial Granites Matte",
                "model": "CAULDRON-125N",
                "capacity": "408kg",
                "torqueMoment": "240Nm",
                "asyncSpeed": "0.65 m/s (1:1)",
                "powerRange4Pole": "4.5/5.5 KW",
                "powerRange6Pole": "3.7 KW",
                "sheaveRange": "Φ530 MM",
                "brakeVoltage": "110V, 220V (D.C.)",
                "oilCapacity": "3.0 Ltr",
                "machineWeight": "250kg",
                "image": p31
            },
            {
                "id": "ROL-3D02",
                "rearWall": "Stainless Steel 304 With Handrail",
                "sideWall": "Stainless Steel 304 Scratchless Hairline",
                "ceiling": "Round Spot Stainless Steel 304 Hairline",
                "flooring": "Artificial Granites Matte",
                "model": "CAULDRON-125N",
                "capacity": "408kg",
                "torqueMoment": "240Nm",
                "asyncSpeed": "0.65 m/s (1:1)",
                "powerRange4Pole": "4.5/5.5 KW",
                "powerRange6Pole": "3.7 KW",
                "sheaveRange": "Φ530 MM",
                "brakeVoltage": "110V, 220V (D.C.)",
                "oilCapacity": "3.0 Ltr",
                "machineWeight": "250kg",
                "image":p32
            },
            {
                "id": "ROL-3D03",
                "rearWall": "Stainless Steel Mirror Finish 304",
                "sideWall": "Stainless Steel Protruding Finish 304",
                "ceiling": "Stainless Steel 304 Full Square Light Hairline",
                "flooring": "Artificial Granites Matte",
                "model": "CAULDRON-125N",
                "capacity": "408kg",
                "torqueMoment": "240Nm",
                "asyncSpeed": "0.65 m/s (1:1)",
                "powerRange4Pole": "4.5/5.5 KW",
                "powerRange6Pole": "3.7 KW",
                "sheaveRange": "Φ530 MM",
                "brakeVoltage": "110V, 220V (D.C.)",
                "oilCapacity": "3.0 Ltr",
                "machineWeight": "250kg",
                "image": p33
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Full MS Door',
                image: g1
            },
            {
                name: 'Small Vision Door',
                image:g4
            }
        ],

        
    },
    {
        "productName": "SKY MASTER",
        "description": "A high-quality passenger lift with premium interiors and advanced gearless machine options.",
        "features": [
            "Premium artificial onyx and mirror finish",
            "Elegant rose gold hairline sidewalls",
            "Ivory ceiling with decorative borders",
            "High-capacity gearless traction system"
        ],
        "models": [
            {
                "id": "ROL-4D01",
                "rearWall": "MS PO Green",
                "sideWall": "Oyster White",
                "ceiling": "MS Hairline With Spot Lights",
                "flooring": "Anti Skid Matte",
                "model": "HE 'MONO' (408Kg)",
                "capacity": "408kg",
                "torqueMoment": "240Nm",
                "tractionPulley": "235-315",
                "gearlessWeight": "125kg",
                "voltage": "380V",
                "encoder": "ENDAT-SINDOS",
                "image": p31
            },
            {
                "id": "ROL-4D02",
                "rearWall": "MS PO Red",
                "sideWall": "Oyster White",
                "ceiling": "MS Hairline With Spot Lights",
                "flooring": "Anti Skid Matte",
                "model": "HE 'MONO' (408Kg)",
                "capacity": "408kg",
                "torqueMoment": "240Nm",
                "tractionPulley": "235-315",
                "gearlessWeight": "125kg",
                "voltage": "380V",
                "encoder": "ENDAT-SINDOS",
                "image": p32
            },
            {
                "id": "ROL-4D03",
                "rearWall": "MS PO Blue",
                "sideWall": "Oyster White",
                "ceiling": "MS Hairline With Spot Lights",
                "flooring": "Anti Skid Matte",
                "model": "HE 'MONO' (408Kg)",
                "capacity": "408kg",
                "torqueMoment": "240Nm",
                "tractionPulley": "235-315",
                "gearlessWeight": "125kg",
                "voltage": "380V",
                "encoder": "ENDAT-SINDOS",
                "image":p32
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Full SS Door',
                image: g1
            },
            {
                name: 'Full Glass Door',
                image: g2
            },
            {
                name: 'Half Glass Door',
                image: g3
            },
            {
                name: 'Small Vision Door',
                image:g4
            }
        ],
    },



    {
        "productName": "SKY ELITE",
        "category": "Hospital Lift",
        "description": "A high-capacity hospital lift designed for smooth and efficient patient transportation with advanced gearless machine options.",
        "features": [
            "High-quality designer hairline finish",
            "Premium glass and scratchless panels",
            "Advanced gearless traction system",
            "Multiple automatic door options"
        ],
        "models": [
            {
                "id": "ROL-1D01",
                "rearWall": "Center Panel Circle, Design Hairline Finish",
                "sideWall": "Designer Hairline Finish",
                "ceiling": "Round Designer Finish 304",
                "skirting": "Floor Matte",
                "model": "MG127M",
                "capacity": "884kg",
                "machineType": "Gearless",
                "image": h1
            },
            {
                "id": "ROL-1D02",
                "rearWall": "Center Panel Design, Hairline Finish",
                "sideWall": "Designer Hairline Glass Finish",
                "ceiling": "Square Designer Finish 304",
                "skirting": "Floor Matting",
                "model": "SG113-N",
                "capacity": "884kg",
                "machineType": "Gearless",
                "image": h2
            },
            {
                "id": "ROL-1D03",
                "rearWall": "Center Panel Glass Designer Finish",
                "sideWall": "Designer Scratchless Finish",
                "ceiling": "Round Designer Finish 304",
                "skirting": "Floor Matting",
                "model": "RTG 24P 1213",
                "capacity": "884kg",
                "machineType": "Gearless",
                "image": h3
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Full SS Door',
                image: g1
            },
            {
                name: 'Full Glass Door',
                image: g2
            },
            {
                name: 'Half Glass Door',
                image: g3
            },
            {
                name: 'Small Vision Door',
                image:g4
            }
        ],
    },
    {
        "productName": "SKY METRO",
        "category": "Passenger Lift",
        "description": "A reliable passenger lift with high-capacity geared machine options and durable interior finishes.",
        "features": [
            "MS PO rear wall with vibrant color options",
            "Oyster white side walls for a premium look",
            "MS hairline suspended ceiling with spotlights",
            "Anti-skid matte skirting for enhanced safety"
        ],
        "models": [
            {
                "id": "ROL-4D01",
                "rearWall": "MS PO Green",
                "sideWall": "Oyster White",
                "ceiling": "MS Hairline With Spot Lights",
                "skirting": "Anti Skid Matte",
                "model": "Cauldron-165N",
                "capacity": "884 Kg",
                "staticLoad": "2000 Kg",
                "image": hy31
            },
            {
                "id": "ROL-4D02",
                "rearWall": "MS PO Red",
                "sideWall": "Oyster White",
                "ceiling": "MS Hairline With Spot Lights",
                "skirting": "Anti Skid Matte",
                "model": "Cauldron-165N",
                "capacity": "884 Kg",
                "staticLoad": "2000 Kg",
                "image": hy32
            },
            {
                "id": "ROL-4D03",
                "rearWall": "MS PO Blue",
                "sideWall": "Oyster White",
                "ceiling": "MS Hairline With Spot Lights",
                "skirting": "Anti Skid Matte",
                "model": "Cauldron-165N",
                "capacity": "884 Kg",
                "staticLoad": "2000 Kg",
                "image": hy33
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Full SS Door',
                image: g1
            },
            {
                name: 'Small Vision Doorr',
                image: g2
            },

        ],
    },
    {
        "productName": "SKY CRESCENT",
        "category": "Hospital Lift",
        "description": "A high-capacity hospital lift with durable stainless steel interiors and geared machine options.",
        "features": [
            "Stainless steel hairline and scratchless finish walls",
            "Suspended ceiling with square-shaped lights",
            "Matte skirting for a sleek and safe design",
            "Reliable geared machine options for smooth operation"
        ],
        "models": [
            {
                "id": "ROL-1D01",
                "rearWall": "Stainless Steel Hairline Finish",
                "sideWall": "Stainless Steel Scratchless Finish",
                "ceiling": "Square Shape Round Lights",
                "skirting": "Matte",
                "model": "M87",
                "staticLoad": "2600 Kg",
                "capacity": "884 Kg",
                "image": h31
            },
            {
                "id": "ROL-1D02",
                "rearWall": "Stainless Steel Moon Rock Finish",
                "sideWall": "Stainless Steel Scratchless Finish",
                "ceiling": "Square Shape Square Lights",
                "skirting": "Matte",
                "model": "MR13 H",
                "staticLoad": "2600 Kg",
                "capacity": "884 Kg",
                "image": h32
            },
            {
                "id": "ROL-1D03",
                "rearWall": "Stainless Steel Scratchless Finish",
                "sideWall": "Stainless Steel Hairline Finish",
                "ceiling": "Square Shape Round Lights",
                "skirting": "Matte",
                "model": "M87",
                "staticLoad": "2600 Kg",
                "capacity": "884 Kg",
                "image":h33
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Full SS Door',
                image: g1
            },
            {
                name: 'Half Glass Door',
                image: g2
            },
            {
                name: 'Small Vision Door',
                image: g3
            },
    
        ],
    },


    {
        "productName": "SKY HYDRO QUEEN GOLD",
        "category": "Hydraulic Lift",
        "description": "A premium hydraulic lift with luxurious golden interiors and advanced hydraulic power pack options.",
        "features": [
            "Golden design hairline and scratchless finish",
            "Rose gold hairline side walls for an elegant look",
            "Suspended designer ceiling with premium finishes",
            "Hydraulic power pack for smooth and efficient operation"
        ],
        "models": [
            {
                "id": "ROL-1D01",
                "rearWall": "Center Panel Golden Design Hairline Finish",
                "sideWall": "Golden Hairline Finish, Rose Gold Hairline",
                "ceiling": "Round Designer Finish 304",
                "skirting": "Designer Floor Matting",
                "model": "5 HP",
                "capacity": "408 Kg",
                "type": "Hydraulic",
                "image": hy1
            },
            {
                "id": "ROL-1D02",
                "rearWall": "Center Panel Golden Mirror Hairline Finish",
                "sideWall": "Golden Hairline Finish, Rose Gold Hairline",
                "ceiling": "Square Designer Finish 304",
                "skirting": "Designer Floor Matting",
                "model": "5 HP",
                "capacity": "408 Kg",
                "type": "Hydraulic",
                "image": hy2
            },
            {
                "id": "ROL-1D03",
                "rearWall": "Center Panel Golden Glass Hairline Finish",
                "sideWall": "Golden Scratchless Finish, Rose Gold Hairline",
                "ceiling": "Round Designer Finish 304",
                "skirting": "Designer Floor Matting",
                "model": "5 HP",
                "capacity": "408 Kg",
                "type": "Hydraulic",
                "image": hy3
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Full SS Door',
                image: g21
            },
            {
                name: 'Full Glass Door',
                image: g22
            },
            {
                name: 'Half Glass Door',
                image: g23
            },
            {
                name: 'Small Vision Door',
                image:g31
            }
        ],
    },
    {
        "productName": "SKY HYDRO ACE SILVER",
        "category": "Hydraulic Lift",
        "description": "A high-end hydraulic lift featuring elegant laminate, mirror, and molding finishes with a powerful hydraulic system.",
        "features": [
            "Artificial onyx and mirror panel rear walls",
            "Premium laminate and molding side walls",
            "Ivory and white powder-coated suspended ceilings",
            "Durable flooring with black granite and checkered designs",
            "Hydraulic power pack for smooth lifting"
        ],
        "models": [
            {
                "id": "ROL-1D01",
                "rearWall": "Center Panel Artificial Onyx, Corners Black Mirror",
                "sideWall": "Center Natural Mirror with Rose Gold Hairline",
                "ceiling": "Ivory With Rose Gold Border",
                "skirting": "Rose Gold",
                "model": "5 HP",
                "capacity": "408 Kg",
                "type": "Hydraulic",
                "image":hy21
            },
            {
                "id": "ROL-1D02",
                "rearWall": "White Laminate with Grey Molding and Natural Mirror",
                "sideWall": "White Laminate with Grey Molding",
                "ceiling": "White Powder Coated with Mirror and LED Strips",
                "flooring": "Black Checks with Black Mirror Skirting",
                "model": "5 HP",
                "capacity": "408 Kg",
                "type": "Hydraulic",
                "image":hy22
            },
            {
                "id": "ROL-1D03",
                "rearWall": "Ivory Laminate with Grooving + Flute Grey Molding",
                "sideWall": "Ivory Laminate with Grooving",
                "rightWall": "Flute Wooden Panel",
                "flooring": "Black Granite",
                "model": "5 HP",
                "capacity": "408 Kg",
                "type": "Hydraulic",
                "image":hy23
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Full SS Door',
                image: g1
            },
            {
                name: 'Full Glass Door',
                image: g2
            },
            {
                name: 'Half Glass Door',
                image: g3
            },
            {
                name: 'Small Vision Door',
                image:g4
            }
        ],
    },
    {
        "productName": "SKY HYDRO JETT",
        "category": "Hydraulic Lift",
        "description": "A stylish and efficient hydraulic lift with premium finishes and a powerful hydraulic system for smooth operation.",
        "features": [
            "PO color panel rear walls",
            "Oyster white side walls and ceilings",
            "SS mirror and hairline skirting with spot lights",
            "Hydraulic power pack ensuring smooth lifting"
        ],
        "models": [
            {
                "id": "ROL-1D01",
                "rearWall": "PO Green",
                "sideWall": "Oyster White",
                "ceiling": "Oyster White",
                "skirting": "SS Mirror with Spot Lights",
                "model": "5 HP",
                "capacity": "408 Kg",
                "type": "Hydraulic",
                "image": hy31
            },
            {
                "id": "ROL-1D02",
                "rearWall": "PO Blue",
                "sideWall": "Oyster White",
                "ceiling": "Oyster White",
                "skirting": "SS Mirror with Spot Lights",
                "model": "5 HP",
                "capacity": "408 Kg",
                "type": "Hydraulic",
                "image": hy32
            },
            {
                "id": "ROL-1D03",
                "rearWall": "PO Red",
                "sideWall": "Oyster White",
                "ceiling": "Oyster White",
                "skirting": "Hairline with Spot Lights",
                "model": "5 HP",
                "capacity": "408 Kg",
                "type": "Hydraulic",
                "image": hy33
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Channel Door',
                image: ghy31
            },
            {
                name: 'Swing Door',
                image: ghy32
            },
            {
                name: 'IFD Door',
                image: ghy33
            },
   
        ],
    },


    {
        "productName": "SKY WHEEL",
        "category": "Goods Lift",
        "description": "Heavy-duty goods lift designed for industrial use, offering high load capacity and reliable performance.",
        "features": [
            "High-capacity geared machine options",
            "Durable reduction ratios for smooth operation",
            "Multiple weight capacities for industrial needs",
            "Manual collapsible door option for added flexibility"
        ],
       models :[
            {
                id: 'GL(MT)-10S',
                rearWall: 'Steel Panel',
                sideWall: 'Glass with Aluminum Frame',
                ceiling: 'LED Panel',
                flooring: 'Granite',
                model: 'Cauldron-165N',
                capacity: '1000 Kg',
                torqueMoment: '300 Nm',
                tractionPulley: '250 mm',
                gearlessWeight: '520 Kg',
                voltage: '380V',
                encoder: 'ENDAT-SINDOS',
                reductionRatios: '1/38 - 2/41',
                oilCapacity: '6.0 L',
                type: 'Geared Machine',
                   "image": mg1
                
            },
            {
                id: 'GL(MT)-15S',
                rearWall: 'Steel Panel',
                sideWall: 'Glass with Aluminum Frame',
                ceiling: 'LED Panel',
                flooring: 'Granite',
                model: 'Cauldron-165N',
                capacity: '1000 Kg',
                torqueMoment: '320 Nm',
                tractionPulley: '255 mm',
                gearlessWeight: '520 Kg',
                voltage: '380V',
                encoder: 'ENDAT-SINDOS',
                reductionRatios: '1/38 - 2/41',
                oilCapacity: '6.0 L',
                type: 'Geared Machine',
               "image": mg2
            },
            {
                id: 'Manual Collapsible Door',
                rearWall: 'Steel Frame with Mesh',
                sideWall: 'Solid Steel',
                ceiling: 'Fluorescent Tube Light',
                flooring: 'Textured Steel',
                model: 'Cauldron-200',
                capacity: '2000 Kg',
                torqueMoment: '400 Nm',
                tractionPulley: '300 mm',
                gearlessWeight: '780 Kg',
                voltage: '400V',
                encoder: 'ENDAT-SINDOS',
                reductionRatios: '1/46 - 2/57',
                oilCapacity: '10.0 L',
                type: 'Geared Machine',
            "image": mg3
            }
        ],
        
        automaticDoorOptions: [
            {
                name: 'Full SS Door',
                image: g1
            },
            {
                name: 'Full Glass Door',
                image: g2
            },
            {
                name: 'Half Glass Door',
                image: g3
            },
            {
                name: 'Small Vision Door',
                image:g4
            }
        ],
    },
    {
        "productName": "SKY CARGO",
        "category": "Goods Lift",
        "description": "Heavy-duty cargo lift designed for efficient transportation of goods, equipped with reliable geared machines.",
        "features": [
            "High-performance geared machine options",
            "Optimized reduction ratios for smooth operation",
            "Various load capacities for industrial and commercial use",
            "Automatic door option for enhanced convenience"
        ],
        "models": [
            {
                "id": "GL(A)-10S",
                "machineModel": "M93",
                "capacity": "1000 Kg",
                "reductionRatios": "1/39 - 2/49",
                "oilCapacity": "7 L",
                "machineWeight": "520 Kg",
                "type": "Geared Machine",
                "image": mg21
            },
            {
                "id": "GL(A)-15S",
                "machineModel": "M93",
                "capacity": "1000 Kg",
                "reductionRatios": "1/39 - 2/49",
                "oilCapacity": "7 L",
                "machineWeight": "520 Kg",
                "type": "Geared Machine",
                "image": mg22
            },
            {
                "id": "Automatic Door",
                "machineModel": "M98",
                "capacity": "2000 Kg",
                "reductionRatios": "1/37 - 2/49",
                "oilCapacity": "9 L",
                "machineWeight": "780 Kg",
                "type": "Automatic Geared Machine",
                "image": mg23
            }
        ],
        automaticDoorOptions: [
            {
                name: 'Full SS Door',
                image: g21
            },
            {
                name: 'Full Glass Door',
                image: g22
            },
            {
                name: 'Half Glass Door',
                image: g23
            },
            {
                name: 'Small Vision Door',
                image:g31
            }
        ],
    }
     
];



export default productDescription