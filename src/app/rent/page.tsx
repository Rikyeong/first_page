"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Rent() {
  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          홈으로 돌아가기
        </Link>
        <h1 className="text-4xl font-bold text-center mb-12">대여하기</h1>
        <Card>
          <CardHeader>
            <CardTitle>대여 정보</CardTitle>
          </CardHeader>
          <CardContent>
            <p>대여할 물품을 선택하세요.</p>
            <Button className="mt-4">대여하기</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 