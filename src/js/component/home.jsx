import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState([])
	const imput = (e) => {
		let texto = e.target.value;
		if (e.keyCode == 13) {
			setTarea(texto)
			setLista([...lista, texto])
			setTarea(" ")
		}
	}
	const borrar =(index)=>{
	const nuevalista=[...lista]	
	nuevalista.splice(index,1)
	setLista(nuevalista)
	}
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">To do list</label>
				<input type="text"  className="form-control" id="exampleFormControlInput1" placeholder="Agregar tarea"  onKeyUp={(e) => { imput(e) }} />
			</div>
			<ol>
				{lista.map((item, index) => {
					return (
						<li key={index}>
							{item}
							<button onClick={()=>borrar(index)}>
								x
							</button>
						</li>)
				})}
			</ol>
		</div>
	);
};

export default Home;
