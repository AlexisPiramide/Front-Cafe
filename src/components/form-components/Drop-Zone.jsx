
function InputImagen({ imagen, setImagen }) {
	const añadirDesdeCarpeta = (e) => {
		e.preventDefault();
		const input = document.createElement("input");
		input.type = "file";
		input.accept = "image/*";
		input.onchange = (e) => {
		const files = e.target.files;
		setImagen(files);
		};
		input.click();
	};
	
	function dropHandler(ev) {
		ev.preventDefault();

		if (ev.dataTransfer.items) {
		const files = [...ev.dataTransfer.items]
			.filter((item) => item.kind === "file")
			.map((item) => item.getAsFile());
		setImagen(files.slice(0, 1));
		} else {
		const files = [...ev.dataTransfer.files];
		setImagen(files.slice(0, 1));
		}
	}

	function dragOverHandler(ev) {
		ev.preventDefault();
	}

	return (
		<>
		<div
			id="drop-zone"
			onDrop={(ev) => dropHandler(ev)}
			onDragOver={(ev) => dragOverHandler(ev)}
			onClick={(e) => añadirDesdeCarpeta(e)}
		>
			{imagen ? (<img src={URL.createObjectURL(imagen[0])} alt="imagen" /> ) : ( <p>Arrastra la imagen aquí o pulsa aqui</p> )}
		</div>
		{imagen ? (<button className="btn-eliminar-imagen" onClick={() => setImagen()}> Eliminar </button>) : <button className="btn-eliminar-imagen" style={{ visibility: "hidden" }} onClick={() => setImagen()}> Eliminar </button>}
		</>
	);
}

export default InputImagen;
