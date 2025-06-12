// import HeaderSection from "@/components/header_section";
// import { Metadata } from "next";
// import {
//   IoCallOutline,
//   IoLocationOutline,
//   IoMailOutline,
//   IoLogoFacebook,
//   IoLogoInstagram,
// } from "react-icons/io5";
// import ContactForm from "@/components/contact-form";

// export const metadata: Metadata = {
//   title: "Contact",
// };

// const ContactPage = () => {
//   return (
//     <div className="">
//       <HeaderSection
//         title="Contact Us"
//         subTitle="Lorem ipsum dolor sit amet."
//       />
//       <div className="max-w-screen-xl mx-auto py-20 px-4">
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="">
//             <h1 className="text-lg text-gray-500 mb-3">Contact Us</h1>
//             <h1 className="text-5xl font-semibold text-gray-900 mb-4">
//               Get In Touch To Day{" "}
//             </h1>
//             <p className="text-gray-700 py-5">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
//               voluptatem enim sint veritatis vero soluta dolore ratione.
//             </p>
//             <ul className="list-item space-y-6 pt-8">
//               <li className="flex gap-5">
//                 <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
//                   <IoMailOutline className="size-7" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="text-lg font-semibold mb-1">Email :</h4>
//                   <p>Email-us@gmail.com</p>
//                 </div>
//               </li>

//               <li className="flex gap-5">
//                 <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
//                   <IoCallOutline className="size-7" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="text-lg font-semibold mb-1">Phone Number :</h4>
//                   <p>+21234567891011, +628123456789</p>
//                 </div>
//               </li>

//               <li className="flex gap-5">
//                 <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
//                   <IoLocationOutline className="size-7" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="text-lg font-semibold mb-1">Phone Number :</h4>
//                   <p>
//                     Jalan Cempaka, Kec Sungai Menang, Kab Ogan Komering Ulu
//                     Timur, Sumatera Selatan, Indonesia
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <ContactForm/>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ContactPage;

// import HeaderSection from "@/components/header_section";
// import { Metadata } from "next";
// import {
//   IoCallOutline,
//   IoLocationOutline,
//   IoMailOutline,
//   IoLogoFacebook,
//   IoLogoInstagram,
//   IoTimeOutline,
//   IoGlobeOutline,
// } from "react-icons/io5";
// import ContactForm from "@/components/contact-form";

// export const metadata: Metadata = {
//   title: "Contact Us - Get In Touch",
//   description: "Contact our team for inquiries, support, or collaboration opportunities.",
// };

// const ContactPage = () => {
//   return (
//     <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-35">
//       {/* <HeaderSection
//         title="Contact Us"
//         subTitle="We'd love to hear from you. Get in touch with our team."
//       /> */}
      
//       {/* Main Contact Section */}
//       <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
          
//           {/* Left Side - Contact Information */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
//                 Contact Information
//               </span>
//               <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                 Let's Start a <span className="text-blue-600">Conversation</span>
//               </h1>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 We're here to help and answer any questions you might have. 
//                 We look forward to hearing from you and connecting with you soon.
//               </p>
//             </div>

//             {/* Contact Cards */}
//             <div className="space-y-4">
//               {/* Email Card */}
//               <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <IoMailOutline className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
//                     <p className="text-gray-600 mb-2">Send us an email anytime</p>
//                     <a 
//                       href="mailto:contact@yourcompany.com" 
//                       className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
//                     >
//                       contact@yourcompany.com
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Phone Card */}
//               <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <IoCallOutline className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Numbers</h3>
//                     <p className="text-gray-600 mb-2">Call us during business hours</p>
//                     <div className="space-y-1">
//                       <a 
//                         href="tel:+21234567891011" 
//                         className="block text-green-600 hover:text-green-700 font-medium transition-colors"
//                       >
//                         +21 234 567 891 011
//                       </a>
//                       <a 
//                         href="tel:+628123456789" 
//                         className="block text-green-600 hover:text-green-700 font-medium transition-colors"
//                       >
//                         +62 812 3456 789
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Location Card */}
//               <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <IoLocationOutline className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Location</h3>
//                     <p className="text-gray-600 mb-2">Visit us at our office</p>
//                     <address className="text-purple-600 not-italic leading-relaxed">
//                       Jalan Cempaka, Kec Sungai Menang<br />
//                       Kab Ogan Komering Ulu Timur<br />
//                       Sumatera Selatan, Indonesia
//                     </address>
//                   </div>
//                 </div>
//               </div>

//               {/* Business Hours Card */}
//               <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <IoTimeOutline className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
//                     <p className="text-gray-600 mb-2">We're available during these hours</p>
//                     <div className="space-y-1 text-orange-600">
//                       <p className="font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
//                       <p className="font-medium">Saturday: 9:00 AM - 2:00 PM</p>
//                       <p className="font-medium">Sunday: Closed</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* tampilan medsos */}
//             <div className="pt-8 border-t border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
//               <div className="flex gap-4">
//                 <a 
//                   href="#" 
//                   className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors group"
//                   aria-label="Facebook"
//                 >
//                   <IoLogoFacebook className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
//                 </a>
//                 <a 
//                   href="#" 
//                   className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl flex items-center justify-center transition-all group"
//                   aria-label="Instagram"
//                 >
//                   <IoLogoInstagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
//                 </a>
//                 <a 
//                   href="#" 
//                   className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-xl flex items-center justify-center transition-colors group"
//                   aria-label="Website"
//                 >
//                   <IoGlobeOutline className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* tampilan Contact Form */}
//           <div className="lg:sticky lg:top-8">
//             <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
//               <div className="mb-8">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
//                 <p className="text-gray-600">
//                   Fill out the form below and we'll get back to you as soon as possible.
//                 </p>
//               </div>
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* tampilan why Choose us */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 pt-20 pb-0">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-white mb-4">
//               Why Choose Us?
//             </h2>
//             <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
//               We're committed to providing exceptional service and building lasting relationships with our clients.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8 pb-20">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <IoCallOutline className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
//               <p className="text-blue-100">
//                 Our dedicated support team is available around the clock to assist you.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <IoMailOutline className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
//               <p className="text-blue-100">
//                 We respond to all inquiries within 24 hours or less.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <IoLocationOutline className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-2">Local Expertise</h3>
//               <p className="text-blue-100">
//                 Deep understanding of local market and customer needs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

