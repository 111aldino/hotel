import { Metadata } from "next";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us - Get In Touch",
  description: "Contact our team for inquiries, support, or collaboration opportunities.",
};

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-30">
      
      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Contact Information
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Let's Start a <span className="text-blue-600">Conversation</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We&apos;re here to help and answer any questions you might have. 
                We look forward to hearing from you and connecting with you soon.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IoMailOutline className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600 mb-2">Send us an email anytime</p>
                    <a 
                      href="mailto:contact@yourcompany.com" 
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      hotelmumbai@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IoCallOutline className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600 mb-2">Call us during business hours</p>
                    <div className="space-y-1">
                      <a 
                        href="tel:+628123456789" 
                        className="block text-green-600 hover:text-green-700 font-medium transition-colors"
                      >
                        +62 812 3456 789
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IoLocationOutline className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Location</h3>
                    <p className="text-gray-600 mb-2">Visit us at our office</p>
                    <address className="text-purple-600 not-italic leading-relaxed">
                      Jalan Cempaka, Kec Sungai Menang<br />
                      Kab Ogan Komering Ulu Timur<br />
                      Sumatera Selatan, Indonesia
                    </address>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IoTimeOutline className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 mb-2">We&apos;re available during these hours</p>
                    <div className="space-y-1 text-orange-600">
                      <p className="font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="font-medium">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="font-medium">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

