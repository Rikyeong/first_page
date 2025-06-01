"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Items() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);

  const categories = [
    {
      title: "전자기기",
      items: "120+",
      itemList: [
        {
          name: "노트북",
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60",
          description: "대학생용 노트북 (Windows/Mac)",
          deposit: "500원"
        },
        {
          name: "태블릿",
          image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=60",
          description: "iPad/갤럭시탭",
          deposit: "500원"
        },
        {
          name: "프로젝터",
          image: "https://images.unsplash.com/photo-1561489413-985b0da6f9e7?w=800&auto=format&fit=crop&q=60",
          description: "프레젠테이션용 프로젝터",
          deposit: "500원"
        },
        {
          name: "스캐너",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
          description: "문서 스캔용 스캐너",
          deposit: "500원"
        },
        {
          name: "카메라",
          image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
          description: "DSLR/미러리스 카메라",
          deposit: "500원"
        },
        {
          name: "보조배터리",
          image: "https://images.unsplash.com/photo-1609592425401-742074f0548d?w=800&auto=format&fit=crop&q=60",
          description: "고용량 보조배터리",
          deposit: "500원"
        }
      ]
    },
    {
      title: "공구",
      items: "95+",
      itemList: [
        {
          name: "드릴",
          image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&auto=format&fit=crop&q=60",
          description: "전동 드릴 세트",
          deposit: "500원"
        },
        {
          name: "망치",
          image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&auto=format&fit=crop&q=60",
          description: "일반 망치",
          deposit: "500원"
        },
        {
          name: "렌치세트",
          image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&auto=format&fit=crop&q=60",
          description: "다양한 사이즈 렌치 세트",
          deposit: "500원"
        },
        {
          name: "전동공구",
          image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&auto=format&fit=crop&q=60",
          description: "전동 드라이버/그라인더",
          deposit: "500원"
        },
        {
          name: "측정도구",
          image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&auto=format&fit=crop&q=60",
          description: "줄자/레벨/각도기",
          deposit: "500원"
        },
        {
          name: "안전장비",
          image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&auto=format&fit=crop&q=60",
          description: "안전모/장갑/보호대",
          deposit: "500원"
        }
      ]
    },
    {
      title: "운동 용품",
      items: "75+",
      itemList: [
        {
          name: "요가매트",
          image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&auto=format&fit=crop&q=60",
          description: "고급 요가매트",
          deposit: "500원"
        },
        {
          name: "덤벨",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
          description: "조절 가능한 덤벨 세트",
          deposit: "500원"
        },
        {
          name: "밴드",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
          description: "저항 밴드 세트",
          deposit: "500원"
        },
        {
          name: "줄넘기",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
          description: "프로페셔널 줄넘기",
          deposit: "500원"
        },
        {
          name: "스트레칭밴드",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
          description: "스트레칭용 밴드",
          deposit: "500원"
        },
        {
          name: "운동화",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
          description: "운동용 신발",
          deposit: "500원"
        }
      ]
    },
    {
      title: "필기구",
      items: "85+",
      itemList: [
        {
          name: "노트",
          image: "https://images.unsplash.com/photo-1583485088034-697b5bc36b1c?w=800&auto=format&fit=crop&q=60",
          description: "A4/A5 사이즈 노트",
          deposit: "500원"
        },
        {
          name: "펜",
          image: "https://images.unsplash.com/photo-1583485088034-697b5bc36b1c?w=800&auto=format&fit=crop&q=60",
          description: "다양한 색상 펜 세트",
          deposit: "500원"
        },
        {
          name: "마커",
          image: "https://images.unsplash.com/photo-1583485088034-697b5bc36b1c?w=800&auto=format&fit=crop&q=60",
          description: "화이트보드 마커",
          deposit: "500원"
        },
        {
          name: "자",
          image: "https://images.unsplash.com/photo-1583485088034-697b5bc36b1c?w=800&auto=format&fit=crop&q=60",
          description: "30cm/50cm 자",
          deposit: "500원"
        },
        {
          name: "가위",
          image: "https://images.unsplash.com/photo-1583485088034-697b5bc36b1c?w=800&auto=format&fit=crop&q=60",
          description: "일반/가위 세트",
          deposit: "500원"
        },
        {
          name: "테이프",
          image: "https://images.unsplash.com/photo-1583485088034-697b5bc36b1c?w=800&auto=format&fit=crop&q=60",
          description: "마스킹/양면 테이프",
          deposit: "500원"
        }
      ]
    }
  ];

  const filteredItems = categories.flatMap(category => 
    category.itemList.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            홈으로 돌아가기
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setShowSearch(!showSearch)}>
              <Search className="h-4 w-4" />
            </Button>
            <Link href="/register-item">
              <Button variant="outline">물품 등록하기</Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">로그인</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>로그인</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input placeholder="이메일" />
                  <Input type="password" placeholder="비밀번호" />
                  <Button className="w-full">로그인</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {showSearch && (
          <div className="mb-8">
            <Input
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        <h1 className="text-4xl font-bold text-center mb-12">대여 가능한 물품</h1>

        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.itemList.map((item, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-medium">보증금: {item.deposit}</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            대여하기
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>대여하기</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p>대여하시겠습니까?</p>
                            <Button className="w-full">확인</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 