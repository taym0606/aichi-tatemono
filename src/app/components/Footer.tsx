import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="mb-4">会社情報</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">〒444-0813<br />愛知県岡崎市羽根町字東荒子57番地AR岡崎スクエア3階</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm">00-0000-0000</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm">info@example.com</p>
              </div>
            </div>
          </div>

          {/* リンク集 1 */}
          <div>
            <h3 className="mb-4">大家様向け</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/owner/service" className="text-sm hover:text-primary transition-colors">
                  賃貸管理サービス
                </Link>
              </li>
              <li>
                <Link to="/owner/contact" className="text-sm hover:text-primary transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link to="/owner/flow" className="text-sm hover:text-primary transition-colors">
                  管理の流れ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* リンク集 2 */}
          <div>
            <h3 className="mb-4">個人の入居者様向け</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tenant/contact" className="text-sm hover:text-primary transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link to="/tenant/issue" className="text-sm hover:text-primary transition-colors">
                  不具合連絡
                </Link>
              </li>
              <li>
                <Link to="/tenant/fap" className="text-sm hover:text-primary transition-colors">
                  契約内容の変更・更新・確認
                </Link>
              </li>
              <li>
                <Link to="/tenant/move-out" className="text-sm hover:text-primary transition-colors">
                  退去申し込み
                </Link>
              </li>
            </ul>
          </div>
          
          {/* リンク集 2 */}
          <div>
            <h3 className="mb-4">法人契約のお客様向け</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/corporate/contact" className="text-sm hover:text-primary transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link to="/corporate/issue" className="text-sm hover:text-primary transition-colors">
                  不具合連絡
                </Link>
              </li>
              <li>
                <Link to="/corporate/change" className="text-sm hover:text-primary transition-colors">
                  契約内容の変更・更新・確認
                </Link>
              </li>
              <li>
                <Link to="/corporate/cancellation" className="text-sm hover:text-primary transition-colors">
                  解約手続き
                </Link>
              </li>
            </ul>
          </div>

        　{/* リンク集 3 */}
          <div>
            <h3 className="mb-4">仲介業者様向け</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/agency/property" className="text-sm hover:text-primary transition-colors">
                  物件確認
                </Link>
              </li>
              <li>
                <Link to="/agency/download" className="text-sm hover:text-primary transition-colors">
                  申込書ダウンロード
                </Link>
              </li>
              <li>
                <Link to="/agency/documents" className="text-sm hover:text-primary transition-colors">
                  必要書類
                </Link>
              </li>
              <li>
                <Link to="/agency/contact" className="text-sm hover:text-primary transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* リンク集 5 */}
          <div>
            <h3 className="mb-4">会社案内</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/company/index" className="text-sm hover:text-primary transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link to="/performance" className="text-sm hover:text-primary transition-colors">
                  管理実績
                </Link>
              </li>
            </ul>
          </div>

          {/* リンク集 6 */}
          <div>
            <h3 className="mb-4">その他</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-sm hover:text-primary transition-colors">
                  サイトマップ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-primary transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © 2026 株式会社あいち建物管理. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
