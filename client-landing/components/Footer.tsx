import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import FaceBookLineIcon from "remixicon-react/FacebookCircleLineIcon";
import MailLine from "remixicon-react/MailLineIcon";
import LinkedInBoxLine from "remixicon-react/LinkedinBoxLineIcon";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" px-16 py-10 bg-recruitments-footerbg">
      <div className=" border-b-2 flex gap-10 py-4">
        <div className=" flex flex-col gap-6">
          <div className=" flex md:gap-4 lg:gap-8 border-b-2 w-3/5">
            <TwitterLineIcon size={40} />
            <InstagramLineIcon size={40} />
            <YoutubeLineIcon size={40} />
            <FaceBookLineIcon size={40} />
            <MailLine size={40} />
            <LinkedInBoxLine size={40} />
          </div>
          <div className=" flex basis-2/3 gap-10 py-6">
            <div className=" flex flex-col gap-3">
              <h2 className=" text-recruitments-orange font-semibold text-xl">
                More About Us
              </h2>
              <ul className="">
                <li>SRMKZILLA</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className=" flex flex-col gap-3">
              <h2 className=" text-recruitments-orange font-semibold text-xl">
                Related Information
              </h2>
              <ul className="">
                <li>Privacy</li>
              </ul>
            </div>
            <div className=" flex flex-col gap-3">
              <h2 className=" text-recruitments-orange font-semibold text-xl">
                Equal Opportunity
              </h2>
              <p>
                SRMKZILLA is proud to be an{" "}
                <span className=" text-recruitments-orange">
                  equal opportunity workplace.
                </span>{" "}
                We are committed to equal volunteering opportunity regardless of
                race, color, ancestry, religion, sex, national origin, sexual
                orientation, age, citizenship, disability or gender identity.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center basis-1/3">
          <div className=" relative w-64 h-64">
            <Image src="/FooterLogo.svg" alt="FooterLogo" fill />
          </div>
          <div className=" text-recruitments-orange text-2xl font-semibold">
            Get Started
          </div>
        </div>
      </div>
      <div className=" flex justify-end gap-16 py-3">
        <div className=" flex flex-col">
          <div className=" text-recruitments-orange flex gap-2">
            <div>Privacy</div>
            <div>Policy</div>
          </div>
          <div className=" flex gap-2">
            <div className=" text-recruitments-orange ">Service</div>
            <div>Apply</div>
          </div>
        </div>
        <div className=" relative w-10 h-10">
          <Image src="/MessageIcon.svg" alt="Contact" fill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
