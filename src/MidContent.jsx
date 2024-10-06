import Button from "./Button";
import { FAQcircleSvg1, FAQcircleSvg2 } from "./CirclesSvg";
import FaqContent from "./FaqContent";

import { ctaSectionSVGdata, pathsdata as data, teamMemberSectionSVGdata, yearofexpericenceSvgPathData } from "./PathsData";



import Featuresproperties from "./Featuresproperties";
import LogoPic from "./LogoPic";



import PropertyCard from "./PropertyCard";

import Svg, {
  CtaSectionSVG,
  TeamMemberSectionSVG,
  YearofexpericenceSvg,
} from "./Svg";

import { teamMembers } from "./Teaminfoproperties";
import { villaDetails as villaData } from "./VillaDetails";




function FeaturesSection() {
  return (
    <>
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Features
                </span>
                <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Main Features Of Play
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <Featuresproperties />
        </div>
      </section>
    </>
  );
}

function AvailableSections() {
  return (
    <>
      <section>
        <div className="container">
          <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Properties
            </span>
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Grab your Dream Property
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Property Item 1 */}
            {villaData.map((villa, key) => {
              return <PropertyCard key={key} villa={villa} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
      >
        <div className="container">
          <div>
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[540px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                    Innovative Tools for Real Estate Excellence
                  </h2>
                  <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                    The main ‘thrust’ is to focus on educating our clients on
                    how to best navigate the real estate market with interactive
                    guides and personalized consultations led by industry
                    experts.
                    <br />
                    <br />
                    The main ‘thrust' is to focus on educating attendees on how
                    to best protect highly vulnerable business applications with
                    interactive panel.
                  </p>

                  <Button
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                    buttonText="Know More"
                  />
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                  <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                    <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                      <LogoPic
                        // src="/src/assets/images/about/about-image-01.jpg"
                        src="/src/assets/images/about/about-image-01.jpg"

                        alt="about image"
                        className="h-full w-full object-cover object-center"
                      />
                      {/* <img src="./assets/images/about/about-image-01.jpg" alt="about image"
                    className="h-full w-full object-cover object-center" /> */}
                    </div>
                  </div>

                  <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                    <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                      <LogoPic
                        src="/src/assets/images/about/about-image-02.jpg"
                        alt="about image"
                        className="h-full w-full object-cover object-center"
                      />
                      {/* <img src="./assets/images/about/about-image-02.jpg" alt="about image"
                    className="h-full w-full object-cover object-center" /> */}
                    </div>

                    <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                      <div>
                        <span className="block text-5xl font-extrabold text-white">
                          09
                        </span>
                        <span className="block text-base font-semibold text-white">
                          We have
                        </span>
                        <span className="block text-base font-medium text-white text-opacity-70">
                          Years of experience
                        </span>
                      </div>
                      <div>
                        <span className="absolute left-0 top-0 -z-10">
                          <YearofexpericenceSvg
                            width="106"
                            height="144"
                            viewBox="0 0 106 144"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            elements={yearofexpericenceSvgPathData[0]}
                          />
                        </span>
                        <span className="absolute right-0 top-0 -z-10">
                          <YearofexpericenceSvg
                            width="130"
                            height="97"
                            viewBox="0 0 130 97"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            elements={yearofexpericenceSvgPathData[1]}
                          />
                        </span>
                        <span className="absolute bottom-0 right-0 -z-10">
                          <YearofexpericenceSvg
                            width="175"
                            height="104"
                            viewBox="0 0 175 104"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            elements={yearofexpericenceSvgPathData[2]}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CtaSection() {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
        <div className="container mx-auto">
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap items-stretch">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[570px] text-center">
                  <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                    <span>What Are You Looking For?</span>
                    <span className="text-3xl font-normal md:text-[40px]">
                      Get Started Now
                    </span>
                  </h2>
                  <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                    There are many variations of passages of Lorem Ipsum but the
                    majority have suffered in some form.
                  </p>

                  <Button
                    href="javascript:void(0)"
                    className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                    buttonText="Let's have a meeting"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 top-0">
            <CtaSectionSVG
              width="495"
              height="470"
              viewBox="0 0 495 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              elements={ctaSectionSVGdata[0]}
            />
          </span>
          <span className="absolute bottom-0 right-0">
            <CtaSectionSVG
              width="493"
              height="470"
              viewBox="0 0 493 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              elements={ctaSectionSVGdata[1]}
            />
          </span>
        </div>
      </section>
    </>
  );
}

function FaqSection() {
  return (
    <>
      <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Any Questions? Look Here
                </h2>
                <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <FaqContent />
              <FaqContent />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <FaqContent />
              <FaqContent />
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-4 top-4 -z-[1]">
            <FAQcircleSvg1 />
          </span>
          <span className="absolute bottom-4 right-4 -z-[1]">
            <FAQcircleSvg2 />
          </span>
        </div>
      </section>
    </>
  );
}

function TeamMemberSection() {
  return (
    <>
      <section
        id="team"
        className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Team Members
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Clients
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4"
              >
                <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                  <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                    <LogoPic
                      src={member.imageSrc}
                      alt="team image"
                      className="h-[120px] w-[120px] rounded-full"
                    />
                    <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                    <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                      <TeamMemberSectionSVG
                        width="55"
                        height="53"
                        viewBox="0 0 55 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        paths={teamMemberSectionSVGdata[0]}
                      />
                    </span>
                  </div>
                  <div className="text-center">
                    <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      {member.name}
                    </h4>
                    <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                      {member.role}
                    </p>
                    <div className="flex items-center justify-center gap-5">
                      {member.svgPaths.map((path, svgIndex) => (
                        <a
                          key={svgIndex}
                          href="javascript:void(0)"
                          className="text-dark-6 hover:text-primary"
                        >
                          <Svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                            paths={path}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactSection() {
  return (
    <>
      <section id="contact" className="relative py-20 md:py-[120px]">
        <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
        <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
        <div className="container px-4">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="ud-contact-content-wrapper">
                <div className="ud-contact-title mb-12 lg:mb-[150px]">
                  <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                    CONTACT US
                  </span>
                  <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                    Let's talk about your problem.
                  </h2>
                </div>
                <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                  <div className="mb-8 flex w-[330px] max-w-full">
                    <div className="mr-6 text-[32px] text-primary">
                      <Svg
                        width="29"
                        height="35"
                        viewBox="0 0 29 35"
                        className="fill-current"
                        paths={data[6]}
                      />
                    </div>
                    <div>
                      <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                        Our Location
                      </h5>
                      <p className="text-base text-body-color dark:text-dark-6">
                        401 Broadway, 24th Floor, Orchard Cloud View, London
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex w-[330px] max-w-full">
                    <div className="mr-6 text-[32px] text-primary">
                      <Svg
                        width="34"
                        height="25"
                        viewBox="0 0 34 25"
                        className="fill-current"
                        paths={data[5]}
                      />
                    </div>
                    <div>
                      <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                        How Can We Help?
                      </h5>
                      <p className="text-base text-body-color dark:text-dark-6">
                        info@yourdomain.com
                      </p>
                      <p className="mt-1 text-base text-body-color dark:text-dark-6">
                        contact@yourdomain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <div className=" rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
                <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                  Send us a Message
                </h3>
                <form>
                  <div className="mb-[22px]">
                    <label
                      htmlFor="fullName"
                      className="mb-4 block text-sm text-body-color dark:text-dark-6"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Adam Gelius"
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    />
                  </div>
                  <div className="mb-[22px]">
                    <label
                      htmlFor="email"
                      className="mb-4 block text-sm text-body-color dark:text-dark-6"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@yourmail.com"
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    />
                  </div>
                  <div className="mb-[22px]">
                    <label
                      htmlFor="phone"
                      className="mb-4 block text-sm text-body-color dark:text-dark-6"
                    >
                      Phone*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+885 1254 5211 552"
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    />
                  </div>
                  <div className="mb-[30px]">
                    <label
                      htmlFor="message"
                      className="mb-4 block text-sm text-body-color dark:text-dark-6"
                    >
                      Message*
                    </label>
                    <textarea
                      name="message"
                      rows="1"
                      placeholder="type your message here"
                      className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    ></textarea>
                  </div>
                  <div className="mb-0">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function MidContent() {
  return (
    <>
      <FeaturesSection />
      <AvailableSections />
      <AboutSection />
      <CtaSection />
      <FaqSection />
      <TeamMemberSection />
      <ContactSection />
    </>
  );
}
