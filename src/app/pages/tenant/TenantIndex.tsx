import { Link } from 'react-router-dom';
import { AlertCircle, LogOut, FileEdit, Mail } from 'lucide-react';

export function TenantIndex() {
  const services = [
    {
      title: 'お問い合わせ',
      description: '物件探しや空室確認、その他ご質問はこちらから',
      href: '/tenant/contact',
      icon: Mail,
    },
    {
      title: '不具合連絡',
      description: '設備の故障や不具合がございましたらこちらからご連絡ください',
      href: '/tenant/issue',
      icon: AlertCircle,
    },
    {
      title: '契約内容の変更・更新・確認',
      description: '契約内容についてはこちらからご連絡ください',
      href: '/tenant/change',
      icon: FileEdit,
    },
    {
      title: '退去申し込み',
      description: '退去のお手続きはこちらから',
      href: '/tenant/move-out',
      icon: LogOut,
    },
  ];

  return (
    <div className='header-margin bg-gray-50'>

          <div className="flex flex-col justify-center pt-12 lg:order-2 order-1 px-6 lg:px-12">
            <div className="max-w-7xl py-4 text-md text-gray-500 text-left">

              <Link to="/" className="hover:text-primary hover:underline">
                トップページ
              </Link>

              <span className="mx-2">&gt;</span>

              <span className="text-gray-700">
                入居者様向けサービス
              </span>

            </div>

            {/* キャッチコピー */}
            <h1 className="z-15 text-3xl md:text-5xl font-bold text-primary leading-12 lg:leading-18 mb-2 tracking-widest">
              入居者様向けサービス
            </h1>

            {/* 英語コピー */}
            <p className="text-primary  text-md mb-8 z-15 en">
              Services for Residents
            </p>

            {/* 画像 */}
            <div className="relative rounded-3xl overflow-hidden -mt-20 lg:-mt-40 h-[450px] z-10">
            <img src="./img/mansion047.jpg" alt="建物" className={`absolute inset-0 w-full h-full object-cover clip-roof-firstview`}/>

          </div>

        <p className='text-primary text-center text-3xl mt-24 mb-12'>お問い合わせはこちら</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mb-24 lg:px-12 ">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="bg-white p-8 rounded-lg hover:bg-secondary/20 group text-gray-600 hover:text-primary transition-colors text-center"
            >
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-foreground transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <div >
                <h3 className="mb-3 text-xl">{service.title}</h3>
                <p className="text-md ">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
