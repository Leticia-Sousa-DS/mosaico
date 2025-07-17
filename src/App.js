import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import {v4 as uuidv4} from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Back-End',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'DevOps',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Gestão e Governança',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'KAKASHI HATAKE',
      cargo: 'Jounin e instrutor',
      imagem: './perfis/Kakashi_Hatake.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NARUTO UZUMAKI',
      cargo: 'Genin',
      imagem: './perfis/Naruto.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SAKURA HARUNO',
      cargo: 'Genin',
      imagem: './perfis/Sakura.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SASUKE UCHIHA',
      cargo: 'Genin',
      imagem: './perfis/Sasuke.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'KAKASHI HATAKE',
      cargo: 'Jounin e instrutor',
      imagem: './perfis/Kakashi_Hatake.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NARUTO UZUMAKI',
      cargo: 'Genin',
      imagem: './perfis/Naruto.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SAKURA HARUNO',
      cargo: 'Genin',
      imagem: './perfis/Sakura.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: './perfis/Sasuke.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'KAKASHI HATAKE',
      cargo: 'Jounin e instrutor',
      imagem: './perfis/Kakashi_Hatake.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NARUTO UZUMAKI',
      cargo: 'Genin',
      imagem: './perfis/Naruto.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SAKURA HARUNO',
      cargo: 'Genin',
      imagem: './perfis/Sakura.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SASUKE UCHIHA',
      cargo: 'Genin',
      imagem: './perfis/Sasuke.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'KAKASHI HATAKE',
      cargo: 'Jounin e instrutor',
      imagem: './perfis/Kakashi_Hatake.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NARUTO UZUMAKI',
      cargo: 'Genin',
      imagem: './perfis/Naruto.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SAKURA HARUNO',
      cargo: 'Genin',
      imagem: './perfis/Sakura.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SASUKE UCHIHA',
      cargo: 'Genin',
      imagem: './perfis/Sasuke.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'KAKASHI HATAKE',
      cargo: 'Jounin e instrutor',
      imagem: './perfis/Kakashi_Hatake.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NARUTO UZUMAKI',
      cargo: 'Genin',
      imagem: './perfis/Naruto.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SAKURA HARUNO',
      cargo: 'Genin',
      imagem: './perfis/Sakura.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SASUKE UCHIHA',
      cargo: 'Genin',
      imagem: './perfis/Sasuke.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'KAKASHI HATAKE',
      cargo: 'Jounin e instrutor',
      imagem: './perfis/Kakashi_Hatake.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NARUTO UZUMAKI',
      cargo: 'Genin',
      imagem: './perfis/Naruto.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SAKURA HARUNO',
      cargo: 'Genin',
      imagem: './perfis/Sakura.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SASUKE UCHIHA',
      cargo: 'Genin',
      imagem: './perfis/Sasuke.png',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    console.log('deletando colaborador'); 
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([ ...times, { ...novoTime, id: uuidv4() } ])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Minha Equipe</h1>
          {times.map((time, indice) => 
            <Time 
              mudarCor={mudarCorDoTime}
              key={indice} 
              time={time} 
              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
              aoDeletar={deletarColaborador}
              aoFavoritar={resolverFavorito}
            />
          )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;

