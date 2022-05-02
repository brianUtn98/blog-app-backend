import RecategorizeRunner from "./RecategorizeRunner";
import User from "./User";

abstract class Category {
  private _nextCategory: Category | undefined;
  public get nextCategory(): Category | undefined {
    return this._nextCategory;
  }
  public set nextCategory(value: Category | undefined) {
    this._nextCategory = value;
  }
  private _pointsGiven: number;
  public get pointsGiven(): number {
    return this._pointsGiven;
  }
  public set pointsGiven(value: number) {
    this._pointsGiven = value;
  }
  private _categoryPoints: number;
  public get categoryPoints(): number {
    return this._categoryPoints;
  }
  public set categoryPoints(value: number) {
    this._categoryPoints = value;
  }

  constructor(
    _pointsGiven: number,
    _categoryPoints: number,
    _nextCategory?: Category
  ) {
    this._nextCategory = _nextCategory;
    this._pointsGiven = _pointsGiven;
    this._categoryPoints = _categoryPoints;
  }

  public remainingPoints(): number {
    return this.categoryPoints - this.pointsGiven;
  }
  public canGivePoints(): boolean {
    return this.remainingPoints() > 0;
  }

  public canUpgrade(user: User): boolean{
    return RecategorizeRunner.canUpgrade(this);
  }
  public abstract canPublish(): boolean;
}

export default Category;
