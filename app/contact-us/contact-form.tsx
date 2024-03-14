"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Computer, ScreenShare, Share, Smile } from "lucide-react";

import Image from "next/image";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight } from "react-icons/pi";

const FormSchema = z.object({
  full_name: z.string(),
  email: z.string().email(),
  subject: z.enum([
    "Arrange Call",
    "Get Prices",
    "Know more about 777-guards",
    "Other",
  ]),
  info: z.string(),
});

type FormValues = {
  full_name: string;
  email: string;
  subject:
  | "Arrange Call"
  | "Get Prices"
  | "Know more about 777-guards"
  | "Other";
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      subject: "Get Prices",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className="md:flex justify-center px-8 container">
      <div className="w-full">
        <div className="text-5xl font-medium w-2/3">
          Have A Question?
        </div>
        <div
          className="py-4 text-gray-500">
          Let&apos;s talk about how 777-Guards can <span className="text-[#051fb3] text-2xl">Guard</span> you.
        </div>

        <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-lg my-4">
          <div className="flex gap-4 border-b ">
            <PiCheckLight className="text-2xl " />

            <div className=" font-normal pb-4 w-80">
              Trained security personnel equipped with the latest technology to ensure safety and protection for your premises.
            </div>
          </div>

          <div className="flex gap-4 border-b ">
            <PiCheckLight className="text-2xl " />

            <div className=" font-normal pb-4 w-80">
              Comprehensive security solutions tailored to meet the specific needs and requirements of your organization.
            </div>
          </div>

          <div className="flex gap-4  ">
            <PiCheckLight className="text-2xl " />

            <div className=" font-normal pb-4 w-80">
              Round-the-clock surveillance and monitoring services provided by our experienced team of security professionals.
            </div>
          </div>
        </div>
      </div>
      {/* FORM INPUTS */}
      <div className="w-full">
        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm">
                      Full name *
                    </FormLabel>
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
                    <FormLabel className="text-sm">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="w-60 text-sm   ">
                      How can we help ?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <div className="flex gap-4">
                          <SelectItem value="Get prices">Get Prices</SelectItem>
                        </div>
                        <SelectItem value="Arrange Call">Arrange Call</SelectItem>
                        <SelectItem value="Know more about 777-guards">Know more about 777-guards</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="w-60 text-sm">
                      Your message ?
                    </FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="text-sm font-light"
                  disabled={loading}
                  onClick={() => form.handleSubmit(onSubmit)}
                >
                  Submit
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div className=" text-xl md:text-2xl flex items-center justify-center flex-col px-8" >
                <div className="w-80">
                  {/* <Image
                  src="/assets/MeditatingDoodle.svg"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="mx-auto"
                /> */}

                  <div className="text-gray-500 font-light  text-center justify-center mx-auto py-10">
                    We&apos;ve received your inquiry and will be contacting you via email or mobile shortly.
                  </div>

                </div>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
}
