"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { CalendarIcon, UploadCloud, AlertCircle, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";

// Form validation schema
const formSchema = z.object({
  title: z.string().min(5, { message: "제목은 최소 5자 이상이어야 합니다." }),
  description: z.string().min(20, { message: "설명은 최소 20자 이상 작성해주세요." }),
  category: z.string({ required_error: "카테고리를 선택해주세요." }),
  price: z.number()
    .min(500, { message: "최소 대여가격은 500원 이상이어야 합니다." })
    .max(50000, { message: "최대 대여가격은 50,000원 이하여야 합니다." }),
  deposit: z.number()
    .min(5000, { message: "최소 보증금은 5,000원 이상이어야 합니다." }),
  location: z.string().min(3, { message: "위치 정보를 입력해주세요." }),
  availableFrom: z.date(),
  availableTo: z.date(),
  photos: z.array(z.string()).min(1, { message: "최소 1장의 사진을 등록해주세요." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegisterItem() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: 1000,
      deposit: 10000,
      location: "",
      availableFrom: new Date(),
      availableTo: new Date(new Date().setDate(new Date().getDate() + 7)),
      photos: [],
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    // 여기에 API 호출 등의 제출 로직을 구현
    alert("물품 등록이 완료되었습니다!");
  };

  // 사진 업로드 핸들러 (실제로는 API 호출 필요)
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadingPhoto(true);
      
      // 파일 처리 (실제 구현에서는 API 서버에 업로드)
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        // 업로드된 이미지를 화면에 표시하기 위한 로직
        const newPhotos = [...photos, reader.result as string];
        setPhotos(newPhotos);
        setValue("photos", newPhotos);
        setUploadingPhoto(false);
      };
      
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
    setValue("photos", newPhotos);
  };

  const categories = [
    { value: "electronics", label: "전자기기" },
    { value: "camping", label: "캠핑용품" },
    { value: "tools", label: "공구" },
    { value: "sports", label: "스포츠용품" },
    { value: "books", label: "도서" },
    { value: "music", label: "음향기기" },
    { value: "kitchen", label: "주방용품" },
    { value: "other", label: "기타" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">물품 등록하기</h1>
      <p className="text-gray-600 mb-8">
        사용하지 않는 물품을 등록하고 수익을 창출하세요. 물품 상태와 가격 정보를 정확하게 입력해주세요.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>기본 정보</CardTitle>
            <CardDescription>물품의 기본 정보를 입력해주세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 제목 */}
            <div className="space-y-2">
              <Label htmlFor="title">
                제목 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                placeholder="물품의 제목을 입력하세요"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.title.message}
                </p>
              )}
            </div>
            
            {/* 카테고리 */}
            <div className="space-y-2">
              <Label htmlFor="category">
                카테고리 <span className="text-red-500">*</span>
              </Label>
              <Select
                onValueChange={(value) => setValue("category", value)}
                defaultValue={watch("category")}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="카테고리 선택" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.category.message}
                </p>
              )}
            </div>
            
            {/* 설명 */}
            <div className="space-y-2">
              <Label htmlFor="description">
                설명 <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="물품에 대한 자세한 설명, 상태, 사용법 등을 입력하세요"
                rows={5}
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.description.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>가격 정보</CardTitle>
            <CardDescription>보증금 정보를 입력해주세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 보증금 */}
            <div className="space-y-2">
              <Label htmlFor="deposit">
                보증금 (원) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="deposit"
                type="number"
                placeholder="10000"
                {...register("deposit", { valueAsNumber: true })}
              />
              {errors.deposit && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.deposit.message}
                </p>
              )}
              <p className="text-gray-500 text-sm">
                물품의 가치를 고려하여 적절한 보증금을 설정해주세요. 
                보증금은 물품 손상이나 분실 시 보상에 사용됩니다.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>대여 정보</CardTitle>
            <CardDescription>대여 가능 위치와 기간을 입력해주세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 위치 */}
            <div className="space-y-2">
              <Label htmlFor="location">
                위치 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="location"
                placeholder="물품의 위치를 입력하세요 (예: 공학관 E동, 중앙도서관 등)"
                {...register("location")}
              />
              {errors.location && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.location.message}
                </p>
              )}
            </div>
            
            {/* 대여 가능 기간 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="availableFrom">
                  대여 시작일 <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="availableFrom"
                    type="date"
                    value={format(watch("availableFrom"), "yyyy-MM-dd")}
                    onChange={(e) => setValue("availableFrom", new Date(e.target.value))}
                  />
                  <CalendarIcon className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="availableTo">
                  대여 종료일 <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="availableTo"
                    type="date"
                    value={format(watch("availableTo"), "yyyy-MM-dd")}
                    onChange={(e) => setValue("availableTo", new Date(e.target.value))}
                  />
                  <CalendarIcon className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>물품 사진</CardTitle>
            <CardDescription>물품의 상태를 명확히 보여주는 사진을 등록해주세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 사진 업로드 */}
            <div className="space-y-4">
              <Label>
                사진 업로드 <span className="text-red-500">*</span>
              </Label>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden border">
                    <Image src={photo} alt={`물품 사진 ${index + 1}`} fill className="object-cover" />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                      onClick={() => removePhoto(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
                
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md aspect-square cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">클릭하여 사진 추가</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    disabled={uploadingPhoto}
                  />
                </label>
              </div>
              
              {errors.photos && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.photos.message}
                </p>
              )}
              <p className="text-gray-500 text-sm">
                최소 1장의 사진을 등록해야 합니다. 물품의 전체적인 모습과 상세 컨디션을 보여주는 
                사진을 등록하면 더 빠른 대여가 가능합니다.
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Button type="button" variant="outline" className="w-full md:w-auto">
            임시 저장
          </Button>
          <Button type="submit" className="w-full md:w-auto">
            물품 등록하기
          </Button>
        </div>
      </form>
    </div>
  );
} 