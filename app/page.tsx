"use client";

import ModalContent from "@/components/component/landing/modal-content";
import Modal from "@/components/component/modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/component/mode-toggle";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <main>
      <div className="min-h-screen">
        <header className="mx-8 mt-8 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/deependlogo.svg"
              alt="DeepEnd Logo"
              width={40}
              height={40}
              className="dark:invert"
            />
            <Link className="ml-4 text-3xl font-semibold" href="/">
              DeepEnd
            </Link>
          </div>
          <nav>
            <ModeToggle />
          </nav>
        </header>
        <main className="mx-16 flex flex-col items-center justify-center">
          <div className="mb-8 mt-[30vh] space-y-8">
            <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Learn by building.
            </h1>
            <p className="text-center text-xl text-muted-foreground">
              Throw yourself into the deep end. Building real projects is the
              fastest way to a career in tech.
            </p>
          </div>
          <Button className="shadow-2xl" onClick={handleOpen}>
            Sign in
          </Button>
          <Modal isOpen={isOpen} handleClose={handleClose}>
            <ModalContent />
          </Modal>
        </main>
      </div>
    </main>
  );
}
