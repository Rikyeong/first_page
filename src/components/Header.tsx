"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Box, Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const categories = [
    {
      title: "전자기기",
      description: "노트북, 카메라, 충전기 등 다양한 전자기기",
      href: "/items/electronics",
    },
    {
      title: "캠핑용품",
      description: "텐트, 침낭, 랜턴 등 캠핑에 필요한 용품",
      href: "/items/camping",
    },
    {
      title: "공구",
      description: "드릴, 망치, 드라이버 등 각종 공구",
      href: "/categories/tools",
    },
    {
      title: "스포츠용품",
      description: "농구공, 테니스 라켓, 요가 매트 등 스포츠 용품",
      href: "/items/sports",
    },
  ];

  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Box className="h-6 w-6 text-blue-700" />
          <span className="font-bold text-xl text-blue-700">RentBox</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/items" className="font-medium hover:text-blue-700">
            물품 검색
          </Link>
          <div className="relative group">
            <button className="font-medium hover:text-blue-700 flex items-center gap-1">
              카테고리
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-4 grid gap-2">
                {categories.map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className="block p-2 hover:bg-gray-50 rounded-md"
                  >
                    <div className="font-medium">{category.title}</div>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/how-it-works" className="font-medium hover:text-blue-700">
            이용 방법
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowSearch(true)} 
            className="text-gray-600 hover:text-gray-900"
          >
            <Search className="h-5 w-5" />
          </button>
          <div className="hidden sm:block">
            <Link href="/register-item">
              <Button variant="outline" size="sm">
                물품 등록하기
              </Button>
            </Link>
          </div>
          <Link href="/login">
            <Button size="sm">
              <User className="h-4 w-4 mr-2" />
              로그인
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="flex flex-col py-4 px-4 space-y-4">
            <Link href="/items" className="font-medium">
              물품 검색
            </Link>
            <div className="border-t pt-2">
              <p className="font-medium mb-2">카테고리</p>
              <div className="space-y-2 pl-2">
                {categories.map((category) => (
                  <Link 
                    key={category.title}
                    href={category.href}
                    className="block text-gray-600"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/how-it-works" className="font-medium border-t pt-2">
              이용 방법
            </Link>
            <Link href="/register-item" className="font-medium border-t pt-2">
              물품 등록하기
            </Link>
          </div>
        </div>
      )}

      {/* Search Dialog */}
      <Dialog open={showSearch} onOpenChange={setShowSearch}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>물품 검색</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Input
                placeholder="검색어를 입력하세요"
                className="flex-1"
                autoFocus
              />
              <Button onClick={() => setShowSearch(false)}>
                검색
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
} 