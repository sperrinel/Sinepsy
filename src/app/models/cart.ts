export class Cart {
  private number: number;

  // Récupère le nombre.
  getNumber() {
    return this.number;
  }

  // Affecte le paramètre reçu à number.
  setNumber(index: number) {
    this.number = index;
  }

  //Incrémente de 1 le nombre que nous avons.
  incremente() {}

  //Décrémente de 1 le nombre que nous avons.
  decremente() {}
}
