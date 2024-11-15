import React from 'react';
import { ArrowRight, Leaf, Battery, Cpu, Recycle, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';  // Import the Footer component
import IndiaMapImage from '../vdo/img.png';
import SustainabilityDiagram from '../vdo/img2.png';

const Home = () => {
  const upcomingCities = ['Bhopal', 'Indore', 'Raipur', 'Nagpur', 'Lucknow'];
  const operationalCities = ['Mumbai', 'Pune', 'Bangalore', 'Hyderabad', 'Ahmedabad'];

  return (
    <div className="font-sans bg-black text-gray-100">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          autoPlay
          loop
          muted
        >
          <source
            src="https://www.thekabadiwala.com/images/landing/hero-video-mp4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-gray-100">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Transform Your E-Waste <br /> Into <span className="text-[#3c9c1c]">Eco-Points</span>
          </h1>
          <p className="text-xl mb-6 max-w-lg text-gray-300">
            Join the mission to make a difference. Recycle, redeem, and help save the planet!
          </p>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="inline-flex items-center bg-[#3c9c1c] text-gray-100 px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg hover:bg-[#3c9c1c]"
            >
              Start Recycling
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/centers"
              className="inline-flex items-center bg-zinc-900 text-[#3c9c1c] px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out hover:bg-zinc-800"
            >
              Find Centers
            </Link>
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="bg-black text-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Our <span className="text-[#3c9c1c]">Presence</span><br />
                Across Nation
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                The EcoRecycle has established its services in {operationalCities.length} major cities of India and is now
                expanding its reach in other parts of the country.
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {operationalCities.map((city) => (
                    <span
                      key={city}
                      className="px-4 py-2 bg-[#3c9c1c]/20 text-[#3c9c1c] rounded-full border border-[#3c9c1c]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {upcomingCities.map((city) => (
                    <span
                      key={city}
                      className="px-4 py-2 bg-zinc-900 text-zinc-400 rounded-full border border-zinc-800 flex items-center"
                    >
                      {city}
                      <span className="text-xs ml-2 text-amber-500">coming soon</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={IndiaMapImage}
                alt="India Map"
                className="w-full opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="max-w-7xl mx-auto mb-7">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={SustainabilityDiagram}
              alt="Sustainability Diagram"
              className="w-2/3 mx-auto"
            />
          </div>
          <div>
            <p className="text-gray-400 mb-2">Our Eco-System Towards</p>
            <h2 className="text-5xl font-bold mb-6">
              Sustainability &<br />
              Circular Economy
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              The EcoRecycle with its acute understanding of waste has developed
              sustainable strategies & techniques to manage waste efficiently & cost-
              efficaciously contributing in closing the loop of product life cycle & attain
              <span className="text-[#3c9c1c]"> circular economy</span> while infusing <span className="text-[#3c9c1c]">sustainability</span> into lives.
            </p>
            <Link
              to="/learn-more"
              className="inline-flex items-center bg-[#3c9c1c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3c9c1c] transition-all duration-300"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Add the new Initiatives section right after Sustainability */}
      <section className="max-w-6xl mx-auto px-10 py-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Our Initiatives</h2>
          <p className="text-gray-400">
            Small steps towards <span className="text-[#3c9c1c]">sustainability</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tetra Pak Initiative */}
          <div className="group relative bg-zinc-900 rounded-lg overflow-hidden">
            <img
              src="/path-to-tetra-pak-image.jpg"
              alt="Tetra Pak Initiative"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Tetra Pak Initiative</h3>
              <p className="text-gray-400 text-sm">
                The Kabadiwala collaborated with TetraPak India (World's Leading Beverage Carton Manufacturer) to increase the collection of used beverage cartons (UBC's) for recycling and diverting them from landfills.
              </p>
              <Link to="/blog/tetra-pak" className="inline-flex items-center text-[#3c9c1c] mt-4">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Mattress Circular Journey */}
          <div className="group relative bg-zinc-900 rounded-lg overflow-hidden">
            <img
              src="/path-to-mattress-image.jpg"
              alt="Mattress Circular Journey"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Mattress Circular Journey</h3>
              <p className="text-gray-400 text-sm">
                ISPF, IPUA and The Kabadiwala came together to initiate India's first mattress recycling campaign which is named as 'Feko Nahi Recycle Karo'. The objective is to encourage the community to practise sustainable disposal of Mattress.
              </p>
              <Link to="/blog/mattress-journey" className="inline-flex items-center text-[#3c9c1c] mt-4">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Tree Plantation Initiative */}
          <div className="group relative bg-zinc-900 rounded-lg overflow-hidden">
            <img
              src="/path-to-tree-plantation-image.jpg"
              alt="Tree Plantation Initiative"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Tree Plantation Initiative</h3>
              <p className="text-gray-400 text-sm">
                Since the last two years, The Kabadiwala has been following a tradition of planting trees on the occasion of Mahatma Gandhi's Birthday. In which, our customers also take part in our mission to turn Bhopal greener.
              </p>
              <Link to="/blog/tree-plantation" className="inline-flex items-center text-[#3c9c1c] mt-4">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Add the new Initiatives section right after Sustainability */}
      <section className="max-w-6xl mx-auto px-10 py-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Help</h2>
          <p className="text-gray-400">
            Way you could <span className="text-[#3c9c1c]">Reach Us</span>.
          </p>
        </div>
        
      </section>
      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-100">How It Works</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Discover how easy it is to join our eco-friendly movement and start earning rewards.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: Recycle, title: 'Schedule Pickup', desc: 'Choose a time for easy e-waste pickup.' },
            { icon: TrendingUp, title: 'Earn Points', desc: 'Earn rewards for every item recycled.' },
            { icon: Award, title: 'Redeem Rewards', desc: 'Exchange points for exciting offers.' }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center bg-zinc-900 p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-zinc-800"
            >
              <div className="bg-[#3c9c1c]/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accepted Items */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Accepted Items</h2>
        <div className="grid md:grid-cols-4 gap-8 py-4">
          {[
            { icon: Cpu, title: 'Computers', desc: 'Laptops, Desktops, Servers' },
            { icon: Battery, title: 'Batteries', desc: 'All types of batteries' },
            { icon: Leaf, title: 'Mobile Devices', desc: 'Phones, Tablets, Watches' },
            { icon: Recycle, title: 'Other E-Waste', desc: 'Printers, Cables, Parts' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-zinc-800"
            >
              <item.icon className="h-12 w-12 text-[#3c9c1c] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-100">Ready to Start Recycling?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community and make a difference today!
          </p>
          <Link
            to="/login"
            className="inline-flex items-center bg-[#3c9c1c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3c9c1c] transition-all duration-300"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;