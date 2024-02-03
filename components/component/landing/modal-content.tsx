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

const ModalContent = () => {
  const router = useRouter();

  const handleGithubSignIn = () => {
    githubSignIn(router);
  };

  const handleGoogleSignIn = () => {
    googleSignIn(router);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleGithubSignIn}>Sign in with Github</Button>
        <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
      </CardContent>
    </Card>
  );
};

export default ModalContent;
