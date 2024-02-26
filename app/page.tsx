import { isItWeekend } from "@/app/lib/helpers/functions";
import WeekendCard from "./lib/components/weekendCard";

export default function Home() {

    const weekend = isItWeekend();

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <WeekendCard 
                weekend={weekend} 
            />
        </main>
    );
}
