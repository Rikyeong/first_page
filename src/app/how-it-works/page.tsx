"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">서비스 이용 방법</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        캠퍼스 렌탈은 간단하고 안전한 대여 서비스를 제공합니다. 
        아래 단계를 따라 쉽게 물품을 대여하고 수익을 창출하세요.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-600" />
              대여자 이용 방법
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full p-1">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">1. 물품 찾기</h3>
                <p className="text-gray-600">원하는 물품을 검색하고 상세 정보를 확인하세요.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full p-1">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">2. 대여 신청</h3>
                <p className="text-gray-600">대여 기간을 선택하고 신청서를 작성하세요.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full p-1">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">3. 물품 수령</h3>
                <p className="text-gray-600">약속된 장소에서 물품을 수령하고 사용하세요.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full p-1">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">4. 반납</h3>
                <p className="text-gray-600">사용이 끝난 후 약속된 장소에 물품을 반납하세요.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              물품 등록 방법
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 rounded-full p-1">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">1. 물품 등록</h3>
                <p className="text-gray-600">등록 페이지에서 물품 정보와 사진을 등록하세요.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 rounded-full p-1">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">2. 대여 요청 수락</h3>
                <p className="text-gray-600">대여 요청을 확인하고 수락하세요.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 rounded-full p-1">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">3. 물품 전달</h3>
                <p className="text-gray-600">약속된 장소에서 물품을 전달하세요.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 rounded-full p-1">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">4. 수익 정산</h3>
                <p className="text-gray-600">대여가 완료되면 수익이 자동으로 정산됩니다.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">서비스 특징</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-12 h-12 mx-auto mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">안전한 거래</h3>
            <p className="text-gray-600">모든 거래는 안전하게 보호됩니다.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-12 h-12 mx-auto mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">빠른 대여</h3>
            <p className="text-gray-600">간단한 절차로 빠르게 대여할 수 있습니다.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-12 h-12 mx-auto mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">신뢰할 수 있는 커뮤니티</h3>
            <p className="text-gray-600">학교 구성원들만의 신뢰할 수 있는 커뮤니티입니다.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">지금 바로 시작하세요</h2>
        <p className="text-gray-600 mb-8">캠퍼스 렌탈과 함께 새로운 대여 경험을 시작하세요.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/items">
            <Button size="lg" className="w-full sm:w-auto">
              물품 둘러보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/register-item">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              물품 등록하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 