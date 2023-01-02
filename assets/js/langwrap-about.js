let langs = document.querySelector(".langs"),
     link = document.querySelectorAll(".link__lang"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active__lang").classList.remove("active__lang");
          el.classList.add("active__lang");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
     })
})

let data = {
    
    "english": {
        "title": "About",
        "description": 
            "Today, I'm almost graduating from college. I'm looking for my first job as a Front-End Developer. I have experience as an administrative assistant at an insurance brokerage, where I worked daily with the office pack and was responsible for the company's expenses and profits. Since I was a child, I've always liked technology and games. I had my first contact with programming in college, with the C language. At first, it was difficult and I didn't like it because my dream was to become a professional Counter-Strike player, but after a while, I met JavaScript through the youtube channel Curso em Vídeo and I was amazed by the possibilities of the things I could create."
    },

    "portuguese": {
        "title": "Sobre",
        "description": 
            "Hoje, prestes a me formar na faculdade, estou à procura da minha primeira vaga como desenvolvedor Front-End. Tenho experiência como assistente administrativo em uma corretora de seguros, onde diariamente trabalhava com o pacote office e tinha como responsabilidade os gastos e entradas da empresa. Desde criança, sempre gostei de tecnologia e games, tive meu primeiro contato com programação na faculdade, com a linguagem C, a princípio tive dificuldades e não gostei pois tinha como sonho me tornar jogador profissional de Counter-Strike, mas após um tempo conheci o JavaScript através do canal do youtube Curso em Vídeo e fiquei admirado com a possibilidade de coisas que eu poderia criar."
    },
}
