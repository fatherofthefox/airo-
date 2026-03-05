import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  consent: boolean;
  website_url?: string;
  _gotcha?: string;
  _timestamp?: number;
}

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (data.website_url) {
        return { ok: true };
      }

      if (data._timestamp && Date.now() - data._timestamp < 3000) {
        return { ok: true };
      }

      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "mock_id";
      const endpoint = `https://formspree.io/f/${formspreeId}`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          consent: data.consent,
          _gotcha: data.website_url ?? "",
          _timestamp: data._timestamp ?? Date.now(),
        }),
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody?.error ?? "Failed to submit form");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Enquiry Received",
        description: "We'll be in touch shortly to schedule your revenue audit.",
      });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    },
  });
}
