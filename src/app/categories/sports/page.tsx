"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const sportsItems = [
  {
    id: 1,
    name: "테니스 라켓",
    description: "초보자용 테니스 라켓입니다.",
    deposit: 30000,
    image: "https://picsum.photos/seed/tennis/400/300"
  },
  {
    id: 2,
    name: "축구공",
    description: "5호 축구공입니다.",
    deposit: 15000,
    image: "https://picsum.photos/seed/soccer/400/300"
  },
  {
    id: 3,
    name: "농구공",
    description: "7호 농구공입니다.",
    deposit: 20000,
    image: "https://picsum.photos/seed/basketball/400/300"
  },
  {
    id: 4,
    name: "배드민턴 라켓",
    description: "2인용 배드민턴 세트입니다.",
    deposit: 25000,
    image: "https://picsum.photos/seed/badminton/400/300"
  }
];

export default function SportsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          홈으로 돌아가기
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">운동 용품</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sportsItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">보증금: {item.deposit.toLocaleString()}원</p>
                <Button>대여하기</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 