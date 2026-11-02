'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Settings, Share2, Pencil, FileText, Users, UserPlus, Heart,
  Mail, Globe, Calendar, Send, AtSign, Briefcase
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container mx-auto max-w-4xl p-4 space-y-8 pb-10">
      
      {/* 1. Шапка профиля */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pt-6">
        <Avatar className="h-24 w-24 border-2 border-primary/20">
          <AvatarImage src="/logo.jpg"/>
          <AvatarFallback>АП</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Nadymov Timofey</h1>
          <p className="text-muted-foreground font-medium">Frontend Developer</p>
          <p className="text-sm font-medium text-primary">tim@dymki.ru</p>
          <p className="text-sm text-muted-foreground max-w-md">
            Учусь и проживаю в городе Москва. Хочу стать специалистом в веб-разработке.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button><Pencil className="mr-2 h-4 w-4" /> Редактировать</Button>
          <Button variant="outline"><Share2 className="mr-2 h-4 w-4" /> Поделиться</Button>
          <Button variant="ghost" size="icon" title="Настройки"><Settings className="h-5 w-5" /></Button>
        </div>
      </div>

      <Separator />

      {/* 2. Блок статистики */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="flex items-center p-4 gap-4">
          <div className="p-2.5 bg-primary/10 rounded-full"><FileText className="h-5 w-5 text-primary" /></div>
          <div><p className="text-xs text-muted-foreground font-medium">Публикации</p><p className="text-xl font-bold">344</p></div>
        </Card>
        <Card className="flex items-center p-4 gap-4">
          <div className="p-2.5 bg-primary/10 rounded-full"><Users className="h-5 w-5 text-primary" /></div>
          <div><p className="text-xs text-muted-foreground font-medium">Подписчики</p><p className="text-xl font-bold">2.3k</p></div>
        </Card>
        <Card className="flex items-center p-4 gap-4">
          <div className="p-2.5 bg-primary/10 rounded-full"><UserPlus className="h-5 w-5 text-primary" /></div>
          <div><p className="text-xs text-muted-foreground font-medium">Подписки</p><p className="text-xl font-bold">345</p></div>
        </Card>
        <Card className="flex items-center p-4 gap-4 shadow-sm">
          <div className="p-2.5 bg-primary/10 rounded-full"><Heart className="h-5 w-5 text-primary" /></div>
          <div><p className="text-xs text-muted-foreground font-medium">Лайки</p><p className="text-xl font-bold">10.1k</p></div>
        </Card>
      </div>

      {/* 3. Секция «О себе» */}
      <Card className="shadow-sm">
        <CardHeader><CardTitle>О себе</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Привет. Я веб-разработчик со стажем 3 года. Создаю интерфейсы испульзуя Next.js, Tailwind css и также пользуюсь PostgreSQL. В свободное время изучаю использование нейросетей в своих проектах и их возможное внедрение в сайты.
          </p>
          <div>
            <h3 className="text-sm font-semibold mb-3">Навыки</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">UI/UX</Badge>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" />tim@dymki.ru</div>
            <div className="flex items-center gap-2 text-muted-foreground"><Globe className="h-4 w-4" /> natim.com</div>
            <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="h-4 w-4" /> Регистрация: 03.11.2026 год</div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Send className="h-4 w-4 cursor-pointer hover:text-foreground" />
              <AtSign className="h-4 w-4 cursor-pointer hover:text-foreground" />
              <Briefcase className="h-4 w-4 cursor-pointer hover:text-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 4. Навигация по контенту */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Все посты</TabsTrigger>
          <TabsTrigger value="media">Медиа</TabsTrigger>
          <TabsTrigger value="docs">Документы</TabsTrigger>
          <TabsTrigger value="favorites">Избранное</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="p-8 text-center border rounded-lg bg-muted/20 mt-4 text-muted-foreground text-sm">Здесь будут все посты</TabsContent>
        <TabsContent value="media" className="p-8 text-center border rounded-lg bg-muted/20 mt-4 text-muted-foreground text-sm">Здесь будут медиа</TabsContent>
        <TabsContent value="docs" className="p-8 text-center border rounded-lg bg-muted/20 mt-4 text-muted-foreground text-sm">Здесь будут документы</TabsContent>
        <TabsContent value="favorites" className="p-8 text-center border rounded-lg bg-muted/20 mt-4 text-muted-foreground text-sm">Здесь будет избранное</TabsContent>
      </Tabs>

      {/* 5. Подвал */}
      <footer className="border-t pt-8 pb-4 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-xs">N</div>
            <span className="text-sm text-muted-foreground">© 2026 Название. Все права защищены.</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">О нас</a>
            <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
            <a href="#" className="hover:text-foreground transition-colors">Блог</a>
            <a href="#" className="hover:text-foreground transition-colors">Вакансии</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Send className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><AtSign className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Briefcase className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end gap-6 mt-6 text-xs text-muted-foreground/60">
          <a href="#" className="hover:underline">Конфиденциальность</a>
          <a href="#" className="hover:underline">Условия использования</a>
        </div>
      </footer>
    </div>
  );
}
