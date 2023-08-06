import { Form, useNavigation } from "@remix-run/react";
import { getUserDetails, uploadResume } from "~/utils/api.server";
import userProfileStyles from "~/styles/shared/components/UserProfile.css";
import {
  redirect,
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";
import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/node";
import { BiLoader } from "react-icons/bi";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: userProfileStyles,
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUserDetails(request);

  if (!!user.gender) return redirect("/");
  return null;
};

export const action: ActionFunction = async ({ request }) => {
  const uploadHandler = composeUploadHandlers(
    async ({ name, data }) => {
      if (name !== "resume") {
        return undefined;
      }
      const uploadedImage = await uploadResume(
        request,
        data
      );
      return uploadedImage.url;
    },
    createMemoryUploadHandler()
  );

  const formData = await parseMultipartFormData(
    request,
    uploadHandler
  );

  for (const [key, value] of formData) {
    console.log({ key, value })
  }

  return null;
};

export default function Start() {
  const navigation = useNavigation();

  return (
    <Form method="post" className="kz-user-form" encType="multipart/form-data">
      <div>
        <h1>Tell us about yourself</h1>
      </div>
      <div>
        <h5>
          We like being on a first-name basis, but it also helps us get in touch
          with you.
        </h5>
      </div>
      <div className="grid-box">
        <div className="select">
          <label className="label" htmlFor="gender">
            Gender<sup>*</sup>
          </label>
          <select name="gender">
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="registration_number">
            Registration Number<sup>*</sup>
          </label>
          <input
            type="text"
            name="registration_number"
            placeholder="RA2111032010022"
          />
        </div>
        <div className="select">
          <label className="label" htmlFor="branch">
            Branch<sup>*</sup>
          </label>
          <select name="branch">
            <BranchOptions />
          </select>
        </div>
        <div className="resume">
          <label className="label" htmlFor="resume">
            Resume (upto 20 megabytes)
          </label>
          <input name="resume" type="file" accept="application/pdf" />
        </div>
        <div>
          <label className="label" htmlFor="contact">
            Contact Number<sup>*</sup>
          </label>
          <input type="text" name="contact" placeholder="9898384880" />
        </div>
        <div>
          <label className="label" htmlFor="linkedin">
            LinkedIn Profile
          </label>
          <input
            type="text"
            name="linkedin"
            placeholder="https://www.linkedin.com/company/srmkzilla/"
          />
        </div>
        <div>
          <label className="label" htmlFor="portfolio">
            Portfolio
          </label>
          <input
            type="text"
            name="portfolio"
            placeholder="https://www.dribbble.com/michael-scott"
          />
        </div>
        <div>
          <label className="label" htmlFor="github">
            GitHub Link
          </label>
          <input
            type="text"
            name="github"
            placeholder="https://www.github.com/michael-scott"
          />
        </div>
      </div>
      <div className="button-collection">
        <button type="submit">
          {navigation.state === "submitting" ? (
            <BiLoader className="spin" />
          ) : (
            "Continue"
          )}
        </button>
        <button className="logout">Logout</button>
      </div>
    </Form>
  );
}

const BranchOptions = () => (
  <>
    <option value="aerospace_engineering">Aerospace Engineering</option>;
    <option value="artificial_intelligence">Artificial Intelligence</option>;
    <option value="automobile_engineering">Automobile Engineering</option>;
    <option value="automobile_with_specialisation_in_automotive_electronics">
      Automobile with specialisation in Automotive Electronics
    </option>
    ;
    <option value="automotive_engineering_with_specialization_in_electric_&_hybrid_vehicles_(in_collaboration_with_arai_pune)">
      Automotive Engineering with specialization in Electric & Hybrid Vehicles
      (In collaboration with ARAI Pune)
    </option>
    ;
    <option value="biomedical_engineering_(bme)">
      Biomedical Engineering (BME)
    </option>
    ;<option value="biotechnology">Biotechnology</option>;
    <option value="biotechnology_w/s_in_genetic_engineering">
      Biotechnology W/S in Genetic Engineering
    </option>
    ;
    <option value="biotechnology_w/s_in_regenerative_medicine">
      Biotechnology W/S in Regenerative Medicine
    </option>
    ;<option value="chemical_engineering">Chemical Engineering</option>;
    <option value="civil_engineering">Civil Engineering</option>;
    <option value="civil_engineering_with_computer_applications">
      Civil Engineering with Computer Applications
    </option>
    ;
    <option value="civil_engineering_w/s_structural_engineering">
      Civil Engineering W/S Structural Engineering
    </option>
    ;
    <option value="civil_engineering_w/s_geotechnical_engineering">
      Civil Engineering W/S Geotechnical Engineering
    </option>
    ;
    <option value="civil_engineering_w/s_transportation_engineering">
      Civil Engineering W/S Transportation Engineering
    </option>
    ;
    <option value="civil_engineering_w/s_water_resources_and_environmental_engineering">
      Civil Engineering W/S Water Resources and Environmental Engineering
    </option>
    ;
    <option value="computer_science_and_business_systems_(in_partnership_with_tcs)">
      Computer Science and Business Systems (in partnership with TCS)
    </option>
    ;
    <option value="computer_science_and_engineering">
      Computer Science and Engineering
    </option>
    ;
    <option value="computer_science_engineering_(data_science)_in_association_with_mu_sigma">
      Computer Science Engineering (Data Science) in association with Mu Sigma
    </option>
    ;
    <option value="cse_w/s_big_data_analytics">
      CSE W/S Big Data Analytics
    </option>
    ;
    <option value="cse_w/s_in_artificial_intelligence_and_machine_learning">
      CSE W/S in Artificial Intelligence and Machine Learning
    </option>
    ;
    <option value="cse_w/s_in_in_data_science_&_artificial_intelligence_(in_association_with_ibm)">
      CSE W/S in in Data Science & Artificial Intelligence (in association with
      IBM)
    </option>
    ;
    <option value="cse_w/s_in_block_chain_technology">
      CSE W/S in Block chain Technology
    </option>
    ;
    <option value="cse_w/s_in_blockchain&iot_(in_association_with_ibm)">
      CSE W/S in Blockchain&IoT (in association with IBM)
    </option>
    ;
    <option value="cse_w/s_in_cloud_computing">
      CSE W/S in Cloud Computing
    </option>
    ;
    <option value="cse_w/s_in_cloud_engineering_and_devops_automation_(in_association_with_xebia)">
      CSE W/S in Cloud Engineering and DevOps Automation (in association with
      Xebia)
    </option>
    ;
    <option value="cse_w/s_in_artificial_intelligence_and_machine_learning_(in_association_with_xebia">
      CSE W/S in Artificial Intelligence and Machine Learning (in association
      with Xebia
    </option>
    ;
    <option value="cse_w/s_in_computer_networking">
      CSE W/S in Computer Networking
    </option>
    ;
    <option value="cse_w/s_in_cyber_security">CSE W/S in Cyber Security</option>
    ;
    <option value="cse_w/s_in_gaming_technology">
      CSE W/S in Gaming Technology
    </option>
    ;
    <option value="cse_w/s_in_internet_of_things_(iot)">
      CSE W/S in Internet of Things (IOT)
    </option>
    ;
    <option value="cse_w/s_software_engineering">
      CSE W/S Software Engineering
    </option>
    ;
    <option value="cse_w/s_in_cloud_and_mobile_based_applications_(in_association_with_ibm)">
      CSE W/S in Cloud and Mobile Based Applications (in association with IBM)
    </option>
    ;
    <option value="cse_w/s_in_information_technology">
      CSE W/S in Information Technology
    </option>
    ;
    <option value="electrical_and_electronics_engineering">
      Electrical and Electronics Engineering
    </option>
    ;
    <option value="electrical_and_electronics_engineering_w/s_smart_grid">
      Electrical and Electronics Engineering W/S Smart Grid
    </option>
    ;
    <option value="electrical_and_electronics_engineering_w/s_energy_efficient_systems">
      Electrical and Electronics Engineering W/S Energy Efficient Systems
    </option>
    ;
    <option value="electronics_and_communication_engineering">
      Electronics and Communication Engineering
    </option>
    ;
    <option value="electronics_and_computer_engineering_electronics_and_communication_engineering_w/s_vlsi_&_embedded_systems">
      Electronics and Computer Engineering Electronics and Communication
      Engineering W/S VLSI & Embedded Systems
    </option>
    ;
    <option value="electronics_and_communication_engineering_w/s_advanced_communication_systems">
      Electronics and Communication Engineering W/S Advanced Communication
      Systems
    </option>
    ;
    <option value="electronics_and_communication_engineering_w/s_signal/image_processing_using_ai">
      Electronics and Communication Engineering W/S Signal/Image Processing
      using AI
    </option>
    ;
    <option value="electronics_and_instrumentation_engineering">
      Electronics and Instrumentation Engineering
    </option>
    ;
    <option value="ece_w/s_in_cyber_physical_systems">
      ECE W/S in Cyber Physical Systems
    </option>
    ;<option value="ece_w/s_in_data_science">ECE W/S in Data Science</option>;
    <option value="information_technology">Information Technology</option>;
    <option value="integrated_m.tech_in_material_science_and_engineering">
      Integrated M.Tech in Material Science and Engineering
    </option>
    ;
    <option value="integrated_m.tech_in_artificial_intelligence">
      Integrated M.Tech in Artificial Intelligence
    </option>
    ;
    <option value="integrated_m.tech_in_cse_w/s_in_cognitive_computing">
      Integrated M.Tech in CSE W/S in Cognitive Computing
    </option>
    ;
    <option value="integrated_m.tech_in_cse_w/s_in_cyber_security_&_digital_forensics">
      Integrated M.Tech in CSE W/S in Cyber Security & Digital Forensics
    </option>
    ;
    <option value="integrated_m.tech_in_cse_w/s_in_data_science">
      Integrated M.Tech in CSE W/S in Data Science
    </option>
    ;
    <option value="integrated_m.tech_in_ece_w/s_in_micro_electronics_system_design">
      Integrated M.Tech in ECE W/S in Micro Electronics System Design
    </option>
    ;<option value="mechanical_engineering">Mechanical Engineering</option>;
    <option value="mechanical_engineering_w/s_in_artificial_intelligence_and_machine_learning">
      Mechanical Engineering W/S in Artificial Intelligence and Machine Learning
    </option>
    ;
    <option value="mechanical_engineering_with_specialisation_in_robotics/_mechatronics">
      Mechanical Engineering with specialisation in Robotics/ Mechatronics
    </option>
    ;
    <option value="mechanical_engineering_w/s_additive_manufacturing">
      Mechanical Engineering W/S Additive Manufacturing
    </option>
    ;
    <option value="mechanical_engineering_w/s_advanced_materials">
      Mechanical Engineering W/S Advanced Materials
    </option>
    ;
    <option value="mechanical_engineering_w/s_automotive_engineering">
      Mechanical Engineering W/S Automotive Engineering
    </option>
    ;<option value="mechatronics_engineering">Mechatronics Engineering</option>;
    <option value="mechatronics_engineering_with_specialisation_in_robotics">
      Mechatronics Engineering with specialisation in Robotics
    </option>
    ;<option value="nanotechnology">Nanotechnology</option>;
  </>
);
