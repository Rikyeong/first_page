"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Clock, MessageSquare, Star, Wallet } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);

  const benefits = [
    {
      icon: <Box className="h-6 w-6" />,
      title: "간편한 물품 대여",
      description: "필요한 물품을 검색하고 대여 시간을 선택하여 쉽게 예약하세요"
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "안전한 보증금 시스템",
      description: "안전한 거래를 위해 투명한 보증금 시스템을 제공합니다"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "빠른 대여 및 반납",
      description: "QR코드와 사진 인증으로 빠르고 간편하게 대여/반납하세요"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "신뢰도 평가 시스템",
      description: "사용자 평가를 통해 신뢰할 수 있는 대여 환경을 제공합니다"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "편리한 소통",
      description: "대여자와 물품 제공자 간의 원활한 소통이 가능합니다"
    }
  ];

  const categories = [
    {
      title: "전자기기",
      items: "120+",
      itemList: [
        { name: "노트북" },
        { name: "태블릿" },
        { name: "프로젝터" },
        { name: "스캐너" },
        { name: "카메라" },
        { name: "보조배터리" }
      ]
    },
    {
      title: "공구",
      items: "95+",
      itemList: [
        { name: "드릴" },
        { name: "망치" },
        { name: "렌치세트" },
        { name: "전동공구" },
        { name: "측정도구" },
        { name: "안전장비" }
      ]
    },
    {
      title: "운동 용품",
      items: "75+",
      itemList: [
        { name: "요가매트" },
        { name: "덤벨" },
        { name: "밴드" },
        { name: "줄넘기" },
        { name: "스트레칭밴드" },
        { name: "운동화" }
      ]
    },
    {
      title: "필기구",
      items: "85+",
      itemList: [
        {
          name: "노트",
          image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60",
          description: "A4/A5 사이즈 노트",
          deposit: "500원"
        },
        {
          name: "펜",
          image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=60",
          description: "다양한 색상 펜 세트",
          deposit: "500원"
        },
        {
          name: "마커",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=60",
          description: "화이트보드 마커",
          deposit: "500원"
        },
        {
          name: "자",
          image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format&fit=crop&q=60",
          description: "30cm/50cm 자",
          deposit: "500원"
        },
        {
          name: "가위",
          image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=60",
          description: "일반/가위 세트",
          deposit: "500원"
        },
        {
          name: "테이프",
          image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format&fit=crop&q=60",
          description: "마스킹/양면 테이프",
          deposit: "500원"
        }
      ]
    }
  ];

  function getCategoryImage(category: string): string {
    switch (category) {
      case "전자기기":
        return "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=60";
      case "공구":
        return "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&auto=format&fit=crop&q=60";
      case "운동 용품":
        return "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60";
      case "필기구":
        return "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60";
      default:
        return "https://picsum.photos/seed/default/300/200";
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              살 필요 없이 빌려쓰세요!
            </h1>
            <p className="text-xl mb-8">
              캠퍼스 내 물품 대여 플랫폼 RentBox에서 필요한 물품을 무료로 대여하세요.<br />
              보증금만 지불하고 사용 후 반납하면 전액 환불됩니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/rent">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                    대여하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/register-item">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                    물품 등록하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-left">
                <h3 className="text-xl font-semibold mb-4">이용 방법</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">물품 대여자</h4>
                    <ol className="list-decimal ml-5 space-y-1 text-sm">
                      <li>원하는 물품 검색</li>
                      <li>대여 시간 선택</li>
                      <li>보증금 지불</li>
                      <li>사용 후 반납</li>
                      <li>보증금 환불</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">물품 제공자</h4>
                    <ol className="list-decimal ml-5 space-y-1 text-sm">
                      <li>물품 등록</li>
                      <li>대여 요청 확인</li>
                      <li>물품 상태 확인</li>
                      <li>보증금 관리</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">인기 카테고리</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link href={category.title === "공구" ? "/categories/tools" : "/items"} key={index} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <div className="relative h-48 w-full">
                    <Image
                      src={getCategoryImage(category.title)}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-500 mb-3">{category.items} 물품</p>
                    <div className="grid grid-cols-2 gap-1">
                      {category.itemList.map((item, idx) => (
                        <span key={idx} className="text-sm text-gray-600">
                          • {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="group">
              모든 카테고리 보기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <nav className="w-full py-8 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              홈
            </Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800">
              소개
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800">
              문의하기
            </Link>
          </div>
        </div>
      </nav>

      {/* CTA */}
      <section className="w-full py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 시작하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            필요한 물품을 무료로 대여하세요. 보증금만 지불하고 사용 후 반납하면 전액 환불됩니다.
            사용하지 않는 물품을 공유하여 캠퍼스 내 나눔 문화에 참여하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rent">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                대여하기
              </Button>
            </Link>
            <Link href="/register-item">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                물품 등록하기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
