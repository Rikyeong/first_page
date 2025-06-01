"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          홈으로 돌아가기
        </Link>
        <h1 className="text-4xl font-bold text-center mb-12">로그인</h1>
        <Card>
          <CardHeader>
            <CardTitle>로그인 정보</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600 mb-4">(학교 계정으로 로그인 필수)</p>
            <div className="space-y-4">
              <Input placeholder="이메일" />
              <Input type="password" placeholder="비밀번호" />
              <Button className="w-full">로그인</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 