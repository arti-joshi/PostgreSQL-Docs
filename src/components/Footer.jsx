import { Database, Phone, Mail, MapPin, Linkedin, Instagram, Twitter, Youtube, Globe } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Intro */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">IntelliDB Enterprise</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              PostgreSQL Docs: Your comprehensive guide to PostgreSQL database management and optimization
            </p>
            <a 
              href="https://intellidbenterprise.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Globe className="h-4 w-4 mr-1" />
              <span>Visit Our Website</span>
            </a>
          </div>

          {/* Get in Touch - US Office */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              US Office
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  30 N Gould St Ste R, Sheridan, Wyoming - 82801
                </p>
              </div>
            </div>
          </div>

          {/* Get in Touch - India Office */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              India Office
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  Plot N0 – 465, 3rd Floor, Udyog Vihar, Phase-V, Gurugram-122016, Haryana
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+919289699382" className="ml-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  +91-9289699382
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:sales@intellidbenterprise.com" className="ml-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  sales@intellidbenterprise.com
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@intellidbenterprises.com" className="ml-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  info@intellidbenterprises.com
                </a>
              </div>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/intellidbenterprise/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/intellidbenterprise?igsh=MWhlZ3QzZ2U2Zzl4cg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/IntelliDBent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/@intellidbenterprise?si=ZuWZuL4OuRH2juLc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} IntelliDB Enterprise | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 