export class CarsDataInfo {
  public id: number;

  constructor(
    public make: string,
    public model: string,
    public image: string,
    public owner: { id: number, name: string, image: string },
    public date: number,
    public description: string,
    public price: number,
    public engine: string,
    public comments: [{ id: string, owner: string, message: string }]
  ) { }
}
