// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Markdown/CodeBlock.tsx

"use client";

import { FC, memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";
import { IconCheck, IconCopy } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Props {
  language: string;
  value: string;
}

const CodeBlock: FC<Props> = memo(({ language, value }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      const colorScheme =
        document.documentElement.style.getPropertyValue("color-scheme");
      setIsDarkTheme(colorScheme === "dark");
    };

    // Call once on mount to set the initial theme
    updateTheme();

    // Add event listener for changes on the html element's style attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(value);
  };

  return (
    <div className="codeblock relative w-full rounded-xl bg-zinc-100 font-sans dark:bg-zinc-900">
      <div className="flex items-center justify-between rounded-t-xl bg-zinc-600 px-6 pr-4 text-white dark:bg-zinc-800 dark:text-zinc-100">
        <span className="font-mono text-xs lowercase">{language}</span>
        <div className=" items-center">
          <Button
            variant="ghost"
            size="icon"
            className="hover:border-transparent hover:bg-transparent hover:text-current"
            onClick={onCopy}
          >
            {isCopied ? <IconCheck /> : <IconCopy />}
            <span className="sr-only">Copy code</span>
          </Button>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={isDarkTheme ? materialDark : oneLight}
        PreTag="div"
        showLineNumbers
        customStyle={{
          margin: 0,
          width: "100%",
          background: "transparent",
          padding: "1.5rem 1rem",
        }}
        lineNumberStyle={{
          userSelect: "none",
        }}
        codeTagProps={{
          style: {
            fontSize: "0.9rem",
            fontFamily: "var(--font-mono)",
          },
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
});
CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
