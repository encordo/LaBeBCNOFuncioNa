import { Isotope } from "./Isotope.js";

export class Element {
    constructor(data) {
        this.id = data.id;
        this.atomic_number = data.atomic_number;
        this.symbol = data.symbol;
        this.name = data.name;
        this.slug = data.slug;
        this.category = data.category;
        this.block = data.block;
        this.group_number = data.group_number;
        this.period = data.period;
        this.electron_configuration = data.electron_configuration;
        this.electron_configuration_semantic = data.electron_configuration_semantic;
        this.electrons_per_shell = data.electrons_per_shell;
        this.atomic_mass = data.atomic_mass;
        this.density = data.density;
        this.melting_point = data.melting_point;
        this.boiling_point = data.boiling_point;
        this.state_at_room_temp = data.state_at_room_temp;
        this.appearance = data.appearance;
        this.electronegativity = data.electronegativity;
        this.ionization_energy = data.ionization_energy;
        this.electron_affinity = data.electron_affinity;
        this.oxidation_states = data.oxidation_states;
        this.atomic_radius = data.atomic_radius;
        this.covalent_radius = data.covalent_radius;
        this.van_der_waals_radius = data.van_der_waals_radius;
        this.discovered_by = data.discovered_by;
        this.discovery_year = data.discovery_year;
        this.discovery_location = data.discovery_location;
        this.category_color = data.category_color;
        this.cpk_hex_color = data.cpk_hex_color;
        this.summary = data.summary;
        this.description = data.description;
        this.uses = data.uses;
        this.fun_fact = data.fun_fact;
        this.named_after = data.named_after;
        //Extracción de los isótopos en su clase correspondiente.
        this.isotopes = [];
        if (data.isotopes !== undefined) {
            for (let isotope of data.isotopes) {
                this.isotopes.push(new Isotope(isotope));
            }
        }

        this.is_synthetic = data.is_synthetic;
        this.is_radioactive = data.is_radioactive;
        this.grid_row = data.grid_row;
        this.grid_column = data.grid_column;
    }
}