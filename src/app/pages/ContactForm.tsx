import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  title: string;
  category: "owner" | "tenant" | "corporate";
}

export function ContactForm({ title, category }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    companyname:'',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（実際の実装では、APIに送信）
    alert('お問い合わせを受け付けました。担当者より折り返しご連絡いたします。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="header-margin">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-2">{title}</h1>
          <p className="opacity-90">{category}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-50 border-l-4 border-secondary p-6 mb-8">
          <p className="text-sm">
            お問い合わせいただいた内容は、2営業日以内にご返信させていただきます。<br />
            お急ぎの場合は、お電話にてお問い合わせください。<br />
            TEL: 03-0000-0000（営業時間：9:00～18:00）
          </p>
        </div>


        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="companyname" className="block mb-2">
              氏名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyname"
              name="companyname"
              required
              value={formData.companyname}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2">
              電話番号
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2">
              件名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={8}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600 mb-4">
              送信前に入力内容をご確認ください。プライバシーポリシーに同意の上、送信してください。
            </p>
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>送信する</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
