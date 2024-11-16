// components/SocialProof.js

import Image from 'next/image'; // Importando o componente Image do Next.js para otimizar as imagens

const SocialProof = () => {
  // Dados dos depoimentos (foto, nome, depoimento)
  const testimonials = [
    {
      name: "Renata Garcia",
      imageUrl: "/images/joao.jpg", // Coloque a URL da imagem que você deseja utilizar
      testimonial: "Comprei pra minha mãe, que é meio enrolada com tecnologia, achando que seria só pra ela. Mas, pra minha surpresa, até eu aprendi coisas que nem imaginava! Valeu muito o investimento, recomendo demais.",
    },
    {
      name: "Sara Oliveira",
      imageUrl: "/images/maria.jpg", // Coloque a URL da imagem que você deseja utilizar
      testimonial: "Comprei pra tirar a dúvida se meu marido tava me monitorando de alguma forma, e já vi que não. Mas confesso que, depois de aprender tanta coisa, até deu vontade de usar o que aprendi pra monitorar ele, haha... brincadeira! Valeu muito a pena.",
    },
    {
      name: "Carlos Souza",
      imageUrl: "/images/carlos.jpg", // Coloque a URL da imagem que você deseja utilizar
      testimonial: "Comprei pra dar uma olhada no meu, mas sinceramente, agora vou pegar o celular do meu avô pra conferir se tá tudo certo. Vai que minhas tias sanguessugas instalaram alguma coisa lá, né? Valeu demais, super útil!",
    },
  ];

  return (
    <section id="socialproof" className="py-12  text-center">
      <h2 className="text-3xl font-semibold  mb-8">O que dizem nossos clientes</h2>
      <div className="flex justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className=" p-6 rounded-lg shadow-lg w-64">
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
