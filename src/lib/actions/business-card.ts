"use server";

import { createClient } from "../utility/supabase/server";

interface InsertBusinessCardParams {
  fullName: string;
  nickName: string;
  occupation: string;
  description: string;
  email: string;
  linkedinLink: string;
  tiktokUser: string;
  instagramUser: string;
  phoneNumber: string;
}

export async function insertBusinessCard({
  fullName,
  nickName,
  occupation,
  description,
  email,
  linkedinLink,
  tiktokUser,
  instagramUser,
  phoneNumber,
}: InsertBusinessCardParams) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("business_cards").insert({
    full_name: fullName,
    nick_name: nickName,
    occupation: occupation,
    description: description,
    email: email,
    linkedin_link: linkedinLink,
    tiktok_user: tiktokUser,
    instagram_user: instagramUser,
    phone_number: phoneNumber,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
