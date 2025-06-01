"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    id: 1,
    name: "전동 드릴",
    description: "다양한 용도로 사용 가능한 전동 드릴입니다.",
    deposit: 50000,
    image: "https://picsum.photos/seed/drill/400/300"
  },
  {
    id: 2,
    name: "해머 드릴",
    description: "콘크리트 작업에 적합한 해머 드릴입니다.",
    deposit: 60000,
    image: "https://picsum.photos/seed/hammer-drill/400/300"
  },
  {
    id: 3,
    name: "전동 드라이버",
    description: "가벼운 나사 작업에 적합한 전동 드라이버입니다.",
    deposit: 30000,
    image: "https://picsum.photos/seed/screwdriver/400/300"
  },
  {
    id: 4,
    name: "전동 톱",
    description: "목재 절단에 사용되는 전동 톱입니다.",
    deposit: 70000,
    image: "https://picsum.photos/seed/saw/400/300"
  }
];

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          홈으로 돌아가기
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">공구</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card key={tool.id} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={tool.image}
                alt={tool.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">보증금: {tool.deposit.toLocaleString()}원</p>
                <Button>대여하기</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 