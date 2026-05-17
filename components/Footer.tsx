import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded" />
              <span className="text-xl font-bold text-white">AI Solutions</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Leading provider of enterprise AI solutions transforming businesses globally.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors text-sm">Industries</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</Link></li>
              <li><Link href="/insights" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 AI Solution Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
