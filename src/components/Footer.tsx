"use client";

import Link from "next/link";
import { Box } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Box className="h-6 w-6 text-blue-700" />
              <span className="font-bold text-xl text-blue-700">RentBox</span>
            </Link>
            <p className="text-gray-600 mb-4">
              캠퍼스 내 물품 대여 플랫폼 RentBox에서 필요한 물품을 합리적으로 대여하세요.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">이용 안내</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-gray-600 hover:text-blue-700">
                  이용 방법
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-700">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-blue-700">
                  이용 요금
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-700">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">카테고리</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/items/electronics" className="text-gray-600 hover:text-blue-700">
                  전자기기
                </Link>
              </li>
              <li>
                <Link href="/items/camping" className="text-gray-600 hover:text-blue-700">
                  캠핑용품
                </Link>
              </li>
              <li>
                <Link href="/categories/tools" className="text-gray-600 hover:text-blue-700">
                  공구
                </Link>
              </li>
              <li>
                <Link href="/items/sports" className="text-gray-600 hover:text-blue-700">
                  스포츠용품
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="text-gray-600 hover:text-blue-700">
                  고객센터
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-700">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-600 hover:text-blue-700">
                  안전 정책
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-gray-600 hover:text-blue-700">
                  피드백
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RentBox. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-700">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-700">
              이용약관
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-700">
              위치기반서비스 이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 