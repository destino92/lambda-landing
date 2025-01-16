import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <Link href="/" className="flex text-2xl font-bold items-center space-x-2 text-white">
                AI Scaler
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="font-mono text-lg text-white">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-white hover:text-white">GPU Benchmarks</Link></li>
                <li><Link href="#" className="text-white hover:text-white">Blog</Link></li>
                <li><Link href="#" className="text-white hover:text-white">Lambda Stack</Link></li>
                <li><Link href="#" className="text-white hover:text-white">Documentation</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-mono text-lg text-white">Company</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-white hover:text-white">About</Link></li>
                <li><Link href="#" className="text-white hover:text-white">Careers</Link></li>
                <li><Link href="#" className="text-white hover:text-white">Partners</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-mono text-lg text-white">Support</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-white hover:text-white">Technical Support</Link></li>
                <li><Link href="#" className="text-white hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-mono text-lg text-white">Contact</h3>
              <p className="text-white">P. 1 (866) 711-2025</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <p className="text-white">© 2025 All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-white hover:text-white">Terms of Service</Link>
              <Link href="#" className="text-white hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer

