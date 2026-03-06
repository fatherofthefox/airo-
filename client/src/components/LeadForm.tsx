import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader2, ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid business email"),
  company: z.string().min(2, "Company name is required"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to the privacy policy",
  }),
  website_url: z.string().max(0, "Invalid field").optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadForm() {
  const [mountTime, setMountTime] = useState(0);
  const { mutate: submitContact, isPending } = useSubmitContact();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      consent: false,
      website_url: "",
    },
  });

  useEffect(() => {
    setMountTime(Date.now());
  }, []);

  const onSubmit = (data: FormValues) => {
    if (data.website_url) {
      return;
    }

    const timeElapsed = Date.now() - mountTime;
    if (timeElapsed < 3000) {
      return;
    }

    submitContact(
      { ...data, _timestamp: mountTime },
      { onSuccess: () => form.reset() },
    );
  };

  return (
    <div className="w-full max-w-md mx-auto glass-panel p-8 sm:p-10 rounded-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 font-display" data-testid="text-form-heading">
          Book Your Strategy Session
        </h3>
        <p className="text-muted-foreground text-sm" data-testid="text-form-description">
          Discover how Intelligent Revenue Operations can transform your pipeline.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="form-lead">
          <div className="hidden absolute opacity-0 -left-[9999px]" aria-hidden="true">
            <FormField
              control={form.control}
              name="website_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website URL</FormLabel>
                  <FormControl>
                    <Input {...field} tabIndex={-1} autoComplete="off" data-testid="input-honeypot" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Doe"
                    {...field}
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Business Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="jane@company.com"
                    type="email"
                    {...field}
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Company Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Corp"
                    {...field}
                    data-testid="input-company"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-4 pb-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-white/20"
                    data-testid="checkbox-consent"
                  />
                </FormControl>
                <div className="space-y-1 leading-tight">
                  <FormLabel className="text-sm font-normal text-muted-foreground cursor-pointer">
                    I consent to AIRO processing my data in accordance with the UK GDPR to provide revenue operations consultancy.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full text-base font-semibold group cta-glow"
            disabled={isPending}
            data-testid="button-submit"
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Secure Your UK Market Audit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>

          <div className="text-center mt-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button type="button" variant="ghost" className="text-xs text-muted-foreground underline underline-offset-4" data-testid="button-privacy">
                  Privacy & Data Protection
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto bg-card border-white/10 text-foreground">
                <DialogHeader>
                  <DialogTitle className="font-display">Privacy Policy</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Last updated: {new Date().toLocaleDateString('en-GB')}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm mt-4 text-foreground/80">
                  <p>
                    <strong>1. Data Collection:</strong> AIRO collects your name, email, and company details strictly for the purpose of providing revenue operations consultancy and related communications.
                  </p>
                  <p>
                    <strong>2. UK GDPR Compliance:</strong> Your data is processed in full compliance with the UK General Data Protection Regulation (UK GDPR). We apply the principle of data minimisation.
                  </p>
                  <p>
                    <strong>3. Data Security:</strong> We utilise industry-standard encryption and secure CRM environments to ensure your data remains protected against unauthorised access.
                  </p>
                  <p>
                    <strong>4. Your Rights:</strong> You retain the right to access, rectify, or request erasure of your personal data at any time by contacting our data protection officer.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </form>
      </Form>
    </div>
  );
}
