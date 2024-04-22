import React from 'react';
import { useForm } from 'react-hook-form';
import { usePostCollection } from '../hooks/usePostCollection';



export default function FormPostBook() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    console.log(errors);
    let tituloLibro = data.titulo
    let editorialLibro = data.editorial
    let autorLibro = data.autor
    let temaLibro = data.tema

    usePostCollection(tituloLibro, editorialLibro, autorLibro, temaLibro)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="px-2 mt-3 bg-pink-200 rounded-md text-pink-800 focus:placeholder-pink-400" type="text" placeholder="titulo" {...register("titulo", {required: true, min: 4, maxLength: 32})} />
      <br />
      <input className="px-2 mt-3 bg-pink-200 rounded-md text-pink-800 focus:placeholder-pink-400" type="text" placeholder="editorial" {...register("editorial", {required: true, min: 4, maxLength: 32})} />
      <br />
      <input className="px-2 my-3 bg-pink-200 rounded-md text-pink-800 focus:placeholder-pink-400" type="text" placeholder="autor" {...register("autor", {required: true, min: 4, maxLength: 32})} />
      <br />
      <select {...register("tema", { required: true })}>
        <option value="Aperturas">Aperturas</option>
        <option value=" Medio juego"> Medio juego</option>
        <option value=" Finales"> Finales</option>
        <option value=" Estrategia"> Estrategia</option>
        <option value=" Tactica"> Tactica</option>
        <option value=" Partidas"> Partidas</option>
        <option value=" Historia"> Historia</option>
        <option value=" Problemas"> Problemas</option>
        <option value=" Otros"> Otros</option>
      </select>
      <br />
      <input type="submit" className="bg-pink-500 hover:bg-pink-400 text-white font-bold my-3 py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded" />
    </form>
  );
}