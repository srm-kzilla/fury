import { useContext, useState } from "react";
import userProfileStyles from "~/styles/shared/components/UserProfile.css";
import { useNavigate } from "@remix-run/react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { observer } from "mobx-react";
import { BiLoader } from "react-icons/bi";
import { DropZone, TextField } from "~/shared/components/Wizard/FormFields";
import { APIService } from "~/shared/services/api-service";
import { toast } from "~/shared/utils/toast";
import { AuthStore } from "~/shared/stores";
import { StoreContext } from "~/shared/components/Wizard/Store";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: userProfileStyles,
  },
];

const UserProfileForm = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const { blob, setBlob } = useContext(StoreContext);

  let navigate = useNavigate();
  const authStore = useContext(AuthStore);

  const capitaliseInitialChar = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <>
      <div className="kz-user-form">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            gender: "",
            registration_number: "",
            branch: "",
            contact_num: "",
            linkedin: "",
            github: "",
            resume: "",
            gfx_profile: "",
          }}
          onSubmit={async (values) => {
            setSubmitting(true);
            try {
              values.first_name = capitaliseInitialChar(values.first_name);
              values.last_name = capitaliseInitialChar(values.last_name);
              values.resume = blob;
              await APIService.getInstance().submitUserInfo({
                user: values,
              });
              const {
                data: { user },
              } = await APIService.getInstance().fetchUserInfo();

              authStore.setUser(user);
              navigate("/dashboard");
              toast({
                message: "All set!",
                title: "Create a new application to get started.",
                theme: "info",
              });
            } catch (err) {
              console.error(err);
              toast({
                message:
                  "Something went wrong! Please try again or contact support.",
                title: "This is embarrassing",
                theme: "error",
              });
            } finally {
              setSubmitting(false);
              setBlob("");
            }
          }}
          validationSchema={Yup.object().shape({
            first_name: Yup.string().trim().required("First name is required"),
            last_name: Yup.string().trim().required("Last name is required"),
            gender: Yup.string().required("Pronoun is required"),
            registration_number: Yup.string()
              .trim()
              .matches(
                /^RA(20|21|22)[0-9]{11}$/g,
                "You must be in 1st, 2nd year or 3rd year to apply"
              )
              .required("Registration number is required"),
            // year: Yup.string(),
            branch: Yup.string().required("Branch is required"),
            contact_num: Yup.string()
              .trim()
              .matches(/^[0-9]{10}$/, "Your contact number must be 10 digits")
              .required("We need your contact number to reach out to you!"),
            linkedin: Yup.string()
              .url("The URL you have entered doesn't seem right")
              .matches(
                /(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/g,
                "The URL you have entered doesn't seem right"
              ),
            github: Yup.string()
              .url("The URL you have entered doesn't seem right")
              .matches(
                /(http(s)?:\/\/)?([\w]+\.)?github\.com\/[A-z0-9_-]+\/?/g,
                "The URL you have entered doesn't seem right"
              ),
            resume: Yup.string(),
            gfx_profile: Yup.string().url(),
          })}
        >
          {(props) => {
            const { touched, errors, handleSubmit } = props;
            return (
              <div>
                <div>
                  <h1>Tell us about yourself</h1>
                </div>
                <div>
                  <h5>
                    We like being on a first-name basis, but it also helps us
                    get in touch with you.
                  </h5>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="grid-box">
                    <div>
                      <label className="label">
                        First Name<sup>*</sup>
                      </label>
                      <TextField name="first_name" placeholder="Michael" />
                    </div>
                    <div>
                      <label className="label">
                        Last Name<sup>*</sup>
                      </label>
                      <TextField name="last_name" placeholder="Scott" />
                    </div>
                    <div className="select">
                      <label className="label">
                        Gender<sup>*</sup>
                      </label>
                      <Field component="select" name="gender">
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Field>
                      {touched.gender && errors.gender && (
                        <p>{errors.gender}</p>
                      )}
                    </div>

                    <div>
                      <label className="label">
                        Registration Number<sup>*</sup>
                      </label>
                      <TextField
                        name="registration_number"
                        placeholder="RA2111029010045"
                      />
                    </div>
                    <div className="select">
                      <label className="label">
                        Branch<sup>*</sup>
                      </label>
                      <Field component="select" name="branch">
                        <BranchOptions />
                      </Field>
                      {touched.branch && errors.branch && (
                        <p>{errors.branch}</p>
                      )}
                    </div>
                    <div className="resume">
                      <label className="label">
                        Resume (upto 20 megabytes)
                      </label>
                      <DropZone label="Resume" name="resume" />
                    </div>

                    <div>
                      <label className="label">
                        Contact Number<sup>*</sup>
                      </label>
                      <TextField name="contact_num" placeholder="9898384880" />
                    </div>
                    <div>
                      <label className="label">LinkedIn Profile</label>
                      <TextField
                        name="linkedin"
                        placeholder="https://www.linkedin.com/company/srmkzilla/"
                      />
                    </div>
                    <div>
                      <label className="label">Dribbble/Behance Profile</label>
                      <TextField
                        name="gfx_profile"
                        placeholder="https://www.dribbble.com/michael-scott"
                      />
                    </div>

                    <div>
                      <div>
                        <label className="label">GitHub Link</label>
                        <TextField
                          name="github"
                          placeholder="https://www.github.com/michael-scott"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="button-collection">
                  <div>
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <BiLoader className="spin" />
                      ) : (
                        "Continue"
                      )}
                    </button>
                  </div>
                  <div>
                    <button
                      className="logout"
                      onClick={() => {
                        authStore.setUser(undefined);
                        authStore.setAuthorization(undefined);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

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

export default observer(UserProfileForm);
