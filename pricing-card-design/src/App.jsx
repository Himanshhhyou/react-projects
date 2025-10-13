import Card from "./components/PricingCard1";

const App = () => {
  const cardData = [
    {
      title: "Free Plan",
      price: "0",
      features: [
        "Access to basic features",
        "Limited storage (1 GB)",
        "Community support",
        "Single user only",
        "Basic analytics dashboard"
      ],
      btnText: "Purchase Plan"
    },
    {
      title: "Pro Plan",
      price: "9.99",
      features: [
        "Access to all features",
        "Extended storage (100 GB)",
        "Priority support",
        "Up to 5 users",
        "Advanced analytics dashboard"
      ],
      btnText: "Get Started"
    },
    {
      title: "Enterprise Plan",
      price: "29.99",
      features: [
        "All Pro features",
        "Unlimited storage",
        "Dedicated support",
        "Unlimited users",
        "Custom analytics solutions"
      ],
      btnText: "Contact Sales"
    },
    {
      title: "Student Plan",
      price: "4.99",
      features: [
        "Access to basic features",
        "Storage (10 GB)",
        "Email support",
        "Single user only",
        "Basic analytics dashboard",

      ],
      btnText: "Subscribe Now"
    }
  ];

  return (
    <div className="flex gap-3 justify-center items-center h-screen ">
      {cardData.map((data, index) => (
        <Card
          key={index}
          {...data}
          headerClass={index === 1 ? "bg-purple-400 text-white" : "bg-gray-800 text-white"}
          btnClass={index === 1 ? "bg-purple-500 text-white" : "bg-blue-50 text-indigo-500"}
          label={index === 1 ? "Popular" : null}
        />

      ))}
    </div>
  )
}

export default App;
