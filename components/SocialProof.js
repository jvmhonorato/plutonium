// components/SocialProof.js

import Image from 'next/image'; // Importando o componente Image do Next.js para otimizar as imagens

const SocialProof = () => {
  // Dados dos depoimentos (foto, nome, depoimento)
  const testimonials = [
    {
      name: "João Silva",
      imageUrl: "/images/joao.jpg", // Coloque a URL da imagem que você deseja utilizar
      testimonial: "O produto é incrível! Minha produtividade aumentou muito desde que comecei a usar.",
    },
    {
      name: "Maria Oliveira",
      imageUrl: "/images/maria.jpg", // Coloque a URL da imagem que você deseja utilizar
      testimonial: "Excelente atendimento e qualidade. Com certeza vou continuar utilizando!",
    },
    {
      name: "Carlos Souza",
      imageUrl: "/images/carlos.jpg", // Coloque a URL da imagem que você deseja utilizar
      testimonial: "Muito satisfeito com a compra. A experiência foi ótima do começo ao fim.",
    },
  ];

  return (
    <section id="socialproof" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">O que dizem nossos clientes</h2>
      <div className="flex justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-64">
            <div className="mb-4 w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">{testimonial.name}</h3>
            <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
