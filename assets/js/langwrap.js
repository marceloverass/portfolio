const langEl = document.querySelector('.buttons-langWrap');
const link = document.querySelectorAll('.langs');
const titleEl = document.querySelector('.-langChange');
const descrEl = document.querySelector('.main-description');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				titleEl.textContent = data[attr].title;
				descrEl.textContent = data[attr].description;
			});
		});

let data = {
    "english": 
    {
        "title": "About",
        "description": 
            "Today, I'm almost to graduate from university, I'm looking for my first job as a Front-End Developer. I have experience as an administrative assistant at an insurance brokerage, where I worked daily with the office pack and was responsible for the company's expenses and profits. Since I was a child, I always liked technology and games, I had my first contact with programming in college, with the C language, at first I had difficulties and I didn't like it because my dream was to become a professional player of the game Counter-Strike, but after a while I met JavaScript through the youtube channel Curso em Vídeo and I was amazed at the possibilities of things I could create."
    },
    "portuguese":
    {
        "title": "Sobre",
        "description": 
            "Hoje, prestes a me formar na universidade, estou à procura da minha primeira vaga como desenvolvedor Front-End. Tenho experiência como assistente administrativo em uma corretora de seguros, onde diariamente trabalhava com o pacote office e tinha como responsabilidade os gastos e entradas da empresa. Desde criança, sempre gostei de tecnologia e games, tive meu primeiro contato com programação na faculdade, com a linguagem C, a princípio tive dificuldades e não gostei pois tinha como sonho me tornar jogador profissional de Counter-Strike, mas após um tempo conheci o JavaScript através do canal do youtube Curso em Vídeo e fiquei admirado com a possibilidade de coisas que eu poderia criar."
    }
}
