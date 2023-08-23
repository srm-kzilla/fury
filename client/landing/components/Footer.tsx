import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import MailLine from "remixicon-react/MailLineIcon";
import LinkedInBoxLine from "remixicon-react/LinkedinBoxLineIcon";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-6 md:px-8 bg-secondary xl:px-48">
      <div className="border-b-2 flex flex-col md:flex-row gap-10 py-4">
        <div className="flex flex-col gap-6">
          <div className="flex px-2 md:px-0 md:gap-4 lg:gap-8 border-b-2 w-full justify-between sm:justify-start sm:w-3/5 pb-4">
            <a
              href="https://twitter.com/SRMKZILLA_Club"
              target="blank"
              className="hover:text-secondary_highlight"
            >
              <TwitterLineIcon size={40} />
            </a>
            <a
              href="https://www.instagram.com/srmkzilla/"
              target="blank"
              className="hover:text-secondary_highlight"
            >
              <InstagramLineIcon size={40} />
            </a>
            <a
              href="https://www.youtube.com/@SRMKZILLA"
              target="blank"
              className="hover:text-secondary_highlight"
            >
              <YoutubeLineIcon size={40} />
            </a>
            <a
              href="mailto:technical@srmkzilla.net"
              target="blank"
              className="hover:text-secondary_highlight"
            >
              <MailLine size={40} />
            </a>
            <a
              href="https://www.linkedin.com/company/srmkzilla/"
              target="blank"
              className="hover:text-secondary_highlight"
            >
              <LinkedInBoxLine size={40} />
            </a>
          </div>
          <div className="px-16 md:px-0 flex flex-col sm:items-start items-center md:flex md:flex-row gap-10 py-6">
            <div className="flex flex-col md:w-1/3 gap-3 sm:items-start items-center text-center sm:text-left">
              <a href="https://srmkzilla.net" target="blank">
                <h2 className="text-highlight font-semibold lg:text-lg  whitespace-nowrap">
                  About Us
                </h2>
              </a>
              <a href="https://medium.com/srmkzilla" target="blank">
                Our Blog
              </a>
              <a href="/faq" target="blank">
                FAQ's
              </a>
            </div>
            <div className="flex flex-col gap-3 sm:items-start items-center text-center sm:text-left">
              <h2 className="text-highlight font-semibold lg:text-lg">
                Equal Opportunity
              </h2>
              <p>
                SRMKZILLA is proud to be an{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-secondary_highlight ">
                  equal opportunity workplace.
                </span>{" "}
                We are committed to equal volunteering opportunity regardless of
                race, color, ancestry, religion, sex, national origin, sexual
                orientation, age, citizenship, disability or gender identity. We
                even accept developers who think HTML is a language and Python
                is the best.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center basis-1/3">
          {/* <a href="https://dashboard.kzilla.xyz" target="_blank"> */}
          <div className="relative w-64 h-64">
            <Image src="srmkzilla-join-now.svg" alt="SRMKZILLA" fill />
          </div>
          {/* </a> */}
        </div>
      </div>
      <div className="flex justify-center sm:justify-end gap-16 py-3 px-4 md:px-0">
        <div className="flex flex-col">
          <div className="text-highlight">
            <a href="privacy-policy" target="blank">
              <div>Privacy Policy</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
