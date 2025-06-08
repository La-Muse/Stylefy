"use client";
import { Alert, AlertDescription } from "@/src/components/ui/alert";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Textarea } from "@/src/components/ui/textarea";
import { AlertCircle, Building, CheckCircle, Eye, EyeOff, Mail, MessageSquare, Phone, User } from "lucide-react";
import { useState } from "react";

export default function ShadcnFormSamples() {
  // ログインフォームの状態
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  // お問い合わせフォームの状態
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    category: "",
    message: "",
    newsletter: false,
  });
  const [contactStatus, setContactStatus] = useState("");

  // ログインフォーム送信処理
  const handleLoginSubmit = (e: { preventDefault: () => void }) => {
    if (e) e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      setLoginStatus("error");
      return;
    }
    setLoginStatus("success");
    console.log("Login data:", loginForm);
  };

  // お問い合わせフォーム送信処理
  const handleContactSubmit = (e: { preventDefault: () => void }) => {
    if (e) e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactStatus("error");
      return;
    }
    setContactStatus("success");
    console.log("Contact data:", contactForm);

    // フォームリセット
    setTimeout(() => {
      setContactForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        category: "",
        message: "",
        newsletter: false,
      });
      setContactStatus("");
    }, 2000);
  };

  const resetContactForm = () => {
    setContactForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      category: "",
      message: "",
      newsletter: false,
    });
    setContactStatus("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Next.js + shadcn/ui フォームサンプル</h1>
          <p className="text-gray-600">実用的なフォームコンポーネントの実装例</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              ログインフォーム
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              お問い合わせフォーム
            </TabsTrigger>
          </TabsList>

          {/* ログインフォーム */}
          <TabsContent value="login">
            <Card className="w-full max-w-md mx-auto shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                  <User className="w-6 h-6" />
                  ログイン
                </CardTitle>
                <CardDescription>アカウントにログインしてください</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      メールアドレス
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">パスワード</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="パスワードを入力"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        className="w-full pr-10"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  {loginStatus === "error" && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-700">
                        メールアドレスとパスワードを入力してください。
                      </AlertDescription>
                    </Alert>
                  )}

                  {loginStatus === "success" && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-700">ログインに成功しました！</AlertDescription>
                    </Alert>
                  )}

                  <Button onClick={handleLoginSubmit} className="w-full">
                    ログイン
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    アカウントをお持ちでない方は{" "}
                    <a href="/signup" className="text-blue-600 hover:underline">
                      こちらから登録
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* お問い合わせフォーム */}
          <TabsContent value="contact">
            <Card className="w-full max-w-2xl mx-auto shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  お問い合わせ
                </CardTitle>
                <CardDescription>ご質問やご相談がございましたら、お気軽にお問い合わせください</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        お名前{" "}
                        <Badge variant="destructive" className="text-xs">
                          必須
                        </Badge>
                      </Label>
                      <Input
                        id="name"
                        placeholder="山田太郎"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        メールアドレス{" "}
                        <Badge variant="destructive" className="text-xs">
                          必須
                        </Badge>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="example@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        会社名
                      </Label>
                      <Input
                        id="company"
                        placeholder="株式会社サンプル"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        電話番号
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="03-1234-5678"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">お問い合わせ種別</Label>
                    <Select onValueChange={(value) => setContactForm({ ...contactForm, category: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="お問い合わせの種別を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">一般的なお問い合わせ</SelectItem>
                        <SelectItem value="support">サポート</SelectItem>
                        <SelectItem value="sales">営業・販売について</SelectItem>
                        <SelectItem value="partnership">パートナーシップ</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      メッセージ{" "}
                      <Badge variant="destructive" className="text-xs">
                        必須
                      </Badge>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="お問い合わせ内容をご記入ください..."
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={contactForm.newsletter}
                      onCheckedChange={(checked) => setContactForm({ ...contactForm, newsletter: checked as boolean })}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      ニュースレターの配信を希望します
                    </Label>
                  </div>

                  {contactStatus === "error" && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-700">必須項目をすべて入力してください。</AlertDescription>
                    </Alert>
                  )}

                  {contactStatus === "success" && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-700">
                        お問い合わせを受け付けました。ありがとうございます！
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="flex gap-4">
                    <Button onClick={handleContactSubmit} className="flex-1">
                      送信する
                    </Button>
                    <Button variant="outline" onClick={resetContactForm}>
                      リセット
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 実装のヒント */}
        <Card className="mt-8 bg-gray-50">
          <CardHeader>
            <CardTitle className="text-lg">実装のポイント</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">
            <p>
              • <strong>バリデーション:</strong> クライアントサイドとサーバーサイド両方で実装
            </p>
            <p>
              • <strong>アクセシビリティ:</strong> ラベルとinputの関連付け、適切なaria属性の使用
            </p>
            <p>
              • <strong>レスポンシブ対応:</strong> モバイルファーストでデザイン
            </p>
            <p>
              • <strong>エラーハンドリング:</strong> わかりやすいエラーメッセージの表示
            </p>
            <p>
              • <strong>UX向上:</strong> ローディング状態、成功/失敗フィードバックの実装
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
