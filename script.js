let ele_boton = document.querySelector("#boton_01");

const suma_like = () => {
    let ele_conta = document.querySelector("#contador");
    let valor = ele_conta.innerText;
    valor++;
    ele_conta.innerText = valor;
}

ele_boton.addEventListener("click", suma_like);