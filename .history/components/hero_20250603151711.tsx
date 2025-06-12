// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//     return (
//         <div className="relative h-screen text-white overflow-hidden">
//             <div className="absolute inset-0">
//                 <Image src='/2.jpg' alt="hero image" fill className="object-cover object-center w-full h-full"/>
//                 <div className="absolute inset-0 bg-black opacity-78 "></div>
//             </div>
//             <div className="relative flex flex-col justify-center items-center h-full text-center pt-16">
//                 <h1 className="text-7xl font-bold leading-tight mb-3 capitalize">BOOK YOUR ROOM</h1>
//                 <p className="text-xl text-gray-300 mb-8">Get special offer just for you today</p>
//                 <div className="flex gap-5">
//                     <Link href='/room' className="bg-teal-500 text-white hover:bg-violet-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg">Booking Now</Link>
//                     <Link href='/contact' className="bg-transparent border border-teal-500 text-white hover:bg-violet-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg">Contact Us</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Hero



// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//     return (
//         <div className="bg-gradient-to-br from-orange-50 to-pink-100 min-h-screen">
//             {/* Main Hero Section */}
//             <div className="container mx-auto px-5 pt-40">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
//                     {/* Left Content */}
//                     <div className="space-y-8">
//                         <div className="space-y-4">
//                             <p className="text-teal-500 font-medium text-lg">Welcome To Our Hotel</p>
//                             <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
//                                 Hotel for Every<br />
//                                 Moment Rich in<br />
//                                 <span className="text-teal-500">Emotion</span>
//                             </h1>
//                             <p className="text-gray-600 text-lg leading-relaxed max-w-md">
//                                 Every moment feels like the first time in paradise. Enjoy the best of your life.
//                             </p>
//                         </div>
                        
//                         <div className="flex items-center gap-4">
//                             <Link 
//                                 href='/room' 
//                                 className="bg-teal-400 text-white hover:bg-violet-500 py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
//                             >
//                                 Know More About Hotel
//                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Right Image */}
//                     <div className="relative">
//                         <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
//                             <Image 
//                                 src="/2.jpg" 
//                                 alt="Luxury Hotel Pool" 
//                                 fill 
//                                 className="object-cover"
//                                 priority
//                             />
//                         </div>

//                         <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-60"></div>
//                         <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>

//                     </div>
//                 </div>
//             </div>

//             <div className="bg-white py-16">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <p className="text-orange-500 font-medium text-lg mb-2">Explore Our Hotel</p>
//                         <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                             Find the right Apartment Hotel &<br />
//                             Resort for you
//                         </h2>
//                         <p className="text-gray-600 max-w-2xl mx-auto">
//                             Aut quasi enim consequatur rerum hic atque eligendi architecto quas eveniet vitae ipsum 
//                             facilis quo alias rerum distinctio sit asperiores impedit nulla aliquam amet
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//                         {/* Feature 1 */}
//                         <div className="text-center space-y-4">
//                             <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
//                                 <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21H3m16 0v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-800">Award-winning Restaurant</h3>
//                             <p className="text-gray-600">Best Resources Available</p>
//                         </div>

//                         {/* Feature 2 */}
//                         <div className="text-center space-y-4">
//                             <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
//                                 <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-800">Healthy Food</h3>
//                             <p className="text-gray-600">Easy Online Booking</p>
//                         </div>

//                         {/* Feature 3 */}
//                         <div className="text-center space-y-4">
//                             <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
//                                 <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-800">Individually styled bedrooms</h3>
//                             <p className="text-gray-600">Award-winning Playground</p>
//                         </div>
//                     </div>
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//                         {/* Feature 1 */}
//                         <div className="text-center space-y-4">
//                             <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
//                                 <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21H3m16 0v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-800">Award-winning Restaurant</h3>
//                             <p className="text-gray-600">Best Resources Available</p>
//                         </div>

//                         {/* Feature 2 */}
//                         <div className="text-center space-y-4">
//                             <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
//                                 <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-800">Healthy Food</h3>
//                             <p className="text-gray-600">Easy Online Booking</p>
//                         </div>

//                         {/* Feature 3 */}
//                         <div className="text-center space-y-4">
//                             <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
//                                 <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-800">Individually styled bedrooms</h3>
//                             <p className="text-gray-600">Award-winning Playground</p>
//                         </div>
//                     </div>

//                     {/* Hotel Image Section */}
//                     <div className="grid lg:grid-cols-2 gap-8 items-center">
//                         <div className="relative h-[400px] rounded-2xl overflow-hidden">
//                             <Image 
//                                 src="/card.jpg" 
//                                 alt="Hotel Interior" 
//                                 fill 
//                                 className="object-cover"
//                             />
//                             {/* Orange Badge */}
//                             <div className="absolute top-6 left-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
//                                 Best Price
//                             </div>
//                         </div>

//                         <div className="space-y-6 lg:pl-8">
//                             <div>
//                                 <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                                     Get special offer just for you today
//                                 </h3>
//                                 <p className="text-gray-600 leading-relaxed">
//                                     Experience luxury at its finest with our exclusive offers. 
//                                     Book now and enjoy premium amenities, exceptional service, 
//                                     and unforgettable moments at our award-winning hotel.
//                                 </p>
//                             </div>

//                             <div className="flex gap-4">
//                                 <Link 
//                                     href='/room' 
//                                     className="bg-teal-500 text-white hover:bg-teal-600 py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
//                                 >
//                                     Booking Now
//                                 </Link>
//                                 <Link 
//                                     href='/contact' 
//                                     className="border-2 border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white py-3 px-6 rounded-full font-semibold transition-all duration-300"
//                                 >
//                                     Contact Us
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon, BuildingOfficeIcon, HeartIcon, HomeIcon } from '@heroicons/react/24/outline';

// Feature data for better maintainability
const features = [
  {
    id: 1,
    icon: BuildingOfficeIcon,
    title: "Award-winning Restaurant",
    description: "Best Resources Available"
  },
  {
    id: 2,
    icon: HeartIcon,
    title: "Healthy Food",
    description: "Easy Online Booking"
  },
  {
    id: 3,
    icon: HomeIcon,
    title: "Individually styled bedrooms",
    description: "Award-winning Playground"
  }
];

// Feature card component for reusability
const FeatureCard = ({ icon: Icon, title, description }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => (
  <div className="group text-center space-y-4 p-6 rounded-xl hover:bg-gradient-to-br hover:from-teal-50 hover:to-blue-50 transition-all duration-300 hover:shadow-lg">
    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-teal-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Enhanced button component
const Button = ({ 
  href, 
  variant = 'primary', 
  children, 
  className = '',
  showIcon = false 
}: {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}) => {
  const baseClasses = "inline-flex items-center gap-2 py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform";
  
  const variants = {
    primary: "bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 shadow-lg",
    secondary: "border-2 border-teal-400 text-teal-600 hover:bg-teal-500 hover:text-white hover:border-teal-500"
  };

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
      {showIcon && <ChevronRightIcon className="w-5 h-5" />}
    </Link>
  );
};

const Hero = () => {
  return (
    <main className="bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-5 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <p className="text-teal-600 font-semibold text-lg tracking-wide uppercase">
                Welcome To Our Hotel
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hotel for Every<br />
                Moment Rich in<br />
                <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                  Emotion
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Every moment feels like the first time in paradise. Enjoy the best of your life with unparalleled luxury and comfort.
              </p>
            </div>
            
            <div className="flex items-center">
              <Button 
                href="/room" 
                variant="primary" 
                showIcon={true}
                className="shadow-2xl"
              >
                Know More About Hotel
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/2.jpg" 
                alt="Luxury Hotel Pool" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-70 animate-bounce-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-70 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-3 w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <header className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-lg mb-3 tracking-wide uppercase">
              Explore Our Hotel
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
              Find the Right Apartment Hotel & Resort for You
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Experience exceptional hospitality with our world-class amenities and personalized service 
              designed to make your stay unforgettable.
            </p>
          </header>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/card.jpg" 
                  alt="Hotel Interior" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Enhanced Badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-pulse">
                🏆 Best Price
              </div>
            </div>

            <div className="space-y-8 lg:pl-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Get Special Offers Just for You Today
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Experience luxury at its finest with our exclusive offers. 
                  Book now and enjoy premium amenities, exceptional service, 
                  and unforgettable moments at our award-winning hotel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/room" variant="primary">
                  Book Now
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default Hero;