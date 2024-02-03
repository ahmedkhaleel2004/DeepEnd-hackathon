import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { useRouter } from "next/navigation";
import { githubSignIn, googleSignIn } from "@/lib/sign-in-or-create";
import Image from "next/image";
import { SiGoogle, SiGithub } from "react-icons/si";

const ModalContent = () => {
  const router = useRouter();

  const handleGithubSignIn = () => {
    githubSignIn(router);
  };

  const handleGoogleSignIn = () => {
    googleSignIn(router);
  };

  return (
    <Card className="min-w-[30vw]">
      <CardHeader className="flex flex-col items-center">
        <Image
          src="/deependlogo.svg"
          alt="DeepEnd Logo"
          width={40}
          height={40}
          className="mb-4 dark:invert"
        />
        <CardTitle className="text-center">Build Today.</CardTitle>
        <CardDescription className="text-center">
          Sign in with our providers
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <Button onClick={handleGithubSignIn}>
          <SiGithub className="mr-2 h-5 w-5" /> GitHub
        </Button>
        <Button onClick={handleGoogleSignIn}>
          <SiGoogle className="mr-2 h-5 w-5" /> Google
        </Button>
      </CardContent>
    </Card>
  );
};

export default ModalContent;
