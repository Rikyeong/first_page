"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          홈으로 돌아가기
        </Link>

        <h1 className="text-4xl font-bold text-center mb-12">문의하기</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">연락처 정보</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>contact@rentbox.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>02-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>서울특별시 강남구 테헤란로 123</span>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>문의 양식</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    제목
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "전송 중..." : "보내기"}
                </Button>
                {submitStatus === "success" && (
                  <p className="text-green-600 text-center">메시지가 성공적으로 전송되었습니다!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-center">메시지 전송에 실패했습니다. 다시 시도해주세요.</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
} 