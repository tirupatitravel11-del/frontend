import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export default function StatCard({ title, subtitle, icon: Icon }: Props) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-stone-200
        bg-white
        p-8
        text-center
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-gold
        hover:shadow-2xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-orange-100
          transition
          duration-300
          group-hover:bg-gold
        "
      >
        <Icon
          size={38}
          className="text-gold transition group-hover:text-white"
        />
      </div>

      <h3 className="mt-6 text-4xl font-bold text-stone-900">{title}</h3>

      <p className="mt-3 text-lg text-stone-600">{subtitle}</p>
    </div>
  );
}
