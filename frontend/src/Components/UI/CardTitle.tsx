export default function CardTitle({ title }: { title: string }) {
  return (
    <div className="flex justify-center bg-card rounded-lg py-10 mx-5 text-center">
      <h2 className="text-white font-bold text-3xl">{title}</h2>
    </div>
  );
}
