async function getContent(){
    try {
        const response = await fetch ('https://api.polijunior.com.br/notas/')
        const data = await response.json()

        console.log(data)
        show(data)

    }catch (error){
        console.log(error)    
    }
}

getContent()

function show(users){
    let output = ''
    output += `<table width="467" border="1px">`
    for (let user of users){
        var n1 = parseFloat(`${user.nota_p1}`);
        var n2 = parseFloat(`${user.nota_p2}`);
        
        var mp = parseFloat(`${user.media_pretendida}`);
        
        var p1 = parseFloat(`${user.peso_p1}`);
        var p2 = parseFloat(`${user.peso_p2}`);        
        var p3 = parseFloat(`${user.peso_p3}`);        

        var n3 = ((mp*(p1+p2+p3)-p1*n1-p2*n2)/p3).toFixed(1);
        
        output += `<tr> <td width="101" height="40"><li>Nota da P1 -> ${user.nota_p1} </li> </td>`;
        output += `<td> <li>Nota da P2 -> ${user.nota_p2} </li> </td>`;

        
        if (n3 <= 0){
            output += `<td>voce ja esta aprovado nesta disciplina</td> `;
        }else if(n3 >= 10){
            output += `<td>nao e possivel atingir a media proposta na p3</td>`;
        }else{
            output += `<td>a nota para a p3 eh `+ n3 + '</td>';
        }

        
    }

    document.querySelector('main').innerHTML = output;
}  