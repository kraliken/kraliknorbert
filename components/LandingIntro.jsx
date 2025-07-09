import React from 'react'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from './ui/card'
import { Separator } from './ui/separator'

const LandingIntro = () => {
    return (
        <Card className="shadow-lg rounded-2xl p-3 sm:p-6 w-full sm:w-[680px] mb-16">
            <CardHeader className="p-2 sm:px-6">
                <CardTitle>
                    <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-pretty">
                        Hello, Králik Norbert vagyok,
                    </h1>
                </CardTitle>
                <CardDescription >
                    <h2 className="text-lg sm:text-2xl font-medium text-foreground/80 tracking-tight mt-1 mb-2">
                        junior full-stack fejlesztő
                    </h2>
                </CardDescription>
                <Separator className="" />
            </CardHeader>
            <CardContent className="text-pretty p-2 sm:px-6">
                <p className="mb-4 text-foreground/80 dark:text-muted-foreground text-sm sm:text-base leading-relaxed">
                    A webfejlesztés és a gépi tanulás világában mélyedek el, saját projekteken keresztül.
                    Frontenden <span className="font-semibold text-foreground">Next.js</span>-t, backenden <span className="font-semibold text-foreground">FastAPI</span>-t és <span className="font-semibold text-foreground">Python</span>-t használok – a rendszereket <span className="font-semibold text-foreground">Azure</span> cloud környezetben futtatom, <span className="font-semibold text-foreground">SQL</span> adatbázisokkal kiegészítve.
                </p>
                <p className="mb-4 text-foreground/80 dark:text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Ez az oldal a fejlődésem terepe – hamarosan megosztom első alkalmazásaimat, és folyamatosan frissítem új ötletekkel.
                </p>
                <p className="mb-2 text-foreground/80 dark:text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Van egy izgalmas terved, amihez jól jönne egy elkötelezett fejlesztő? Keress bátran!
                </p>
            </CardContent>
            <CardFooter className="mt-0 sm:mt-4 p-2 sm:px-6">
                <Button size="lg" variant="default" className="gap-2">
                    <Mail className="w-4 h-4" />
                    Írj üzenetet
                </Button>
            </CardFooter>
        </Card>
    )
}

export default LandingIntro
