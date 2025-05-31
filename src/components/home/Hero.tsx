import { ChevronDown } from "lucide-react";

const HeroSection = ({ onScroll }: { onScroll: () => void }) => (
  <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white px-4">
    <div className="text-center space-y-10 max-w-3xl">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
          안녕하세요,
        </h1>
        <h2 className="text-3xl md:text-5xl font-light animate-fade-in-2s">
          AI & Full-stack 개발자, 곽현정입니다.
        </h2>
      </div>
      <p className="text-lg md:text-2xl text-gray-300 leading-relaxed animate-fade-in-3s">
        이론과 실무를 고루 갖춘 개발자로서,
        <br />
        기술을 통해 더 나은 세상을 만드는 데 기여하고 싶습니다.
      </p>
      <div className="pt-6 animate-fade-in-bounce flex justify-center">
        <button
          onClick={onScroll}
          className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white px-6 py-3 rounded-full shadow-md backdrop-blur-md transition-all duration-300 border border-white border-opacity-30"
        >
          <span className="font-semibold">더 알아보기</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
