import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-1/3">
          <img
            src="https://picsum.photos/seed/dancerportrait/600/800"
            alt="Portrait of the dancer"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 text-lg text-gray-300 space-y-6">
          <p>
            With over a decade of dedication to the art of dance, I have cultivated a unique voice that blends classical technique with contemporary innovation. My journey began in the disciplined world of ballet, but my passion quickly led me to explore the raw expression of modern dance, the rhythmic intricacies of tap, and the storytelling power of theatrical choreography.
          </p>
          <p>
            My philosophy is centered on the belief that dance is a universal language, capable of conveying emotions and narratives that words cannot. Each movement is a word, each sequence a sentence, and each performance a story. I strive to create work that is not only visually stunning but also emotionally resonant, connecting with audiences on a profound level.
          </p>
          <p>
            As a choreographer, I am driven by collaboration and experimentation. I find inspiration in music, art, nature, and the human experience itself. I am constantly pushing the boundaries of my craft, seeking new ways to challenge both myself and my dancers, and to create unforgettable moments on stage.
          </p>
        </div>
      </div>

      <div className="mt-20 space-y-16">
        {/* Works Section */}
        <div>
            <h3 className="text-3xl font-bold mb-6 text-purple-400 border-b-2 border-gray-700 pb-2">Works</h3>
            <ul className="space-y-4 text-gray-300">
                <li><strong>2025</strong> | 국립아시아문화전당재단 ‘남극에서 살아남기’ - 출연</li>
                <li><strong>2025</strong> | 김포문화재단 ‘남극에서 살아남기’ - 출연</li>
                <li><strong>2024</strong> | 서울문화재단 SAPY 청년예술인 거버넌스 프로젝트 진진진클럽 ‘무의 쓸모’ - 기획∙출연</li>
                <li><strong>2024</strong> | 달스타 창작춤비무장지대 ‘( )대로 ( )하지 말 것’ - 안무 및 출연</li>
                <li><strong>2023</strong> | 대한민국 미술주간 전시회 초청공연 ‘나를 스쳐가는 것들에 대하여’ - 안무 및 출연</li>
                <li><strong>2022</strong> | 제5회 서울국제댄스페스티벌 인 탱크 ‘무언가를 채우고 비울 때, 잔여물은 남기 마련이다. 그 잔여물이 독이 아닌 득이 되기를’ - 안무 및 출연</li>
                <li><strong>2021</strong> | 조은우 작가 초청전 ‘뇌파 인간 평행세계’ - 출연</li>
                <li><strong>2020</strong> | 조은우 작가 개인전 ‘뇌파 인간 신세계 : 공존사회 문화인간’ - 출연</li>
                <li><strong>2020</strong> | 광진문화재단 힐링프로젝트 - 출연</li>
                <li><strong>2019</strong> | 제21회 생생 춤 페스티벌 - 출연</li>
                <li>외 안무 및 출연 공연 다수</li>
            </ul>
        </div>

        {/* Awards Section */}
        <div>
            <h3 className="text-3xl font-bold mb-6 text-purple-400 border-b-2 border-gray-700 pb-2">Awards</h3>
            <ul className="space-y-4 text-gray-300">
                <li><strong>2024</strong> | 한국문화창작어워드 작품 부문 - 우수상</li>
                <li><strong>2023</strong> | 제5회 IBAA 전국무용콩쿠르 일반부 듀엣 - 최우수상</li>
                <li><strong>2022</strong> | 제40회 전국대학무용경연대회 군무 - 동상</li>
                <li><strong>2022</strong> | 세다프(SeDaFF) 무용 숏폼 콘테스트 - 우수작</li>
            </ul>
        </div>
        
        {/* Education & Certifications Section */}
        <div>
            <h3 className="text-3xl font-bold mb-6 text-purple-400 border-b-2 border-gray-700 pb-2">Education & Certifications</h3>
            <ul className="space-y-4 text-gray-300">
                <li>동덕여자대학교 무용과 최초 조기졸업</li>
                <li>[논문] 제대 군인의 일상 복귀에 대한 적응과 자존감 회복을 위한 문화예술교육 프로그램 연구</li>
                <li>문화예술교육사 2급</li>
                <li>표현예술상담사 3급</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;