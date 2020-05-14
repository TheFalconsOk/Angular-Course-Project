export class Recipe {
  public recipeName: string;
  public recipeDescription: string;
  public recipeImgPath: string;

  constructor(recipeName: string, recipeDescription: string, recipeImgPath: string) {
    this.recipeName = recipeName;
    this.recipeDescription = recipeDescription;
    this.recipeImgPath = recipeImgPath;
  }

}
