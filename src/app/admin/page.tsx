
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSubmittedMessages, type Message } from "@/app/contact/actions";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";

function AdminDashboard() {
    const searchParams = useSearchParams();
    const accessCode = searchParams.get('code');
    const correctCode = "203040";

    const { toast } = useToast();
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        if (accessCode === correctCode) {
            getSubmittedMessages().then(setMessages);
        }
    }, [accessCode]);

  if (accessCode !== correctCode) {
    return (
      <div className="w-full">
        <div className="text-center mb-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Admin Access
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-foreground/70 max-w-md mx-auto">
              Please enter the access code to view the dashboard.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={200}>
          <div className="max-w-sm mx-auto">
            <div className="pt-6">
                <form className="flex flex-col gap-4">
                  <Input name="code" placeholder="Enter access code" type="password" />
                  <Button type="submit">
                    View Dashboard
                  </Button>
                </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
       <div className="text-center">
        <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Admin Dashboard
            </h1>
            <p className="text-lg text-foreground/70 max-w-4xl mx-auto">
            Manage your application content and view user submissions.
            </p>
        </ScrollReveal>
      </div>
      
      <ScrollReveal delay={200}>
        <div>
          <CardHeader>
            <CardTitle className="gradient-text">Contact Form Submissions</CardTitle>
            <CardDescription>Messages sent from the contact form.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-y-auto max-h-[500px] border rounded-md">
                {messages.length > 0 ? (
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead>Received</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {messages.map((message) => (
                            <TableRow key={message.email + message.receivedAt}>
                                <TableCell className="font-medium">{message.name}</TableCell>
                                <TableCell>{message.email}</TableCell>
                                <TableCell className="max-w-xs truncate">{message.message}</TableCell>
                                <TableCell>{format(new Date(message.receivedAt), "PPP p")}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                ) : (
                    <div className="text-center py-10 text-foreground/70">
                        No messages have been submitted yet.
                    </div>
                )}
            </div>
          </CardContent>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function AdminPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminDashboard />
        </Suspense>
    );
}
