Hooks.on("setup", () => {
    let config = {
        subspecies : {
            dwarf  :{}         
        }
        
    }

        config.subspecies["dwarf"]["karakdwarf"] = {
            name : "Karak Dwarf"
        }

        config.subspecies.dwarf["greydwarf"] = {
                name : "Grey Dwarf",
                skills : [
                "Consume Alcohol",
                "Cool",
                "Endurance",
                "Entertain (Storytelling)",
                "Evaluate",
                "Intimidate",
                "Language (Khazalid)",
                "Lore (Dwarfs)",
                "Lore (Geology)",
                "Lore (Metallurgy)",
                "Melee (Basic)",
                "Trade (Any)"
                ],
                talents : [
                    "Craftsman (Any), Linguistics",
                    "Night Vision",
                    "Magic Resistance",
                    "Nimble Fingered, Read/Write",
                    "Sixth Sense, Sturdy"
                ]
            }
            
            config.subspecies.dwarf["norsedwarf"] = {
                name : "Norse Dwarf",
                skills : [
                "Consume Alcohol",
                "Cool",
                "Endurance",
                "Intimidate",
                "Language (Khazalid) ",
                "Language (Norse)",
                "Lore (Chaos)",
                "Lore (Dwarfs)",
                "Lore (Norsca)",
                "Mele (Basic)",
                "Melee (Two-Handed)",
                "Trade (Any)"
            ],
                talents : [
                    "Magic Resistance",
                    "Night Vision",
                    "Pure Soul, Read/Write",
                    "Resistance (Mutation), Robust",
                    "Stout-hearted, Sturdy"
                ]
            }
            config.subspecies.dwarf["imperialdwarf"] = {
                name : "Imperial Dwarf",
                skills : [
                "Charm",
                "Consume Alcohol",
                "Cool",
                "Entertain (Storytelling)",
                "Evaluate",
                "Haggle",
                "Language (Bretonnian or Estalian or Tilean)",
                "Language (Khazalid)",
                "Lore (Dwarfs or Empire)",
                "Lore (Local)",
                "Melee (Basic)",
                "Trade (Any)"
            ],
                talents : [
                    "Magic Resistance",
                    "Night Vision",
                    "Read/Write, Sturdy",
                    2
                ]
            }
            
        mergeObject(game.wfrp4e.config, config)
        })