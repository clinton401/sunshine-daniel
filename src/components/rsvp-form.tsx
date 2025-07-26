"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {useState} from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Loader} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required." }).max(50, {message: "Full name must not exceed 50 characters"}),
  email: z.email({ message: "Enter a valid email." }),
  allergies: z.string().optional(),
  message: z.string().optional(),
});

type RSVPFormValues = z.infer<typeof formSchema>;

export function RSVPForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<RSVPFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      // seats: 1,
      allergies: "",
      message: "",
    },
  });

  const onSubmit = async (values: RSVPFormValues) => {
    if (loading) return;
    setLoading(true);
  
    try {
      const { count, error: countError } = await supabase
        .from("WeddingGuest")
        .select("id", { count: "exact", head: true });
  
      if (countError) {
        toast("Something went wrong while checking guest count.");
        return;
      }
  
      if ((count ?? 0) >= 200) {
        toast("RSVP limit reached. We're truly sorry, but we can't accept more guests.");
        return;
      }
  
      const { data: existing, error: fetchError } = await supabase
        .from("WeddingGuest")
        .select("id")
        .eq("email", values.email.toLowerCase().trim())
        .maybeSingle();
  
      if (fetchError) {
        toast("Something went wrong while checking your email.");
        return;
      }
  
      if (existing) {
        toast("A guest with this email has already been added.");
        return;
      }
  
      const { error: insertError } = await supabase
        .from("WeddingGuest")
        .insert([
          {
            fullName: values.fullName,
            email: values.email.toLowerCase().trim(),
            allergies: values.allergies || null,
            message: values.message || null,
          },
        ]);
  
      if (insertError) {
        toast("Failed to save your RSVP.");
        return;
      }
  
      toast("Thanks! Your RSVP has been received.");
      form.reset();
    } catch (error) {
      console.error("RSVP submission failed:", error);
      toast("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 sm:max-w-[450px] w-full max-w-[350px]  mx-auto"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
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
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <FormField
          control={form.control}
          name="allergies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allergies or Dietary Restrictions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., peanuts, gluten-free, vegetarian..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any special notes or questions?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={loading}>Submit RSVP {loading && <Loader className="size-4 ml-1 animate-spin" />}</Button>
      </form>
    </Form>
  );
}
