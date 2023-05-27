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

const RestuarantList = [
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
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "242395",
      name: "Ram Babu Restaurant",
      uuid: "d681e274-d851-4cd9-ba53-8cfe1810572d",
      city: "79",
      area: "Kankarbagh",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "mq1vlwbzjanzdeukja3d",
      cuisines: ["Chinese", "North Indian", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "ram-babu-restaurant-kankarbagh-kankarbagh",
        city: "patna",
      },
      cityState: "79",
      address: "Chandmadi road,Kankarbagh,patna - 800020",
      locality: "Chandmadi road",
      parentId: 166239,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2100,
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
        totalFees: 2100,
        message: "",
        title: "Delivery Charge",
        amount: "2100",
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
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "242395",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "246443",
      name: "HARILAL (Kankarbagh)",
      uuid: "ad5ff1d4-5533-4cec-9ca0-3ec0a298dbbb",
      city: "79",
      area: "Kankarbagh",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "cb3elcisgcyajxfsom43",
      cuisines: ["Bakery", "Sweets", "Indian"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 2.0999999046325684,
      slugs: {
        restaurant: "harilal's-kankarbagh-kankarbagh",
        city: "patna",
      },
      cityState: "79",
      address: "gayatri mandir road, kankarbagh colony",
      locality: "Gayatri Mandir Road",
      parentId: 22072,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2100,
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
        totalFees: 2100,
        message: "",
        title: "Delivery Charge",
        amount: "2100",
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
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "246443",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 2.0999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "395480",
      name: "Naushijaan",
      uuid: "b377943e-bb24-4192-85e3-13455239f981",
      city: "79",
      area: "Sri Krishnapuri",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "gphadekyu4pdrmvsyamk",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Tandoor"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 4.400000095367432,
      slugs: {
        restaurant: "naushijaan-srikrishnapuri-srikrishnapuri",
        city: "patna",
      },
      cityState: "79",
      address:
        "- ANURADHA SINGH AND NEHA VERMA, AT.- INDRA LOK, EAST BORING CANAL ROAD, P.O.- GPO, P.S.- KOTWALI, Patna Sadar, Patna",
      locality: "Boring Canal Road",
      parentId: 5558,
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
      adTrackingID: "cid=6789042~p=4~eid=00000188-1f3c-a492-529c-9ebc00a9044d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.4 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "395480",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 4.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.8",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "98898",
      name: "Kathi Junction",
      uuid: "f5e85098-6dc2-40b5-86fd-25d37b4b757a",
      city: "79",
      area: "Kankarbagh",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "yydpodxkblyvy5ocf5oo",
      cuisines: ["Indian", "Chinese"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "kathi-junction-kankar-kankarbagh",
        city: "patna",
      },
      cityState: "79",
      address:
        "J-4, P.C.Colony, Behind Shankar chikitsalay, Kankarbagh, Patna -800020",
      locality: "PC Colony",
      parentId: 1935,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2100,
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
        totalFees: 2100,
        message: "",
        title: "Delivery Charge",
        amount: "2100",
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
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "98898",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "524423",
      name: "La Pino'z Pizza",
      uuid: "8a0504cf-c962-42d1-bf6a-30377c8b2a80",
      city: "79",
      area: "Kankarbagh",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "tnjwc1hltzaudqyilpzq",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "lainoz-pizza-kankarbagh-kankarbagh",
        city: "patna",
      },
      cityState: "79",
      address:
        "S K 6, Sector-K, Malahi Pakadi Chowk, Kankarbagh, Patna Sadar, Patna, Bihar-800020",
      locality: "Malahi Pakadi Chowk",
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2100,
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
        totalFees: 2100,
        message: "",
        title: "Delivery Charge",
        amount: "2100",
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
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "524423",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "98494",
      name: "Dhaba & Kabab wala",
      uuid: "4de6df7f-a838-4163-995b-bf436e09c28f",
      city: "79",
      area: "Bankman Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "w8g1dmoovqggbwhjc2rt",
      cuisines: ["Indian", "Chinese"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 2.200000047683716,
      slugs: {
        restaurant: "dhaba-kabab-wala-kankarbagh-kankarbagh",
        city: "patna",
      },
      cityState: "79",
      address: "A-244, PC colony, Near Shri Ram Hospital, Kankarbagh ,panta 20",
      locality: "PC Colony",
      parentId: 71819,
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
            fee: 2100,
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
        totalFees: 2100,
        message: "",
        title: "Delivery Charge",
        amount: "2100",
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
      adTrackingID: "cid=6787232~p=7~eid=00000188-1f3c-a492-529c-9ebd00a90753",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "98494",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.4",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "118491",
      name: "Cake Palace",
      uuid: "abfb5abd-5eab-40eb-8007-507e8d81e7fc",
      city: "79",
      area: "Golambar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "pxaaijls6qfgpwzvyl72",
      cuisines: ["Desserts", "Bakery"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 43,
      minDeliveryTime: 43,
      maxDeliveryTime: 43,
      slaString: "43 MINS",
      lastMileTravel: 3.700000047683716,
      slugs: {
        restaurant: "cake-palace-golamber-golambar",
        city: "patna",
      },
      cityState: "79",
      address:
        "janak kishore road, near sudha Booth, beside Hindi sahitya Sammelan, kadamkuan, patna",
      locality: "Janak Kishore Road",
      parentId: 11241,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2100,
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
        totalFees: 2100,
        message: "",
        title: "Delivery Charge",
        amount: "2100",
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
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "118491",
        deliveryTime: 43,
        minDeliveryTime: 43,
        maxDeliveryTime: 43,
        lastMileTravel: 3.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "88781",
      name: "Sujata Family Restaurant",
      uuid: "3ac5f62e-fca8-4c33-8fdc-4603804bb14a",
      city: "79",
      area: "Fraser Road",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "np13tsnfrxylkrk1ykm5",
      cuisines: ["Mughlai", "Chinese", "North Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "35 MINS",
      lastMileTravel: 2.700000047683716,
      slugs: {
        restaurant: "sujata-family-restaurant-fraser-road-fraser-road",
        city: "patna",
      },
      cityState: "79",
      address: "Hotel Mayur, Fraser Road Area, Patna",
      locality: "",
      parentId: 196672,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2100,
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
        totalFees: 2100,
        message: "",
        title: "Delivery Charge",
        amount: "2100",
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
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "88781",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 2.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestuarantCard = ({ restuarant }) => {
  console.log(restuarant);

  const { name, cuisines, cloudnaryImageId, avgRating, sla } = restuarant.data;

  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restuarant.data.cloudinaryImageId} `}
        alt="chicken"
      ></img>
      <h5>{name} </h5>
      <h6> {cuisines?.join(",")} </h6>
      <h6> {avgRating} stars </h6>
      <p> {sla.deliveryTime} Minutes </p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <RestuarantCard restuarant={RestuarantList[0]} />
      <RestuarantCard restuarant={RestuarantList[1]} />
      <RestuarantCard restuarant={RestuarantList[2]} />
      <RestuarantCard restuarant={RestuarantList[3]} />
      <RestuarantCard restuarant={RestuarantList[4]} />
      <RestuarantCard restuarant={RestuarantList[5]} />
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
