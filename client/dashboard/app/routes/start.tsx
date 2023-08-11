import {
  Form,
  useNavigation,
  useActionData,
  useLoaderData,
} from "@remix-run/react";
import { getUserDetails, updateUserDetails } from "~/utils/api.server";
import userProfileStyles from "~/styles/components/UserProfile.css";
import {
  json,
  redirect,
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";
import { BiLoader } from "react-icons/bi";
import * as Yup from "yup";
import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
  UploadHandler,
} from "@remix-run/node";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "~/utils/toast.client";
import type { ValidationError } from "yup";
import { s3UploadHandler } from "~/utils/s3-upload";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: userProfileStyles,
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUserDetails(request);

  if (!!user.gender) return redirect("/");
  return json({ user });
};

type ActionData = {
  errors?: {
    [key: string]: string;
  };
  toastErrMessage?: string;
};

export const action: ActionFunction = async ({ request }) => {
  // const formData = await unstable_parseMultipartFormData(
  //   request,
  //   uploadHandler as UploadHandler
  // );
  const uploadHandler: UploadHandler = composeUploadHandlers(
    s3UploadHandler,
    createMemoryUploadHandler()
  );
  // const formData = await request.formData();
  const formData = await parseMultipartFormData(request, uploadHandler);
  const resume = formData.get("resume");
  console.log(resume)
  try {
    const { name, branch, contact, github, linkedin, portfolio, gender } =
      await validateUserDetails(formData);
    const resume = formData.get("resume");
    console.log(resume);
    // const { error, message } = await updateUserDetails(request, {
    //   name,
    //   branch,
    //   contact,
    //   gender,
    //   resume:resume  as string,
    //   socials: {
    //     github,
    //     linkedin,
    //     portfolio,
    //   },
    // });

    if (error === 400) {
      return { toastErrMessage: message };
    } else {
      return redirect("/");
    }
  } catch (errors) {
    console.log(errors);
    return { errors };
  }
};

const validateUserDetails = async (formData: FormData) => {
  const getValidationErrors = (err: ValidationError) => {
    const validationErrors = {} as any;

    err.inner.forEach((error: any) => {
      if (error.path) {
        validationErrors[error.path] = error.message;
      }
    });

    return validationErrors;
  };

  const userDetails: { [key: string]: any } = {};
  for (const [key, value] of formData) {
    userDetails[key] = value || "";
  }

  const updateUserSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Pronoun is required"),
    branch: Yup.string().required("Branch is required"),
    contact: Yup.string()
      .trim()
      .matches(/^[0-9]{10}$/, "Your contact number must be 10 digits")
      .required("We need your contact number to reach out to you!"),
    linkedin: Yup.string()
      .url("The URL you have entered doesn't seem right")
      .matches(
        /((http(s)?:\/\/)?(\w+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?)?/g,
        "The URL you have entered doesn't seem right"
      ),
    github: Yup.string()
      .url("The URL you have entered doesn't seem right")
      .matches(
        /((http(s)?:\/\/)?(\w+\.)?github\.com\/[A-z0-9_-]+\/?)?/g,
        "The URL you have entered doesn't seem right"
      ),
    resume: Yup.string(),
    portfolio: Yup.string().url(),
  });

  try {
    return await updateUserSchema.validate(userDetails, { abortEarly: false });
  } catch (error) {
    throw getValidationErrors(error as ValidationError);
  }
};

export default function Start() {
  const navigation = useNavigation();
  const actionData = useActionData<ActionData>();
  const {
    user: { name, regNo, _id },
  } = useLoaderData();

  const [selectedFile, setSelectedFile] = useState(null);
  // const onDrop = (acceptedFiles: any) => {
  //   setSelectedFile(acceptedFiles[0]);
  //   console.log(selectedFile);
  //   // if(selectedFile){
  //   //   let file = {
  //   //     name: `${name}-resume`,
  //   //     filename: `resume/${_id}`,
  //   //     data:selectedFile
  //   //   }
  //   //   s3UploadHandler(file)
  //   // }
  // };

  // const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    if (actionData?.toastErrMessage) {
      toast.error(actionData.toastErrMessage);
    }
  }, [actionData]);

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
          <label className="label" htmlFor="name">
            Name<sup>*</sup>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Michael Scott"
          />
        </div>
        <div className="select">
          <label className="label" htmlFor="regno">
            Registration Number<sup>*</sup>
          </label>
          <input
            type="text"
            value={regNo}
            placeholder="RA2211026010111"
            readOnly
          />
        </div>
        <div className="select">
          <label className="label" htmlFor="gender">
            Gender<sup>*</sup>
          </label>
          <select name="gender" defaultValue={"other"}>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <sub>{actionData?.errors?.gender}</sub>
        </div>
        <div className="select">
          <label className="label" htmlFor="branch">
            Branch<sup>*</sup>
          </label>
          <select
            name="branch"
            defaultValue={"computer_science_and_engineering"}
          >
            <BranchOptions />
          </select>
          <sub>{actionData?.errors?.branch}</sub>
        </div>
        <div>
          <label className="label" htmlFor="contact">
            Contact Number<sup>*</sup>
          </label>
          <input type="text" name="contact" placeholder="9898384880" />
          <sub>{actionData?.errors?.contact}</sub>
        </div>
        <div>
          <div className="resume">
            <label className="label" htmlFor="resume">
              Resume (upto 20 megabytes)
            </label>
            {/* <div {...getRootProps()} className="dropzone">
              <input name="resume" {...getInputProps()} />
              {selectedFile ? (
                <div>
                  <p className="text">Selected file: {selectedFile["name"]}</p>
                </div>
              ) : (
                <p className="text">
                  Drag &amp; drop files here, or click to select
                </p>
              )}
            </div> */}
            <div>
              <input name="resume" type="file" />
            </div>
          </div>
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
          <sub>{actionData?.errors?.linkedin}</sub>
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
          <sub>{actionData?.errors?.portfolio}</sub>
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
          <sub>{actionData?.errors?.github}</sub>
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
      </div>
    </Form>
  );
}

const BranchOptions = () => (
  <>
    <option value="">Select your branch</option>;
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
