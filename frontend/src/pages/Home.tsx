import React from 'react';
import { ArrowRight, Leaf, Battery, Cpu, Recycle, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="space-y-20 font-sans bg-black text-gray-100">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
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
            Transform Your E-Waste <br /> Into Eco-Points
          </h1>
          <p className="text-xl mb-6 max-w-lg text-gray-300">
            Join the mission to make a difference. Recycle, redeem, and help save the planet!
          </p>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="inline-flex items-center bg-green-600 text-gray-100 px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg hover:bg-green-700"
            >
              Start Recycling
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/centers"
              className="inline-flex items-center bg-zinc-900 text-green-400 px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out hover:bg-zinc-800"
            >
              Find Centers
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-16">
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
              <div className="bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-zinc-900 text-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '50K+', label: 'Items Recycled' },
              { value: '100+', label: 'Collection Centers' },
              { value: '500+', label: 'Trees Saved' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-lg shadow-lg bg-black transition-all duration-300 transform hover:scale-105 hover:bg-zinc-800">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-green-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Items */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Accepted Items</h2>
        <div className="grid md:grid-cols-4 gap-8">
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
              <item.icon className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-100">Ready to Start Recycling?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community and make a difference today!
          </p>
          <Button size="lg" className="bg-green-600 text-gray-100 hover:bg-green-700 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;