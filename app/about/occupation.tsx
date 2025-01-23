import Image from 'next/image';

export default function Occupation() {
  return (
    <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
      <div className="text-left">
        <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Hridyesh Gupta</h1>
        <br />
        <h2 className="text-sm font-normal md:text-base">Full Stack Developer | Open-source Enthusiast | Community Leader</h2>
      </div>
      <div>
        <Image
          alt="Hridyesh Gupta"
          height={130}
          width={130}
          src="/static/images/avatar.webp"
          className="rounded-full object-scale-down"
        />
      </div>
    </div>
  );
}
