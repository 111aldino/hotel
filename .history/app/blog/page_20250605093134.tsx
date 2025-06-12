// import { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   IoTimeOutline,
//   IoPersonOutline,
//   IoEyeOutline,
//   IoHeartOutline,
//   IoShareSocialOutline,
//   IoBookmarkOutline,
//   IoArrowForwardOutline,
//   IoSearchOutline,
//   IoTrendingUpOutline,
//   IoCalendarOutline,
//   IoBagOutline,
// } from "react-icons/io5";

// export const metadata: Metadata = {
//   title: "Blog - Insights & Stories",
//   description: "Discover our latest insights, stories, and expert perspectives on technology, design, and innovation.",
// };

// // Sample blog data
// const featuredPost = {
//   id: 1,
//   title: "The Future of Web Development: Trends Shaping 2025",
//   excerpt: "Explore the cutting-edge technologies and methodologies that are revolutionizing how we build digital experiences in the modern era.",
//   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
//   author: "Sarah Johnson",
//   date: "2024-12-15",
//   readTime: "8 min read",
//   views: "2.4k",
//   likes: 156,
//   category: "Technology",
//   image: "/api/placeholder/800/450",
//   tags: ["Web Development", "Technology", "Future", "Innovation"]
// };

// const blogPosts = [
//   {
//     id: 2,
//     title: "Design Systems That Scale: Building for the Future",
//     excerpt: "Learn how to create design systems that grow with your product and maintain consistency across all touchpoints.",
//     author: "Michael Chen",
//     date: "2024-12-10",
//     readTime: "6 min read",
//     views: "1.8k",
//     likes: 89,
//     category: "Design",
//     image: "/api/placeholder/600/400",
//     tags: ["Design Systems", "UI/UX", "Scalability"]
//   },
//   {
//     id: 3,
//     title: "The Art of Minimalist UI: Less is More",
//     excerpt: "Discover the principles behind creating clean, effective interfaces that prioritize user experience over visual complexity.",
//     author: "Emma Rodriguez",
//     date: "2024-12-08",
//     readTime: "5 min read",
//     views: "1.2k",
//     likes: 67,
//     category: "Design",
//     image: "/api/placeholder/600/400",
//     tags: ["Minimalism", "UI Design", "User Experience"]
//   },
//   {
//     id: 4,
//     title: "AI-Powered Development: Tools Changing the Game",
//     excerpt: "Explore how artificial intelligence is transforming the development workflow and what it means for developers.",
//     author: "David Kim",
//     date: "2024-12-05",
//     readTime: "7 min read",
//     views: "3.1k",
//     likes: 201,
//     category: "Technology",
//     image: "/api/placeholder/600/400",
//     tags: ["AI", "Development", "Automation", "Tools"]
//   },
//   {
//     id: 5,
//     title: "Mobile-First Design: Why It Matters Now",
//     excerpt: "Understanding the importance of mobile-first approach in creating responsive and accessible digital experiences.",
//     author: "Lisa Park",
//     date: "2024-12-03",
//     readTime: "4 min read",
//     views: "980",
//     likes: 45,
//     category: "Design",
//     image: "/api/placeholder/600/400",
//     tags: ["Mobile", "Responsive", "Design Strategy"]
//   },
//   {
//     id: 6,
//     title: "Performance Optimization: Speed Matters",
//     excerpt: "Essential techniques for optimizing web performance and creating lightning-fast user experiences.",
//     author: "Alex Thompson",
//     date: "2024-12-01",
//     readTime: "9 min read",
//     views: "1.5k",
//     likes: 78,
//     category: "Development",
//     image: "/api/placeholder/600/400",
//     tags: ["Performance", "Optimization", "Web Vitals"]
//   }
// ];

// const categories = [
//   { name: "All", count: 25, active: true },
//   { name: "Technology", count: 12 },
//   { name: "Design", count: 8 },
//   { name: "Development", count: 5 }
// ];

// const BlogPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/5 to-pink-600/10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//           <div className="text-center space-y-8">
//             <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium">
//               <IoBookmarkOutline className="w-4 h-4" />
//               Stories & Insights
//             </div>
            
//             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
//               Our
//               <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Blog
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover insights, stories, and expert perspectives on technology, design, and innovation that shape the digital world.
//             </p>
            
//             {/* Search Bar */}
//             <div className="max-w-2xl mx-auto mt-12">
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
//                 <div className="relative flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30">
//                   <IoSearchOutline className="w-6 h-6 text-gray-400 mr-4" />
//                   <input 
//                     type="text" 
//                     placeholder="Search articles, topics, or authors..."
//                     className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-lg"
//                   />
//                   <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
//                     Search
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Featured Article */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="mb-12">
//           <div className="flex items-center gap-2 mb-4">
//             <IoTrendingUpOutline className="w-6 h-6 text-indigo-600" />
//             <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
//           </div>
//           <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
//         </div>

//         <div className="group relative">
//           <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
//           <article className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/30 hover:shadow-3xl transition-all duration-500">
//             <div className="grid lg:grid-cols-2 gap-0">
//               {/* Image Section */}
//               <div className="relative overflow-hidden">
//                 <div className="aspect-w-16 aspect-h-10 lg:aspect-h-16">
//                   <div className="w-full h-96 lg:h-full bg-gradient-to-br from-indigo-400 to-purple-600 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                     <div className="absolute top-6 left-6">
//                       <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
//                         {featuredPost.category}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-8 lg:p-12 flex flex-col justify-center">
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-6 text-sm text-gray-500">
//                     <div className="flex items-center gap-2">
//                       <IoPersonOutline className="w-4 h-4" />
//                       <span>{featuredPost.author}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <IoCalendarOutline className="w-4 h-4" />
//                       <span>Dec 15, 2024</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <IoTimeOutline className="w-4 h-4" />
//                       <span>{featuredPost.readTime}</span>
//                     </div>
//                   </div>

//                   <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
//                     {featuredPost.title}
//                   </h3>

//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     {featuredPost.excerpt}
//                   </p>

//                   <div className="flex items-center justify-between pt-6">
//                     <div className="flex items-center gap-6">
//                       <div className="flex items-center gap-2 text-gray-500">
//                         <IoEyeOutline className="w-5 h-5" />
//                         <span className="text-sm">{featuredPost.views}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-gray-500">
//                         <IoHeartOutline className="w-5 h-5" />
//                         <span className="text-sm">{featuredPost.likes}</span>
//                       </div>
//                     </div>
                    
//                     <Link 
//                       href={`/blog/${featuredPost.id}`}
//                       className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 group/btn"
//                     >
//                       Read More
//                       <IoArrowForwardOutline className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </article>
//         </div>
//       </div>

//       {/* Categories Filter */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-wrap gap-4 justify-center">
//           {categories.map((category) => (
//             <button
//               key={category.name}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
//                 category.active
//                   ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
//                   : 'bg-white/80 text-gray-600 hover:bg-gray-50 border border-gray-200'
//               }`}
//             >
//               {category.name} ({category.count})
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <article key={post.id} className="group">
//               <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/30 hover:border-indigo-200">
//                 {/* Image */}
//                 <div className="relative overflow-hidden">
//                   <div className="aspect-w-16 aspect-h-10">
//                     <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-110 transition-transform duration-700"></div>
//                   </div>
//                   <div className="absolute top-4 left-4">
//                     <span className="inline-block px-3 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
//                       {post.category}
//                     </span>
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
//                       <IoBookmarkOutline className="w-4 h-4 text-gray-600" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 space-y-4">
//                   <div className="flex items-center gap-4 text-xs text-gray-500">
//                     <div className="flex items-center gap-1">
//                       <IoPersonOutline className="w-3 h-3" />
//                       <span>{post.author}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <IoTimeOutline className="w-3 h-3" />
//                       <span>{post.readTime}</span>
//                     </div>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors duration-200">
//                     <Link href={`/blog/${post.id}`}>
//                       {post.title}
//                     </Link>
//                   </h3>

//                   <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//                     {post.excerpt}
//                   </p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {post.tags.slice(0, 2).map((tag) => (
//                       <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
//                         <IoBagOutline className="w-3 h-3" />
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Footer */}
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                     <div className="flex items-center gap-4 text-xs text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <IoEyeOutline className="w-4 h-4" />
//                         <span>{post.views}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <IoHeartOutline className="w-4 h-4" />
//                         <span>{post.likes}</span>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-2">
//                       <button className="w-8 h-8 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200">
//                         <IoShareSocialOutline className="w-4 h-4 text-gray-600" />
//                       </button>
//                       <Link 
//                         href={`/blog/${post.id}`}
//                         className="text-indigo-600 hover:text-indigo-700 text-sm font-medium transition-colors duration-200"
//                       >
//                         Read more
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="text-center mt-16">
//           <button className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group">
//             Load More Articles
//             <IoArrowForwardOutline className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
//           </button>
//         </div>
//       </div>

//       {/* Newsletter Section */}
//       <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-4xl font-bold text-white">
//                 Stay Updated
//               </h2>
//               <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                 Subscribe to our newsletter and never miss our latest insights, stories, and exclusive content.
//               </p>
//             </div>

//             <div className="max-w-md mx-auto">
//               <div className="flex gap-4">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
//                 />
//                 <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;


import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IoTimeOutline,
  IoPersonOutline,
  IoEyeOutline,
  IoHeartOutline,
  IoShareSocialOutline,
  IoBookmarkOutline,
  IoArrowForwardOutline,
  IoSearchOutline,
  IoTrendingUpOutline,
  IoCalendarOutline,
  IoBagOutline,
  IoLocationOutline,
  IoStarOutline,
  IoBedOutline,
  IoRestaurantOutline,
  IoAirplaneOutline,
  IoGiftOutline,
} from "react-icons/io5";

export const metadata: Metadata = {
  title: "Hotel Blog - Travel Stories & Experiences",
  description: "Discover luxury accommodations, travel destinations, and hospitality insights from our premium hotel collection.",
};

// Sample hotel blog data
const featuredPost = {
  id: 1,
  title: "Discover Paradise: The Ultimate Beachfront Luxury Experience",
  excerpt: "Immerse yourself in unparalleled elegance where crystal-clear waters meet world-class hospitality. Experience the perfect blend of tropical serenity and sophisticated luxury.",
  content: "Step into a world where every moment is crafted to perfection...",
  author: "Isabella Martinez",
  role: "Travel Curator",
  date: "2024-12-15",
  readTime: "6 min read",
  views: "3.2k",
  likes: 248,
  category: "Luxury Resorts",
  location: "Maldives",
  image: "/api/placeholder/800/450",
  tags: ["Beachfront", "Luxury", "Maldives", "Paradise"]
};

const blogPosts = [
  {
    id: 2,
    title: "Culinary Journey: Michelin-Starred Dining Experiences",
    excerpt: "Embark on a gastronomic adventure through our collection of world-renowned restaurants and exclusive chef experiences.",
    author: "Chef Antoine Dubois",
    role: "Executive Chef",
    date: "2024-12-12",
    readTime: "8 min read",
    views: "2.1k",
    likes: 156,
    category: "Fine Dining",
    location: "Paris, France",
    image: "/api/placeholder/600/400",
    tags: ["Michelin Star", "Fine Dining", "Culinary", "Experience"],
    rating: 5
  },
  {
    id: 3,
    title: "Urban Oasis: City Hotels Redefining Luxury",
    excerpt: "Discover how modern city hotels are creating peaceful sanctuaries amidst bustling metropolitan landscapes.",
    author: "James Morrison",
    role: "Hotel Designer",
    date: "2024-12-10",
    readTime: "5 min read",
    views: "1.8k",
    likes: 89,
    category: "City Hotels",
    location: "New York, USA",
    image: "/api/placeholder/600/400",
    tags: ["Urban", "Design", "Luxury", "City"],
    rating: 5
  },
  {
    id: 4,
    title: "Wellness Retreats: Rejuvenate Your Mind, Body & Soul",
    excerpt: "Experience transformative wellness journeys at our spa resorts, where ancient healing meets modern luxury.",
    author: "Dr. Priya Sharma",
    role: "Wellness Director",
    date: "2024-12-08",
    readTime: "7 min read",
    views: "2.7k",
    likes: 203,
    category: "Wellness",
    location: "Bali, Indonesia",
    image: "/api/placeholder/600/400",
    tags: ["Wellness", "Spa", "Retreat", "Healing"],
    rating: 5
  },
  {
    id: 5,
    title: "Heritage Hotels: Where History Meets Hospitality",
    excerpt: "Step into living history at our collection of carefully restored heritage properties that tell timeless stories.",
    author: "Sir William Ashworth",
    role: "Heritage Curator",
    date: "2024-12-05",
    readTime: "6 min read",
    views: "1.4k",
    likes: 78,
    category: "Heritage",
    location: "Edinburgh, Scotland",
    image: "/api/placeholder/600/400",
    tags: ["Heritage", "History", "Culture", "Tradition"],
    rating: 5
  },
  {
    id: 6,
    title: "Adventure Escapes: Luxury Meets Wild Nature",
    excerpt: "Combine thrilling adventures with premium comfort at our remote luxury lodges and safari experiences.",
    author: "Captain Sarah Wild",
    role: "Adventure Guide",
    date: "2024-12-03",
    readTime: "9 min read",
    views: "1.9k",
    likes: 134,
    category: "Adventure",
    location: "Serengeti, Tanzania",
    image: "/api/placeholder/600/400",
    tags: ["Adventure", "Safari", "Wildlife", "Luxury"],
    rating: 5
  }
];

const categories = [
  { name: "All Stories", count: 42, active: true, icon: IoBookmarkOutline },
  { name: "Luxury Resorts", count: 18, icon: IoStarOutline },
  { name: "Fine Dining", count: 12, icon: IoRestaurantOutline },
  { name: "City Hotels", count: 8, icon: IoBedOutline },
  { name: "Wellness", count: 6, icon: IoGiftOutline }
];

const HotelBlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-rose-600/5 to-orange-600/10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 rounded-full text-sm font-medium shadow-lg">
              <IoLocationOutline className="w-4 h-4" />
              Luxury Travel Stories
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight">
              Hotel
              <span className="block bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover extraordinary hospitality stories, luxury destinations, and insider insights from the world's finest hotels and resorts.
            </p>
            
            {/* Elegant Search Bar */}
            <div className="max-w-3xl mx-auto mt-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative flex items-center bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/50">
                  <IoSearchOutline className="w-7 h-7 text-gray-400 mr-5" />
                  <input 
                    type="text" 
                    placeholder="Search destinations, hotels, or experiences..."
                    className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-lg"
                  />
                  <button className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-amber-700 hover:to-rose-700 transition-all duration-300 shadow-lg">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <IoTrendingUpOutline className="w-7 h-7 text-amber-600" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Story</h2>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-600 to-rose-600 rounded-full"></div>
        </div>

        <div className="group relative">
          <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-orange-500/20 rounded-4xl blur-3xl group-hover:blur-4xl transition-all duration-1000"></div>
          <article className="relative bg-white/95 backdrop-blur-sm rounded-4xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl transition-all duration-700">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="lg:col-span-3 relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-12 lg:aspect-h-16">
                  <div className="w-full h-96 lg:h-full bg-gradient-to-br from-amber-400 via-rose-500 to-orange-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-8 left-8">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        <IoLocationOutline className="w-4 h-4" />
                        {featuredPost.location}
                      </span>
                    </div>
                    
                    <div className="absolute top-8 right-8">
                      <div className="flex items-center gap-1 px-3 py-2 bg-white/30 backdrop-blur-sm rounded-full">
                        {[...Array(5)].map((_, i) => (
                          <IoStarOutline key={i} className="w-4 h-4 text-amber-300 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="absolute bottom-8 left-8">
                      <span className="inline-block px-4 py-2 bg-amber-600/90 text-white text-sm font-medium rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-2 p-10 lg:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex flex-col gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full flex items-center justify-center">
                        <IoPersonOutline className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{featuredPost.author}</p>
                        <p className="text-xs text-gray-500">{featuredPost.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <IoCalendarOutline className="w-4 h-4" />
                        <span>Dec 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoTimeOutline className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-500">
                        <IoEyeOutline className="w-5 h-5" />
                        <span className="text-sm font-medium">{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <IoHeartOutline className="w-5 h-5" />
                        <span className="text-sm font-medium">{featuredPost.likes}</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-700 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                    >
                      Read Story
                      <IoArrowForwardOutline className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-xl'
                    : 'bg-white/80 text-gray-600 hover:bg-white border border-gray-200 hover:border-amber-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.name} ({category.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-white/50 hover:border-amber-200">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-11">
                    <div className="w-full h-56 bg-gradient-to-br from-gray-200 via-amber-100 to-rose-200 group-hover:scale-110 transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
                      <IoLocationOutline className="w-3 h-3" />
                      {post.location}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg">
                      <IoBookmarkOutline className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-2 bg-amber-600/90 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {post.rating && (
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full">
                        {[...Array(post.rating)].map((_, i) => (
                          <IoStarOutline key={i} className="w-3 h-3 text-amber-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full flex items-center justify-center">
                        <IoPersonOutline className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoTimeOutline className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                        <IoTagOutline className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <IoEyeOutline className="w-4 h-4" />
                        <span className="font-medium">{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoHeartOutline className="w-4 h-4" />
                        <span className="font-medium">{post.likes}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 bg-gray-50 hover:bg-amber-50 rounded-full flex items-center justify-center transition-colors duration-200">
                        <IoShareSocialOutline className="w-4 h-4 text-gray-600" />
                      </button>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-amber-600 hover:text-amber-700 text-sm font-semibold transition-colors duration-200"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-20">
          <button className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-12 py-5 rounded-3xl font-bold text-lg hover:from-amber-700 hover:to-rose-700 transition-all duration-300 shadow-xl hover:shadow-2xl group">
            Discover More Stories
            <IoArrowForwardOutline className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                <IoAirplaneOutline className="w-4 h-4" />
                Exclusive Travel Updates
              </div>
              <h2 className="text-5xl font-bold text-white">
                Join Our Journey
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Subscribe to receive exclusive hotel stories, luxury travel insights, and special offers from the world's finest destinations.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-8 py-5 rounded-2xl bg-white/20 backdrop-blur-sm text-white placeholder-white/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
                />
                <button className="bg-white text-amber-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Join 10,000+ luxury travelers who trust our recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBlogPage;