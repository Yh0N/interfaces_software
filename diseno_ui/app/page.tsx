'use client';

import { ToggleRight, Palette, Image, Play, Accessibility, ToggleLeft, Loader, ChevronDown, } from 'lucide-react';

export default function AppearanceSettings() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <section className="bg-white shadow-lg rounded-lg p-6 w-86">
        {/* Encabezado de la sección */}
        <header className="text-lg font-bold text-gray-700">Appearance</header>
        <p className="text-sm text-gray-500">Set or customize your preferences for the system</p>
        
        {/* Selección de idioma (no interactivo) */}
        <section className="flex flex-row items-left justify-between mt-4">
          <span>
            <label className="flex-1 text-sm font-medium text-gray-900">Language</label>
            <p className="flex-1 flex-col text-sm font-medium text-gray-500">Select the language of the plataform</p>

          </span>
          <span className='flex-row w-36 p-1 border rounded-md  bg-gray-100 cursor-default  item-right'>
            
            <span className="text-center text-gray-700">English</span>
            <ChevronDown className="text-gray-500 item-right" />
            
          </span>
          
        </section>
        
        {/* Tema de la interfaz */}
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-700">Interface theme</legend>
          <nav className="flex justify-between mt-3 space-x-3">
            <button className="w-20 h-16 p-3 border rounded-md bg-gradient-to-r from-purple-300 to-white text-gray-700"></button>
            <button className="w-20 h-16 p-3 border-2 border-purple-500 rounded-md bg-white text-gray-700 font-bold"></button>
            <button className="w-20 h-16 p-3 border rounded-md bg-purple-700 text-white"></button>
          </nav>
          <section className='flex flex-row justify-between mt-3 space-x-3 '>
            <p className="text-gray-500">Auto</p>
            <p className="text-gray-500">Light</p>
            <p className="text-gray-500">Dark</p>
          </section>
        </fieldset>

        {/* Color de acento */}
        <fieldset className="flex flex-row mt-6">
          <span>
            <legend className="flex-1 text-sm font-medium text-gray-700">Accent color</legend>
            <p className="flex-1 flex-col text-sm font-medium text-gray-500">Pick´s you platform main color</p>
          </span>
          <nav className="flex items-rigth mt-5 space-x-3">
            <button className="w-6 h-6 rounded-full bg-red-500"></button>
            <button className="w-6 h-6 rounded-full bg-orange-500"></button>
            <button className="w-6 h-6 rounded-full bg-yellow-500"></button>
            <button className="w-6 h-6 rounded-full bg-green-500"></button>
            <button className="w-6 h-6 rounded-full bg-blue-500"></button>
            <button className="w-6 h-6 rounded-full bg-purple-500"></button>
          </nav>
        </fieldset>

        {/* Lista de configuraciones con iconos */}
        <ul className="mt-6 space-y-4">
          <li className="flex items-center ">

            <Loader className="flex items-right text-gray-500" />
            <p className="text-gray-700">Reduce motion</p>
            <ToggleRight className=" item-right text-gray-500" />
          </li>
          <li className="flex  ">
            
            <Play className="text-gray-500" />
            <p className="text-gray-700">Auto play</p>
            <ToggleRight className=" item-right text-gray-500 " />

          </li>
          <li className="flex items-center ">

            <Image className="text-gray-500" />
            <p className="text-gray-700">High quality photo</p>
            <ToggleLeft className=" item-right text-gray-500" />s
            
          </li>
        </ul>

        {/* Botones de acción */}
        <footer className="flex justify-between mt-8">
          <button className="text-gray-500">Reset to default</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md">Save Preferences</button>
        </footer>
      </section>
    </main>
  );
}
