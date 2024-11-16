import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FinePay</h3>
            <p className="text-gray-300">Secure and seamless payment solutions for your business needs.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/payments" className="hover:text-blue-400">Online Payments</a></li>
              <li><a href="/transfers" className="hover:text-blue-400">Money Transfers</a></li>
              <li><a href="/billing" className="hover:text-blue-400">Billing Solutions</a></li>
              <li><a href="/api" className="hover:text-blue-400">API Integration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>Email: info@finepay.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Payment Street, Finance City, FC 12345</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} FinePay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer