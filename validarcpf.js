function validarNome() {
  var cpf = document.getElementById("uCpf").value;
 // console.log(cpf);
  validarCPF(cpf);
}

// Função chamada em validarNome()
function validarCPF (cpfCapturadoDoFormulario) {
  let validarRegExNoCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  if (cpfCapturadoDoFormulario.match(validarRegExNoCpf)) {
    console.log("CPF válido!");
    document.getElementById("uCpf").style.backgroundColor = "white";
    document.getElementById("uCpf").style.color = "black";
    document.getElementById("aviso-Sucesso").style.display = "block";
    return true;
  } else {
   // console.log("CPF Inválido");
    document.body.innerHTML = `O CPF é inválido <br></br>
    <button id="Voltar">Voltar</button>`;
    document.getElementById("uCpf").style.backgroundColor = "red";
    document.getElementById("uCpf").style.color = "white";
    document.getElementById("aviso-erro").style.display = "block";
    return false;
  }
}

function classificacpf(){
  var cpf = document.getElementById("uCpf").value;
  validarCPF(cpf);
  console.log(cpf);
  var sexto = cpf[cpf.length - 4];
  console.log(sexto);
  if(sexto === "0"){
    document.body.innerHTML = `O CPF é oriundo do Estado de Rio Grande do Sul <br></br>
    <button id="Voltar">Voltar</button>`;
  }else if(sexto === "6"){
    document.body.innerHTML = `O CPF é oriundo do Estado de Minas Gerais <br></br>
    <button id="Voltar">Voltar</button>`;
  }else if(sexto === "8"){
    document.body.innerHTML = `O CPF é oriundo do Estado de São Paulo <br></br>
    <button id="Voltar">Voltar</button>`;
  }else if(sexto === "1"){
    document.body.innerHTML = `O CPF é oriundo do Estado de Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul ou Tocantins <br></br>
    <button id="Voltar">Voltar</button>`;
  }else if(sexto === "2"){
    document.body.innerHTML = `O CPF é oriundo do Estado de Amazonas, Pará, Roraima, Amapá, Acre ou Rondônia <br></br>
    <button id="Voltar">Voltar</button>`;
  }else if(sexto === "3"){
    document.body.innerHTML = `O CPF é oriundo do Estado de Ceará, Maranhão ou Piauí <br></br>
    <button id="Voltar">Voltar</button>`;
  }else if(sexto === "4"){
    document.body.innerHTML = `O CPF é oriundo do Estado de Paraíba, Pernambuco, Alagoas ou Rio Grande do Norte <br></br>
    <button id="Voltar">Voltar</button>`;
  }else if(sexto === "5"){
    document.body.innerHTML = `O CPF é oriundo do Estado de Bahia ou Sergipe <br></br>
    <button id="Voltar">Voltar</button>`;
  }else if(sexto === "7"){
    document.body.innerHTML = `O CPF é oriundo do Estado de Rio de Janeiro ou Espírito Santo <br></br>
    <button id="Voltar">Voltar</button>`;
  }else if(sexto === "9"){
    document.body.innerHTML = `O CPF é oriundo do Estado de Paraná ou Santa Catarina <br></br>
    <button id="Voltar">Voltar</button>`;
  }
}

document.body.addEventListener('click', e => {
  if(e.target.id=='Voltar'){
    window.location.reload()
  }
})