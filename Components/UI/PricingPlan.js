import { Check, X } from "lucide-react";
import "../../src/app/globals.css";

const plans = [
  {
    name: "Basic",
    price: "$170",
    duration: "Weekly",
    features: [
      { text: "Send Quotation per month", included: true },
      { text: "RFQs Dashboard", included: false },
      { text: "Monthly generated Project Reports", included: false },
      { text: "Email Marketing", included: true },
      { text: "Featured Suppliers", included: true },
    ],
  },
  {
    name: "Advance",
    price: "$899",
    duration: "Monthly",
    features: [
      { text: "Send Quotation per month", included: true },
      { text: "RFQs Dashboard", included: false },
      { text: "Monthly generated Project Reports", included: false },
      { text: "Email Marketing", included: true },
      { text: "Featured Suppliers", included: true },
    ],
  },
  {
    name: "Premium",
    price: "$1799",
    duration: "Yearly",
    features: [
      { text: "Send Quotation per month", included: true },
      { text: "RFQs Dashboard", included: false },
      { text: "Monthly generated Project Reports", included: false },
      { text: "Email Marketing", included: true },
      { text: "Featured Suppliers", included: true },
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-6 h-auto">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="bg-white shadow-xl rounded-2xl w-full max-w-xs md:w-80 border-2 border-transparent hover:border-blue-500 transition-all"
        >
          <div className="bg-blue-600 text-white text-center py-4 rounded-t-2xl">
            <h2 className="text-lg md:text-xl font-bold">{plan.name}</h2>
            <p className="text-xs md:text-sm gradient-border rounded-2xl">
              {plan.duration}
            </p>
            <p className="text-2xl md:text-3xl font-semibold mt-2">
              {plan.price}
            </p>
          </div>
          <ul className="py-3 space-y-3">
            {plan.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex justify-center items-center gap-2 bg-[#E2E6FF] w-full py-1.5 md:py-2 rounded"
              >
                {feature.included ? (
                  <Check className="text-[var(--primary-blue)] w-4 h-4 md:w-5 md:h-5" />
                ) : (
                  <X className="text-[#D60A0A] w-4 h-4 md:w-5 md:h-5" />
                )}
                <span className="text-[#656565] text-sm md:text-base">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center pb-6">
            <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-full hover:bg-blue-700 transition text-sm md:text-base">
              Subscribe Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
