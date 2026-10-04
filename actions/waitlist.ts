"use server";

import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    
    // Checkpoint 1: Ensure action fires and receives data
    console.log("Action triggered with email:", email);

    if (!email || typeof email !== "string") {
      return { error: "Please provide a valid email address." };
    }

    // Checkpoint 2: Supabase Insertion
    // Using .select() so the 'data' object actually returns the inserted row for our logs
    const { data: supabaseData, error: dbError } = await supabaseAdmin
      .from("waitlist")
      .insert([{ email }])
      .select();

    console.log("Supabase response:", { data: supabaseData, error: dbError });

    if (dbError) {
      if (dbError.code === "23505") {
        return { error: "You're already on the list!" };
      }
      return { error: "Database error. Please try again." };
    }

    // Checkpoint 3: Resend Dispatch
    const { data: resendData, error: emailError } = await resend.emails.send({
      from: "Avelon <onboarding@resend.dev>", // Replace with your verified domain when ready
      to: email,
      subject: "Welcome to the Avelon Waitlist",
      text: "You're on the list. We will let you know as soon as Tool 01 is ready for early access.\n\nKeep building,\n- The Avelon Team",
    });

    console.log("Resend response:", { data: resendData, error: emailError });

    if (emailError) {
      // We don't fail the user flow if the welcome email drops, but we log it.
      console.error("Resend delivery failed:", emailError.message);
    }

    return { success: true };

  } catch (err) {
    // Checkpoint 4: Catch catastrophic failures
    console.error("Fatal Server Action Error:", err);
    return { error: "Something went wrong. Please try again later." };
  }
}