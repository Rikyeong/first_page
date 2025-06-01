"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const stationeryItems = [
  {
    id: 1,
    name: "연필 세트",
    description: "HB, 2B, 4B 연필이 포함된 세트입니다.",
    deposit: 5000,
    image: "https://picsum.photos/seed/pencil/400/300"
  },
  {
    id: 2,
    name: "네임펜",
    description: "다양한 색상의 네임펜 세트입니다.",
    deposit: 3000,
    image: "https://picsum.photos/seed/nametag/400/300"
  },
  {
    id: 3,
    name: "지우개",
    description: "고급형 지우개입니다.",
    deposit: 2000,
    image: "https://picsum.photos/seed/eraser/400/300"
  },
  {
    id: 4,
    name: "볼펜",
    description: "0.5mm, 0.7mm 볼펜 세트입니다.",
    deposit: 4000,
    image: "https://picsum.photos/seed/pen/400/300"
  },
  {
    id: 5,
    name: "형광펜",
    description: "6색 형광펜 세트입니다.",
    deposit: 4000,
    image: "https://picsum.photos/seed/highlighter/400/300"
  },
  {
    id: 6,
    name: "자",
    description: "30cm 플라스틱 자입니다.",
    deposit: 2000,
    image: "https://picsum.photos/seed/ruler/400/300"
  }
];

export default function StationeryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          홈으로 돌아가기
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">필기구</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stationeryItems.map((item) => (
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