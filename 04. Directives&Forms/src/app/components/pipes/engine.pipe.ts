import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'addEngineInfo'
})

export class EnginePipe implements PipeTransform {
  transform(engineText: string) {
    return engineText + ' engine!';
  }
}
