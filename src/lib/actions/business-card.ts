"use server";

import { google } from "googleapis";

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
  const clientEmail = process.env.NEXT_CLIENT_EMAIL;
  const privateKey = process.env.NEXT_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const spreadsheetId = process.env.NEXT_SPREADSHEET_ID;

  const googleAuth = await google.auth.getClient({
    projectId: process.env.NEXT_PROJECT_ID,
    credentials: {
      type: "service_account",
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth: googleAuth });

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: "A2:I2",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            fullName,
            nickName,
            occupation,
            description,
            email,
            linkedinLink,
            tiktokUser,
            instagramUser,
            phoneNumber,
          ],
        ],
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("BUSINESSCARD_SERVERACTION", error);
  }
}
