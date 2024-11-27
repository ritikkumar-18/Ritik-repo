import React from "react";
import { FaStar, FaRegStar, FaCalendarAlt, FaUser, FaBed, FaUtensils } from "react-icons/fa";

const staysData = [
  {
    header: "Leh (2N)",
    location: "Leh",
    name: "The Indus Valley",
    type: "5 star hotel",
    image: "http://pix5.agoda.net/hotelimages/16082582/-1/3cc0e7707d4602fc6562fdc01b72cb03.jpg",
    reviews: {
      rating: 4.8,
      count: 8,
    },
    dates: "20th Sept 2023 - 16th Sept 2023",
    guests: "4 Adults",
    roomType: "Classic room (2 Room)",
    meals: "Complementary Breakfast and Lunch Included ",
  },
  {
    header: "Kargil (2N)",
    location: "Kargil",
    name: "Zojila Residency",
    type: "3 star hotel",
    image: "http://pix3.agoda.net/hotelimages/523567/-1/3874d15ecf8f5b0b9d707ea8644115ff.jpg",
    reviews: {
      rating: 4,
      count: 5,
    },
    dates: "16th Sept 2023 - 18th Sept 2023",
    guests: "4 Adults",
    roomType: "Deluxe Room (2 Room)",
    meals: "Complementary Breakfast  Included",
  },
  {
    header: "Srinagar (3N)",
    location: "Srinagar",
    name: "Hotel Milad",
    type: "3 star hotel",
    image: "https://photos.hotelbeds.com/giata/70/702344/702344a_hb_a_002.jpg",
    reviews: {
      rating: 4.5,
      count: 553,
    },
    dates: "18th Sept 2023-20th Sept 2023",
    guests: "1 Adults",
    roomType: "Deluxe Room-Room Only (1 Room)",
    meals: "Complementary Breakfast and Lunch Included",
    
  },
  {
    header: "Sonamarg (2N)",
    location: "Sonamarg",
    name: "Imperial Resorts",
    type: "3 star hotel",
    image: "https://q-xx.bstatic.com/xdata/images/hotel/max2000/121510918.jpg?k=02562a473d56e234a062cca00c7e2548d04492c2283f183f12ef49c7d88dbd0a&o=",
    reviews: {
      rating: 4.5,
      count: 98,
    },
    dates: "18th Sept 2023-20th Sept 2023",
    guests: "1 Adults",
    roomType: "Deluxe Room (1 Room)",
    meals: "  Complementary Breakfast Included",
  },
];

const Stays = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
    
        {halfStar && <FaStar className="text-yellow-500" />}
    
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-gray-300" />
          ))}
      </>
    );
  };

  return (
    <>
      <h1 className="text-4xl font-bold ml-16  mt-16 sm:mt-64 mb-5 xs:ml-1 xs:text-3xl ">Stays</h1>
      <div className="p-6 ml-20  md:mt-0 sm:ml-2 sm:w-full xs:mx-auto mx-auto md:mx-auto">
        {staysData.map((stay, index) => (
          <div key={index} className="mb-14 ml-16 xs:ml-2 ">
            <h1 className="text-black text-3xl font-bold mb-5 xs:text-2xl">{stay.header}</h1>
            <div
              className="w-[80%] flex flex-col sm:w-[] xs:w-full md:flex-row items-start md:items-stretch mb-6 bg-white p-4 rounded-3xl border-2 border-gray-300 hover:shadow-lg hover:shadow-teal-200 cursor-pointer hover:border-teal-300 transition-all duration-300"
            >
              
              <div className="w-full md:w-1/4 relative">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="rounded-lg w-full h-[90%] object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#01202B] text-white text-sm font-semibold font-serif px-2 py-1 rounded-full">
                  {stay.type}
                </span>
              </div>

            
              <div className="flex-1 ml-0 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold">{stay.name}</h2>
                  <p className="text-gray-500">{stay.location}</p>

            
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">{renderStars(stay.reviews.rating)}</div>
                    <span className="text-gray-500 ml-2">
                      • {stay.reviews.count} user reviews
                    </span>
                  </div>

                
                  <div className="mt-2">
                    <div className="flex items-center mb-2">
                      <FaCalendarAlt className="text-gray-700 mr-2" />
                      <p className="text-gray-700">
                        <strong>{stay.dates}</strong>
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaUser className="text-gray-700 mr-2" />
                      <p className="text-gray-700">
                        <strong>{stay.guests}</strong>
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaBed className="text-gray-700 mr-2" />
                      <p className="text-gray-700">
                        <strong>{stay.roomType}</strong>
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaUtensils className="text-gray-700 mr-2" />
                      <p className="text-gray-700">
                        <strong>{stay.meals}</strong>
                      </p>
                    </div>
                  </div>
                </div>

            
                <div className="flex items-end justify-end mt-4 md:mt-0">
                  <button className="border border-black text-black text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 px-5 py-2 rounded-lg">
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stays;
