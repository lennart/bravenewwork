app
.value('StoryBoard', function() {
  return  [{
    id: 'start',
    title: "BRAVE<br>NEW<br>WORK"
  },{
    id: 'kaffee-kochen-quote',
    caption: "Kaffee kochen",
    instructions: "Nach oben wischen",
    scrollDown: true,
    underground: {
      url: '/kaffee-kochen',
      video: "PFVcfyqm9_Y",
      videoStill: "kaffee-kochen.jpg"
    }
  },
  {
    id: 'st-oberholz',
    caption: "St. Oberholz",
    audio: "/audio/01-stoberholz.mp3"
  },
  {
    id: 'ausland',
    caption: "Weg zum Haus aus einem anderen Land",
    maps: "https://www.google.com/maps/embed?pb=!1m29!1m12!1m3!1d1213.5841912603892!2d13.40105350178898!3d52.530387583271406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m14!1i0!3e2!4m5!1s0x47a851e51ffe4c8f%3A0x81d84dd51899d817!2sBrunnenstra%C3%9Fe+11%2C+10119+Berlin%2C+Germany!3m2!1d52.5313641!2d13.400299799999999!4m5!1s0x47a851e4644a4b75%3A0xf49417256487121c!2sGastst%C3%A4tte+St.+Oberholz%2C+Rosenthaler+Stra%C3%9Fe+72a%2C+10119+Berlin%2C+Germany!3m2!1d52.529512!2d13.401764!5e0!3m2!1sen!2s!4v1402598598218",
    audio: "/audio/02-jura.mp3",
    autoplay: true
  },
  {
    id: 'tips-please',
    caption: "Spenden",
    image: "/images/tip-jar.jpg"
  }]
})
