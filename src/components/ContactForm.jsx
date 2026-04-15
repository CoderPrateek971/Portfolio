import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      "service_s2ujxki",
      "template_3jrzhp7",
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
      "vNn_NZYiubdhdW25P"
    )
    .then(() => {
      alert("Message sent successfully!");
      reset();
    })
    .catch(() => {
      alert("Failed to send message");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contactForm">

      {/* Name + Phone Row */}
      <div className="row">
        <div className="field">
          <label>Name <span className="star">*</span></label>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span  className="error">{errors.name.message}</span>}
        </div>

        <div className="field">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+91 XXXXX XXXXX"
            {...register("phone", {
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter valid phone number"
              }
            })}
          />
          {errors.phone && <span  className="error" >{errors.phone.message}</span>}
        </div>
      </div>

      {/* Email */}
      <div className="field">
        <label>Email <span className="star">*</span></label>
        <input
          type="email"
          placeholder="yours@gmail.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email"
            }
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      {/* Message */}
      <div className="field">
        <label>Message <span className="star">*</span></label>
        <textarea
          placeholder="Share your ideas..."
          {...register("message", {
            required: "Message is required"
          })}
        />
        {errors.message && <span className="error">{errors.message.message}</span>}
      </div>

      {/* Button */}
      <button type="submit" className="submitBtn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;