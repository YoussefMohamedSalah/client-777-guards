"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  birthday: z.string(),
  phone_number: z.string(),
  address: z.string(),
  start_date: z.string(),
});

type FormValues = {
  name: string;
  email: string;
  birthday: string;
  phone_number: string;
  address: string;
  start_date: string;
};

interface Props {
  tContactUs: any;
  lang: string;
  jobId: string;
}

export default function JobApplyForm({ tContactUs, lang, jobId }: Props) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      birthday: "",
      phone_number: "",
      address: "",
      start_date: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/api/candidates/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, jobId }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full px-2">
      <Form {...form}>
        {!submitted ? (
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="text-sm">{tContactUs.full_name} *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="text-sm">{tContactUs.email} *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="text-sm">{tContactUs.birthday} *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="text-sm">{tContactUs.phone_number} *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="text-sm">{tContactUs.address} *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="start_date"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="text-sm">{tContactUs.start_date} *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-4">
              <Button
                type="submit"
                className="text-sm font-light text-gray-300 hover:text-black"
                disabled={loading}
                onClick={() => form.handleSubmit(onSubmit)}>
                {tContactUs.submit}
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div className="text-xl md:text-2xl flex items-center justify-center flex-col px-8">
              <div className="w-80">
                <div className="text-gray-300 font-light  text-center justify-center mx-auto py-10">
                  {tContactUs.apply_message}
                </div>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
