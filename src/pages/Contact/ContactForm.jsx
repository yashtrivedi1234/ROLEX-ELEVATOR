import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitContact } from "../../lib/contactApi";

const ContactForm = () => {
  const [spinLoading, setSpinLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "Too short!")
      .max(50, "Too long!"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(1, "Too short!")
      .max(50, "Too long!"),
    subject: Yup.string()
      .required("Please select a subject"),
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
      firstName: "",
      lastName: "",
      subject: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setSubmitMessage("");
      setSubmitError("");
      setSpinLoading(true);

      try {
        const response = await submitContact(values);

        if (response?.data || response?.success || response) {
          setSubmitMessage("Message sent successfully.");
          resetForm();
        }
      } catch (error) {
        setSubmitError(
          error?.response?.data?.message || "Error sending message. Please try again."
        );
      } finally {
        setSpinLoading(false);
      }
    },
  });

  return (
    <div className=" flex items-center justify-center px-4 py-12 lg:py-16 ">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-[#222222]  shadow-md rounded-lg overflow-hidden">
        {/* Left Section: Address */}
        <div className="bg-[#222222] p-8 md:w-[40%] py-10">
          <h3 className="font-bold text-3xl mb-6 text-white">
          Still, have any problems or need assistance?
          </h3>

          {/* Head Office Address */}
          <div className="mb-6 flex items-start gap-4">
            <a
              href="https://www.google.com/maps?ll=26.871852,80.99835&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=4661358628032490054https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.683091894675!2d80.951064!3d26.8500302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0f0cd5c219%3A0xd97dd10e7496fd6b!2sRolex%20Elevators%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1737096631324!5m2!1sen!2sin="
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="text-main text-6xl cursor-pointer px-4 py-4 rounded-full bg-white" />
            </a>
            <div className="flex flex-col gap-0">
              <h2 className="text-xl font-bold text-white ">Head Office Address:</h2>
              <a
                href="https://www.google.com/maps?ll=26.871852,80.99835&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=4661358628032490054"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:underline"
              >
              Rolex Tower, D4-119 Rolex Elevators, Lift Showroom- Vibhuti Khand, Lucknow, Uttar Pradesh Pincode - 221610
              </a>
            </div>
          </div>

          {/* Call for Help */}
          <div className="mb-6 flex items-start gap-4">
            <a href="tel:18001234187">
              <FaPhoneAlt className="text-main text-6xl cursor-pointer px-4 py-4 rounded-full bg-white" />
            </a>
            <div>
              <h2 className="text-xl font-bold  text-white">Call for help:</h2>
   
              <a
                href="tel:7233000133"
                className="text-sm  text-white hover:underline"
              >
              Mobile Number: +91 9918467058
              </a>
            </div>
          </div>

          {/* Mail for Information */}
          <div className="flex items-start gap-4">
            <a href="mailto:info@rolexelevators.co.in">
              <FaEnvelope className="text-main text-6xl cursor-pointer px-4 py-4 rounded-full bg-white" />
            </a>
            <div className="">
              <h2 className="text-xl font-bold  text-white">Mail for information:</h2>
              <a
                href="mailto:info@rolexelevators.co.in"
                className="text-sm  text-white hover:underline"
              >
                info@rolexelevators.co.in
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="p-8 md:w-[60%] bg-[#222222] borderbg-[#222222]">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={formik.handleSubmit}>
            {submitMessage ? (
              <div className="md:col-span-2 rounded-md border border-green-500 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                {submitMessage}
              </div>
            ) : null}
            {submitError ? (
              <div className="md:col-span-2 rounded-md border border-red-500 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {submitError}
              </div>
            ) : null}
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-gray-300 font-medium">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Remove non-alphabetic
                  formik.setFieldValue("firstName", val);
                }}
                onBlur={formik.handleBlur}
                placeholder="Type your first name"
                className={`mt-2 border ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#1F509A]`}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.firstName}</div>
              ) : null}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-gray-300 font-medium">
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Remove non-alphabetic
                  formik.setFieldValue("lastName", val);
                }}
                onBlur={formik.handleBlur}
                placeholder="Type your last name"
                className={`mt-2 border ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#1F509A]`}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.lastName}</div>
              ) : null}
            </div>

            {/* Select Subject */}
            <div>
              <label htmlFor="subject" className="block text-gray-300 font-medium">
                Select a subject to get help*
              </label>
              <select
                id="subject"
                name="subject"
                {...formik.getFieldProps("subject")}
                className={`mt-2 border ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#1F509A]`}
              >
                <option value="" disabled>Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Book Appointment">Book Appointment</option>
              </select>
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.subject}</div>
              ) : null}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-gray-300 font-medium">
                Phone Number*
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, ""); // Remove non-numeric
                  if (val.length <= 10) {
                    formik.setFieldValue("phoneNumber", val);
                  }
                }}
                onBlur={formik.handleBlur}
                placeholder="Type phone number"
                className={`mt-2 border ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#1F509A]`}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-gray-300 font-medium">
                Your Mail Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...formik.getFieldProps("email")}
                placeholder="Type mail address"
                className={`mt-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#1F509A]`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-gray-300 font-medium">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                {...formik.getFieldProps("message")}
                placeholder="Type message..."
                rows="4"
                className={`mt-2 border ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#1F509A]`}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.message}</div>
              ) : null}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-start">
              <button
                type="submit"
                disabled={spinLoading || !formik.isValid}
                className={`bg-[#1F509A] text-white w-full py-2 px-6 rounded-md font-semibold hover:bg-blue-800 transition duration-300 ${ (spinLoading || !formik.isValid) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >{spinLoading ? <div className="mx-auto h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Submit Now"}
          
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
