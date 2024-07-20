// import validator from "validator";

// class Validations {
//   validatePhoneNumber = (phone, setErrors) => {
//     if (!phone) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         phoneNumberError: "Please enter your mobile number.",
//       }));
//       return false;
//     }
//     if (!validator.isMobilePhone(phone)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         phoneNumberError: "Invalid Phone Number",
//       }));
//       return false;
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       phoneNumberError: "",
//     }));
//     return true;
//   };

//   validateNames = (names, setErrors) => {
//     if (!names) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         fullNamesError: "Your full names are required",
//       }));
//       return false;
//     }
//     if (names.trim().length < 3) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         fullNamesError: "Please enter your real full names",
//       }));
//       return false;
//     } else {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         fullNamesError: "",
//       }));
//       return true;
//     }
//   };

//   validateEmail = (email, setErrors) => {
//     if (!email) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         emailError: "Email is required",
//       }));
//       return false;
//     }
//     if (validator.isEmail(email)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         emailError: "",
//       }));
//       return true;
//     } else {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         emailError: "Enter a valid email address",
//       }));
//       return false;
//     }
//   };

//   validateAddress = (address, setErrors) => {
//     if (!address) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         addressError: "Please enter your address",
//       }));
//       return true;
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       addressError: "",
//     }));
//     return true;
//   };
//   validateMessage = (message, setErrors) => {
//     if (!message) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         messageError: "Please enter a message",
//       }));
//       return false;
//     }
//     if (message.length < 5) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         messageError: "Message is too short",
//       }));
//       return false;
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       messageError: "",
//     }));
//     return true;
//   };
//   validateCompanyName = (companyName, setErrors) => {
//     if (!companyName) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         companyError: "Please enter your company's name",
//       }));
//       return false;
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       companyError: "",
//     }));
//     return true;
//   };
//   validateSubject = (subject, setErrors, value) => {
//     if (!subject) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         subjectError: "Please select a subject",
//       }));
//       return false;
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       subjectError: "",
//     }));
//     return true;
//   };
//   validateCustomSubject = (subject, customSubject, setErrors) => {
//     if (subject === "Other") {
//       if (!customSubject) {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           customSubjectError: "Please specify your Subject",
//         }));
//         return false;
//       }
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         customSubjectError: "",
//       }));
//       return true;
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       customSubjectError: "",
//     }));
//     return true;
//   };

//   validateSkypeNumber = (skype, setErrors) => {
//     if (!skype) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         skypeNumberError: "Please enter your Skype/Whatsapp mobile number.",
//       }));
//       return false;
//     }
//     if (!validator.isMobilePhone(skype)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         skypeNumberError: "Invalid Skype/Whatsapp Number",
//       }));
//       return false;
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       skypeNumberError: "",
//     }));
//     return true;
//   };
// }

// export default new Validations();
