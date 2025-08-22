import React, { useState } from "react";

function PostFormModal({ onClose }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí es donde harías la llamada a tu API para enviar el post
        // Ejemplo:
        // try {
        //   const response = await fetch('tu-api-endpoint', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ title, content }),
        //   });
        //   if (response.ok) {
        //     alert('Post creado exitosamente!');
        //     onClose(); // Cerrar el modal después del éxito
        //   } else {
        //     alert('Hubo un error al crear el post.');
        //   }
        // } catch (error) {
        //   console.error('Error:', error);
        //   alert('Hubo un error de conexión.');
        // }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-11/12 p-6 bg-white rounded-lg shadow-lg md:w-1/3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <h2 className="text-2xl font-bold">Crear Nuevo Post</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        &times;
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Título
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="content"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Contenido
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                        >
                            Enviar Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PostFormModal;
