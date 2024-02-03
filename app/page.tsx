"use client";

import { Navbar } from "@/components/component/Navbar/Navbar";
import ModalContent from "@/components/component/landing/modal-content";
import Modal from "@/components/component/modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <main>
      <Navbar />
      <Button onClick={handleOpen}>Sign in</Button>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <ModalContent />
      </Modal>
    </main>
  );
}
