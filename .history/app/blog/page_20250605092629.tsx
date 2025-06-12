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
} from "react-icons/io5";

export const metadata: Metadata = {
  title: "Blog - Insights & Stories",
  description: "Discover our latest insights, stories, and expert perspectives on technology, design, and innovation.",
};

// Sample blog data
const featuredPost = {
  id: 1,
  title: "The Future of Web Development: Trends Shaping 2025",
  excerpt: "Explore the cutting-edge technologies and methodologies that are revolutionizing how we build digital experiences in the modern era.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  author: "Sarah Johnson",
  date: "2024-12-15",
  readTime: "8 min read",
  views: "2.4k",
  likes: 156,
  category: "Technology",
  image: "/api/placeholder/800/450",
  tags: ["Web Development", "Technology", "Future", "Innovation"]
};

const blogPosts = [
  {
    id: 2,
    title: "Design Systems That Scale: Building for the Future",
    excerpt: "Learn how to create design systems that grow with your product and maintain consistency across all touchpoints.",
    author: "Michael Chen",
    date: "2024-12-10",
    readTime: "6 min read",
    views: "1.8k",
    likes: 89,
    category: "Design",
    image: "/api/placeholder/600/400",
    tags: ["Design Systems", "UI/UX", "Scalability"]
  },
  {
    id: 3,
    title: "The Art of Minimalist UI: Less is More",
    excerpt: "Discover the principles behind creating clean, effective interfaces that prioritize user experience over visual complexity.",
    author: "Emma Rodriguez",
    date: "2024-12-08",
    readTime: "5 min read",
    views: "1.2k",
    likes: 67,
    category: "Design",
    image: "/api/placeholder/600/400",
    tags: ["Minimalism", "UI Design", "User Experience"]
  },
  {
    id: 4,
    title: "AI-Powered Development: Tools Changing the Game",
    excerpt: "Explore how artificial intelligence is transforming the development workflow and what it means for developers.",
    author: "David Kim",
    date: "2024-12-05",
    readTime: "7 min read",
    views: "3.1k",
    likes: 201,
    category: "Technology",
    image: "/api/placeholder/600/400",
    tags: ["AI", "Development", "Automation", "Tools"]
  },
  {
    id: 5,
    title: "Mobile-First Design: Why It Matters Now",
    excerpt: "Understanding the importance of mobile-first approach in creating responsive and accessible digital experiences.",
    author: "Lisa Park",
    date: "2024-12-03",
    readTime: "4 min read",
    views: "980",
    likes: 45,
    category: "Design",
    image: "/api/placeholder/600/400",
    tags: ["Mobile", "Responsive", "Design Strategy"]
  },
  {
    id: 6,
    title: "Performance Optimization: Speed Matters",
    excerpt: "Essential techniques for optimizing web performance and creating lightning-fast user experiences.",
    author: "Alex Thompson",
    date: "2024-12-01",
    readTime: "9 min read",
    views: "1.5k",
    likes: 78,
    category: "Development",
    image: "/api/placeholder/600/400",
    tags: ["Performance", "Optimization", "Web Vitals"]
  }
];

const categories = [
  { name: "All", count: 25, active: true },
  { name: "Technology", count: 12 },
  { name: "Design", count: 8 },
  { name: "Development", count: 5 }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/5 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium">
              <IoBookmarkOutline className="w-4 h-4" />
              Stories & Insights
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover insights, stories, and expert perspectives on technology, design, and innovation that shape the digital world.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30">
                  <IoSearchOutline className="w-6 h-6 text-gray-400 mr-4" />
                  <input 
                    type="text" 
                    placeholder="Search articles, topics, or authors..."
                    className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-lg"
                  />
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <IoTrendingUpOutline className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
        </div>

        <div className="group relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
          <article className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/30 hover:shadow-3xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-10 lg:aspect-h-16">
                  <div className="w-full h-96 lg:h-full bg-gradient-to-br from-indigo-400 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <IoPersonOutline className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCalendarOutline className="w-4 h-4" />
                      <span>Dec 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoTimeOutline className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-500">
                        <IoEyeOutline className="w-5 h-5" />
                        <span className="text-sm">{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <IoHeartOutline className="w-5 h-5" />
                        <span className="text-sm">{featuredPost.likes}</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 group/btn"
                    >
                      Read More
                      <IoArrowForwardOutline className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                category.active
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/30 hover:border-indigo-200">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-10">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-110 transition-transform duration-700"></div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <IoBookmarkOutline className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <IoPersonOutline className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoTimeOutline className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors duration-200">
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
                      <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        <IoBagOutline className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <IoEyeOutline className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoHeartOutline className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200">
                        <IoShareSocialOutline className="w-4 h-4 text-gray-600" />
                      </button>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-indigo-600 hover:text-indigo-700 text-sm font-medium transition-colors duration-200"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group">
            Load More Articles
            <IoArrowForwardOutline className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                Stay Updated
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss our latest insights, stories, and exclusive content.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;