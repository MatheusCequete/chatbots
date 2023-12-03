const Canal = {
    WhatsApp: "whatsapp",
    Telegram: "telegram",
    Facebook: "facebook",
    Instagram: "instagram"
  };
  
  const Mensagem = {
    texto: {
      dataEnvio: Date.now()
    },
    video: {
      dataEnvio: Date.now(),
      arquivo: null,
      formato: null,
      duração: null
    },
    foto: {
      dataEnvio: Date.now(),
      arquivo: null,
      formato: null
    },
    arquivo: {
      dataEnvio: Date.now(),
      arquivo: null,
      formato: null
    }
  };
  
  function enviarMensagem(canal, destinatario, mensagem, arquivo) {
    const mensagemObjeto = new Mensagem(mensagem);
  
    if (arquivo) {
      const arquivoObjeto = new FileReader();
      arquivoObjeto.onload = () => {
        mensagemObjeto.arquivo = arquivoObjeto.result;
        mensagemObjeto.formato = arquivo.type;
      };
      arquivoObjeto.readAsBinaryString(arquivo);
    }
  
    const canalObjeto = new Canal(canal);
  
    console.log(`Enviando mensagem para ${canalObjeto}: ${mensagemObjeto.mensagem}`);
  }
  
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const canal = document.querySelector("select[name=canal]").value;
    const destinatario = document.querySelector("input[name=destinatario]").value;
    const mensagem = document.querySelector("input[name=mensagem]").value;
    const arquivo = document.querySelector("input[name=arquivo]").files[0];
  
    enviarMensagem(canal, destinatario, mensagem, arquivo);
  });