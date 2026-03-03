export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">YC</span>
              </div>
              <span className="text-lg font-semibold text-white">Young&apos;s Cove</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Premium waterfront living where nature meets modern comfort.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#listings" className="hover:text-white transition-colors">Listings</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#details" className="hover:text-white transition-colors">Property Details</a></li>
              <li><a href="#agents" className="hover:text-white transition-colors">Our Agents</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Young&apos;s Cove, New Brunswick</li>
              <li>Canada</li>
              <li className="pt-2">
                <a href="tel:5550000000" className="hover:text-white transition-colors">
                  (555) 000-0000
                </a>
              </li>
              <li>
                <a href="mailto:info@youngscove.com" className="hover:text-white transition-colors">
                  info@youngscove.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Young&apos;s Cove. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Not intended to solicit buyers or sellers currently under contract.
          </p>
        </div>
      </div>
    </footer>
  );
}
