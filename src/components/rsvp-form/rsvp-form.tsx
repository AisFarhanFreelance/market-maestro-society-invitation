"use client";

import { insertBusinessCard } from "@/lib/actions/business-card";
import { RsvpFormSchema, RsvpFormValues } from "@/lib/schema/rsvp-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
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

  const form = useForm<RsvpFormValues>({
    resolver: zodResolver(RsvpFormSchema),
  });

  const onSubmit = async (data: RsvpFormValues) => {
    setIsOpen(true);

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
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex min-h-screen w-full items-center justify-center p-8 text-center font-avenir">
          <div className="w-full max-w-[360px] bg-gradient-to-bl from-[#B89678] via-[#5B3E26]/[0.34] to-[#FFFFFF] p-[1.5px]">
            <div className="w-full bg-white p-6 text-[#2E4366]">
              <div className="space-y-6">
                <div className="space-y-2.5">
                  <div className="text-xs italic">
                    Upon confirmation, kindly provide accurate personal details.
                  </div>
                  <div className="font-kaisei text-2xl font-extrabold">
                    We will prepare a{" "}
                    <span className="font-tex-gyre-termes font-bold">
                      personalized
                    </span>{" "}
                    business card for every guest using this information.
                  </div>
                  <div className="text-xs italic">
                    Please note that submitted details are final and cannot be
                    modified.
                  </div>
                </div>
                <div className="space-y-3">
                  <FormField
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="fullName">Full Name</FormLabel>
                        <FormControl>
                          <Input
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
                        <FormLabel htmlFor="nickName">Nick Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex : Elle" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="occupation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="occupation">
                          Occupation / Job Position
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="CEO at PT Syailendra Capital"
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
                        <FormLabel htmlFor="description">
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
                            className="min-h-[120px]"
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
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
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
                        <FormLabel htmlFor="linkedinLink">LinkedIn</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://www.linkedin.com/in/richelle-s"
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
                        <FormLabel htmlFor="phoneNumber">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex : +62 812-1228-1287"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-center text-xs italic">
                    Please make sure to enter your active phone number available
                    to call and connect to WhatsApp.
                  </div>
                  <FormField
                    name="tiktokUser"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="tiktokUser">
                          Tiktok Username
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex : @reksadana.syailendra"
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
                        <FormLabel htmlFor="instagramUser">
                          Instagram Username
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex : @reksadana.syailendra"
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
                      className="block rounded-full bg-white px-8 py-2 text-center font-kaisei text-base text-[#2E4366] uppercase transition"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="items-start justify-start space-y-5 text-left text-xs text-[#2E4366] italic">
                  <div className="text-[#2E4366]/70">
                    *Please ensure your data is correct as it will be used for
                    the making of our souvenir.
                  </div>
                  <div>
                    Unfortunately, we can&apos;t change this after being
                    submitted.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Popup
        title="RSVP Confirmation"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </Form>
  );
};

export default RsvpForm;
