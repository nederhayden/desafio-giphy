import React, { createContext, useState } from "react";

// Estado global da aplicacao
export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    // Value: todos os valores que quero deixar exposto/acessível
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
}
