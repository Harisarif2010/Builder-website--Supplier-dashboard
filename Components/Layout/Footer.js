import Image from "next/image";

const Footer = () => {
  const socialIcons = ["/icons/x.svg", "/icons/linkdedin.svg"];

  return (
    <footer className="bg-[#070D30] px-4 md:px-8 pt-20 pb-6 text-white relative">
      {/* Social Media Section */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-[90%] md:w-full max-w-7xl">
        <div className=" bg-[var(--primary-blue)] bg-opacity-20 rounded-[35px] py-3 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-sm font-medium text-center md:text-left">
            Get Connected with us on Social media
          </p>
          <div className="flex gap-3 justify-center">
            {socialIcons.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={40}
                height={40}
                alt={`icon-${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-8 md:gap-x-12">
          {/* Newsletter Section */}
          <div className="md:col-span-4 md:mr-8">
            <h3 className="font-bold text-lg mb-2">Keep Updated!</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get new news and offers
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Email"
                className="rounded-full sm:rounded-l-full sm:rounded-r-none px-4 py-2 w-full focus:outline-none text-sm bg-white placeholder-black mb-2 sm:mb-0"
              />
              <button className="text-white  bg-[var(--primary-blue)] px-4 py-2 rounded-full sm:rounded-r-full sm:rounded-l-none text-sm font-medium hover:bg-[#c99b82] transition-colors whitespace-nowrap">
                Subscribe now
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3 md:ml-8">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/images/mail.png"
                width={16}
                height={16}
                alt="Email icon"
              />
              <a href="mailto:info@example.com" className="text-sm">
                info@example.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/phone.png"
                width={16}
                height={16}
                alt="Phone icon"
              />
              <a href="tel:+1234567890" className="text-sm">
                +123 456 7890
              </a>
            </div>
          </div>

          {/* Terms & Privacy Section */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-2">Terms & Privacy</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* FAQs Section */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-lg mb-2">FAQs</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Payment & Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Returns & Cancellations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm">
        All Rights Reserved for Binya
      </div>
    </footer>
  );
};

export default Footer;
