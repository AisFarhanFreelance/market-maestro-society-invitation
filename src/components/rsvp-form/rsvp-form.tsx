"use client";

import { RsvpFormSchema, RsvpFormValues } from "@/lib/schema/rsvp-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const RsvpForm = () => {
  const form = useForm<RsvpFormValues>({
    resolver: zodResolver(RsvpFormSchema),
  });

  return (
    <Form {...form}>
      <form>
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
                    name="Full Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="Nick Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nick Name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="Occupation / Job Position"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Occupation / Job Position"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="Short Description of Yourself"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Short Description of Yourself"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="Email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="LinkedIn Link"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="LinkedIn Link" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="Phone Number"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Phone Number"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="text-center text-xs italic">
                    Please make sure to enter your active phone number available
                    to call and connect to WhatsApp.
                  </div>
                  <FormField
                    name="Tiktok Username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Tiktok Username" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="Instagram Username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Instagram Username" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-center">
                  <div className="rounded-full bg-gradient-to-br from-[#2E4366]/60 to-[#2e4366]/34 p-[2px]">
                    <button className="block rounded-full bg-white px-8 py-2 text-center font-kaisei text-base text-[#2E4366] uppercase transition">
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
    </Form>
  );
};

export default RsvpForm;
