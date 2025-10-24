import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { LogIn, LogInIcon } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        {/* <span className={title()}>Get&nbsp;</span> */}
        <span className={title({ color: "pink" })}>Alaxeebook&nbsp;</span>
        <br />
        <span className={subtitle({ class: "mt-4" })}>
          The modern accounting library that makes your business smarter, faster and more efficient.  
        </span>
        </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="#"
        >
          Get Started
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="#"
        >
          <LogInIcon size={20} />
          LogIn
        </Link>
      </div>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
