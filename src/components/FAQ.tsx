import { useState } from 'react';

const faqs = [
  {
    question: 'Como faço para agendar um horário?',
    answer: 'Você pode agendar pelo WhatsApp, Instagram ou diretamente pelo botão "Agendar Agora" nesta página. Basta escolher o serviço, data e horário de sua preferência. Respondemos em até 5 minutos!',
  },
  {
    question: 'Atendem crianças de qualquer idade?',
    answer: 'Sim! Atendemos crianças de todas as idades com muito carinho e paciência. Temos experiência com bebês a partir de 1 ano até adolescentes. O ambiente é preparado para que os pequenos se sintam confortáveis.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos dinheiro, PIX, cartões de débito e crédito (todas as bandeiras), e também parcelas no cartão para serviços acima de R$ 100. Tudo para sua comodidade.',
  },
  {
    question: 'Preciso chegar com antecedência?',
    answer: 'Recomendamos chegar 5 minutos antes do horário agendado. Nosso sistema de agendamento é pontual, então você será atendido no horário marcado. Caso atrase mais de 15 minutos, pode ser necessário reagendar.',
  },
  {
    question: 'Quanto tempo dura cada serviço?',
    answer: 'O corte masculino dura em média 40 minutos. A barba completa, 30 minutos. O combo premium (corte + barba + sobrancelha) leva cerca de 1h15. Para crianças, reservamos tempo extra para garantir conforto.',
  },
  {
    question: 'Vocês trabalham com agendamento ou ordem de chegada?',
    answer: 'Trabalhamos exclusivamente com agendamento para garantir que você seja atendido no horário marcado, sem filas e sem espera. Em casos raros de encaixe, entre em contato pelo WhatsApp.',
  },
  {
    question: 'Quais produtos vocês utilizam?',
    answer: 'Utilizamos produtos profissionais de marcas renomadas como Keune, Wella, American Crew e produtos artesanais selecionados. Todos os produtos são de alta qualidade e adequados para cada tipo de cabelo e pele.',
  },
  {
    question: 'Posso levar uma foto de referência do corte?',
    answer: 'Com certeza! Referências visuais são muito bem-vindas e ajudam a garantir que o resultado fique exatamente como você deseja. Analisaremos a referência e adaptaremos ao seu tipo de cabelo e formato de rosto.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 border border-gold-500/20 bg-gold-500/5 mb-6">
              Dúvidas Frequentes
            </span>
          </div>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Perguntas{' '}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="reveal text-dark-300 text-lg">
            Tire suas dúvidas sobre nossos serviços. Não encontrou sua pergunta? 
            Entre em contato pelo WhatsApp.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="reveal space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden transition-all duration-500 ${
                openIndex === i
                  ? 'glass border border-gold-500/20'
                  : 'glass-light border border-transparent hover:border-white/10'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className={`font-semibold text-sm sm:text-base pr-4 transition-colors duration-300 ${
                  openIndex === i ? 'text-gold-400' : 'text-white group-hover:text-gold-300'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border transition-all duration-300 flex items-center justify-center ${
                  openIndex === i
                    ? 'border-gold-400 bg-gold-400/10 rotate-180'
                    : 'border-white/20 group-hover:border-gold-400/50'
                }`}>
                  <svg className="w-4 h-4 text-gold-400 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-dark-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
