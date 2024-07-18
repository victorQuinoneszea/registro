"use client";
import React, { useState } from "react";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.message === "Usuario registrado exitosamente") {
        alert("¡Usuario registrado!");
        // Redirigir a la página de inicio de sesión o iniciar sesión automáticamente
      } else {
        alert("Error al registrarse: " + responseData.message);
      }
    } catch (error) {
      console.error("Error al registrarse:", error);
      alert("Error al registrarse. Inténtalo de nuevo.");
    }
  };

  return (
    <div>
      <h1>Registro de usuario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
