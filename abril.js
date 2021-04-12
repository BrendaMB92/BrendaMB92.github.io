//console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {
	//console.log('dentro de la función');
	
	const xhttp = new XMLHttpRequest();
	
	xhttp.open('GET', 'abril.json', true);
	
	xhttp.send();
	
	xhttp.onreadystatechange = function() {
		
		if(this.readyState == 4 && this.status == 200) {
			
			//console.log(this.responseText);
			let datos = JSON.parse(this.responseText);
			//console.log(datos);
			let res = document.querySelector('#res');
			res.innerHTML = '';
			
			for(let item of datos) {
				//console.log(item);
				res.innerHTML += `
					<tr>
						<th>Fecha</th>
						<th>Indicativo</th>
						<th>Nombre</th>
						<th>Provincia</th>
						<th>Altitud</th>
						<th>Tmed</th>
						<th>Prec</th>
						<th>Tmin</th>
						<th>Horatmin</th>
						<th>Tmax</th>
						<th>Horatmax</th>
						<th>Dir</th>
						<th>Velmedia</th>
						<th>Racha</th>
						<th>Horaracha</th>
						<th>Sol</th>
						<th>PresMax</th>
						<th>HoraPrexMax</th>
						<th>PresMin</th>
						<th>HoraPresMin</th>
					</tr>

					<tr>
						<td>${item.fecha}</td>
						<td>${item.indicativo}</td>
						<td>${item.nombre}</td>
						<td>${item.provincia}</td>
						<td>${item.altitud}</td>
						<td>${item.tmed}</td>
						<td>${item.prec}</td>
						<td>${item.tmin}</td>
						<td>${item.horatmin}</td>
						<td>${item.tmax}</td>
						<td>${item.horatmax}</td>
						<td>${item.dir}</td>
						<td>${item.velmedia}</td>
						<td>${item.racha}</td>
						<td>${item.horaracha}</td>
						<td>${item.sol}</td>
						<td>${item.presMax}</td>
						<td>${item.horaPresMax}</td>
						<td>${item.presMin}</td>
						<td>${item.horaPresMin}</td>
					</tr>
				`
			}
			
		}
		
	}
		
	
}