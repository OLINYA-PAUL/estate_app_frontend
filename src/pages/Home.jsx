import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import Footer from '../components/Footer'; // Import the Footer component

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
  <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 to-black relative text-white overflow-hidden">
    {/* Enhanced Animated Gradient Orbs */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary orbs with increased size and intensity */}
      <div className="animate-pulse absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/30 blur-3xl"></div>
      <div className="animate-pulse absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/30 blur-3xl"></div>
      <div className="animate-pulse absolute top-3/4 left-1/2 w-80 h-80 rounded-full bg-pink-500/30 blur-3xl"></div>
      
      {/* Additional ambient glow orbs */}
      <div className="animate-pulse absolute top-0 left-0 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="animate-pulse absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="animate-pulse absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="animate-pulse absolute top-2/3 right-1/3 w-64 h-64 rounded-full bg-rose-500/20 blur-3xl"></div>
      
      {/* Moving gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent animate-pulse"></div>
    </div>
    
    {/* Main content with z-index to appear above the orbs */}
    <div className="relative z-10">
      {/* Hero - Larger full viewport height section */}
      <section className="h-screen flex items-center justify-center px-4 max-w-7xl mx-auto mt-20 max-sm:mt-[150px]">
        <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl p-10 shadow-2xl shadow-indigo-500/20 w-full lg:w-5/6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 backdrop-blur-md bg-gradient-to-r from-white/10 to-purple-500/10 w-fit px-6 py-3 rounded-full border border-white/20 mx-auto shadow-lg shadow-purple-500/20">
              <div className="flex items-center">
                <span className="inline-block bg-green-400 rounded-full w-3 h-3 mr-3 animate-pulse shadow-md shadow-green-500/50" />
                <span className="text-white text-base font-light">
                  Find your perfect home with our premium listings
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-8">
              <span className="animate-pulse bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent backdrop-blur-sm">
                Find Your Ideal
              </span>{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Property
              </span>
            </h1>
            
            <p className="text-gray-100 text-2xl mb-10">
              Discover premium 
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent font-medium">
                {" "}real estate options{" "}
              </span>
              tailored to your preferences and requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/search"
                className="px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 hover:from-indigo-700 hover:via-purple-600 hover:to-indigo-700 rounded-lg font-medium transition-all shadow-lg shadow-purple-500/30 text-xl"
              >
                Browse Properties
              </Link>
              <Link
                to="/search?offer=true"
                className="px-10 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-lg border border-white/30 rounded-lg transition-all shadow-lg shadow-white/10 text-xl"
              >
                View Offers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      {offerListings.length > 0 && (
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">Featured Properties</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-1.5 shadow-md shadow-purple-500/30"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl shadow-indigo-500/20 overflow-hidden">
            <Swiper navigation className="h-96">
              {offerListings.map((listing) => (
                <SwiperSlide key={listing._id}>
                  <div
                    className="h-full w-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${listing.imageUrls[0]})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <div className="bg-gradient-to-br from-white/15 to-purple-500/15 backdrop-blur-xl border border-white/30 p-4 rounded-lg max-w-lg shadow-xl shadow-purple-500/10">
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-2.5 py-0.5 rounded text-sm font-medium shadow-md shadow-purple-500/30">Featured</span>
                        <h3 className="text-xl font-bold mt-1.5">{listing.name}</h3>
                        <p className="text-gray-200 mb-3">{listing.address}</p>
                        <div className="flex justify-between items-center">
                          <p className="font-medium bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                            ${listing.regularPrice.toLocaleString()} {listing.type === 'rent' ? '/ month' : ''}
                          </p>
                          <Link 
                            to={`/listing/${listing._id}`}
                            className="bg-white/15 hover:bg-white/25 backdrop-blur-lg border border-white/30 px-3 py-1.5 rounded transition-all text-sm shadow-md shadow-purple-500/10"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      {/* Property Categories */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">Browse by Category</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-1.5 shadow-md shadow-purple-500/30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Properties for Sale', query: 'type=sale', count: saleListings.length, gradient: 'from-blue-400 via-cyan-300 to-blue-400' },
            { name: 'Properties for Rent', query: 'type=rent', count: rentListings.length, gradient: 'from-indigo-400 via-purple-300 to-indigo-400' },
            { name: 'Special Offers', query: 'offer=true', count: offerListings.length, gradient: 'from-rose-400 via-pink-300 to-rose-400' }
          ].map(category => (
            <Link 
              key={category.name}
              to={`/search?${category.query}`}
              className="bg-gradient-to-br from-white/15 to-purple-500/15 backdrop-blur-xl border border-white/30 rounded-xl p-6 hover:bg-white/20 transition-all flex flex-col justify-between h-40 shadow-xl shadow-indigo-500/20"
            >
              <h3 className={`text-lg font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>{category.name}</h3>
              <div className="flex justify-between items-end">
                <span className="text-gray-200 text-sm">{category.count} listings</span>
                <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent text-sm`}>View all →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Listings */}
      <section className="py-12 px-4 max-w-7xl mx-auto pb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">Latest Properties</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-1.5 shadow-md shadow-purple-500/30"></div>
        </div>

        <div className="bg-gradient-to-br from-white/15 to-purple-500/15 backdrop-blur-xl border border-white/30 rounded-xl p-6 shadow-2xl shadow-indigo-500/20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...saleListings, ...rentListings].slice(0, 6).map((listing) => (
              <div 
                key={listing._id} 
                className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-xl hover:translate-y-[-4px] transition-all shadow-indigo-500/10"
              >
                <div 
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${listing.imageUrls[0]})` }}
                ></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs px-2 py-1 rounded shadow-md ${listing.type === 'rent' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 shadow-purple-500/30' : 'bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 shadow-cyan-500/30'}`}>
                      {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
                    </span>
                    {listing.offer && (
                      <span className="text-xs bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 px-2 py-1 rounded shadow-md shadow-pink-500/30">
                        Special Offer
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold mb-1">{listing.name}</h3>
                  <p className="text-gray-300 text-sm mb-2 truncate">{listing.address}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-sm bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                      ${listing.regularPrice.toLocaleString()} 
                      {listing.type === 'rent' ? ' / month' : ''}
                    </p>
                    <Link 
                      to={`/listing/${listing._id}`}
                      className="text-blue-300 hover:text-blue-200 text-sm"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              to="/search"
              className="inline-block px-5 py-2.5 bg-gradient-to-r from-white/15 to-purple-500/15 hover:from-white/25 hover:to-purple-500/25 backdrop-blur-lg border border-white/30 rounded-md transition-all text-sm shadow-lg shadow-purple-500/10"
            >
              Browse All Properties
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer Component */}
      <Footer />
    </div>
  </div>
  );
}