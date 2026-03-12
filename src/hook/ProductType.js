const products = [
    {
      productName: "Sky Metro",
      productType: "Hospital Lift",
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
    },
    {
        productName: "Sky Elite",
        productType: "Hospital Lift",
        models: [
          {
            model: "ROL-1D01",
            rearWall: "Center Panel Circle, Design Hairline Finish",
            sideWall: "Designer Hairline Finish",
            suspendedCeiling: "Round Designer Finish 304",
            skirting: "Floor Matte",
            machineType: "Gearless",
            modelName: "MG127M",
            capacity: "884kg"
          },
          {
            model: "ROL-1D02",
            rearWall: "Center Panel Design, Hairline Finish",
            sideWall: "Designer Hairline Glass Finish",
            suspendedCeiling: "Square Designer Finish 304",
            skirting: "Floor Matting",
            machineType: "Gearless",
            modelName: "SG113-N",
            capacity: "884kg"
          },
          {
            model: "ROL-1D03",
            rearWall: "Center Panel Glass Designer Finish",
            sideWall: "Designer Scratchless Finish",
            suspendedCeiling: "Round Designer Finish 304",
            skirting: "Floor Matting",
            machineType: "Gearless",
            modelName: "RTG 24P 1213",
            capacity: "884kg"
          }
        ]
    },
    {
        productName: "Sky Crescent",
        productType: "Hospital Lift",
        models: [
          {
            model: "ROL-1D01",
            rearWall: "Stainless Steel Hairline Finish",
            sideWall: "Stainless Steel Scratchless Finish",
            suspendedCeiling: "Square Shape Round Lights",
            skirting: "Matte",
            machineType: "Geared",
            modelName: "M87",
            staticLoad: "2600kg",
            capacity: "884Kg"
          },
          {
            model: "ROL-1D02",
            rearWall: "Stainless Steel Moon Rock Finish",
            sideWall: "Stainless Steel Scratchless Finish",
            suspendedCeiling: "Square Shape Square Lights",
            skirting: "Matte",
            machineType: "Geared",
            modelName: "MR13 H",
            staticLoad: "2600kg",
            capacity: "884Kg"
          },
          {
            model: "ROL-1D03",
            rearWall: "Stainless Steel Scratchless Finish",
            sideWall: "Stainless Steel Hairline Finish",
            suspendedCeiling: "Square Shape Round Lights",
            skirting: "Matte",
            machineType: "Geared",
            modelName: "M87",
            staticLoad: "2600kg",
            capacity: "884Kg"
          }
        ]
    },
    {
        productName: "Sky Hydro Queen Gold",
        productType: "Hydraulic Lift",
        models: [
          {
            model: "ROL-1D01",
            rearWall: "Center Panel Golden Design Hairline Finish",
            sideWall: "Golden Hairline Finish, Rose Gold Hairline",
            suspendedCeiling: "Round Designer Finish 304",
            skirting: "Designer Floor Matting",
            powerPack: "Hydraulic PowerPack",
            modelName: "5 HP",
            capacity: "408kg"
          },
          {
            model: "ROL-1D02",
            rearWall: "Center Panel Golden Mirror Hairline Finish",
            sideWall: "Golden Hairline Finish, Rose Gold Hairline",
            suspendedCeiling: "Square Designer Finish 304",
            skirting: "Designer Floor Matting",
            powerPack: "Hydraulic PowerPack",
            modelName: "5 HP",
            capacity: "408kg"
          },
          {
            model: "ROL-1D03",
            rearWall: "Center Panel Golden Glass Hairline Finish",
            sideWall: "Golden Scratchless Finish, Rose Gold Hairline",
            suspendedCeiling: "Round Designer Finish 304",
            skirting: "Designer Floor Matting",
            powerPack: "Hydraulic PowerPack",
            modelName: "5 HP",
            capacity: "408kg"
          }
        ]
    },
    {
        productName: "Sky Hydro Ace Silver",
        productType: "Hydraulic Lift",
        models: [
          {
            model: "ROL-1D01",
            rearWall: "Center Panel Artificial Onyx, Corners Black Mirror",
            sideWall: "Center Natural Mirror with Rose Gold Hairline",
            suspendedCeiling: "Ivory With Rose Gold Border",
            skirting: "Rose Gold",
            powerPack: "Hydraulic PowerPack",
            modelName: "5 HP",
            capacity: "408kg"
          },
          {
            model: "ROL-1D02",
            rearWall: "White Laminate with Grey Molding and natural mirror",
            sideWall: "White Laminate with Grey Molding",
            suspendedCeiling: "White Powder coated with mirror and led strips",
            flooring: "Black checks with black mirror skirting",
            powerPack: "Hydraulic PowerPack",
            modelName: "5 HP",
            capacity: "408kg"
          },
          {
            model: "ROL-1D03",
            rearWall: "Ivory laminate with grooving + flute grey molding",
            sideWall: "Ivory laminate with grooving",
            rightWall: "Flute wooden panel",
            flooring: "Black Granite",
            powerPack: "Hydraulic PowerPack",
            modelName: "5 HP",
            capacity: "408kg"
          }
        ]
    },
    {
        productName: "Sky Hydro Jett",
        productType: "Hydraulic Lift",
        models: [
          {
            model: "ROL-1D01",
            rearWall: "PO Green",
            sideWall: "Oyster White",
            suspendedCeiling: "Oyster White",
            skirting: "SS Mirror with Spot Lights",
            powerPack: "Hydraulic PowerPack",
            modelName: "5 HP",
            capacity: "408kg"
          },
          {
            model: "ROL-1D02",
            rearWall: "PO Blue",
            sideWall: "Oyster White",
            suspendedCeiling: "Oyster White",
            skirting: "SS Mirror with Spot Lights",
            powerPack: "Hydraulic PowerPack",
            modelName: "5 HP",
            capacity: "408kg"
          },
          {
            model: "ROL-1D03",
            rearWall: "PO Red",
            sideWall: "Oyster White",
            suspendedCeiling: "Oyster White",
            skirting: "Hairline with Spot Lights",
            powerPack: "Hydraulic PowerPack",
            modelName: "5 HP",
            capacity: "408kg"
          }
        ]
    },
    {
        productName: "Sky Wheel",
        productType: "Goods Lift",
        models: [
          {
            model: "GL(MT)-10S",
            machineType: "Geared Machine",
            powerPack: "Cauldron-165N",
            capacity: "1000kg",
            reductionRatios: "1/38 - 2/41",
            oilCapacity: "6.0",
            weightOfMachine: "520kg"
          },
          {
            model: "GL(MT)-15S",
            machineType: "Geared Machine",
            powerPack: "Cauldron-165N",
            capacity: "1000kg",
            reductionRatios: "1/38 - 2/41",
            oilCapacity: "6.0",
            weightOfMachine: "520kg"
          },
          {
            model: "Manual Collapsible Door",
            machineType: "Geared Machine",
            powerPack: "Cauldron-200",
            capacity: "2000kg",
            reductionRatios: "1/46 - 2/57",
            oilCapacity: "10.0",
            weightOfMachine: "780kg"
          }
        ]
    },
    {
        productName: "Sky Cargo",
        productType: "Goods Lift",
        models: [
          {
            model: "GL(A)-10S",
            machineType: "Geared Machine",
            powerPack: "M93",
            capacity: "1000kg",
            reductionRatios: "1/39 - 2/49",
            oilCapacity: "7L",
            weightOfMachine: "520kg"
          },
          {
            model: "GL(A)-15S",
            machineType: "Geared Machine",
            powerPack: "M93",
            capacity: "1000kg",
            reductionRatios: "1/39 - 2/49",
            oilCapacity: "7L",
            weightOfMachine: "520kg"
          },
          {
            model: "Automatic Door",
            machineType: "Geared Machine",
            powerPack: "M98",
            capacity: "2000kg",
            reductionRatios: "1/37 - 2/49",
            oilCapacity: "9L",
            weightOfMachine: "780kg"
          }
        ]
    },
    {
        productName: "Sky King",
        productType: "Passenger Lift",
        models: [
          {
            model: "ROL-1D01",
            rearWall: "Center Panel Artificial, Onyx Corners Black Mirror",
            sideWall: "Center Natural Mirror with Rose Gold Hairline",
            suspendedCeiling: "Ivory With Rose Gold Border",
            flooring: "White Granite Matte",
            machineType: "Gearless Machine",
            powerPack: "MG127XS",
            capacity: "408kg",
            torqueMoment: "240Nm",
            tractionPulley: "235-315",
            gearlessWeight: "125kg",
            voltage: "380V",
            encoder: "ENDAT-SINDOS"
          },
          {
            model: "ROL-1D02",
            rearWall: "Center Panel Artificial, Onyx Corners Black Mirror",
            sideWall: "Center Natural Mirror with Rose Gold Hairline",
            suspendedCeiling: "Ivory With Rose Gold Border",
            flooring: "Black Checks Granite Matte",
            machineType: "Gearless Machine",
            powerPack: "RTG 24P 0606 C-320",
            capacity: "408kg",
            torqueMoment: "255Nm",
            tractionPulley: "240-320",
            gearlessWeight: "130kg",
            voltage: "380V",
            encoder: "ENDAT-SINDOS"
          },
          {
            model: "ROL-1D03",
            rearWall: "Ivory Laminate With Grooving + Flute Gray Molding",
            leftWall: "Ivory Laminate With Grooving",
            rightWall: "Black Granite Matte",
            flooring: "White Granite Matte",
            machineType: "Gearless Machine",
            powerPack: "SGI06-N",
            capacity: "408kg",
            torqueMoment: "220Nm",
            tractionPulley: "225-300",
            gearlessWeight: "115kg",
            voltage: "380V",
            encoder: "ENDAT-SINDOS"
          }
        ]
     }
  ];
  