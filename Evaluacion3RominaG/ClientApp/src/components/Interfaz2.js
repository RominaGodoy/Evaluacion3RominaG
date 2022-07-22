import React, { useState, useEffect } from 'react'

const PersonaPorDefecto = [
    { nombres: "Patana", mensaje: "Triviño", darlike: true },
    { nombres: "Juan Carlos", mensaje: "Bodoque", darlike: false }
]
const Interfaz2 = () => {


    const [persona, setPersona] = useState(PersonaPorDefecto)
    const [nombres, setNombres] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [darlike, setDarlike] = useState(false)
    const [darsaludo, setDarSaludo] = useState(false)

    useEffect(() => {
        let copiaPersonas = [...persona]
        const nuevoPersona = {
            nombres: "Juanin Juan",
            mensaje: "Harry",
            darlike: true,
            darsaludo: true
        }
        copiaPersonas.push(nuevoPersona)
        setPersona(copiaPersonas)
    }, [])

    const handleNombres = (evento) => {
        setNombres(evento.target.value)
    }

    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }

    const handleDarlike = (evento) => {
        setDarlike(!darlike)
    }

    const handleDarSaludo = (evento) => {
        setDarSaludo(!darsaludo)
    }

    const handleIngresoPersona = (evento) => {
        console.log("Botón presionado")
        const nuevoPersona = {
            nombres: nombres,
            mensaje: mensaje,
            darlike: darlike,
            darsaludo: darsaludo
        }

        let copiaPersonas = [...persona]
        copiaPersonas.push(nuevoPersona)
        setPersona(copiaPersonas)
    }
    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Enviar Mensaje</h1>
                </div>
            </div>

            <div className="col-4">
                <label htmlFor="nombres">Nombre</label>
                <input
                    className="form-control"
                    type="text"
                    onChange={handleNombres}
                    value={nombres}
                    name="nombres"
                    id="nombres"
                />
            </div>

            <div className="col-4">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    className="form-control"
                    type="text"
                    onChange={handleMensaje}
                    value={mensaje}
                    name="mensaje"
                    id="mensaje"
                />
            </div>
            <div className="col-4">
                <br /> { }
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={darlike}
                        onChange={handleDarlike}
                        name="darlike"
                        id="darlike" />
                    <label
                        className="form-check-label"
                        htmlFor="darlike">
                        👍Dar like
                    </label>
                </div>
                <div className="form-check form-check-inline">

                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={darsaludo}
                        onChange={handleDarSaludo}
                        name="darsaludo"
                        id="darsaludo" />
                    <label
                        className="form-check-label"
                        htmlFor="darsaludo">
                        ✋​Enviar Saludo
                    </label>

                </div>

            </div>
            <div className="col-12 justify-content-start mt-3">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleIngresoPersona}
                >
                    Enviar
                </button>
            </div>

            <hr />
            <div className="row mt-5">
                <div className="col-12">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Reacciones</th>
                                <th>Mensaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {persona.map((persona) => {
                                return (
                                    <tr>
                                        <td>{persona.nombres}</td>

                                        <td>{persona.darlike ?
                                            " 👍 " :
                                            "<Ninguno>"
                                        }
                                        </td>
                                        <td>{persona.mensaje}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Interfaz2