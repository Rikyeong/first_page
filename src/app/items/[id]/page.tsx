"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Calendar, MapPin, Star, User, Clock, AlertCircle, ArrowLeft } from "lucide-react";

// Mock item data
const MOCK_ITEM = {
  id: "item-1",
  title: "DSLR 카메라 (Canon EOS 800D)",
  description: `초보자에게 적합한 DSLR 카메라입니다. 기본 렌즈와 함께 제공됩니다. 
  
  주요 특징:
  - 2420만 화소 APS-C 센서
  - DIGIC 7 이미지 프로세서
  - 45개 크로스타입 AF 포인트
  - Full HD 동영상 촬영 가능
  - 터치스크린 LCD
  
  사용 이력: 2년 사용했으며, 모든 기능이 정상 작동합니다. 약간의 사용 흔적이 있으나 렌즈와 바디 모두 상태가 양호합니다.
  
  패키지에 포함된 것: 카메라 바디, 기본 렌즈(18-55mm), 배터리, 충전기, 스트랩, 사용 설명서`,
  images: [
    "https://picsum.photos/seed/camera1/800/600",
    "https://picsum.photos/seed/camera2/800/600",
    "https://picsum.photos/seed/camera3/800/600",
    "https://picsum.photos/seed/camera4/800/600",
  ],
  price: 5000,
  deposit: 50000,
  location: "공학관 E동",
  category: "electronics",
  availableFrom: new Date("2023-06-15"),
  availableTo: new Date("2023-06-30"),
  owner: {
    id: "user-1",
    name: "김철수",
    rating: 4.8,
    reviewCount: 25,
    joinedDate: new Date("2021-03-15"),
    image: "https://picsum.photos/seed/user1/200/200",
  },
  reviews: [
    {
      id: "review-1",
      user: {
        id: "user-2",
        name: "박지민",
        image: "https://picsum.photos/seed/user2/200/200",
      },
      rating: 5,
      comment: "카메라 상태가 정말 좋았고, 대여 및 반납 과정도 매우 원활했습니다. 다음에도 이용하고 싶어요!",
      date: new Date("2023-05-10"),
    },
    {
      id: "review-2",
      user: {
        id: "user-3",
        name: "이수진",
        image: "https://picsum.photos/seed/user3/200/200",
      },
      rating: 4,
      comment: "전체적으로 만족스러웠습니다. 다만 배터리 충전이 조금 빨리 되는 편이었지만, 여분 배터리도 같이 빌려주셔서 큰 문제는 없었습니다.",
      date: new Date("2023-04-22"),
    },
  ],
};

interface ItemPageProps {
  id: string;
}

function ItemDetail({ id }: ItemPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // In a real application, you would fetch the item data based on the ID
  const item = MOCK_ITEM;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/items" className="flex items-center gap-2 text-blue-700 mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>목록으로 돌아가기</span>
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Images */}
        <div className="w-full lg:w-3/5">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
            <Image
              src={item.images[selectedImage]}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {item.images.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-video rounded-md overflow-hidden cursor-pointer border-2 ${
                  selectedImage === index ? "border-blue-700" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`${item.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Item Details */}
        <div className="w-full lg:w-2/5">
          <Badge className="mb-2">{translateCategory(item.category)}</Badge>
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <div className="flex items-center mb-4">
            <p className="text-2xl font-bold">{item.price.toLocaleString()}원</p>
            <span className="mx-2 text-gray-500">/</span>
            <p className="text-gray-500">일</p>
          </div>
          <p className="text-gray-500 mb-6">보증금: {item.deposit.toLocaleString()}원</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-500 mr-1" />
              <p className="text-gray-600">{format(item.availableFrom, "yyyy.MM.dd")} ~ {format(item.availableTo, "yyyy.MM.dd")}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-500 mr-1" />
              <p className="text-gray-600">{item.location}</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5" />
                물품 제공자
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={item.owner.image}
                    alt={item.owner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{item.owner.name}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{item.owner.rating}</span>
                    <span className="mx-1">·</span>
                    <span>리뷰 {item.owner.reviewCount}개</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button className="w-full">대여 신청하기</Button>
            <Button variant="outline" className="w-full">문의하기</Button>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      {/* Description */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">물품 설명</h2>
        <div className="prose max-w-none">
          {item.description.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Usage Precautions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">이용 시 주의사항</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>대여 시 물품의 상태를 꼼꼼히 확인해주세요.</li>
                  <li>반납 시간을 준수해주세요. 늦을 경우 추가 대여료가 부과될 수 있습니다.</li>
                  <li>물품 파손 시 보증금에서 수리비가 차감될 수 있습니다.</li>
                  <li>사용 후 깨끗하게 정리하여 반납해주세요.</li>
                  <li>분실 시 물품 가격에 해당하는 비용을 지불해야 할 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reviews */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">후기 ({item.reviews.length})</h2>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-500 mr-1" />
            <span className="font-bold text-lg">{item.owner.rating}</span>
          </div>
        </div>

        <div className="space-y-6">
          {item.reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={review.user.image}
                      alt={review.user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{review.user.name}</p>
                        <p className="text-sm text-gray-500">{format(review.date, "yyyy년 MM월 dd일")}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span>{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function translateCategory(category: string): string {
  const categoryMap: Record<string, string> = {
    electronics: "전자기기",
    camping: "캠핑용품",
    tools: "공구",
    sports: "스포츠용품",
    books: "도서",
    music: "음향기기",
    kitchen: "주방용품",
    other: "기타",
  };
  
  return categoryMap[category] || category;
}

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ItemDetail id={id} />;
} 