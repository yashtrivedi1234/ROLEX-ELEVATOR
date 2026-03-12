import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitContact } from "../../lib/contactApi";

const ContactSection = () => {

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/rolexelevators1/",
      color: "bg-main", // YouTube red
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/rolex_elevators/",
      color: "bg-gradient-to-r from-pink-500 to-yellow-500", // Instagram gradient
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@RolexElevator",
      color: "bg-red-600", // YouTube red
    },
    {
      icon: <FaWhatsapp />,
      url: `https://wa.me/919151029171?text=${encodeURIComponent("Hello, I need help!")}`, // Replace with your WhatsApp number
      color: "bg-green-500", // WhatsApp green
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Name is required")
      .min(2, "Too short!")
      .max(100, "Too long!"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[6-9]\d{9}$/, "Phone number must be 10 digits and start with 6-9"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message should be at least 10 characters"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setSubmitMessage("");
      setSubmitError("");
      setIsLoading(true);

      try {
        const response = await submitContact({
          ...values,
          firstName: values.fullName.split(" ")[0] || values.fullName,
          lastName: values.fullName.split(" ").slice(1).join(" ") || "",
          subject: "General Inquiry",
        });

        if (response?.data || response?.success || response) {
          setSubmitMessage("Message sent successfully.");
          resetForm();
        }
      } catch (error) {
        setSubmitError(
          error?.response?.data?.message || "Error sending message. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="relative w-full  flex items-center justify-center lg:p-8 p-2 bg-gray-100 overflow-hidden container">

      <div className="grid md:grid-cols-2 w-full bg-white rounded-lg shadow-lg overflow-hidden container ">
        {/* Contact Info Section */}
        <div className="max-w-[36rem] px-4 md:max-w-[35rem] flex pt-2">
          <div>
            <h1 className="sora-600 leading-[3rem]  text-xl sm:text-2xl lg:text-3xl text-main lg:mb-8 mb-2">
              Get In Touch With Us
            </h1>

            <div className="space-y-5">

              <div className="flex items-start space-x-4">
                <a
                  href="https://www.google.com/maps/dir//dr+somya+singh/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3999580646718413:0xee7dcdad487cc31b?sa=X&ved=1t:3061&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-main p-3 rounded-md"
                >
                  <FaLocationDot className="text-[1.4rem] text-white" />
                </a>
                <div>
                  <h2 className="text-main text-[1.3rem] sora-600">Address</h2>
                  <a
                    href="https://www.google.com/maps/dir//dr+somya+singh/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3999580646718413:0xee7dcdad487cc31b?sa=X&ved=1t:3061&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sora-400 text-[1rem] text-[#535760] no-underline"
                  >
                    D2/119, Rolex Tower, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh-226010
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a href="tel:+917570018529" className="bg-main p-3 rounded-md">
                  <MdContactPhone className="text-[1.4rem] text-white" />
                </a>
                <div>
                  <h2 className="text-main text-[1.3rem] sora-600">Call for Help</h2>
                  <div className="sora-400 text-[1rem] text-[#535760] no-underline">
                    {[
                      { number: "+91-9151029171", link: "tel:+919151029171" },
                      { number: "+91-9935526529", link: "tel:+919935526529" },
                      { number: "+91-9415006520", link: "tel:+919415006520" },
                      { number: "+91-9918467058", link: "tel:+919918467058" }
                    ].map((item, index, array) => (
                      <span key={index}>
                        <a href={item.link} className="hover:text-main">{item.number}</a>
                        {index !== array.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>



              <div className="flex items-start space-x-4">
                <a
                  href="mailto:info@rolexelevators.co.in"
                  className="bg-main p-3 rounded-md"
                >
                  <MdEmail className="text-[1.4rem] text-white" />
                </a>
                <div>
                  <h2 className="text-main text-[1.3rem] sora-600">Mail for Information</h2>
                  <a
                    href="mailto:info@rolexelevator.in"
                    className="sora-400 text-[1rem] text-[#535760] no-underline"
                  >
                    info@rolexelevator.in
                  </a>
                </div>
              </div>

              <div className=" flex flex-row space-x-4 mt-20 " style={{ zIndex: 1000 }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 ${social.color} rounded-full shadow-lg transition-transform transform hover:scale-105 hover:opacity-80`}
                    style={{ transition: 'transform 0.2s' }}
                  >
                    <div className="text-white text-2xl">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>



            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-4 bg-main text-white relative shadow-md rounded-lg mt-4 lg:mt-0">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <h3 className="lg:text-3xl text-xl sm:text-2xl font-semibold">Contact Us</h3>
            {submitMessage ? (
              <div className="rounded-md border border-white/40 bg-white/10 px-4 py-3 text-sm text-white">
                {submitMessage}
              </div>
            ) : null}
            {submitError ? (
              <div className="rounded-md border border-red-200/70 bg-red-500/20 px-4 py-3 text-sm text-white">
                {submitError}
              </div>
            ) : null}

            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formik.values.fullName}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Remove non-alphabetic
                  formik.setFieldValue("fullName", val);
                }}
                onBlur={formik.handleBlur}
                className={`w-full bg-transparent border-b-2 ${formik.touched.fullName && formik.errors.fullName ? 'border-red-400' : 'border-white'} py-2 outline-none pr-2 focus:border-teal-300 placeholder-white`}
                placeholder="Name"
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-300 text-xs mt-1">{formik.errors.fullName}</div>
              ) : null}
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                {...formik.getFieldProps("email")}
                className={`w-full bg-transparent border-b-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-white'} py-2 pr-2 outline-none focus:border-teal-300 placeholder-white`}
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-300 text-xs mt-1">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="relative">
              <input
                type="tel"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, ""); // Remove non-numeric
                  if (val.length <= 10) {
                    formik.setFieldValue("phoneNumber", val);
                  }
                }}
                onBlur={formik.handleBlur}
                className={`w-full bg-transparent border-b-2 ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-400' : 'border-white'} py-2  pr-2 outline-none focus:border-teal-300 placeholder-white`}
                placeholder="Phone"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-300 text-xs mt-1">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>
            <div className="relative">
              <textarea
                name="message"
                {...formik.getFieldProps("message")}
                className={`w-full bg-transparent border-b-2 ${formik.touched.message && formik.errors.message ? 'border-red-400' : 'border-white'} py-1 outline-none focus:border-teal-300 placeholder-white resize-none`}
                rows="2"
                placeholder="Message"
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-300 text-xs mt-1">{formik.errors.message}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className={`py-2 px-4 bg-white text-main font-semibold rounded-full hover:bg-teal-300 transition duration-300 ${(isLoading || !formik.isValid) ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isLoading || !formik.isValid}
            >
              {isLoading ? (
                <span className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 border-2 border-t-white border-[#1A466D] rounded-full"
                    viewBox="0 0 24 24"
                  ></svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>


  );
};

export default ContactSection;
