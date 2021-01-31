export class Species {
    id: number;
    name: string;
    cadena_adn_0: string;
    cadena_adn_1: string;
    cadena_adn_2: string;
    cadena_adn_3: string;
    cadena_adn_4: string;
    cadena_adn_5: string;

    species_condition: string;

    dna: string[] = [this.cadena_adn_0, this.cadena_adn_1, this.cadena_adn_2, this.cadena_adn_3, this.cadena_adn_4, this.cadena_adn_5];
    
    cant_human: number;
    cant_mutant: number;
    mutant_percentage: number;
}