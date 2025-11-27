import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

interface TeamCardProps {
  img: string;
  name: string;
  position: string;
  socials: React.ReactNode;
}

export default function TeamCard(prop: TeamCardProps) {
  return (
    <Card className="group relative overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-black/60">
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-orange-500 to-primary animate-[spin_3s_linear_infinite] blur-sm" />
        <div className="absolute inset-[2px] bg-black rounded-lg" />
      </div>

      <div className="relative z-10">
        <CardHeader className="text-center space-y-4 pt-8 pb-6">
          {/* Profile Image */}
          <div className="relative mx-auto w-fit">
            <div className="relative h-32 w-32 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-primary/20">
              <img 
                src={prop.img} 
                alt={prop.name}
                className="h-full w-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <CardTitle className="text-xl font-semibold text-white text-center">
              {prop.name}
            </CardTitle>
            
            {/* Position */}
            <CardDescription className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              {prop.position}
            </CardDescription>
          </div>
        </CardHeader>

        {/* Social Links */}
        <CardContent className="pb-6">
          <div className="flex justify-center items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            {prop.socials}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
