"use client";

import { subjectsOptions } from "@/app/(pages)/about/components/constants/data";
import Motion from "@/components/client/Motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { sendContactForm } from "@/lib/contactApi";
import Validations from "@/lib/validations";
import { FileIcon, ImageIcon, MusicIcon, VideoIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { GoArrowRight } from "react-icons/go";

export default function Contact() {
  const [projectBudgetValue, setProjectBudgetValue] = useState(1000);
  const [isCustomSubject, setIsCustomSubject] = useState(false);
  const [formData, setFormData] = useState({
    fullNames: "",
    company: "",
    email: "",
    phoneNumber: "",
    subject: "",
    skypeNumber: "",
    projectBudget: projectBudgetValue,
    message: "",
    customSubject: "",
    files: [],
  });
  const [filePreviews, setFilePreviews] = useState([]);
  const [totalFileSize, setTotalFileSize] = useState(0);

  const [errors, setErrors] = useState({
    fullNamesError: "",
    companyError: "",
    emailError: "",
    phoneNumberError: "",
    subjectError: "",
    skypeNumberError: "",
    projectBudgetError: "",
    messageError: "",
    customSubjectError: "",
  });
  const [loading, setLoading] = useState(false);

  const handleProjectBudgetChange = (value) => {
    setProjectBudgetValue(value);
    setFormData((prev) => {
      return {
        ...prev,
        projectBudget: value[0],
      };
    });
  };

  const handleSubjectChange = (value) => {
    if (value !== "Other") {
      setIsCustomSubject(false);
      setFormData((prev) => ({
        ...prev,
        subject: value,
      }));
    } else {
      setIsCustomSubject(true);
      setFormData((prev) => ({
        ...prev,
        subject: "Other",
      }));
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target?.name]: e.target.value,
      };
    });
  };
  const handleFileChange = async (e) => {
    const newFiles = Array.from(e.target.files);

    // Filter out duplicate files by name
    const files = newFiles.filter((file) => {
      return !formData.files.some((existingFile) => existingFile.name === file.name);
    });

    const filesWithBase64 = await Promise.all(
      files.map(async (file) => {
        const base64 = await convertToBase64(file);
        return { name: file.name, type: file.type, base64, size: file.size };
      })
    );

    // Calculate total file size
    const newTotalFileSize = filesWithBase64.reduce((acc, file) => acc + file.size, 0);
    const totalSize = totalFileSize + newTotalFileSize;
    setTotalFileSize(totalSize);

    setFormData((prev) => ({ ...prev, files: [...prev.files, ...filesWithBase64] }));

    // Generate new file previews
    const filePreviews = filesWithBase64.map((file) => ({
      name: file.name,
      type: file.type,
      base64: file.base64,
    }));
    setFilePreviews((prev) => [...prev, ...filePreviews]);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleDeleteFile = (index) => {
    setFormData((prev) => {
      const updatedFiles = [...prev.files];
      const removedFileSize = updatedFiles[index].size;
      updatedFiles.splice(index, 1);
      setTotalFileSize((prevTotalFileSize) => prevTotalFileSize - removedFileSize);
      return { ...prev, files: updatedFiles };
    });

    setFilePreviews((prev) => {
      const updatedPreviews = [...prev];
      updatedPreviews.splice(index, 1);
      return updatedPreviews;
    });
  };

  const validateInput = (inputValues) => {
    return (
      Validations.validateNames(inputValues.fullNames, setErrors) &&
      Validations.validateCompanyName(inputValues.company, setErrors) &&
      Validations.validateEmail(inputValues.email, setErrors) &&
      Validations.validatePhoneNumber(inputValues.phoneNumber, setErrors) &&
      Validations.validateSubject(inputValues.subject, setErrors) &&
      Validations.validateSkypeNumber(inputValues.skypeNumber, setErrors) &&
      Validations.validateMessage(inputValues.message, setErrors) &&
      Validations.validateCustomSubject(inputValues.subject, inputValues.customSubject, setErrors)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (totalFileSize > 20 * 1024 * 1024) {
      toast.error("Total file size exceeds 20MB. Please remove some files.");
      return;
    }

    const inputsAreValid = validateInput(formData);
    console.log(formData);

    if (inputsAreValid) {
      setLoading(true);
      sendContactForm("", formData)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Email sent successfully, You'll here from us soon");
          } else {
            toast.error("Email could not be sent, Please try again later");
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="flex flex-col sm:flex-row gap-6">
        <Motion
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
          <div className="w-full space-y-2">
            <label className="font-bold">
              Name <span className="text-[#EA3511]">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.fullNames}
              name="fullNames"
              placeholder="Fill in the field"
              className="h-[54px] md:h-[60px] block bg-[#F8F8F8] ring-1 ring-[#D9D9D9] outline-none w-full px-4 rounded-md focus:ring-2 transition duration-300"
            />
          </div>
          {errors.fullNamesError && <span className="text-[#EA3511] text-sm">{errors.fullNamesError}</span>}
        </Motion>

        <Motion
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
          <div className="w-full space-y-2">
            <label className="font-bold">
              Company <span className="text-[#EA3511]">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.company}
              name="company"
              placeholder="Fill in the field"
              className="h-[54px] md:h-[60px] block bg-[#F8F8F8] ring-1 ring-[#D9D9D9] outline-none w-full px-4 rounded-md focus:ring-2 transition duration-300"
            />
          </div>
          {errors.companyError && <span className="text-[#EA3511] text-sm">{errors.companyError}</span>}
        </Motion>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <Motion
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
          <div className="w-full space-y-2">
            <label className="font-bold">
              Email <span className="text-[#EA3511]">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.email}
              name="email"
              placeholder="Fill in the field"
              className="h-[54px] md:h-[60px] block bg-[#F8F8F8] ring-1 ring-[#D9D9D9] outline-none w-full px-4 rounded-md focus:ring-2 transition duration-300"
            />
            {errors.emailError && <span className="text-[#EA3511] text-sm">{errors.emailError}</span>}
          </div>
        </Motion>

        <Motion
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
          <div className="w-full space-y-2">
            <label className="font-bold">
              Phone <span className="text-[#EA3511]">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.phoneNumber}
              name="phoneNumber"
              placeholder="Fill in the field"
              className="h-[54px] md:h-[60px] block bg-[#F8F8F8] ring-1 ring-[#D9D9D9] outline-none w-full px-4 rounded-md focus:ring-2 transition duration-300"
            />
            {errors.phoneNumberError && <span className="text-[#EA3511] text-sm">{errors.phoneNumberError}</span>}
          </div>
        </Motion>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row gap-6">
          <Motion
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
            <div className="w-full space-y-2">
              <label className="font-bold">
                Subject <span className="text-[#EA3511]">*</span>
              </label>
              <Select onValueChange={(e) => handleSubjectChange(e)} name="subject">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjectsOptions.map(({ value, label }, index) => (
                    <SelectItem key={index} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.subjectError && <span className="text-[#EA3511] text-sm">{errors.subjectError}</span>}
            </div>
          </Motion>
          <Motion
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
            <div className="w-full space-y-2">
              <label className="font-bold">
                Skype/Whatsapp <span className="text-[#EA3511]">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={formData.skypeNumber}
                name="skypeNumber"
                placeholder="Fill in the field"
                className="h-[54px] md:h-[60px] block bg-[#F8F8F8] ring-1 ring-[#D9D9D9] outline-none w-full px-4 rounded-md focus:ring-2 transition duration-300"
              />
            </div>
            {errors.skypeNumberError && <span className="text-[#EA3511] text-sm">{errors.skypeNumberError}</span>}
          </Motion>
        </div>
        {isCustomSubject && (
          <div className="!mt-8">
            <input
              type="text"
              onChange={handleChange}
              value={formData.customSubject}
              name="customSubject"
              placeholder="Specify subject"
              className="h-[54px] md:h-[60px] block bg-[#F8F8F8] ring-1 ring-[#D9D9D9] outline-none w-full px-4 rounded-md focus:ring-2 transition duration-300"
            />
            {errors.customSubjectError && <span className="text-[#EA3511] text-sm">{errors.customSubjectError}</span>}
          </div>
        )}
      </div>
      <Motion viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
        <div className="w-full space-y-4">
          <label className="font-bold flex gap-x-4">
            <span>Project Budget:</span>
            <span className="font-normal font-inter">$ {projectBudgetValue}</span>
          </label>
          <Slider onValueChange={(e) => handleProjectBudgetChange(e)} defaultValue={[1000]} max={10000} step={100} />
        </div>
      </Motion>
      <Motion viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
        <div className="w-full space-y-2">
          <label className="font-bold">
            Details <span className="text-[#EA3511]">*</span>
          </label>
          <textarea
            type="text"
            onChange={handleChange}
            value={formData.message}
            name="message"
            placeholder="Describe your needs in details"
            className="min-h-[54px] md:min-h-[60px] h-[54px] md:h-[60px] max-h-[500px] block bg-[#F8F8F8] ring-1 ring-[#D9D9D9] outline-none w-full p-4 rounded-md focus:ring-2 transition duration-300 new-scroll"
          />
          {errors.messageError && <span className="text-[#EA3511] text-sm">{errors.messageError}</span>}
        </div>
      </Motion>
      <Motion viewport={{ once: true }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
        <p className="text-[gray] leading-9">Please include project details, duration, tech stack, IT professionals needed, and other relevant info</p>
      </Motion>
      <Motion viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
        <div className="border border-[gray] rounded-md border-dashed w-full p-5 sm:p-10 flex flex-col justify-center items-center gap-3">
          <p className="text-center sm:text-start">Attach additional documents as needed</p>
          <label htmlFor="doc-files" className="h-[50px] font-bold px-6 ring-1 ring-[#FB524A] grid place-content-center cursor-pointer rounded-md">
            Upload File
          </label>
          <input id="doc-files" type="file" className="hidden" multiple onChange={handleFileChange} />
        </div>
      </Motion>
      {formData.files.length ? (
        <div>
          <h3>Files you uploaded:</h3>
          <ul className="flex flex-wrap gap-4 mt-2">
            {filePreviews.map((file, index) => (
              <li key={index} className="py-3.5 px-5 border border-gray-300 relative rounded-lg">
                <div className="flex items-center gap-3 max-w-[300px] overflow-hidden text-ellipsis cursor-pointer">
                  <span className="text-[#949494]">
                    {file.type.startsWith("image/") ? (
                      <ImageIcon size={20} />
                    ) : file.type.startsWith("video/") ? (
                      <VideoIcon size={20} />
                    ) : file.type.startsWith("audio/") ? (
                      <MusicIcon size={20} />
                    ) : (
                      <FileIcon size={20} />
                    )}
                  </span>
                  <span className="whitespace-nowrap text-[gray]" title={file.name}>
                    {file.name}
                  </span>
                </div>
                <button type="button" onClick={() => handleDeleteFile(index)} className="bg-[#FB524A] p-1 rounded-full absolute -right-2 -top-2">
                  <XIcon size={18} className="text-white" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <Motion viewport={{ once: true }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
        <div className="flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row md:items-center lg:items-start gap-10">
          <p className="leading-9 text-[gray]">
            Please be informed that when you click the Send button WebBuddy will process your personal data in accordance with our{" "}
            <Link href="/policies/privacy-policy" className="underline font-semibold">
              Privacy Policy
            </Link>{" "}
            for the purpose of providing you with appropriate information.
          </p>
          <button disabled={loading} className="px-6 py-2 rounded-md bg-[#FB524A] h-[60px] text-white w-full max-w-[210px] flex justify-center items-center">
            {loading ? (
              <LoaderIcon style={{ width: 25, height: 25, borderWidth: 3 }} />
            ) : (
              <span className=" flex justify-center items-center">
                <span className="me-3 whitespace-nowrap">Submit Message </span>
                <GoArrowRight />
              </span>
            )}
          </button>
        </div>
      </Motion>
    </form>
  );
}
