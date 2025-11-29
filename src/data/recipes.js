export const recipes = [
    {
        id: 'steak',
        title: 'The Dion Steak',
        description: 'Master the art of the Maillard reaction for a steakhouse-quality crust.',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
        time: '25 mins',
        difficulty: 'Medium',
        steps: [
            {
                id: 1,
                instruction: 'Select a thick-cut Ribeye or New York Strip (at least 1.5 inches thick).',
                science: 'Thickness is crucial. A thin steak will overcook in the center before the exterior develops a proper crust. You need mass to buffer the heat.'
            },
            {
                id: 2,
                instruction: 'Remove the steak from the fridge 45 minutes before cooking and salt it immediately.',
                science: 'Salting early allows the salt to dissolve into a brine, which is then re-absorbed into the meat (denaturing proteins to retain water). Room temp meat cooks more evenly.'
            },
            {
                id: 3,
                instruction: 'Pat the steak completely dry with paper towels. No moisture should remain.',
                science: 'Surface moisture boils at 100°C, while the Maillard reaction (browning) starts around 140°C. Wet meat steams instead of sears. Dry meat browns instantly.'
            },
            {
                id: 4,
                instruction: 'Preheat a cast-iron skillet until it is literally smoking hot.',
                science: 'Cast iron has high volumetric heat capacity. It holds enough thermal energy to not drop significantly in temperature when the cold meat hits it, ensuring an immediate sear.'
            },
            {
                id: 5,
                instruction: 'Add high-smoke-point oil (Avocado or Grapeseed) and lay the steak away from you.',
                science: 'Butter burns at this temperature. Neutral oils withstand the 400°F+ heat needed for crust formation without creating acrid, burnt flavors.'
            },
            {
                id: 6,
                instruction: 'Flip every 30-60 seconds (The "Cold Sear" or "Frequent Flip" method).',
                science: 'Contrary to the "flip once" myth, frequent flipping keeps the surface hot (searing) while the inside stays cooler, preventing the "gray band" of overcooked meat just under the crust.'
            },
            {
                id: 7,
                instruction: 'When 15°F from target temp, add butter, crushed garlic, and thyme. Baste continuously.',
                science: 'The "Arroser" technique. The hot fat cooks the steak gently from all sides while carrying fat-soluble flavor compounds from the aromatics into the meat crevices.'
            },
            {
                id: 8,
                instruction: 'Pull at 125°F (for Medium Rare) and rest for 10 full minutes.',
                science: 'Resting allows muscle fibers (which contracted in the heat) to relax and re-absorb the liquid juices. Cutting too early causes all that liquid to spill out, leaving dry meat.'
            },
            {
                id: 9,
                instruction: 'Slice against the grain and season with flaky finishing salt.',
                science: 'Cutting perpendicular to the muscle fibers shortens them, making each bite tenderer to chew. Finishing salt adds a crunchy texture and a final pop of salinity.'
            }
        ]
    },
    {
        id: 'carbonara',
        title: 'Classic Carbonara',
        description: 'The delicate balance of emulsification without scrambling the eggs.',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
        time: '25 mins',
        difficulty: 'Hard',
        steps: [
            {
                id: 1,
                instruction: 'Boil pasta in salted water. Reserve 1 cup of starchy pasta water.',
                science: 'Pasta water is rich in starch granules released during cooking. This starch acts as an emulsifier, helping the fat and water bind into a creamy sauce.'
            },
            {
                id: 2,
                instruction: 'Crisp the guanciale (or pancetta) and render the fat.',
                science: 'Rendering melts the solid fat into liquid oil. This pork fat will form the lipid phase of our emulsion.'
            },
            {
                id: 3,
                instruction: 'Whisk eggs and Pecorino Romano in a bowl.',
                science: 'The proteins in the egg yolk and cheese will thicken the sauce. Whisking beforehand ensures a uniform mixture ready for emulsification.'
            },
            {
                id: 4,
                instruction: 'Toss hot pasta with the guanciale fat (off heat).',
                science: 'Coating the pasta in fat first helps prevent the eggs from scrambling immediately upon contact, providing a protective oily layer.'
            },
            {
                id: 5,
                instruction: 'Add the egg mixture and a splash of pasta water, stirring vigorously off heat.',
                science: 'This is the critical emulsification step. The residual heat cooks the eggs gently (pasteurization) without coagulating the proteins into curds (scrambling). Starch prevents protein aggregation.'
            }
        ]
    },
    {
        id: 'risotto',
        title: 'Creamy Mushroom Risotto',
        description: 'Unlock the power of starch release for natural creaminess.',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
        time: '45 mins',
        difficulty: 'Medium',
        steps: [
            {
                id: 1,
                instruction: 'Toast the Arborio rice in oil/butter until translucent edges appear.',
                science: 'Toasting hardens the outer starch shell (amylopectin), preventing the grains from exploding into mush while allowing them to absorb liquid slowly.'
            },
            {
                id: 2,
                instruction: 'Deglaze with white wine and stir until evaporated.',
                science: 'Alcohol dissolves flavor compounds that water cannot. The acidity also balances the richness of the starch and cheese added later.'
            },
            {
                id: 3,
                instruction: 'Add hot broth one ladle at a time, stirring constantly.',
                science: 'Agitation (stirring) rubs the rice grains against each other, mechanically stripping off the outer starch. This loose starch thickens the liquid into a sauce.'
            },
            {
                id: 4,
                instruction: 'Finish with "Mantecatura": beat in cold butter and parmesan off heat.',
                science: 'Vigorous beating incorporates air and emulsifies the fat with the starchy liquid, creating the signature "all\'onda" (wave-like) creamy texture.'
            }
        ]
    }
];
