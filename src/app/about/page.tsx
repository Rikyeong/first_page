"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function About() {
  const teamMembers = [
    {
      name: "김민수",
      role: "CEO & Founder",
      description: "대학교 캠퍼스 내 물품 공유 문화를 혁신하고자 RentBox를 설립했습니다."
    },
    {
      name: "이지은",
      role: "CTO",
      description: "안전하고 신뢰할 수 있는 플랫폼 구축을 위해 노력하고 있습니다."
    },
    {
      name: "박준호",
      role: "Head of Operations",
      description: "효율적인 물품 관리 시스템을 통해 최고의 서비스를 제공합니다."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          홈으로 돌아가기
        </Link>

        <h1 className="text-4xl font-bold text-center mb-12">RentBox 소개</h1>

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-4">우리의 비전</h2>
          <p className="text-gray-600 mb-6">
            RentBox는 대학교 캠퍼스 내에서 필요한 물품을 쉽고 안전하게 대여할 수 있는 플랫폼입니다.
            우리는 학생들의 경제적 부담을 줄이고, 지속 가능한 소비 문화를 만들어가고자 합니다.
          </p>
          <p className="text-gray-600">
            안전한 거래 시스템과 투명한 평가 제도를 통해 신뢰할 수 있는 커뮤니티를 구축하고 있습니다.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-8">우리 팀</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-blue-600">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">함께 만들어가는 RentBox</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            RentBox는 지속적으로 성장하고 있습니다. 여러분의 피드백과 참여가 우리의 발전에 큰 도움이 됩니다.
            함께 더 나은 캠퍼스 문화를 만들어가요.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            문의하기
          </Button>
        </div>
      </div>
    </main>
  );
} 