import { MapPin, MessageSquare, Users, Search, Brain, CheckCircle, XCircle, ArrowRight, Link, Sparkles, Map } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 font-sans text-[#001F3F]">
      
      {/* Top Banner */}
      <div className="w-full max-w-4xl border-b-2 border-[#001F3F] pb-2 mb-8 text-center flex justify-center">
         {/* Replaced "A City Boy" text with image */}
         <div className="h-24 relative w-full max-w-md">
           <img src="/title.png" alt="北回归线黑客节" className="w-full h-full object-contain" />
         </div>
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
          终于熬到饭点了，<br className="sm:hidden" />今天要吃什么呢？
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#001F3F] mb-6">
          到饭点啦！ <span className="text-[#6B8E23]">解放你的烦恼。</span>
        </h2>
        
        <div className="w-full h-px bg-[#001F3F] my-6"></div>
        
        <p className="text-lg sm:text-xl font-medium mb-8">
          到饭点啦！ —— <span className="italic">全链路智能美食决策助手</span>
        </p>
        <div className="mb-8">
          <a
            href="http://shawnm.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#001F3F] text-white rounded-full border border-[#001F3F] hover:bg-[#003366] transition-colors font-bold"
          >
            <span className="inline-flex items-center gap-2">
              <span className="bg-white text-[#001F3F] rounded-full w-6 h-6 flex items-center justify-center">🍚</span>
              点击开饭
            </span>
          </a>
        </div>

        {/* Visual Grid & Phone Mockup */}
        <div className="relative w-full max-w-4xl mx-auto mt-12 mb-20">
          {/* Background Grid Images */}
          <div className="hidden sm:grid grid-cols-3 gap-4 absolute inset-0 z-0 opacity-80 h-full">
             <div className="col-span-1 row-span-2 bg-[#E6B325] rounded-lg overflow-hidden border-2 border-[#001F3F] transform -rotate-2 translate-y-8">
                <div className="w-full h-full bg-[#E6B325] flex items-center justify-center">
                   <img src="/1.jpg" alt="Decoration 1" className="w-full h-full object-cover" />
                </div>
             </div>
             <div className="col-span-1 row-span-1 bg-white rounded-lg overflow-hidden border-2 border-[#001F3F] transform translate-y-[-20px]">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=60" alt="Food" className="w-full h-full object-cover" />
             </div>
             <div className="col-span-1 row-span-2 bg-white rounded-lg overflow-hidden border-2 border-[#001F3F] transform rotate-2 translate-y-10">
                <img src="/2.jpg" alt="Decoration 2" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Central Phone Mockup */}
          <div className="relative z-10 mx-auto w-64 sm:w-72 bg-white border-4 border-[#001F3F] rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="bg-[#001F3F] h-6 w-32 mx-auto rounded-b-xl absolute top-0 left-0 right-0 z-20"></div>
            
            {/* Phone Screen Content */}
            <div className="h-[500px] bg-[#FDFBF7] flex flex-col pt-8 px-4 overflow-hidden relative">
              {/* Status Bar */}
              <div className="flex justify-between text-xs mb-4 text-gray-500">
                <span>9:41</span>
                <span>Signal</span>
              </div>
              
              {/* Map UI */}
              <div className="flex-1 bg-[#E5E7EB] rounded-xl relative overflow-hidden border border-gray-200 mb-4">
                 <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/116.397,39.908,12,0/300x400?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2V4YW1wbGUifQ.example')] bg-cover bg-center opacity-50"></div>
                 {/* Map Pins */}
                 <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="text-[#E6B325] w-8 h-8 drop-shadow-md fill-current animate-bounce" />
                    <div className="bg-white text-[10px] px-1 py-0.5 rounded shadow-md mt-1 font-bold whitespace-nowrap border border-gray-200">
                      日式拉面 <span className="text-gray-400">¥45</span>
                    </div>
                 </div>
                 <div className="absolute bottom-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="text-[#6B8E23] w-8 h-8 drop-shadow-md fill-current" />
                    <div className="bg-white text-[10px] px-1 py-0.5 rounded shadow-md mt-1 font-bold whitespace-nowrap border border-gray-200">
                      老火锅 <span className="text-gray-400">¥120</span>
                    </div>
                 </div>
              </div>

              {/* Chat Bubble */}
              <div className="bg-[#E6B325] p-3 rounded-lg rounded-tl-none mb-2 self-start max-w-[90%] text-xs font-bold shadow-sm border border-[#001F3F]">
                "人均100以内、川菜、周末营业、不要辣"
              </div>
              
              {/* AI Response */}
              <div className="flex gap-2 mb-4">
                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border border-[#001F3F]">🤖</div>
                 <div className="bg-white p-2 rounded-lg rounded-tl-none text-xs shadow-sm border border-gray-200 w-full">
                    <p className="mb-1">已为您筛选 3 家餐厅：</p>
                    <div className="bg-gray-50 p-1 rounded border border-gray-100 mb-1">
                      <span className="font-bold">蜀香园</span> <span className="text-green-600">98%匹配</span>
                    </div>
                    <button className="w-full bg-[#001F3F] text-white py-1 rounded text-[10px]">🎲 随机抽取</button>
                 </div>
              </div>
              
              {/* Input Bar */}
              <div className="mt-auto mb-4 bg-white border border-gray-300 rounded-full h-10 px-4 flex items-center shadow-sm">
                 <span className="text-gray-400 text-sm">粘贴链接 / 输入需求...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Updated Layout */}
      <section className="w-full max-w-5xl mb-24 space-y-24">
        
        {/* Feature 1: Map - Left Image, Right Text */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
           <div className="w-full md:w-1/2">
              <div className="relative w-full rounded-2xl overflow-hidden border-4 border-[#001F3F] shadow-[8px_8px_0px_#001F3F] transform hover:-rotate-1 transition-transform duration-300">
                 {/* Use img tag for natural aspect ratio, or next/image with specific handling if dimensions known. 
                     Here using standard img to respect "keep original shape/ratio" most easily without fixed height constraint */}
                 <img 
                   src="/feature-map.png" 
                   alt="汇总地图" 
                   className="w-full h-auto object-contain bg-gray-100"
                 />
              </div>
           </div>
           <div className="w-full md:w-1/2 text-left">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 bg-[#FDFBF7] border-2 border-[#001F3F] rounded-full shadow-[2px_2px_0px_#001F3F]">
                    <Map className="w-6 h-6 text-[#6B8E23]" />
                 </div>
                 <h3 className="font-bold text-2xl md:text-3xl">汇总地图</h3>
              </div>
              <p className="text-lg font-bold mb-4 text-[#001F3F]/80">"你的专属美食足迹，一目了然"</p>
              <ul className="space-y-3 text-base md:text-lg text-gray-700">
                 <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#6B8E23] mt-1 shrink-0" />
                    <span>自动定位，可视化展示附近收藏</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#6B8E23] mt-1 shrink-0" />
                    <span>清晰标记均价、营业时间、招牌菜</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#6B8E23] mt-1 shrink-0" />
                    <span>支持缩放拖拽，实时更新视野</span>
                 </li>
              </ul>
           </div>
        </div>

        {/* Feature 2: Smart Add - Right Image, Left Text (Alternating Layout) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
           <div className="w-full md:w-1/2">
              <div className="relative w-full rounded-2xl overflow-hidden border-4 border-[#001F3F] shadow-[8px_8px_0px_#001F3F] transform hover:rotate-1 transition-transform duration-300">
                 <img 
                   src="/feature-add.png" 
                   alt="智能添加" 
                   className="w-full h-auto object-contain bg-gray-100"
                 />
              </div>
           </div>
           <div className="w-full md:w-1/2 text-left">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 bg-[#FDFBF7] border-2 border-[#001F3F] rounded-full shadow-[2px_2px_0px_#001F3F]">
                    <Link className="w-6 h-6 text-[#E6B325]" />
                 </div>
                 <h3 className="font-bold text-2xl md:text-3xl">智能添加</h3>
              </div>
              <p className="text-lg font-bold mb-4 text-[#001F3F]/80">"告别手动输入，一键复制粘贴"</p>
              <ul className="space-y-3 text-base md:text-lg text-gray-700">
                 <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#E6B325] mt-1 shrink-0" />
                    <span>粘贴红薯/抖音链接，AI 智能解析</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#E6B325] mt-1 shrink-0" />
                    <span>自动补全美团/高德详细数据</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#E6B325] mt-1 shrink-0" />
                    <span>生成精美卡片，一键分享到朋友圈</span>
                 </li>
              </ul>
           </div>
        </div>
        
        {/* Feature 3: LLM Filter - Left Image, Right Text */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
           <div className="w-full md:w-1/2">
              <div className="relative w-full rounded-2xl overflow-hidden border-4 border-[#001F3F] shadow-[8px_8px_0px_#001F3F] transform hover:-rotate-1 transition-transform duration-300">
                 <img 
                   src="/feature-llm.png" 
                   alt="LLM 筛选" 
                   className="w-full h-auto object-contain bg-gray-100"
                 />
              </div>
           </div>
           <div className="w-full md:w-1/2 text-left">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 bg-[#FDFBF7] border-2 border-[#001F3F] rounded-full shadow-[2px_2px_0px_#001F3F]">
                    <Sparkles className="w-6 h-6 text-[#001F3F]" />
                 </div>
                 <h3 className="font-bold text-2xl md:text-3xl">LLM 筛选</h3>
              </div>
              <p className="text-lg font-bold mb-4 text-[#001F3F]/80">"像朋友聊天一样，说出你的需求"</p>
              <ul className="space-y-3 text-base md:text-lg text-gray-700">
                 <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#001F3F] mt-1 shrink-0" />
                    <span>自然语言转筛选条件，懂你所想</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#001F3F] mt-1 shrink-0" />
                    <span>人均/菜系/忌口精准匹配，不再纠结</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#001F3F] mt-1 shrink-0" />
                    <span>支持“随机抽取”，专治选择困难症</span>
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="w-full max-w-5xl mb-16 flex flex-col md:flex-row gap-8 items-center justify-center">
         {/* Pain Points */}
         <div className="flex-1 flex flex-col items-center">
            <div className="relative mb-4">
               {/* Illustration of confused person */}
               <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center relative border-2 border-dashed border-gray-400">
                  <span className="text-4xl">😖</span>
                  <div className="absolute top-0 right-0 animate-bounce text-2xl">❓</div>
                  
                  {/* Meituan Icon - Floating/Chaotic */}
                  <div className="absolute bottom-2 left-0 transform -rotate-12 hover:scale-110 transition-transform">
                     <div className="w-12 h-12 bg-[#FFC300] rounded-lg flex items-center justify-center overflow-hidden border border-gray-300 shadow-sm p-2">
                        <img src="https://cdn.brandfetch.io/meituan.com/logo" alt="美团" className="w-full h-full object-contain" />
                     </div>
                  </div>
                  
                  {/* Xiaohongshu Icon - Floating/Chaotic */}
                  <div className="absolute top-8 -left-4 transform rotate-12 hover:scale-110 transition-transform">
                     <div className="w-12 h-12 bg-[#FF2442] rounded-lg flex items-center justify-center overflow-hidden border border-gray-300 shadow-sm p-2">
                        <img src="https://cdn.brandfetch.io/xiaohongshu.com/logo" alt="小红书" className="w-full h-full object-contain" />
                     </div>
                  </div>
               </div>
            </div>
            <h4 className="font-bold mb-2">痛点: 收藏遗忘，选择纠结，信息零散</h4>
            <div className="flex gap-2 text-sm text-gray-500">
               <span>感知</span> <ArrowRight size={16} /> <span>记忆</span>
            </div>
         </div>

         <div className="hidden md:block text-4xl text-gray-300">▶</div>

         {/* Gain Points */}
         <div className="flex-1 flex flex-col items-center">
            <div className="relative mb-4">
               {/* Illustration of happy person */}
               <div className="w-48 h-48 bg-[#E6B325] rounded-full flex items-center justify-center relative border-2 border-[#001F3F] shadow-[4px_4px_0px_#001F3F]">
                  <span className="text-4xl">😄</span>
                  
                  {/* Dianping Icon - Connected/Organized */}
                  <div className="absolute -right-6 top-8 transform rotate-6 hover:scale-110 transition-transform z-10">
                     <div className="flex flex-col items-center">
                        <div className="w-14 h-14 bg-[#FF6600] rounded-xl flex items-center justify-center overflow-hidden border-2 border-white shadow-md p-2">
                           <img src="https://cdn.brandfetch.io/dianping.com/logo" alt="大众点评" className="w-full h-full object-contain" />
                        </div>
                        <div className="bg-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm mt-1 border border-gray-200">大众点评</div>
                     </div>
                  </div>

                  {/* Xiaohongshu Icon - Connected/Organized */}
                  <div className="absolute -left-6 bottom-8 transform -rotate-6 hover:scale-110 transition-transform z-10">
                     <div className="flex flex-col items-center">
                        <div className="w-14 h-14 bg-[#FF2442] rounded-xl flex items-center justify-center overflow-hidden border-2 border-white shadow-md p-2">
                           <img src="https://cdn.brandfetch.io/xiaohongshu.com/logo" alt="小红书" className="w-full h-full object-contain" />
                        </div>
                        <div className="bg-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm mt-1 border border-gray-200">小红书</div>
                     </div>
                  </div>
                  
                  {/* Connection Lines (Decorative) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                     <path d="M 160 60 Q 140 96 96 96" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                     <path d="M 30 130 Q 60 110 96 96" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
               </div>
            </div>
            <h4 className="font-bold mb-2">爽点: 打通收藏-筛选-决策-共享全链路</h4>
            <div className="flex gap-2 text-sm font-bold">
               <span>决策</span> <ArrowRight size={16} /> <span>执行</span>
            </div>
         </div>
      </section>

      {/* Process Flow */}
      <section className="w-full max-w-4xl mb-20">
         <div className="flex justify-between items-center text-center relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#001F3F] -z-10 transform -translate-y-1/2"></div>
            
            {['感知', '记忆', '决策', '执行'].map((step, i) => (
               <div key={i} className="bg-[#FDFBF7] px-2">
                  <div className="w-16 h-16 rounded-full border-2 border-[#001F3F] bg-[#6B8E23] text-white flex items-center justify-center font-bold text-lg mb-2 shadow-lg mx-auto">
                     {i === 0 && <Search size={24} />}
                     {i === 1 && <Brain size={24} />}
                     {i === 2 && <CheckCircle size={24} />}
                     {i === 3 && <MapPin size={24} />}
                  </div>
                  <span className="font-bold">{step}</span>
               </div>
            ))}
         </div>
      </section>

      {/* Demo Section */}
      <section className="w-full max-w-4xl mb-16 border-t-2 border-[#001F3F] pt-12">
        <h2 className="text-3xl font-bold text-center mb-8">产品演示 Demo</h2>
        <div className="w-full aspect-video bg-black rounded-lg overflow-hidden border-4 border-[#001F3F] shadow-[8px_8px_0px_#001F3F] flex items-center justify-center relative group">
           <video 
             className="w-full h-full object-cover" 
             controls 
             preload="metadata"
             poster="/feature-map.png"
           >
             <source src="/3a4911de15015d43ad62cb50fc3020c6.mp4" type="video/mp4" />
             <p className="text-white">您的浏览器不支持播放该视频，请下载观看。</p>
           </video>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">团队介绍</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
           <div className="bg-white border-2 border-[#001F3F] p-4 rounded-lg shadow-[4px_4px_0px_#001F3F] text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 border border-[#001F3F] overflow-hidden">
                 <img src="/4.jpg" alt="郭宇轩" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg">郭宇轩</h3>
              <p className="text-sm text-gray-600 mt-1">1613912335@qq.com</p>
           </div>
           
           <div className="bg-white border-2 border-[#001F3F] p-4 rounded-lg shadow-[4px_4px_0px_#001F3F] text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 border border-[#001F3F] overflow-hidden">
                 <img src="/6.jpg" alt="马铄淮" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg">马铄淮</h3>
              <p className="text-sm text-gray-600 mt-1">1659162570@qq.com</p>
           </div>
           
           <div className="bg-white border-2 border-[#001F3F] p-4 rounded-lg shadow-[4px_4px_0px_#001F3F] text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 border border-[#001F3F] overflow-hidden">
                 <img src="/7.jpg" alt="伍彦璧" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg">伍彦璧</h3>
              <p className="text-sm text-gray-600 mt-1">3218014096@qq.com</p>
           </div>
        </div>

        {/* GitHub Link */}
        <div className="flex justify-center">
            <a 
               href="https://github.com/Walnut-ash/yueD_GEEKDAY" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-[#001F3F] text-white rounded-full hover:bg-[#003366] transition-colors shadow-lg font-bold"
            >
               <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
               </svg>
               GitHub Repository
            </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl border-t-2 border-[#001F3F] pt-8 pb-12 text-center flex flex-col items-center">
         <p className="font-bold mb-1">到饭点啦！- 你的智能美食决策助手</p>
         <p className="text-sm text-gray-600">北回归线黑客松 - AI Agent 赛道</p>
      </footer>

    </main>
  );
}
