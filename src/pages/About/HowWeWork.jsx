import React from "react";

const steps = [
  {
    id: 1,
    title: "Order Confirmed",
    description: "Your order is confirmed. We begin preparations for material delivery.",
  },
  {
    id: 2,
    title: "Delivery of 30% Basic Material",
    description: "The initial set of materials is delivered to the customer’s location.",
  },
  {
    id: 3,
    title: "Installation of Basic Material",
    subSteps: [
      "Scaffolding Installation",
      "Bracket Installation",
      "Guide Rail Installation",
      "Door Frame Installation",
      "Template Installation",
    ],
  },
  {
    id: 4,
    title: "Complete Material on Site",
    description: "All remaining materials are delivered to the site for final installation.",
  },
  {
    id: 5,
    title: "Control Panel Installation",
    description: "The control panel is installed to ensure smooth operation.",
  },
  {
    id: 6,
    title: "Testing & Commissioning",
    description: "Thorough testing and commissioning are performed to ensure safety and reliability.",
  },
  {
    id: 7,
    title: "Handover",
    description: "The elevator is handed over to the customer after successful installation.",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How We Work</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute top-0 -mt-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {step.title}
              </h3>
              {step.description && <p className="text-gray-600 text-center">{step.description}</p>}
              {step.subSteps && (
                <ul className="mt-4 space-y-2">
                  {step.subSteps.map((subStep, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block mr-2"></span>
                      {subStep}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
