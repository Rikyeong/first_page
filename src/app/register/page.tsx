"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          홈으로 돌아가기
        </Link>
        <h1 className="text-4xl font-bold text-center mb-12">물품 등록하기</h1>
        <Card>
          <CardHeader>
            <CardTitle>물품 등록 정보</CardTitle>
          </CardHeader>
          <CardContent>
            <p>등록할 물품 정보를 입력하세요.</p>
            <Button className="mt-4">등록하기</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 