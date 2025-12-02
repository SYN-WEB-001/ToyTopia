const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">ToyTopia</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magic of quality toys and the joy they bring to children everywhere
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                ToyTopia was founded with a simple mission: to provide children and families with high-quality, engaging, and educational toys that spark creativity and imagination.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What started as a small passion project has grown into a thriving community dedicated to making childhood memorable, fun, and enriching. We believe that play is essential to development, and every toy we curate is selected with care.
              </p>
              <p className="text-lg text-gray-600">
                Today, ToyTopia serves thousands of happy families across the region, and we continue to grow while maintaining our core values of quality, safety, and customer satisfaction.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop"
                alt="ToyTopia store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We carefully select every toy in our collection to ensure it meets the highest standards of quality, safety, and durability.
              </p>
            </div>

            {/* Safety */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Safety</h3>
              <p className="text-gray-600">
                Your child's safety is our top priority. All our toys comply with international safety standards and regulations.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17v-1a1 1 0 10-2 0v1a1 1 0 102 0zM5.757 15.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM2 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.757 5.757a1 1 0 000-1.414L5.05 3.636a1 1 0 10-1.414 1.414l.707.707zM10 7a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of trends and continuously seek out innovative toys that inspire learning and creative play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Passionate individuals dedicated to bringing joy and learning to children everywhere
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                  alt="Team Member"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 font-semibold mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                A passionate advocate for child development with 15+ years of experience in the toy industry.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop"
                  alt="Team Member"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-blue-600 font-semibold mb-3">Product Manager</p>
              <p className="text-gray-600">
                Expert in identifying and curating the best toys that combine fun, safety, and educational value.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
                  alt="Team Member"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Emma Williams</h3>
              <p className="text-blue-600 font-semibold mb-3">Customer Experience Lead</p>
              <p className="text-gray-600">
                Committed to ensuring every customer has a delightful experience with our brand and products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">10,000+</div>
              <p className="text-blue-100">Happy Families</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">5,000+</div>
              <p className="text-blue-100">Products</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">15+</div>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">4.9★</div>
              <p className="text-blue-100">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            At ToyTopia, our mission is to inspire joy, creativity, and learning in every child through carefully curated, safe, and innovative toys. We believe that play is the foundation of childhood development, and we're committed to providing families with products that make those precious moments count.
          </p>
          <div className="inline-block bg-blue-100 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-lg font-semibold text-blue-900">
              "Every child deserves access to toys that spark imagination, encourage learning, and create lasting memories."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
