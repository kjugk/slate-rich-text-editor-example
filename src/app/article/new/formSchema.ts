"use client";

import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, { message: "必須項目です" }),
  subtitle: z.string(),
  body: z.string(),
});
