"use client";

const artists = [
  { name: "Karan Aujla", image: "karan+aujla+singer" },
  { name: "Shreya Ghoshal", image: "shreya+ghoshal+singer" },
  { name: "Inder Sahani", image: "indian+male+singer" },
  { name: "Sunidhi Chauhan", image: "sunidhi+chauhan+singer" },
  { name: "A. R. Rahman", image: "ar+rahman+composer" },
  { name: "Satinder Sartaaj", image: "satinder+sartaaj+singer" },
  { name: "Jubin Nautiyal", image: "jubin+nautiyal+singer" },
  { name: "B Praak", image: "b+praak+singer" },
  { name: "Ikka", image: "ikka+rapper" },
  { name: "Mika Singh", image: "mika+singh+singer" },
  { name: "Usha Uthup", image: "usha+uthup+singer" },
  { name: "Paradox", image: "dj+paradox" },
  { name: "Prem Dhillon", image: "prem+dhillon+singer" },
  { name: "Nucleya", image: "nucleya+dj" },
  { name: "TIËSTO", image: "tiesto+dj" },
  { name: "Nanku", image: "indian+artist" },
  { name: "Alok", image: "alok+dj" },
  { name: "Ravi Khurana", image: "indian+comedian" },
  { name: "PANTHER", image: "rapper+panther" },
  { name: "Hargun Kaur", image: "hargun+kaur+singer" },
]

export function ArtistSection() {
  return (
    <section className="bg-muted/30 py-8 md:py-12">
      <div className="w-full px-4 text-left">
        <h2 className="mb-6 text-balance text-2xl font-bold md:text-3xl text-[#174B91]">
          Artists in  Baatasari
        </h2>
      </div>

      <div className="w-full overflow-x-auto pb-6 px-4 hide-scrollbar">
        <div className="flex gap-4 min-w-max px-4">
          {artists.map((artist, index) => (
            <a
              key={index}
              href="#"
              className="group flex flex-col items-center gap-3 transition-colors min-w-[160px]"
            >
              <div className="h-32 w-32 overflow-hidden rounded-full ring-2 ring-border transition-all group-hover:ring-primary">
                <img
                  src="/landing/card-placeholder.png"
                  alt={artist.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-center text-sm font-medium">{artist.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
