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
            "Today, I'm almost graduating from college. I'm looking for my first job as a Front-End Developer. I have experience as an administrative assistant at an insurance brokerage, where I worked daily with the office pack and was main responsible for organizing the company's expenses and profits. Since I was a child, I've always liked technology and games. I had my first contact with programming in college, with the C language. At first, it was difficult and I didn't like it, but after a while, I met JavaScript through the YouTube and I was amazed by the possibilities of the things I could create and also with the opportunities for those who work in the area."
    },

    "portuguese": {
        "title": "Sobre",
        "description": 
            "Hoje, prestes a me formar na faculdade, estou à procura da minha primeira vaga como desenvolvedor Front-End. Tenho experiência como assistente administrativo em uma corretora de seguros, onde diariamente trabalhava com o pacote office e tinha como responsabilidade principal organizar os gastos e entradas da empresa. Desde criança, sempre gostei de tecnologia e games, tive meu primeiro contato com programação na faculdade, com a linguagem C, a princípio tive dificuldades e não gostei, mas após um tempo conheci o JavaScript através do YouTube e fiquei admirado com a possibilidade de coisas que eu poderia criar e também com as oportunidades para quem trabalha na área."
    },
}
