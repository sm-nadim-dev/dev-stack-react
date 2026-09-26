import logo from "../assets/logo-text.png";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-20">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14 mb-12 text-center md:text-left">

                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <div><img src={logo} alt="Logo" className="h-8" /></div>

                        <p className="text-gray-500 text-sm max-w-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <a href="#" className="hover:text-gray-900 font-bold">GitHub</a>
                            <span>•</span>
                            <a href="#" className="hover:text-gray-900 font-bold">Twitter</a>
                            <span>•</span>
                            <a href="#" className="hover:text-gray-900 font-bold">LinkedIn</a>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <h4 className="font-semibold text-gray-900 text-xs tracking-wider uppercase mb-4">Product</h4>
                        <ul className="space-y-2.5 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Home</a></li>
                            <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
                            <li><a href="#" className="hover:text-gray-900">Projects</a></li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <h4 className="font-semibold text-gray-900 text-xs tracking-wider uppercase mb-4">Company</h4>
                        <ul className="space-y-2.5 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">About</a></li>
                            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <h4 className="font-semibold text-gray-900 text-xs tracking-wider uppercase mb-4">Legal</h4>
                        <ul className="space-y-2.5 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-gray-600">Privacy</a>
                        <a href="#" className="hover:text-gray-600">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}