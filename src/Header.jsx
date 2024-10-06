import Button from "./Button";
import CirclesSvg from "./CirclesSvg";
import LogoPic from "./LogoPic";

function NavbarSection() {
  return (
    <>
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4 py-3">
              <a
                href="index.html"
                className="navbar-logo block w-60 max-w-full px-4"
              >
                <LogoPic
                  src="/src/assets/images/logo/logo.svg"
                  alt="logo"
                  className="header-logo h-12"
                />
              </a>

              <ul className="hidden lg:flex ">
                <li className="group relative">
                  <a
                    href="#home"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                  >
                    Home
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="#about"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    About
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="#pricing"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    Pricing
                  </a>
                </li>

                <li className="group relative">
                  <a
                    href="blog-grids.html"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    Blog
                  </a>
                </li>
              </ul>

              <div className="sm:flex">
                <Button
                  href="signin.html"
                  className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                  buttonText="Sign in"
                />
                <Button
                  href="signup.html"
                  className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                  buttonText="Sign Up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <div
        id="home"
        className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="hero-content  mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  We&apos;ll build house of your dream
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  We have 9000 more review and our customers trust on out
                  property and quality products.
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Button
                      href="https://links.tailgrids.com/play-download"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                      buttonText=" Book Now"
                    />
                  </li>
                  <li>
                    <Button
                      href="https://github.com/tailgrids/play-tailwind"
                      className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                      buttonText="  Contact Us"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4">
              <div className=" relative z-10 mx-auto max-w-[845px]">
                <div className="mt-16">
                  <LogoPic
                    src="/src/assets/images/hero/hero-image.png"
                    alt="hero"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                  />
                </div>
                <div className="absolute -left-9 bottom-0 z-[-1]">
                  <CirclesSvg />
                </div>
                <div className="absolute -right-6 -top-6 z-[-1]">
                  <CirclesSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
    </>
  );
}
