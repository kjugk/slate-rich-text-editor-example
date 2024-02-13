"use client";

import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./formSchema";
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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const ArticleForm: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subtitle: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>タイトル</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>n文字以内で入力してください</FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="subtitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>サブタイトル</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>本文</FormLabel>
                <FormControl>
                  {/* TODO Editor に変更する */}
                  <Textarea {...field} />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          ></FormField>
        </div>

        <div className="mt-8">
          <Button type="submit">作成</Button>
        </div>
      </form>
    </Form>
  );
};
