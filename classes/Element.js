export class Element{
    constructor(data){
    this.id = data.id;//     "id": 86,
    this.atomic_number = data.atomic_number;// "atomic_number": 86,
    this.symbol = data.symbol;// "symbol": "Rn",
    this.name = data.name;// "name": "Radon",
    this.slug = data.slug;// "slug": "radon",
    this.category = data.category;// "category": "noble_gas",
    this.block = data.block;// "block": "p",
    this.group_number = data.group_number;// "group_number": 18,
    this.period = data.period;// "period": 6,
    this.electron_configuration = data.electron_configuration;// "electron_configuration": "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6 4f14 5d10 6s2 6p6",
    this.electron_configuration_semantic = data.electron.configuration.semantic;// "electron_configuration_semantic": "[Xe] 4f14 5d10 6s2 6p6",
    this.electrons_per_shell = data.electrons_per_shell;// "electrons_per_shell": [2,8,18,32,18,8],
    this.atomic_mass = data.atomic_mass;// "atomic_mass": 222.01758,
    this.density = data.density;// "density": 0.00973,
    this.melting_point = data.melting_point;// "melting_point": 202.0,
    this.boiling_point = data.boiling_point;// "boiling_point": 211.3,
    this.state_at_room_temp = data.state_at_room_temp;// "state_at_room_temp": "gas",
    this.appearance = data.appearance;// "appearance": "Colorless gas",
    this.electronegativity = data.electronegativity;// "electronegativity": 2.2,
    this.ionization_energy = data.ionization_energy;// "ionization_energy": 1037.0,
    this.electron_affinity = data.electron_affinity;// "electron_affinity": -68.0,
    this.oxidation_states = data.oxidation.states;// "oxidation_states": "+2, +6",
    this.atomic_radius = data.atomic_radius;// "atomic_radius": 150.0,
    this.covalent_radius = data.covalent_radius;// "covalent_radius": 150.0,
    this.van_der_vaals_radius = data.van_der_vaals_radius;// "van_der_waals_radius": 220.0,
    this.discovered_by = data.discovered_by;// "discovered_by": "Friedrich Ernst Dorn",
    this.discovery_year = data.discovery_year;// "discovery_year": 1900,
    this.discovery_location = data.discovery_location;// "discovery_location": "Halle, Germany",
    this.category_color = data.category_color;// "category_color": "#ffeaa7",
    this.cpk_hex_color = data.cpk_hex_color;// "cpk_hex_color": "#428296",
    this.summary = data.summary;// "summary": "Radon is a radioactive noble gas and the second leading cause of lung cancer after smoking.",
    this.description = data.description;// "description": "Radon is a colorless, odorless radioactive gas formed from radium decay. It is the densest gas known. Radon seeps from the ground and accumulates in basements, causing thousands of lung cancer deaths per year.",
    this.uses = data.uses;// "uses": "Radon testing in buildings, earthquake prediction research, and hydrological research.",
    this.fun_fact = data.fun_fact;// "fun_fact": "Radon is the second leading cause of lung cancer after smoking, yet it is odorless and invisible. The EPA recommends testing all homes.",
    this.named_after = data.named_after;// "named_after": "Named after radium, from which it is produced",
    this.isotopes = data.isotopes;// "isotopes": [
    //     {
    //         "stable": false,
    //         "abundance": null,
    //         "half_life": "14.6 hours",
    //         "mass_number": 211
    //     },
    //     {
    //         "stable": false,
    //         "abundance": null,
    //         "half_life": "55.6 seconds",
    //         "mass_number": 220
    //     },
    //     {
    //         "stable": false,
    //         "abundance": null,
    //         "half_life": "3.8235 days",
    //         "mass_number": 222
    //     }
    // ],
    this.is_synthetic = data.is_synthetic;// "is_synthetic": false,
    this.is_radioactive = data.is_radioactive;// "is_radioactive": true,
    this.grid_row = data.grid_row;// "grid_row": 6,
    this.grid_column =data.grid_column;// "grid_column": 18
    }
}