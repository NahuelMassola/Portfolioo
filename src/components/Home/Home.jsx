import React from 'react';
import { useSelector } from 'react-redux';
import s from './Home.module.scss';

//framer motion
import { AnimatePresence } from 'framer-motion';
import Techs from '../Techs/Techs';
import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import About from '../About/About';

//data


import dragonBall from '../Resources/DragonBallStore/dragonballStore.png'
import dragonBall2 from '../Resources/DragonBallStore/dragonballStore2.png'
import dragonBall3 from '../Resources/DragonBallStore/dragonballStore3.png'
import dragonBall4 from '../Resources/DragonBallStore/dragonballStore4.png'

import chaperoStore from '../Resources/ChaperoStore/ChaperoStore.png'
import chaperoStore2 from '../Resources/ChaperoStore/ChaperoStore2.png'
import chaperoStore3 from '../Resources/ChaperoStore/ChaperoStore3.png'
import chaperoStore4 from '../Resources/ChaperoStore/ChaperoStore4.png'

import fullGamingStore from '../Resources/FullGamingStore/fullgamingStore4.png'
import fullGamingStore2 from '../Resources/FullGamingStore/fullgamingStore.png'
import fullGamingStore3 from '../Resources/FullGamingStore/fullgamingStore2.png'
import fullGamingStore4 from '../Resources/FullGamingStore/fullgamingStore5.png'

let dragonballData = {
  name: 'DragonBallStore',
  description: 'DragonBallStore es un sitio de Venta de Mini estatuas colleccionables, los cuales se pueden filtrar por Categorias, se puede añadir al carrito y realizar la compra del articulo, llegando un mail con el pedido y quitando el stock de la pagina. En este proyecto individual logré poner en practica de manera conjunta mis conocimientos front-end utilizando tecnologías tales como react, redux, firebase , react-router-dom y estados.',
  img1: dragonBall,
  img2: dragonBall2,
  img3: dragonBall3,
  img4: dragonBall4,
  link: 'https://dragonball-store.netlify.app/',
}

let chaperoData = {
  name: 'ChaperoStore',
  description: 'ChaperoStore es mi primer pagina web creada unicamente con HTML y CSS de venta de articulos de electronica ',
  img1: chaperoStore,
  img2: chaperoStore2,
  img3: chaperoStore3,
  img4: chaperoStore4,
  link: 'https://nahuelmassola.github.io/RedragonStore/',
}

let fullGamingStoreData = {
  name: 'FullGamingStore',
  description: 'FullGamingStore es una pagina web creada con HTLM y JAVASCRIPT de venta de Articulos de electronica con la capacidad de poder comprar un articulo , agregarlo al carrito y generar una compra',
  img1: fullGamingStore,
  img2: fullGamingStore2,
  img3: fullGamingStore3,
  img4: fullGamingStore4,
  link: 'https://github.com/NahuelMassola/FullgamigStore',
}

const Home = () => {
    const joined = useSelector(state => state.joined);
    const night = useSelector(state => state.night);

  return (
    <div className={joined ? `${s.container} ${night ? '' : s.day }` : s.noDisplay} >
        <AnimatePresence>
          {
            joined &&
            <>
            <Nav />
            <div className={s.content}>
                <div className={s.about}>
                    <About />
                    <Techs />
                </div>
                <div className={s.cards}>
                  <Card data={chaperoData}/>
                  <Card data={fullGamingStoreData}/>
                  <Card data={dragonballData}/>
                </div>
            </div>
            </>
          }
        </AnimatePresence>
    </div>
  )
}

export default Home;