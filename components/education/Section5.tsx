import React from 'react'

const Section5 = () => {
  return (
    <div className="flex max-md:flex-col my-10 border border-muted bg-card rounded-xl p-10 justify-between">
      <div>
        <h1 className="text-primary text-[20px] font-bold mb-[20px] max-md:text-[40px]">EDUCATION</h1>
        <div className="relative pl-7">
          {/* Point violet */}
          <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
          {/* Ligne verticale */}
          <div className="absolute left-[5px] top-[20px] w-[1px] h-[140px] bg-muted"></div>
          <h2 className="text-[20px] font-semibold">Msc Pro 1</h2>
          <h4 className="font-medium my-2">Etudiant en Master 1 en Informatique <br /> à Epitech Bénin</h4>
          <p className="font-medium text-muted-foreground">Octobre 2024 à ce jour</p>
        </div>
        <div className="relative pl-7">
          {/* Point violet */}
          <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
          {/* Ligne verticale */}
          <div className="absolute left-[5px] top-[20px] w-[1px] h-[140px] bg-muted"></div>
          <h2 className="text-[20px] font-semibold mt-7">Msc Prépa</h2>
          <h4 className="font-medium my-2">Etudiant en année préparatoire <br /> de Master à Epitech Bénin</h4>
          <p className="font-medium text-muted-foreground">Septembre 2023 à Août 2024</p>
        </div>
        <div className="relative pl-7">
          {/* Point violet */}
          <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
          <h2 className="text-[20px] font-semibold mt-7">Télécommunication</h2>
          <h4 className="font-medium my-2">Etudiant sur 3 années en télécommunication <br /> à UCAO</h4>
          <p className="font-medium text-muted-foreground">Septembre 2023 à Août 2024</p>
        </div>
      </div>
      <div className="max-md:mt-10">
        <h1 className="text-primary text-[20px] font-bold mb-[20px] max-md:text-[40px]">FORMATION</h1>
        <div className="relative pl-7">
          {/* Point violet */}
          <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
          {/* Ligne verticale */}
          <div className="absolute left-[5px] top-[20px] w-[1px] h-[140px] bg-muted"></div>
          <h2 className="text-[20px] font-semibold">Stage académique</h2>
          <h4 className="font-medium my-2">Stage en vue d'obtention <br /> de licence pro</h4>
          <p className="font-medium text-muted-foreground">Février 2022 à Mai 2022</p>
        </div>
        <div className="relative pl-7">
          {/* Point violet */}
          <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
          <h2 className="text-[20px] font-semibold mt-7">Stage + Formation</h2>
          <h4 className="font-medium my-2">Stage + Formation en Informatique, <br /> Réseau, Caméra de surveillance</h4>
          <p className="font-medium text-muted-foreground">Juin 2021 à Août 2021</p>
        </div>
      </div>
      <div className="max-md:mt-10">
        <h1 className="text-primary text-[20px] font-bold mb-[20px] max-md:text-[40px]">DIPLOME</h1>
        <div className="relative pl-7">
          {/* Point violet */}
          <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
          {/* Ligne verticale */}
          <div className="absolute left-[5px] top-[20px] w-[1px] h-[110px] bg-muted"></div>
          <h2 className="text-[20px] font-semibold">Licence professionnelle <br /> en télécommunication</h2>
          <p className="font-medium text-muted-foreground">2022</p>
        </div>
        <div className="relative pl-7">
          {/* Point violet */}
          <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
          <h2 className="text-[20px] font-semibold mt-7">Licence nationale</h2>
          <p className="font-medium text-muted-foreground">2022</p>
        </div>
      </div>
    </div>
  )
}

export default Section5