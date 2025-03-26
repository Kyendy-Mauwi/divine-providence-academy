import React from 'react';
import { Users, Mail, Phone, MapPin, Calendar, Clock, Star, Cable, Presentation, Droplet, Baby, Book, BookText, LucideWaves, Bus, CookingPot, HeartHandshake, Footprints, Trophy, GraduationCap, Waves, BookOpen } from 'lucide-react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import AchievementCarousel from './components/AchievementCarousel';

function App() {
  const graduationImages = [
    {
      url: 'images/pic26.jpg',
      caption: 'Class of 2022 Graduation Ceremony'
    },
    {
      url: 'src/components/images/pic18.jpg',
      caption: 'Pupils Celebrating Success with cake 2024'
    },
    {
      url: 'src/components/images/pic19.jpg',
      caption: 'Enjoying some cake 2024'
    }
  ];

  const swimmingImages = [
    {
      url: 'src/components/images/pic2.jpg',
      caption: 'Making a splash in learning!'
    },
    {
      url: 'src/components/images/pic3.jpg',
      caption: 'Pool days are the best days!'
    },
    {
      url: 'src/components/images/pic4.jpg',
      caption: "Life is better when you're swimming!"
    }
  ];

  const classImages = [
    {
      url: 'src/components/images/pic20.jpg',
      caption: "Class time = Fun time!"
    },
    {
      url: 'src/components/images/pic21.jpg',
      caption: "Where curiosity meets creativity!"
    },
    {
      url: 'src/components/images/pic22.jpg',
      caption: "The magic of learning starts here!"
    }
  ];

  const lunchImages = [
    {
      url: 'src/components/images/pic23.jpg',
      caption: "Refueling for more fun!"
    },
    {
      url: 'src/components/images/pic24.jpg',
      caption: "Tiny bites and happy faces!"
    },
    {
      url: 'src/components/images/pic27.jpg',
      caption: "A break to munch and recharge!"
    }
  ];

  const playImages = [
    {
      url: 'src/components/images/pic28.jpg',
      caption: "Learning through play!"
    },
    {
      url: 'src/components/images/pic29.jpg',
      caption: "Everyday is a play day!"
    },
    {
      url: 'src/components/images/pic30.jpg',
      caption: "Little hands, big imaginations!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to Divine Providence Academy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              WISDOM IS STRENGTH
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#admissions"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Apply Now
              </a>
              <a
                href="#virtual-tour"
                className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Virtual Tour
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center p-6 bg-primary-50 rounded-lg">
              <Calendar className="w-10 h-10 text-primary-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Academic Calendar</h3>
                <p className="text-gray-600">TBA</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-primary-50 rounded-lg">
              <Clock className="w-10 h-10 text-primary-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">School Hours</h3>
                <p className="text-gray-600">8:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-primary-50 rounded-lg">
              <Star className="w-10 h-10 text-primary-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Latest News</h3>
                <p className="text-gray-600">TBA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Our School</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="src/components/images/pic1.jpg"
                alt="Divine Providence Pupils"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                We follow the Competency-Based Curriculum (CBC), ensuring your child receives a well-rounded and modern education tailored to their needs. Our students, driven by creativity, determination, and hard work, receive great support. 
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600">To provide an all-inclusive learning environment that addresses the Spiritual, Physical, and Social needs of the pupils by providing holistic education that produces empowered citizens.</p>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600">To be the leading Centre of Excellence in Narok County that creates opportunities for Individuals to realize their Maximum potential.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Curriculumns Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Baby, title: 'Daycare Centre', description: 'Spots available at our modern daycare with cozy cots!' },
              { icon: Book, title: 'Pre-primary 1 & 2', description: 'Bright beginnings for little learners!' },
              { icon: BookText, title: 'Primary Grades 1, 2, & 3', description: 'Building strong foundations for success!' },
              { icon: LucideWaves, title: 'Swimming', description: 'Twice monthly, our students attend swimming lessons at a local pool' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-1 transition-transform duration-300">
                <value.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Great Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Cable className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Power</h3>
              <p className="text-gray-600">Modern electrical system that includes Solar Generation</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Presentation className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">White Boards</h3>
              <p className="text-gray-600">Equipped with modern whiteboards</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Droplet className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Water</h3>
              <p className="text-gray-600">Our water storage capacity creates safe and sufficient water access for our students</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Teaching and Admin Staff</h3>
              <p className="text-gray-600">Our teachers are well-rounded, highly trained professionals, all of whom hold ECDE certificates. Their expertise, combined with a deep passion for early childhood education, ensures that your child receives the attention, care, and quality education they deserve </p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Footprints className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Play Area</h3>
              <p className="text-gray-600">Our play area ensures a safe, fun, and engaging space for kids to explore and grow! </p>
            </div>
          </div>
        </div>
      </section>

       {/* GalleryCarousel */}
      <section id='gallery' className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our School Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <GraduationCap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Graduation</h3>
              <p className="text-gray-600">Graduating classes</p>
              <AchievementCarousel images={graduationImages} />
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Classtime</h3>
              <p className="text-gray-600">Little brains at work</p>
              <AchievementCarousel images={classImages} />
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Waves className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Swimming</h3>
              <p className="text-gray-600">Twice a month</p>
              <AchievementCarousel images={swimmingImages} />
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <CookingPot className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Lunchtime</h3>
              <p className="text-gray-600">Every day at 1pm</p>
              <AchievementCarousel images={lunchImages} />
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Footprints className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Playtime</h3>
              <p className="text-gray-600">Everyday fun</p>
              <AchievementCarousel images={playImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Additionals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Additional Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Bus className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Transport</h3>
              <p className="text-gray-600">Transportation is available at a varying monthly cost, depending on local residence</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <CookingPot className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Meals</h3>
              <p className="text-gray-600">The school provides daytime nutrition! Lunch at 12:30, and whole meal porridge at 10:30</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <HeartHandshake className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-900 mb-2">ATTENTION</h3>
              <p className="text-gray-600">Nutritional Sponsorship is available for families in-need. Please reach out for more information</p>
            </div>
            {/* <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Teaching and Admin Staff</h3>
              <p className="text-gray-600">Our teachers are well-rounded, highly trained professionals, all of whom hold ECDE certificates. Their expertise, combined with a deep passion for early childhood education, ensures that your child receives the attention, care, and quality education they deserve </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary-600 mr-3" />
                <span className="text-gray-600">divineprovidenceacademy@gmail.com </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary-600 mr-3" />
                <span className="text-gray-600">+254 722 638 942 </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary-600 mr-3" />
                <span className="text-gray-600">P.O. Box 520-20500, Narok, Kenya</span>
              </div>
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-2">School Tours Available:</p>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 3:00 PM</p>
                <p className="text-gray-600">Saturday: By Appointment</p>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <a href="mailto:divineprovidenceacademy@gmail.com?subject=Subject%20Here&body=Message%20Here"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors block text-center"
                >
  Send Message
</a>

              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-primary-300">About Us</a></li>
                <li><a href="#admissions" className="hover:text-primary-300">Admissions</a></li>
                <li><a href="#gallery" className="hover:text-primary-300">Gallery</a></li>
                <li><a href="#contact" className="hover:text-primary-300">Contact</a></li>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#calendar" className="hover:text-primary-300">Academic Calendar</a></li>
                <li><a href="#news" className="hover:text-primary-300">School News</a></li>
                <li><a href="#events" className="hover:text-primary-300">Events</a></li>
                <li><a href="#portal" className="hover:text-primary-300">Student Portal</a></li>
              </ul>
            </div> */}
            <div>
              {/* <h3 className="text-xl font-semibold mb-4">Connect With Us</h3> */}
              {/* <p className="text-gray-400 mb-4">Stay updated with our newsletter</p> */}
              <div className="flex">
                {/* <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                /> */}
                {/* <button className="bg-primary-600 px-4 py-2 rounded-r-lg hover:bg-primary-700 transition-colors">
                  Subscribe
                </button> */}
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700">
            <p>© 2025 Divine Providence Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
