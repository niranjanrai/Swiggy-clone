import React from "react";
import { createRoot } from "react-dom/client";

const el = document.getElementById("root");

{
  /**
       * Header
          - Logo
          - NavItems (Right Side)
          - Cart
       * Body
       *  -SearchBar
       *  -RestuarantList
       *      - RestuarantCard (many cards)
       *          - Image
       *          - Name
       *          - Rating
       *          - Cusiness
       * Footer
           - Links
           - Copyright (c)





       *  Config-Driven UI
       */
}

const Title = () => {
  return (
    <>
      <a href="/" className="logo">
        FV
      </a>
    </>
  );
};

const Header = () => {
  return (
    <header>
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact </li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

const restuarantCard = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "308385",
      name: "0612 ROAD CHEF ( Open Air )",
      uuid: "3403edad-b00d-4c44-8d58-106b1a724ded",
      city: "79",
      area: "Kidwaipuri",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "a6kxfsntpbcygshv5sgp",
      cuisines: ["Indian", "Chinese", "South Indian", "Biryani"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 4.300000190734863,
      slugs: {
        restaurant: "0612-road-chef-srikrishnapuri-srikrishnapuri",
        city: "patna",
      },
      cityState: "79",
      address: "Boring Road Behind Karlo showroom",
      locality: "Boring Canal Road",
      parentId: 22680,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2600,
        message: "",
        title: "Delivery Charge",
        amount: "2600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6786171~p=1~eid=00000188-1f3c-a492-529c-9ebb00a9013c",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "308385",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 4.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestuarantCard = () => {
  return (
    <div className="card">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
        alt="chicken"
      ></img>
      <h2>KFC</h2>
      <h3> chicken, American </h3>
      <h4> 4.2 stars </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <h4> Footer </h4>
    </>
  );
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

createRoot(el).render(<AppLayout />);

/**
 *
 *
 *
 */
