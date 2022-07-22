import React, { useState, useEffect } from 'react'

const Interfaz1 = () => {

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <div className="card" >
                        <img src="https://emojis.wiki/emoji-pics/apple/woman-technologist-apple.png" class="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">ROMINA GODOY </h5>
                            <p className="card-text">Como Analista Programador con formación en recursos informáticos en busca de un puesto de principiante en el cual se pueda utilizar mejor mis habilidades y mi pasión, Capaz de trabajar como independiente o en equipo, comprometida a establecer y mantener un ambiente de trabajo positivo, proactivo para todos los empleados..</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" >
                        <img src="https://cdn-0.emojis.wiki/emoji-pics/whatsapp/woman-technologist-whatsapp.png" class="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">ROMINA GODOY </h5>
                            <p className="card-text">Como Analista Programador con formación en recursos informáticos en busca de un puesto de principiante en el cual se pueda utilizar mejor mis habilidades y mi pasión, Capaz de trabajar como independiente o en equipo, comprometida a establecer y mantener un ambiente de trabajo positivo, proactivo para todos los empleados.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="mt-4">Habilidades </h1>

            <ul className="list-group">

                <li className="list-group-item list-group-item-secondary">Capacidad para comunicarme </li>
                <li className="list-group-item list-group-item-success">Trabajar en equipo</li>
                <li className="list-group-item list-group-item-danger">Creatividad en el área profesional como personal</li>
                <li className="list-group-item list-group-item-warning">Facilidad en la toma de decisiones </li>
                <li className="list-group-item list-group-item-info">Pensamiento crítico y creativo</li>
                <li className="list-group-item list-group-item-light">Capacidad de motivación y confianza </li>
                <li className="list-group-item list-group-item-dark">Potencial de crecimiento y esfuerzo </li>
            </ul>


        </>
    )
}

export default Interfaz1