"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Correo inválido"),
  message: z.string().min(5, "Mensaje demasiado corto"),
  interests: z.array(z.string()).optional(),
  other: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      reset();
      alert("Message sent successfully!");
    } catch (err) {
      console.error("Error sending form", err);
      alert("There was a problem sending your message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <div>
        <label className="block">
          Name<span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          {...register("name")}
          className="w-full border px-2 py-1 rounded-xs"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block">
          Email<span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full border px-2 py-1 rounded-xs"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block">Interest</label>

        {/* Note: all checkboxes share the same name "interests" and have a value */}
        <div>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              value="Illustration"
              {...register("interests")}
            />
            <span>Illustration</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" value="Collab" {...register("interests")} />
            <span>Collab</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              value="Branding/Logo"
              {...register("interests")}
            />
            <span>Branding/Logo</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              value="Print/Purchase"
              {...register("interests")}
            />
            <span>Print/Interest on buying</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" value="Other" {...register("interests")} />
            <span>Other/I need advice</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block">
          Message<span className="text-red-600">*</span>
        </label>
        <textarea
          rows={4}
          {...register("message")}
          className="w-full border px-2 py-1 rounded-xs"
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div>
        <label className="block">Other</label>
        <input
          type="text"
          placeholder="How did you discover me?"
          className="w-full border px-2 py-1 rounded-xs"
          {...register("other")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 disabled:opacity-50 mt-4 transition-all"
      >
        {isSubmitting ? "Sending…" : "Send"}
      </button>

      {isSubmitSuccessful && (
        <p className="text-sm text-green-600 mt-2">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}
