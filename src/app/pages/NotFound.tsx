import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div  className="min-h-[60vh] flex items-center justify-center px-4 header-margin">
      <div className="text-center">
        <h1 className="text-6xl mb-4 text-primary">404</h1>
        <h2 className="mb-4">ページが見つかりません</h2>
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg"
        >
          <Home className="h-5 w-5 mr-2" />
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
}
