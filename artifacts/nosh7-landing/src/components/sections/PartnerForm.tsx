import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "919712989498";

const formSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1).regex(/^\+?[\d\s\-()+]{7,20}$/),
  clinic: z.string().min(1),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function PartnerForm() {
  const { t } = useLanguage();
  const f = t.partnerForm;
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const lines = [
      `Hi Nosh7 Team! I'd like to enquire about a partnership.`,
      ``,
      `Name: ${data.name}`,
      `Contact: ${data.phone}`,
      `Clinic: ${data.clinic}`,
      ...(data.comments ? [`Message: ${data.comments}`] : []),
    ];
    const encoded = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="partner-form" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {f.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {f.title}{" "}
            <span className="text-gradient">{f.titleSpan}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">{f.sub}</p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl shadow-primary/10 border border-border p-8 md:p-10"
        >
          {submitted ? (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 py-8 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-primary" />
              <h3 className="text-2xl font-display font-bold text-foreground">
                {f.successTitle}
              </h3>
              <p className="text-muted-foreground max-w-sm">
                {f.successSub}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-primary underline underline-offset-2 hover:no-underline"
              >
                {f.successReset}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">

              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground" htmlFor="pf-name">
                    {f.nameLabel} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="pf-name"
                    placeholder={f.namePlaceholder}
                    className={errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{f.nameRequired}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground" htmlFor="pf-phone">
                    {f.phoneLabel} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="pf-phone"
                    type="tel"
                    placeholder={f.phonePlaceholder}
                    className={errors.phone ? "border-red-400 focus-visible:ring-red-400" : ""}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500">
                      {errors.phone.type === "too_small" ? f.phoneRequired : f.phoneInvalid}
                    </p>
                  )}
                </div>
              </div>

              {/* Clinic */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-foreground" htmlFor="pf-clinic">
                  {f.clinicLabel} <span className="text-red-500">*</span>
                </label>
                <Input
                  id="pf-clinic"
                  placeholder={f.clinicPlaceholder}
                  className={errors.clinic ? "border-red-400 focus-visible:ring-red-400" : ""}
                  {...register("clinic")}
                />
                {errors.clinic && (
                  <p className="text-xs text-red-500">{f.clinicRequired}</p>
                )}
              </div>

              {/* Comments */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-foreground" htmlFor="pf-comments">
                  {f.commentsLabel}
                </label>
                <Textarea
                  id="pf-comments"
                  rows={4}
                  placeholder={f.commentsPlaceholder}
                  className="resize-none"
                  {...register("comments")}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg
                  hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/30
                  disabled:opacity-60 disabled:cursor-not-allowed
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              >
                {f.submit}
              </motion.button>

              <p className="text-xs text-center text-muted-foreground">
                {f.privacy}
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
