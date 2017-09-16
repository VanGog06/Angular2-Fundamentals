export class CarsDataInfo {
  public id: number;
  public make: string;
  public model: string;
  public image: string;
  public owner: { id: number, name: string, image: string };
  public date: number;
  public description: string;
  public price: number;
  public engine: string;
  public comments: { owner: string, message: string };
}
