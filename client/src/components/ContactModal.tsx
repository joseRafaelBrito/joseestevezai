import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Calendar, Clock, User, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  date: string;
  time: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useTranslation();
  
  // Debug logging
  console.log('ContactModal rendered with isOpen:', isOpen);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Available time slots based on constraints (Eastern Time)
  const getAvailableTimes = (date: string) => {
    if (!date) return [];

    const selectedDate = new Date(date + 'T00:00:00'); // Add time to avoid timezone issues
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.

    const times = [];

    // Helper function to format time in 12-hour format with ET
    const formatTime = (hour: number, minute: number) => {
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      const minuteStr = minute.toString().padStart(2, '0');
      return `${displayHour}:${minuteStr} ${period} ET`;
    };

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      // Saturday (6) and Sunday (0) - any time (24 hours)
      for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const timeValue = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
          const timeLabel = formatTime(hour, minute);
          times.push({ value: timeValue, label: timeLabel });
        }
      }
    } else {
      // Monday to Friday - 7:30 AM to 12:00 AM (midnight)
      for (let hour = 7; hour < 24; hour++) {
        const startMinute = hour === 7 ? 30 : 0; // Start at 7:30 AM on first hour
        for (let minute = startMinute; minute < 60; minute += 30) {
          const timeValue = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
          const timeLabel = formatTime(hour, minute);
          times.push({ value: timeValue, label: timeLabel });
        }
      }
      // Add 12:00 AM (midnight)
      times.push({ value: "00:00", label: "12:00 AM ET" });
    }

    return times;
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time";
    } else {
      // Validate that selected time is available for the chosen date
      const availableTimes = getAvailableTimes(formData.date);
      const isValidTime = availableTimes.some(timeOption => timeOption.value === formData.time);
      if (!isValidTime) {
        newErrors.time = "Selected time is not available for this date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // For now, simulate success since backend needs credentials
      // TODO: Replace with actual API call once credentials are set up
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        date: "",
        time: "",
      });

      // Show success message briefly, then redirect to Calendly
      setTimeout(() => {
        // Open Calendly in a new tab
        window.open('https://calendly.com/jrafael11/30min', '_blank');
        
        // Close the modal
        onClose();
        setSubmitStatus("idle");
      }, 2000); // Reduced from 4000ms to 2000ms for faster redirect
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    // Reset time selection when date changes to ensure valid combinations
    if (field === "date" && formData.time) {
      const availableTimes = getAvailableTimes(value);
      const isCurrentTimeValid = availableTimes.some(timeOption => timeOption.value === formData.time);
      if (!isCurrentTimeValid) {
        setFormData(prev => ({ ...prev, [field]: value, time: "" }));
        return;
      }
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";

      // Log modal opening for debugging
      console.log("Contact modal opened with date:", formData.date, "time:", formData.time);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    console.log('ContactModal: isOpen is false, returning null');
    return null;
  }
  
  console.log('ContactModal: Rendering modal UI');

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4 pt-4 sm:pt-8 pb-4 sm:pb-8 overflow-y-auto">
      <div className="bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-2xl my-auto min-h-fit mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-slate-200 sticky top-0 bg-white z-10 rounded-t-lg sm:rounded-t-2xl">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
            {t("contact.title") || "Let's Talk"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-8rem)] overflow-y-auto"
        >
          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm font-semibold">
                🎉 Form Submitted Successfully!
              </p>
              <p className="text-green-700 text-sm mt-1">
                Redirecting you to the booking page...
              </p>
              <div className="flex items-center justify-center mt-2">
                <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm">
                {t("contact.error") ||
                  "Something went wrong. Please try again."}
              </p>
            </div>
          )}

          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contact.firstName") || "First Name"} *
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 placeholder-slate-500 bg-white ${
                    errors.firstName ? "border-red-300" : "border-slate-300"
                  }`}
                  placeholder={t("contact.firstNamePlaceholder") || "John"}
                />
              </div>
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contact.lastName") || "Last Name"} *
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 placeholder-slate-500 bg-white ${
                    errors.lastName ? "border-red-300" : "border-slate-300"
                  }`}
                  placeholder={t("contact.lastNamePlaceholder") || "Doe"}
                />
              </div>
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t("contact.email") || "Email"} *
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 placeholder-slate-500 bg-white ${
                  errors.email ? "border-red-300" : "border-slate-300"
                }`}
                placeholder={
                  t("contact.emailPlaceholder") || "john@example.com"
                }
                id="email-input"
                data-testid="email-field"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Date and Time Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contact.date") || "Date"} *
              </label>
              <div className="relative">
                <Calendar
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 bg-white ${
                    errors.date ? "border-red-300" : "border-slate-300"
                  }`}
                />
              </div>
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contact.time") || "Time"} * 
                {formData.date && getAvailableTimes(formData.date).length > 0 && (
                  <span className="text-xs text-slate-500 ml-1">
                    ({getAvailableTimes(formData.date).length} slots available)
                  </span>
                )}
              </label>
              <div className="relative">
                <Clock
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                />
                <select
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 bg-white ${
                    errors.time ? "border-red-300" : "border-slate-300"
                  }`}
                >
                  <option value="">
                    {!formData.date 
                      ? "Select a date first" 
                      : (t("contact.selectTime") || "Select time")}
                  </option>
                  {formData.date && getAvailableTimes(formData.date).map((timeOption) => (
                    <option key={timeOption.value} value={timeOption.value}>
                      {timeOption.label}
                    </option>
                  ))}
                </select>
              </div>
              {!formData.date && (
                <p className="text-slate-500 text-xs mt-1">
                  Please select a date to see available times
                </p>
              )}
              {formData.date && getAvailableTimes(formData.date).length === 0 && (
                <p className="text-amber-600 text-xs mt-1">
                  No time slots available for this date
                </p>
              )}
              {errors.time && (
                <p className="text-red-500 text-xs mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t("contact.message") || "Message"} (
              {t("contact.optional") || "optional"})
            </label>
            <div className="relative">
              <MessageSquare
                size={16}
                className="absolute left-3 top-3 text-slate-400"
              />
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={3}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-slate-900 placeholder-slate-500 bg-white"
                placeholder={
                  t("contact.messagePlaceholder") ||
                  "Tell us about your project..."
                }
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{t("contact.sending") || "Sending..."}</span>
              </div>
            ) : (
              t("contact.submit") || "Schedule Meeting"
            )}
          </Button>

          {/* Availability Info */}
          {formData.date && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-xs">
                <strong>Availability:</strong>{" "}
                {(() => {
                  const selectedDate = new Date(formData.date);
                  const dayOfWeek = selectedDate.getDay();
                  if (dayOfWeek === 0 || dayOfWeek === 6) {
                    return "Weekend - Available 24/7";
                  } else {
                    return "Weekday - Available 7:30 AM to 12:00 AM ET";
                  }
                })()}
              </p>
            </div>
          )}

          {/* Setup Note */}
          <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-slate-600 text-xs text-center">
              <strong>Note:</strong> All times shown in Eastern Time (ET). You'll receive confirmation via email once your meeting is scheduled.
            </p>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
