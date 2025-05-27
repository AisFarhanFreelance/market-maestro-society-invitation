"use client";

import { insertBusinessCard } from "@/lib/actions/business-card";
import { RsvpFormSchema, RsvpFormValues } from "@/lib/schema/rsvp-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import AnimatedElement from "../animation/animated-element";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Popup from "./pop-up";

const RsvpForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const form = useForm<RsvpFormValues>({
    resolver: zodResolver(RsvpFormSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      nickName: "",
      occupation: "",
      description: "",
      email: "",
      linkedinLink: "",
      phoneNumber: "",
      tiktokUser: "",
      instagramUser: "",
    },
  });

  const onSubmit = async (data: RsvpFormValues) => {
    setIsOpen(true);
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 600);

    await insertBusinessCard({
      fullName: data.fullName,
      nickName: data.nickName,
      occupation: data.occupation,
      description: data.description,
      email: data.email,
      linkedinLink: data.linkedinLink,
      tiktokUser: data.tiktokUser,
      instagramUser: data.instagramUser,
      phoneNumber: data.phoneNumber,
    });

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex min-h-screen w-full items-center justify-center p-4 text-center font-avenir">
          <div className="w-full max-w-[360px] p-[1.5px]">
            <div className="w-full p-6 text-[#2E4366]">
              <div className="space-y-6">
                <div className="space-y-2.5">
                  <AnimatedElement>
                    <div className="font-carrig text-4xl tracking-[0.5rem] text-[#E5A155]">
                      RSVP
                    </div>
                  </AnimatedElement>
                  <AnimatedElement>
                    <div className="font-copperplate text-xs tracking-wider text-white uppercase">
                      Join us for a night of market wisdom, where conversations
                      go beyond charts & numbers
                    </div>
                    <div className="mb-8 font-copperplate text-xs tracking-wider text-white uppercase underline">
                      Where every guest is a maestro in the making.
                    </div>
                  </AnimatedElement>
                  <AnimatedElement>
                    <div className="border-l border-solid border-white pl-2 text-start font-avenir text-sm text-white">
                      <div className="mb-3">
                        Upon confirmation, kindly provide accurate personal
                        details.
                      </div>
                      <div>
                        <b>
                          This information will be used to support your
                          personalized experience during the event.
                        </b>
                        <br />
                        *Please note that submitted details are final & cannot
                        be modified.
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
                <div className="space-y-3">
                  <FormField
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="fullName"
                          className="text-[#BDBDBD]"
                        >
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="text-[#BDBDBD]"
                            placeholder="Ex : Richelle Sunjoto"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="nickName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="nickName"
                          className="text-[#BDBDBD]"
                        >
                          Nick Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex : Elle"
                            className="text-[#BDBDBD]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="occupation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="occupation"
                          className="text-[#BDBDBD]"
                        >
                          Occupation / Job Position
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="CEO at PT Syailendra Capital"
                            className="text-[#BDBDBD]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="description"
                          className="text-[#BDBDBD]"
                        >
                          Short Description of Yourself
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: Richelle (18) is passionate in business and finance.
                          As a highly structured individual with big ambitions towards new connections ane experiences,
                          Richelle is passionate about leveraging her skills in creative content
                          making in order to contribute to business growth and success.
                          With a strong ability to articulate ideas and engage audiences,
                          Richelle have honed public speaking skills to effectively communicate
                          complex concepts."
                            className="min-h-[120px] text-[#BDBDBD]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email" className="text-[#BDBDBD]">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className="text-[#BDBDBD]"
                            placeholder="syailendracapital@gmail.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="linkedinLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="linkedinLink"
                          className="text-[#BDBDBD]"
                        >
                          LinkedIn
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://www.linkedin.com/in/richelle-s"
                            className="text-[#BDBDBD]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="phoneNumber"
                          className="text-[#BDBDBD]"
                        >
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex : 62 812-1228-1287"
                            className="text-[#BDBDBD]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                        <FormDescription className="text-start text-xs text-white">
                          Input the number directly without using a
                          &quot;+&quot; sign at the beginning.
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="tiktokUser"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="tiktokUser"
                          className="text-[#BDBDBD]"
                        >
                          Tiktok Username
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex : @reksadana.syailendra"
                            className="text-[#BDBDBD]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="instagramUser"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="instagramUser"
                          className="text-[#BDBDBD]"
                        >
                          Instagram Username
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex : @reksadana.syailendra"
                            className="text-[#BDBDBD]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-center">
                  <div className="rounded-full bg-gradient-to-br from-[#2E4366]/60 to-[#2e4366]/34 p-[2px]">
                    <button
                      className={`rounded-full bg-[#F05625] px-7 py-3.5 leading-[94%] text-white uppercase transition-transform duration-150 ${
                        isPressed
                          ? "scale-95 animate-pulse shadow-lg"
                          : "hover:scale-105 hover:bg-[#E04A1F] hover:shadow-xl"
                      }`}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Form>
  );
};

export default RsvpForm;
