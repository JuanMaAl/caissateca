import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateCollection } from '../hooks/useCreateCollection';
import { Link } from 'react-router-dom';

export default function FormPostBook() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    console.log(errors);
    let tituloLibro = data.titulo
    let editorialLibro = data.editorial
    let autorLibro = data.autor
    let temaLibro = data.tema
    useCreateCollection(tituloLibro, editorialLibro, autorLibro, temaLibro)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} 
    className="max-w-sm bg-pink-200 border border-gray-200 rounded-lg shadow mt-10 px-3">
      <h3 className="p-2 text-2xl text-pink-800 font-extrabold underline">Formulario: Nuevo Libro</h3>
      <input className="px-2 mt-3 bg-white rounded-md text-pink-800 focus:placeholder-pink-400" type="text" placeholder="titulo" {...register("titulo", {required: true, min: 4, maxLength: 32})} />
      <br />
      <input className="px-2 mt-3 bg-white rounded-md text-pink-800 focus:placeholder-pink-400" type="text" placeholder="editorial" {...register("editorial", {required: true, min: 4, maxLength: 32})} />
      <br />
      <input className="px-2 my-3 bg-white rounded-md text-pink-800 focus:placeholder-pink-400" type="text" placeholder="autor" {...register("autor", {required: true, min: 4, maxLength: 32})} />
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
      <Link to='../homepage'><input value="Añadir" type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold my-3 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" /></Link>
    </form>
  );
}