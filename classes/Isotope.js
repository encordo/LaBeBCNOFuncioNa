export class Isotope{
    constructor(data){
        this.stable = data.stable;//         "stable": false,
        this.abundance = data.abundance;//   "abundance": null,
        this.half_life = data.half_life;//   "half_life": "14.6 hours",
        this.mass_number = data.mass_number;//"mass_number": 211
    }
}